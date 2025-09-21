import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ModernDashboard from "./ModernDashboard";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 lg:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Logo and Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <img 
                src="/lovable-uploads/2d51061f-f70a-4605-b865-b6778243a2cf.png" 
                alt="ServicePro Logo" 
                className="h-16 w-auto mr-4" 
              />
              <div className="bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 text-sm font-medium text-secondary">
                Trusted by 500+ contractors
              </div>
            </div>
            
            {/* Hero Headline */}
            <h1 className="hero-text mb-6 leading-tight">
              Close More Deals &<br />
              <span className="text-secondary">Scale Faster</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Stop losing leads and missing follow-ups. ServicePro's all-in-one CRM helps roofing contractors 
              <span className="font-semibold text-secondary"> increase revenue by 40%</span> and save 15+ hours per week.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-primary font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <Link to="/signup">Start 14-Day Free Trial</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4 backdrop-blur-sm transition-all duration-300" 
                asChild
              >
                <Link to="/features">Watch Demo</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Setup in under 5 minutes
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Modern Dashboard Component */}
              <div className="transform hover:scale-105 transition-all duration-500">
                <ModernDashboard />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-2xl shadow-xl animate-pulse">
                <div className="text-2xl font-bold">+40%</div>
                <div className="text-sm opacity-90">Revenue Growth</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary p-4 rounded-2xl shadow-xl">
                <div className="text-lg font-bold">15+ Hours</div>
                <div className="text-sm">Saved Per Week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;