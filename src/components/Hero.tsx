import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            EME AIR
            <span className="block text-yellow-400">INTERNATIONAL</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <p className="text-xl sm:text-2xl text-gray-200 font-light">
              FLY EME, FEEL THE DIFFERENCE
            </p>
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your trusted partner for air ticketing, visa processing, customized tour packages,
          and unforgettable travel experiences worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBookNow}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Book Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <a
            href="https://wa.me/8801941038484"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">1000+</h3>
            <p className="text-gray-300">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">50+</h3>
            <p className="text-gray-300">Destinations</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">10+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">24/7</h3>
            <p className="text-gray-300">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;