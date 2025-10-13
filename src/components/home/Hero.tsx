import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DashboardPreview from "./DashboardPreview";
import MouseGradient from "./MouseGradient";

const Hero = () => {
  return <section className="relative bg-primary text-white py-24 overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
      <MouseGradient />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <div className="flex items-center mb-6">
              <img src="/lovable-uploads/2d51061f-f70a-4605-b865-b6778243a2cf.png" alt="ServicePro Logo" className="h-32 w-auto mr-4" />
              <h1 className="hero-text font-brand font-light">
                The Ultimate CRM for Roofing Contractors
              </h1>
            </div>
            <p className="text-xl mb-8 font-light">
              Streamline your workflow, organize client information, and grow your roofing business with ServicePro's purpose-built CRM solution.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg rounded-sm transition-all duration-300" style={{ boxShadow: 'var(--glow-gold)' }} asChild>
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg rounded-sm transition-all duration-200" asChild>
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm font-light opacity-80">No credit card required. Cancel anytime.</p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-1 rounded-sm transition-all duration-300" style={{ boxShadow: 'var(--shadow-elevated)' }}>
              <DashboardPreview />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary p-3 rounded-sm text-sm font-medium transition-all duration-300">
              Designed specifically for roofing contractors
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;