import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedProductDemo from "./AnimatedProductDemo";
import MouseGradient from "./MouseGradient";
const Hero = () => {
  return <section className="relative bg-background text-foreground py-24 overflow-hidden">
      {/* Radial Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/30 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-foreground/30 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <MouseGradient />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-6">
            <img src="/lovable-uploads/2d51061f-f70a-4605-b865-b6778243a2cf.png" alt="ServicePro Logo" className="h-36 w-auto" />
          </div>
          <h1 className="hero-text font-brand font-light mb-6">
            The Ultimate CRM for Roofing Contractors
          </h1>
          <p className="text-xl mb-8 font-light max-w-2xl mx-auto">
            Streamline your workflow, organize client information, and grow your roofing business with ServicePro's purpose-built CRM solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg rounded-sm transition-all duration-300" style={{
            boxShadow: 'var(--glow-gold)'
          }} asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg rounded-sm transition-all duration-200" asChild>
              <Link to="/features">Learn More</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm font-light opacity-80">No credit card required. Cancel anytime.</p>
        </div>

        {/* Product Preview */}
        <div className="max-w-6xl mx-auto">
          <AnimatedProductDemo />
        </div>
      </div>
    </section>;
};
export default Hero;