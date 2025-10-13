import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/2d51061f-f70a-4605-b865-b6778243a2cf.png" alt="ServicePro Logo" className="h-16 w-auto" />
              <span className="ml-2 text-servicepro-navy font-medium text-lg mx-[2px]">
                ServicePro
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-servicepro-navy px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-servicepro-navy px-3 py-2 font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-servicepro-navy px-3 py-2 font-medium">
              Pricing
            </Link>
            <Button asChild className="bg-servicepro-navy hover:bg-servicepro-navy/90 text-white">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-servicepro-orange hover:bg-servicepro-orange/90">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-servicepro-navy focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-servicepro-navy" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-servicepro-navy" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-servicepro-navy" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link to="/login" className="block px-3 py-2 text-base font-medium bg-servicepro-navy text-white rounded-md mb-2" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="block px-3 py-2 mt-2 text-base font-medium bg-servicepro-orange text-white rounded-md" onClick={() => setIsOpen(false)}>
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;