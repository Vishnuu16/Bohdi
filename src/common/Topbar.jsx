import { Phone, Mail, Truck, Tag } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="hidden md:block top-0 w-full bg-gradient-to-r  text-white shadow-md" style={{ backgroundColor: '#F49217' }}>
      <div className="w-[95%] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 gap-2 md:gap-0">
          {/* Left Side - Contact Info */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center group">
              <div className="p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <a href="tel:9123456789">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
              <a
                href="tel:9123456789" 
                className="hidden lg:block ml-2 text-sm font-sans hover:underline transition-all"
              >
                +91 12345 67890
              </a>
            </div>

            <div className="flex items-center group">
              <div className="p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <a href="mailto:contact@example.com">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <a 
                href="mailto:contact@example.com" 
                className="hidden lg:block ml-2 text-sm font-sans hover:underline transition-all"
              >
                contact@example.com
              </a>
            </div>
          </div>

         
          
          {/* Social Icons */}
          <div className="flex gap-4 justify-between items-center">
            <a href="#" className="hover:scale-110 transition-transform">
              <FaInstagram className="text-[25px]" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <FaFacebook className="text-[22px]"/>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <FaXTwitter className="text-[21px]"/>
            </a>
          </div>
        </div>
      </div>

      {/* Underline */}
      <div className="h-0.5 bg-white/30" />
    </div>
  );
};

export default TopBar;