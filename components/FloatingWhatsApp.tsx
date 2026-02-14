import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/918856979618?text=Hi,%20I%20want%20to%20get%20insurance%20for%20my%20vehicle."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 lg:bottom-10 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl shadow-green-900/20 hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group border-2 border-white"
      aria-label="Connect on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" className="text-white" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Connect on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;