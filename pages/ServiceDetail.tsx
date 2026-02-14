
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Phone, ChevronRight, CheckCircle, Shield } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import WhatsAppIcon from '../components/WhatsAppIcon';

import { servicesData } from '../data/serviceData';

const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = servicesData.find(s => s.slug === slug);
    const [activeTab, setActiveTab] = useState<'overview' | 'coverage' | 'process'>('overview');

    if (!service) {
        return <Navigate to="/" replace />;
    }

    // Heuristic Helper to split the content string into sections if possible
    // Since we rely on markdown string, we will just render it for now in a nicer container,
    // but surround it with pro-features.

    return (
        <>
            <Helmet>
                <title>{`${service.title} | MV Vehicle Insurance Maharashtra`}</title>
                <meta name="description" content={service.metaDescription} />
                <meta name="keywords" content={service.keywords} />
            </Helmet>

            <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] w-full overflow-hidden mb-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 container mx-auto px-6 flex flex-col justify-center">
                        <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-medium w-fit">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-mv-primary rounded-lg text-white">
                                    <service.icon size={24} />
                                </div>
                                <span className="text-mv-primary font-bold tracking-wider uppercase text-sm">Services</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl font-light">
                                {service.shortDesc}
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8 space-y-12">

                            {/* Rich Content Container */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                                <article className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-mv-blue
                                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                                    prose-p:text-slate-600 prose-p:leading-relaxed
                                    prose-li:text-slate-600 prose-li:marker:text-mv-primary
                                    prose-strong:text-mv-blue prose-strong:font-bold
                                    prose-blockquote:border-l-4 prose-blockquote:border-mv-primary prose-blockquote:bg-orange-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                                    prose-table:border prose-table:border-gray-200 prose-table:rounded-lg prose-table:overflow-hidden
                                    prose-th:bg-gray-50 prose-th:p-4 prose-th:text-mv-blue
                                    prose-td:p-4 prose-td:border-t prose-td:border-gray-100
                                ">
                                    <ReactMarkdown>
                                        {// Removing the H1 from markdown since we have Hero H1
                                            service.content.replace(/^#\s+.+$/m, '')}
                                    </ReactMarkdown>
                                </article>
                            </div>

                            {/* FAQ / Support CTA */}
                            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">Still have questions?</h3>
                                    <p className="text-blue-200 mb-8 max-w-lg mx-auto">Our experts are just a message away. Get personalized advice on the best plan for your vehicle.</p>
                                    <a href="https://wa.me/918856979618" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-green-900/20">
                                        <WhatsAppIcon size={20} fill="white" /> Chat on WhatsApp
                                    </a>
                                </div>
                                {/* Decorative bg elements */}
                                <div className="absolute top-0 left-0 w-64 h-64 bg-mv-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Get Quote Card - Direct Contact */}
                            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-gray-100 sticky top-28">
                                <h3 className="font-heading font-bold text-xl text-mv-blue mb-4">Get Your Quote Instantly</h3>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                    Skip the forms! Send us your vehicle details on WhatsApp or Call us to get the best quote in 5 minutes.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href="https://wa.me/918856979618?text=Hi, I need a quote for my vehicle."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
                                    >
                                        <WhatsAppIcon size={20} fill="white" /> Chat on WhatsApp
                                    </a>

                                    <a
                                        href="tel:+918856979618"
                                        className="w-full bg-white border-2 border-slate-100 hover:border-mv-primary/50 text-mv-navy font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Phone size={20} /> Call Now
                                    </a>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-xs text-slate-400 font-medium">Simple • Fast • Reliable</p>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                                <h4 className="font-bold text-mv-blue mb-4 flex items-center gap-2">
                                    <Shield size={18} className="text-mv-primary" /> Why Choose Us?
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-sm text-slate-600"><strong>8000+</strong> Cashless Garages</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-sm text-slate-600"><strong>Instant</strong> Policy Renewal</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                                        <span className="text-sm text-slate-600"><strong>Dedicated</strong> Claim Support</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetail;
