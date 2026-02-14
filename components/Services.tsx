
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { servicesData } from '../data/serviceData';

// Configuration for "Bento Grid" Layout - Updated for Premium Look
// Configuration for "Bento Grid" Layout - Unified Clean Corporate Look
const serviceConfig: Record<string, { bgClass: string; textClass: string; cols: string; iconBg: string }> = {
  'car-insurance': {
    bgClass: "bg-white",
    textClass: "text-mv-navy",
    cols: "md:col-span-2",
    iconBg: "bg-blue-50 text-mv-primary"
  },
  'bike-insurance': {
    bgClass: "bg-white",
    textClass: "text-mv-navy",
    cols: "md:col-span-1",
    iconBg: "bg-blue-50 text-mv-primary"
  },
  'tractor-insurance': {
    bgClass: "bg-white",
    textClass: "text-mv-navy",
    cols: "md:col-span-1",
    iconBg: "bg-blue-50 text-mv-primary"
  },
  'commercial-vehicle': {
    bgClass: "bg-white",
    textClass: "text-mv-navy",
    cols: "md:col-span-1",
    iconBg: "bg-blue-50 text-mv-primary"
  },
  'policy-renewal': {
    bgClass: "bg-white",
    textClass: "text-mv-navy",
    cols: "md:col-span-1",
    iconBg: "bg-blue-50 text-mv-primary"
  },
  'third-party': {
    bgClass: "bg-white",
    textClass: "text-mv-navy",
    cols: "md:col-span-3",
    iconBg: "bg-blue-50 text-mv-primary"
  },
};

const services = servicesData.map(service => ({
  ...service,
  desc: service.shortDesc,
  ...serviceConfig[service.slug]
}));

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Creamy Background & Structure */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
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
                  className={`block h-full relative ${service.bgClass} rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100 group-hover:border-mv-primary/30 overflow-hidden cursor-pointer`}
                >

                  <div className={`absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <ArrowUpRight className={service.textClass === 'text-white' ? "text-mv-gold" : "text-mv-navy"} size={24} />
                  </div>

                  <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-mv-primary group-hover:text-white transition-all duration-500`}>
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