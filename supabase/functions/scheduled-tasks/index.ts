
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.43.1'

const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

serve(async (req) => {
  try {
    // Create Supabase client with admin privileges
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get tasks that are scheduled for now or in the past and are still pending
    const { data: tasks, error } = await supabase
      .from('scheduled_tasks')
      .select('*')
      .eq('status', 'pending')
      .lte('scheduled_for', new Date().toISOString())
      .order('scheduled_for', { ascending: true })
      .limit(10)

    if (error) {
      throw new Error(`Error fetching tasks: ${error.message}`)
    }

    if (!tasks || tasks.length === 0) {
      return new Response(JSON.stringify({ message: 'No tasks to process' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      })
    }

    const results = []

    // Process each task
    for (const task of tasks) {
      try {
        let result

        switch (task.task_type) {
          case 'order_materials': {
            // Handle ordering materials after approval
            result = await handleMaterialsOrder(supabase, task)
            break
          }
          case 'send_estimate_form': {
            // Handle sending estimate form after inspection
            result = await sendEstimateForm(supabase, task)
            break
          }
          case 'send_appointment_reminder': {
            // Handle sending appointment reminders
            result = await sendAppointmentReminder(supabase, task)
            break
          }
          default:
            result = { message: `Unknown task type: ${task.task_type}` }
        }

        // Update task status
        await supabase
          .from('scheduled_tasks')
          .update({
            status: 'completed',
            completed_at: new Date().toISOString(),
            data: { ...task.data, result }
          })
          .eq('id', task.id)

        results.push({
          task_id: task.id,
          result: 'success',
          details: result
        })
      } catch (err) {
        console.error(`Error processing task ${task.id}:`, err)

        // Update task with error
        await supabase
          .from('scheduled_tasks')
          .update({
            status: 'failed',
            data: { ...task.data, error: err.message }
          })
          .eq('id', task.id)

        results.push({
          task_id: task.id,
          result: 'error',
          details: err.message
        })
      }
    }

    return new Response(JSON.stringify({ processed: tasks.length, results }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error processing scheduled tasks:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})

// Function to handle ordering materials after approval
async function handleMaterialsOrder(supabase, task) {
  const { entity_id, organization_id } = task

  // Get project details
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', entity_id)
    .single()

  if (error) {
    throw new Error(`Error fetching project: ${error.message}`)
  }

  // Create activity
  await supabase.from('activities').insert({
    organization_id,
    entity_type: 'projects',
    entity_id: project.id,
    action: 'materials_ordered',
    details: { 
      automated: true,
      project_name: project.name
    }
  })

  // Send notification to team
  const { data: members } = await supabase
    .from('organization_members')
    .select('user_id')
    .eq('organization_id', organization_id)

  for (const member of members || []) {
    await supabase.from('notifications').insert({
      user_id: member.user_id,
      type: 'materials_order',
      content: `Materials order created for project: ${project.name}`,
      is_read: false
    })
  }

  return { message: 'Materials order process initiated' }
}

// Function to send estimate form after inspection
async function sendEstimateForm(supabase, task) {
  const { entity_id, organization_id, data } = task

  // Get inspection details
  const { data: inspection, error } = await supabase
    .from('inspections')
    .select('*, leads(*)')
    .eq('id', entity_id)
    .single()

  if (error) {
    throw new Error(`Error fetching inspection: ${error.message}`)
  }

  const clientEmail = inspection.leads?.email

  if (!clientEmail) {
    throw new Error('Client email not found')
  }

  // Call the send-email function
  const emailResponse = await fetch(
    `${supabaseUrl}/functions/v1/send-email`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseServiceKey}`,
      },
      body: JSON.stringify({
        to: clientEmail,
        subject: 'Your Roofing Estimate',
        html: `
          <h1>Your Roofing Estimate</h1>
          <p>Thank you for choosing ServicePro for your roofing needs.</p>
          <p>Based on our recent inspection, we've prepared an estimate for your project.</p>
          <p><a href="${data?.estimateUrl || '#'}">Click here to view your estimate</a></p>
        `,
        type: 'inspections',
        entityId: entity_id
      }),
    }
  )

  if (!emailResponse.ok) {
    const errorData = await emailResponse.json()
    throw new Error(`Failed to send email: ${errorData.error || 'Unknown error'}`)
  }

  // Create activity
  await supabase.from('activities').insert({
    organization_id,
    entity_type: 'inspections',
    entity_id,
    action: 'estimate_sent',
    details: { 
      client_email: clientEmail
    }
  })

  return { message: 'Estimate form sent to client' }
}

// Function to send appointment reminder
async function sendAppointmentReminder(supabase, task) {
  const { entity_id, entity_type, data } = task

  let appointmentDetails
  let clientEmail
  let appointmentType

  // Get appointment details based on entity type
  switch (entity_type) {
    case 'inspections': {
      const { data: inspection } = await supabase
        .from('inspections')
        .select('*, leads(*)')
        .eq('id', entity_id)
        .single()

      if (inspection) {
        appointmentDetails = inspection
        clientEmail = inspection.leads?.email
        appointmentType = 'Inspection'
      }
      break
    }
    case 'projects': {
      const { data: project } = await supabase
        .from('projects')
        .select('*')
        .eq('id', entity_id)
        .single()

      if (project) {
        appointmentDetails = project
        // You would need a way to get the client email from the project
        // This might require additional queries or structure changes
        appointmentType = 'Project Work'
      }
      break
    }
    default:
      throw new Error(`Unsupported entity type for appointment reminder: ${entity_type}`)
  }

  if (!appointmentDetails) {
    throw new Error('Appointment details not found')
  }

  if (clientEmail) {
    // Call the send-email function
    await fetch(
      `${supabaseUrl}/functions/v1/send-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseServiceKey}`,
        },
        body: JSON.stringify({
          to: clientEmail,
          subject: `Reminder: Upcoming ${appointmentType} Appointment`,
          html: `
            <h1>Reminder: Your ${appointmentType} is Tomorrow</h1>
            <p>This is a friendly reminder about your scheduled ${appointmentType.toLowerCase()} with ServicePro.</p>
            <p><strong>Date:</strong> ${new Date(data.appointment_date || appointmentDetails.scheduled_date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${data.appointment_time || '(Please refer to your confirmation email)'}</p>
            <p>If you need to reschedule, please contact us as soon as possible.</p>
          `,
          type: entity_type,
          entityId: entity_id
        }),
      }
    )
  }

  return { message: `${appointmentType} reminder sent` }
}
