import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pb-safe">
      <div className="grid grid-cols-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a
          href="tel:+918856979618"
          className="bg-white text-mv-blue flex flex-col items-center justify-center py-3 border-t border-gray-200 active:bg-gray-100 transition-colors"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-xs font-bold font-heading">Call Now</span>
        </a>
        <a
          href="https://wa.me/918856979618?text=Hi,%20I%20want%20to%20get%20insurance%20for%20my%20vehicle."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white flex flex-col items-center justify-center py-3 active:bg-green-700 transition-colors"
        >
          <MessageCircle size={20} className="mb-1" />
          <span className="text-xs font-bold font-heading">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default StickyMobileBar;