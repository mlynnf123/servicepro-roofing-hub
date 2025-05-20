
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.43.1'
import Stripe from 'https://esm.sh/stripe@14.14.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
  apiVersion: '2023-10-16',
})

const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return new Response('Missing stripe signature', { status: 400 })
  }

  const body = await req.text()
  
  let event
  
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      Deno.env.get('STRIPE_WEBHOOK_SECRET') ?? ''
    )
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  // Create Supabase client with admin privileges
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        
        if (session.mode === 'subscription') {
          // Update the subscriber record
          await supabase
            .from('subscribers')
            .update({
              subscribed: true,
              subscription_tier: session.metadata.plan,
            })
            .eq('stripe_customer_id', session.customer)
            
          // Add a notification
          const { data: subscriber } = await supabase
            .from('subscribers')
            .select('user_id')
            .eq('stripe_customer_id', session.customer)
            .single()
            
          if (subscriber) {
            await supabase.from('notifications').insert({
              user_id: subscriber.user_id,
              type: 'subscription_activated',
              content: `Your ${session.metadata.plan} subscription has been activated.`,
              is_read: false
            })
          }
        }
        break
      }
      
      case 'invoice.paid': {
        const invoice = event.data.object
        
        if (invoice.subscription) {
          // Update subscription end date
          const subscription = await stripe.subscriptions.retrieve(invoice.subscription)
          
          await supabase
            .from('subscribers')
            .update({
              subscription_end: new Date(subscription.current_period_end * 1000).toISOString(),
            })
            .eq('stripe_customer_id', invoice.customer)
        }
        break
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        
        await supabase
          .from('subscribers')
          .update({
            subscribed: false,
            subscription_tier: null,
            subscription_end: null,
          })
          .eq('stripe_customer_id', subscription.customer)
          
        // Add a notification
        const { data: subscriber } = await supabase
          .from('subscribers')
          .select('user_id')
          .eq('stripe_customer_id', subscription.customer)
          .single()
          
        if (subscriber) {
          await supabase.from('notifications').insert({
            user_id: subscriber.user_id,
            type: 'subscription_canceled',
            content: 'Your subscription has been canceled.',
            is_read: false
          })
        }
        break
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new Response(JSON.stringify({ error: error.message }), { status: 400 })
  }
})
