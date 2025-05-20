
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-servicepro-light-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-6">
            Ready to streamline your roofing business?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join hundreds of roofing contractors who've transformed their business operations with ServicePro. Start your 5-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-servicepro-orange hover:bg-servicepro-orange/90 text-lg"
              asChild
            >
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-servicepro-navy text-servicepro-navy hover:bg-servicepro-navy/10 text-lg"
              asChild
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required. 5-day trial with full access to all features.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
