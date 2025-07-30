import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Facebook,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Visa Queries',
      details: ['01614-787836', '01734-787836'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Air Ticketing',
      details: ['01400-530001', '01941038484'],
      color: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'Tour Packages',
      details: ['01941038484'],
      color: 'text-yellow-600'
    },
    {
      icon: Phone,
      title: 'Hajj & Umrah',
      details: ['01994-900096'],
      color: 'text-purple-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to start your journey? Get in touch with our travel experts for personalized assistance and support.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    info.color === 'text-blue-600' ? 'bg-blue-100' :
                    info.color === 'text-green-600' ? 'bg-green-100' :
                    info.color === 'text-yellow-600' ? 'bg-yellow-100' :
                    'bg-purple-100'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <a
                      key={detailIndex}
                      href={`tel:+88${detail}`}
                      className="block text-gray-600 hover:text-yellow-600 transition-colors text-sm"
                    >
                      {detail}
                    </a>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Office Information */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-6">
            <div>
              <div className="flex items-center mb-3">
                <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                <h3 className="font-semibold text-gray-900">Email</h3>
              </div>
              <a
                href="mailto:emeairinternational@gmail.com"
                className="text-gray-600 hover:text-yellow-600 transition-colors"
              >
                emeairinternational@gmail.com
              </a>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
                <h3 className="font-semibold text-gray-900">Office Address</h3>
              </div>
              <p className="text-gray-600">
                House No.-04 (3rd Floor), Road-12,<br />
                Sector-06, Uttara, Dhaka-1230
              </p>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-yellow-500 mr-3" />
                <h3 className="font-semibold text-gray-900">Office Hours</h3>
              </div>
              <div className="text-gray-600 space-y-1">
                <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                <p>Friday: 9:00 AM - 1:00 PM</p>
                <p>Saturday: Closed</p>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/8801941038484"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </a>
            <a
              href="https://www.facebook.com/emeairint"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Facebook Page
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-600 mb-2">Message Sent Successfully!</h4>
              <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your travel requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 bg-gray-100 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Find Our Office</h3>
        <div className="bg-white rounded-lg p-4 text-center">
          <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">
            House No.-04 (3rd Floor), Road-12, Sector-06, Uttara, Dhaka-1230
          </p>
          <a
            href="https://maps.google.com/?q=House+No.-04,Road-12,Sector-06,Uttara,Dhaka-1230"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;