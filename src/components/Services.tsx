import React from 'react';
import { 
  Plane, 
  FileText, 
  MapPin, 
  Users, 
  Star, 
  Building, 
  Shield, 
  Calendar 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: 'Air Ticketing',
      description: 'Domestic & International flight bookings with competitive prices and flexible options.',
      features: ['Best Price Guarantee', 'Flexible Booking', '24/7 Support']
    },
    {
      icon: FileText,
      title: 'Visa Processing',
      description: 'Hassle-free visa assistance for all major destinations worldwide.',
      features: ['Document Support', 'Quick Processing', 'High Success Rate']
    },
    {
      icon: MapPin,
      title: 'Customized Tour Packages',
      description: 'Tailored travel experiences designed to match your preferences and budget.',
      features: ['Personalized Itinerary', 'Local Guides', 'All-Inclusive Packages']
    },
    {
      icon: Users,
      title: 'Group Travel',
      description: 'Special packages and discounts for corporate and family group bookings.',
      features: ['Group Discounts', 'Dedicated Coordinator', 'Custom Planning']
    },
    {
      icon: Star,
      title: 'Hajj & Umrah Packages',
      description: 'Spiritual journey packages with complete guidance and comfortable arrangements.',
      features: ['Experienced Guides', 'Quality Accommodation', 'Spiritual Support']
    },
    {
      icon: Building,
      title: 'Hotel Booking',
      description: 'Worldwide hotel reservations with exclusive rates and instant confirmation.',
      features: ['Global Network', 'Best Rates', 'Instant Confirmation']
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance coverage for peace of mind during your journey.',
      features: ['Medical Coverage', 'Trip Cancellation', 'Emergency Assistance']
    },
    {
      icon: Calendar,
      title: 'Holiday Packages',
      description: 'Pre-designed holiday packages to popular destinations around the world.',
      features: ['Popular Destinations', 'All-Inclusive', 'Seasonal Offers']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive travel solutions to make your journey seamless and memorable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <IconComponent className="w-6 h-6 text-yellow-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium">
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;