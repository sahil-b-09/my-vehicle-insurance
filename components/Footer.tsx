import React from 'react';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-slate-800 pb-12">

          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-slate-700">
                {/* Footer Logo - Kept visual integrity */}
                <img
                  src="/logo.png"
                  alt="MV Insurance"
                  className="w-full h-full object-cover"
                  style={{ filter: 'hue-rotate(110deg) brightness(1.1) saturate(1.2)' }}
                />
              </div>
              <span className="font-heading font-bold text-xl text-white">My Vehicle Insurance</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for all vehicle insurance needs. We ensure you get the best coverage at the lowest premiums.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-slate-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#why-us" className="text-slate-400 hover:text-white transition-colors text-sm">Why Us</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#footer" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+918856979618" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-mv-primary transition-colors">
                  <Phone size={16} />
                </div>
                <span>+91 8856979618</span>
              </a>
              <a href="https://wa.me/918856979618" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle size={16} />
                </div>
                <span>WhatsApp Us</span>
              </a>
              <a href="mailto:vidyabagul09@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-mv-primary transition-colors">
                  <Mail size={16} />
                </div>
                <span>vidyabagul09@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 MV Vehicle Insurance. All rights reserved.</p>
          <p>Vidya Bagul (POSP Insurance Adviser)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;