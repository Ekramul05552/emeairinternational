import React from 'react';
import { Award, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About EME AIR INTERNATIONAL
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded with a vision to make travel accessible and enjoyable for everyone, 
            EME AIR INTERNATIONAL has been serving customers with dedication and excellence 
            for over a decade. We are your trusted partner in creating unforgettable travel experiences.
          </p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our team of experienced travel professionals is committed to providing personalized 
            service, competitive pricing, and comprehensive travel solutions. From business trips 
            to family vacations, from pilgrimages to adventure tours, we handle every detail 
            with care and precision.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-600">10+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-600">1000+</h3>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
            alt="EME AIR INTERNATIONAL Office"
            className="rounded-xl shadow-lg w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/20 rounded-xl"></div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-yellow-50 rounded-xl">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To provide exceptional travel services that exceed customer expectations 
            while ensuring safety, reliability, and affordability.
          </p>
        </div>

        <div className="text-center p-6 bg-blue-50 rounded-xl">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To become the leading travel agency in Bangladesh, known for innovation, 
            customer satisfaction, and global connectivity.
          </p>
        </div>

        <div className="text-center p-6 bg-red-50 rounded-xl">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
          <p className="text-gray-600">
            Integrity, excellence, customer-centricity, and continuous improvement 
            guide everything we do at EME AIR INTERNATIONAL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;