
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

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
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText = "Get Started",
  buttonVariant = "default",
}: PricingCardProps) => {
  return (
    <div className={`border rounded-lg overflow-hidden ${isPopular ? 'ring-2 ring-servicepro-orange' : ''}`}>
      {isPopular && (
        <div className="bg-servicepro-orange text-white text-center py-1.5 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
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
          asChild
        >
          <Link to="/signup">{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
