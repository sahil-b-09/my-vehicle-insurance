
import React from 'react';
import { Quote, Phone, Mail, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-5xl mx-auto">
          {/* Split Layout: Profile Image + Trust Content */}
          <div className="bg-mv-navy rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-mv-gold/10 rounded-full blur-[80px] -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-mv-gold/5 rounded-full blur-[80px] -ml-16 -mb-16"></div>

            {/* Profile Image Column */}
            <div className="relative shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-mv-gold shadow-xl overflow-hidden relative z-10 mx-auto bg-white">
                {/* Vidya's Photo - AI Generated Professional Portrait */}
                <img
                  src="/assets/vidya_real.png"
                  alt="Vidya Bagul - Insurance Expert"
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>
              {/* Name Plate */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-mv-navy px-6 py-2 rounded-full shadow-lg whitespace-nowrap z-20 border border-gray-100">
                <h4 className="font-heading font-bold text-lg">Vidya Bagul</h4>
              </div>
            </div>

            {/* Content Column */}
            <div className="text-center md:text-left flex-1 text-white">
              <Quote className="text-mv-gold w-12 h-12 mb-6 mx-auto md:mx-0 opacity-50" />

              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Your Local Insurance Expert</h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                "Insurance is not just a digital transaction; it's a promise of support when things go wrong. As a <span className="text-mv-gold font-medium">Certified POSP Adviser</span>, I ensure you never have to face a claim process alone."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="bg-mv-gold/20 p-2 rounded-full text-mv-gold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Direct Line</p>
                    <p className="font-heading font-bold text-lg">+91 88569 79618</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="bg-mv-gold/20 p-2 rounded-full text-mv-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                    <a href="mailto:vidyabagul09@gmail.com" className="font-heading font-bold text-lg hover:text-mv-gold transition-colors">vidyabagul09@gmail.com</a>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3 md:col-span-2">
                  <div className="bg-mv-gold/20 p-2 rounded-full text-mv-gold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Serving In</p>
                    <p className="font-heading font-bold text-lg">Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;