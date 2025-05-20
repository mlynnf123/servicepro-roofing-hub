
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DashboardPreview from "./DashboardPreview";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-servicepro-navy to-servicepro-navy/90 text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/f6f99c05-63e1-4743-a6e2-fb0bd68fae3b.png" 
                alt="ServicePro Logo" 
                className="h-24 w-auto mr-3" 
              />
              <h1 className="hero-text">
                The Ultimate CRM for Roofing Contractors
              </h1>
            </div>
            <p className="text-xl mb-8 text-gray-200">
              Streamline your workflow, organize client information, and grow your roofing business with ServicePro's purpose-built CRM solution.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-servicepro-orange hover:bg-servicepro-orange/90 text-lg"
                asChild
              >
                <Link to="/signup">Start 5-Day Free Trial</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg"
                asChild
              >
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-300">No credit card required. Cancel anytime.</p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-1 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <DashboardPreview />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-servicepro-orange p-3 rounded-lg text-sm font-medium">
              Designed specifically for roofing contractors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
