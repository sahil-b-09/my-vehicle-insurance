
import React from 'react';
import { ShieldCheck, Star, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Abstract Background Shapes (Blue Theme) */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-mv-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-mv-gold/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-mv-cream border border-mv-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <ShieldCheck size={18} className="text-mv-primary" fill="currentColor" fillOpacity={0.2} />
              <span className="text-sm font-bold text-mv-navy tracking-wide uppercase">Certified POSP Adviser</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-mv-navy leading-[1.1] mb-6"
            >
              Secure Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mv-primary to-mv-gold">
                Journey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 font-light"
            >
              Expert vehicle insurance guidance for Maharashtra's roads.
              Get the right coverage for your Car, Bike, or Truck with
              <span className="font-semibold text-mv-navy"> zero hidden terms</span>.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/918856979618?text=Hi, I want to get a quote for my vehicle insurance."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/25 flex items-center justify-center gap-2 group"
              >
                <WhatsAppIcon className="group-hover:scale-110 transition-transform" fill="white" />
                Get Quote on WhatsApp
              </a>
              <a
                href="tel:+918856979618"
                className="bg-white text-mv-navy border border-gray-200 px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:border-mv-primary/50 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Expert
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6 opacity-80"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-slate-500">
                    <img src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="Client" className="w-full h-full rounded-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex text-mv-primary">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="text-xs font-bold text-mv-navy mt-0.5">Trusted by 500+ locals</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image / Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
          >
            {/* Animated Floating Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full h-[85%] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              {/* Modern Red SUV Image (High Quality Unsplash) */}
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Red SUV - Family Safety"
                className="w-full h-full object-cover scale-110"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-mv-navy/80 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                <p className="font-heading font-bold text-2xl">100%</p>
                <p className="text-sm font-light opacity-90">Claim Support</p>
              </div>
            </motion.div>

            {/* Decorative Dots/Elements behind car */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-64 h-64 bg-mv-gold/20 rounded-full blur-[100px]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;