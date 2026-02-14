import React from 'react';
import { Star, Zap, Handshake, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Star,
    title: "Best Premium Options",
    desc: "We compare multiple insurers to get you the lowest rates possible without compromising coverage."
  },
  {
    icon: Zap,
    title: "Fast Policy Issuance",
    desc: "Get your policy document instantly via WhatsApp or Email. No long waiting periods."
  },
  {
    icon: Handshake,
    title: "100% Claim Assistance",
    desc: "We don't just sell; we support. We stand by you during the entire claim settlement process."
  },
  {
    icon: HeartHandshake,
    title: "Friendly Support",
    desc: "Professional service with a personal touch. We are always just a phone call away."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-mv-blue text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
         <div className="absolute left-10 top-10 w-64 h-64 bg-mv-primary rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us?</h2>
            <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-6 leading-tight">
              We make insurance <br />
              <span className="text-white">Simple & Reliable.</span>
            </h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-lg">
              Choosing the right insurance can be confusing. We simplify the process, offering expert advice and dedicated support so you can drive with peace of mind.
            </p>
            
            <a href="#footer" className="inline-flex items-center gap-2 bg-white text-mv-blue px-8 py-3.5 rounded-lg font-heading font-bold hover:bg-gray-100 transition-all duration-300">
              Get in Touch
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
                  <feature.icon size={24} />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-blue-200 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;