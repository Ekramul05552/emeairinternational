import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Md. Rahman Ahmed',
      designation: 'Business Executive',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      comment: 'EME AIR INTERNATIONAL made our Dubai trip absolutely perfect. From visa processing to hotel bookings, everything was handled professionally. Highly recommended for hassle-free travel!',
      service: 'Dubai Tour Package'
    },
    {
      id: 2,
      name: 'Fatima Begum',
      designation: 'Homemaker',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      comment: 'The Hajj package was exceptional. The team provided complete guidance and support throughout the journey. It was truly a spiritual experience made comfortable by their arrangements.',
      service: 'Hajj Package'
    },
    {
      id: 3,
      name: 'Dr. Karim Hassan',
      designation: 'Medical Professional',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      comment: 'Quick visa processing for my medical conference in Singapore. The team was very professional and kept me updated at every step. Will definitely use their services again.',
      service: 'Visa Processing'
    },
    {
      id: 4,
      name: 'Sarah Khan',
      designation: 'Teacher',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      comment: 'Amazing Thailand tour! The itinerary was well-planned, and the local guides were fantastic. EME AIR made our family vacation memorable and stress-free.',
      service: 'Thailand Package'
    },
    {
      id: 5,
      name: 'Mohammad Ali',
      designation: 'Businessman',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      comment: 'Excellent service for group travel arrangements. They handled all logistics for our corporate trip to Malaysia. Professional team with competitive pricing.',
      service: 'Group Travel'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers have to say about their experiences with EME AIR INTERNATIONAL.
        </p>
      </div>

      <div className="relative">
        {/* Main Testimonial */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-yellow-100"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <Quote className="w-10 h-10 text-yellow-400 mb-4 mx-auto md:mx-0" />
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].comment}"
              </p>

              <div className="flex justify-center md:justify-start mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 mb-2">
                  {testimonials[currentIndex].designation}
                </p>
                <p className="text-sm text-yellow-600 font-medium">
                  Service: {testimonials[currentIndex].service}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-yellow-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-yellow-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-yellow-50 rounded-xl p-6">
          <h3 className="text-3xl font-bold text-yellow-600 mb-2">1000+</h3>
          <p className="text-gray-700">Happy Customers</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-3xl font-bold text-blue-600 mb-2">4.9/5</h3>
          <p className="text-gray-700">Average Rating</p>
        </div>
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="text-3xl font-bold text-green-600 mb-2">98%</h3>
          <p className="text-gray-700">Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;