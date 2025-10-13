import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-servicepro-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/2d51061f-f70a-4605-b865-b6778243a2cf.png" alt="ServicePro Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-light text-white">
                ServicePro
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              The ultimate CRM solution for roofing contractors, simplifying customer management and boosting efficiency.
            </p>
          </div>
          
          <div>
            <h3 className="font-light text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-light text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-300 hover:text-white text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-light text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-300 hover:text-white text-sm">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} IM Marketing, LLC. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;