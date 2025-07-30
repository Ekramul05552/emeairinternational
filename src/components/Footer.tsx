import React from 'react';
import { 
  Plane, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  MessageCircle,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'Tour Packages', id: 'tour-packages' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'Air Ticketing',
    'Visa Processing',
    'Tour Packages',
    'Hajj & Umrah',
    'Hotel Booking',
    'Travel Insurance'
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold">EME AIR</h1>
                <p className="text-xs text-gray-300">INTERNATIONAL</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for air ticketing, visa processing, and unforgettable travel experiences worldwide.
            </p>
            
            <div className="text-yellow-400 font-medium">
              "FLY EME, FEEL THE DIFFERENCE"
            </div>

            <div className="flex space-x-4">
              <a
                href="https://wa.me/8801941038484"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/emeairint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  House No.-04 (3rd Floor),<br />
                  Road-12, Sector-06,<br />
                  Uttara, Dhaka-1230
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <a href="tel:+8801941038484" className="hover:text-yellow-400 transition-colors">
                    01941038484
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <a 
                    href="mailto:emeairinternational@gmail.com" 
                    className="hover:text-yellow-400 transition-colors"
                  >
                    emeairinternational@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-800 rounded-lg">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Sun - Thu: 9:00 AM - 6:00 PM</p>
                <p>Fri: 9:00 AM - 1:00 PM</p>
                <p>Sat: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm text-center md:text-left mb-4 md:mb-0">
            © 2025 EME AIR INTERNATIONAL. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-gray-300 text-sm">
              Designed with ❤️ for travelers
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 text-blue-900 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;