
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
  planId?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText = "Get Started",
  buttonVariant = "default",
  planId,
}: PricingCardProps) => {
  const { toast } = useToast();

  const handleSubscription = async () => {
    try {
      const { data: session } = await supabase.auth.getSession();
      
      if (!session?.session) {
        // If user is not logged in, redirect to signup page
        return;
      }

      // Call the subscription edge function with the plan information
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { 
          plan: title.toLowerCase(), 
          priceId: planId,
          price: price,
          returnUrl: window.location.origin + '/account'
        }
      });

      if (error) {
        console.error('Subscription error:', error);
        toast({
          title: "Error",
          description: "Failed to process subscription. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Redirect to Stripe Checkout
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Subscription error:', err);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`border rounded-lg overflow-hidden ${isPopular ? 'ring-2 ring-servicepro-orange' : ''}`}>
      {isPopular && (
        <div className="bg-servicepro-orange text-white text-center py-1.5 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-light">{title}</h3>
        <div className="mt-4 flex items-baseline text-gray-900">
          <span className="text-4xl font-extrabold tracking-tight">${price}</span>
          <span className="ml-1 text-xl font-semibold">/month</span>
        </div>
        <p className="mt-3 text-gray-500 text-sm">{description}</p>

        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                {feature.included ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <div className="h-5 w-5 rounded-full border border-gray-200" />
                )}
              </div>
              <span 
                className={`ml-2 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}
              >
                {feature.title}
              </span>
            </li>
          ))}
        </ul>

        <Button 
          className={`mt-8 w-full ${buttonVariant === "default" ? "bg-servicepro-navy hover:bg-servicepro-navy/90" : 
            buttonVariant === "secondary" ? "bg-servicepro-orange hover:bg-servicepro-orange/90" : ""}`} 
          variant={buttonVariant === "outline" ? "outline" : "default"}
          onClick={handleSubscription}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
