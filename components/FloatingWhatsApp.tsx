import WhatsAppIcon from './WhatsAppIcon';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/918856979618?text=Hi,%20I%20want%20to%20get%20insurance%20for%20my%20vehicle."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 lg:bottom-10 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center w-14 h-14 border-2 border-white"
      title="Chat on WhatsApp"
    >
      <WhatsAppIcon size={32} fill="white" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Connect on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;