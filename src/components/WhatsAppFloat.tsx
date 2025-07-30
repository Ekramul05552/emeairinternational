import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after component becomes visible
      setTimeout(() => setShowTooltip(true), 1000);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 6000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '8801941038484';
    const message = 'Hello! I\'m interested in your travel services. Could you please provide more information?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white shadow-lg rounded-lg p-3 max-w-xs animate-pulse">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-gray-700 pr-4">
            <strong>Need help?</strong><br />
            Chat with us on WhatsApp for instant support!
          </p>
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Ripple Effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
    </div>
  );
};

export default WhatsAppFloat;