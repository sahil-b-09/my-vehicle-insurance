
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { servicesData } from '../data/serviceData';

// Configuration for "Bento Grid" Layout - Updated for Premium Look
'car-insurance': {
  bgClass: "bg-white",
    textClass: "text-mv-navy",
      cols: "md:col-span-2",
        iconBg: "bg-mv-navy text-white"
},
'bike-insurance': {
  bgClass: "bg-mv-navy",
    textClass: "text-white",
      cols: "md:col-span-1",
        iconBg: "bg-white/10 text-white"
},
'tractor-insurance': {
  bgClass: "bg-white",
    textClass: "text-mv-navy",
      cols: "md:col-span-1",
        iconBg: "bg-mv-primary/10 text-mv-primary"
},
'commercial-vehicle': {
  bgClass: "bg-white", // Changed from cream to white for consistency
    textClass: "text-mv-navy",
      cols: "md:col-span-1",
        iconBg: "bg-mv-navy/5 text-mv-navy"
},
'policy-renewal': {
  bgClass: "bg-white",
    textClass: "text-mv-navy",
      cols: "md:col-span-1",
        iconBg: "bg-mv-primary/10 text-mv-primary"
},
'third-party': {
  bgClass: "bg-mv-navy",
    textClass: "text-white",
      cols: "md:col-span-3",
        iconBg: "bg-white/20 text-white"
},
};

const services = servicesData.map(service => ({
  ...service,
  desc: service.shortDesc,
  ...serviceConfig[service.slug]
}));

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-mv-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Expertise</h2>
          <h3 className="font-heading font-bold text-4xl md:text-5xl text-mv-navy mb-6">Premium Services</h3>
          <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">
            Tailored insurance solutions designed to protect what matters most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`${service.cols} group`}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className={`block h-full relative ${service.bgClass} rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden cursor-pointer`}
                >

                  <div className={`absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <ArrowUpRight className={service.textClass === 'text-white' ? "text-mv-gold" : "text-mv-navy"} size={24} />
                  </div>

                  <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>

                  <h4 className={`font-heading font-bold text-2xl lg:text-3xl mb-4 ${service.textClass}`}>
                    {service.title}
                  </h4>
                  <p className={`${service.textClass === 'text-white' ? 'text-gray-300' : 'text-slate-500'} font-light leading-relaxed text-lg`}>
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;