import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const TourPackages: React.FC = () => {
  const packages = [
    {
      id: 1,
      title: 'Dubai Explorer Package',
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '5 Days / 4 Nights',
      price: '৳85,000',
      location: 'Dubai, UAE',
      groupSize: '2-15 People',
      highlights: ['Burj Khalifa Visit', 'Desert Safari', 'Dubai Mall', 'Dhow Cruise'],
      description: 'Experience the glamour and luxury of Dubai with our comprehensive package including all major attractions.',
      available: true
    },
    {
      id: 2,
      title: 'Thailand Adventure',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '7 Days / 6 Nights',
      price: '৳65,000',
      location: 'Bangkok & Phuket',
      groupSize: '2-20 People',
      highlights: ['Temple Tours', 'Island Hopping', 'Thai Massage', 'Street Food Tour'],
      description: 'Discover the beauty of Thailand with visits to Bangkok and Phuket, including cultural and beach experiences.',
      available: true
    },
    {
      id: 3,
      title: 'Malaysia Truly Asia',
      image: 'https://images.pexels.com/photos/4317056/pexels-photo-4317056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '6 Days / 5 Nights',
      price: '৳55,000',
      location: 'Kuala Lumpur & Langkawi',
      groupSize: '2-18 People',
      highlights: ['Petronas Towers', 'Genting Highlands', 'Langkawi Cable Car', 'Cultural Tours'],
      description: 'Explore the diverse culture and natural beauty of Malaysia with our specially curated itinerary.',
      available: true
    },
    {
      id: 4,
      title: 'Singapore Stopover',
      image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '4 Days / 3 Nights',
      price: '৳70,000',
      location: 'Singapore',
      groupSize: '2-12 People',
      highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Universal Studios', 'Sentosa Island'],
      description: 'Perfect for a quick getaway to the Lion City with all must-see attractions covered.',
      available: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Customized Tour Packages
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover amazing destinations with our carefully crafted tour packages, 
          designed to create unforgettable memories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  pkg.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {pkg.available ? 'Available' : 'Sold Out'}
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full font-bold">
                {pkg.price}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {pkg.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {pkg.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-yellow-500" />
                  {pkg.duration}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
                  {pkg.location}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-yellow-500" />
                  {pkg.groupSize}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-yellow-500" />
                  Weekly Departure
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Package Highlights:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                    pkg.available
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-blue-900'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!pkg.available}
                >
                  {pkg.available ? 'Book Now' : 'Not Available'}
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Can't find what you're looking for? We create custom packages tailored to your preferences.
        </p>
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
          Request Custom Package
        </button>
      </div>
    </div>
  );
};

export default TourPackages;