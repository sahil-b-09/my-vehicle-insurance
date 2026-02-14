
import React, { useState, useEffect } from 'react';
import { Car, Bike, Truck, Check, X, Shield, Lightbulb, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InsuranceGuide: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'car' | 'bike' | 'commercial'>('car');
    const [activePlanBox, setActivePlanBox] = useState<number>(0);

    // Reset plan selection when tab changes
    useEffect(() => {
        setActivePlanBox(0);
    }, [activeTab]);

    const tabs = [
        { id: 'car', label: 'Car Insurance', icon: Car },
        { id: 'bike', label: 'Bike Insurance', icon: Bike },
        { id: 'commercial', label: 'Commercial', icon: Truck },
    ];

    const content = {
        car: {
            title: "Complete Protection for Your Car",
            desc: "From daily commutes to long road trips, ensure your car is covered against every risk.",
            proTip: "Opt for Zero Depreciation (Bumper-to-Bumper) add-on to get full claim value without deductions for part aging.",
            types: [
                {
                    title: "Comprehensive",
                    desc: "Own Damage + Third-Party + Theft + Fire",
                    includes: ["Accidents, Collision & Overturning", "Fire, Explosion & Self-Ignition", "Theft of Vehicle", "Natural Calamities (floods, earthquakes)", "Third-Party Liability (Property & Injury)", "Personal Accident Cover (Owner-Driver)"],
                    excludes: ["Normal Wear & Tear", "Mechanical & Electrical Breakdown", "Driving under influence of alcohol/drugs", "Driving without a valid License", "Consequential Loss", "Depreciation (unless Zero-Dep covered)"]
                },
                {
                    title: "Third-Party Only",
                    desc: "Mandatory by Law. Covers damages to others only.",
                    includes: ["Third-Party Property Damage", "Third-Party Injury or Death", "Legal Liability to Third Parties", "Personal Accident Cover (Owner-Driver) - Mandatory"],
                    excludes: ["Damages to Your Own Car (Accidents)", "Theft of Your Car", "Fire Damage to Your Car", "Natural Calamities damages to Car", "Any repair costs for your vehicle"]
                },
                {
                    title: "Own Damage",
                    desc: "Protection for your car only (if you already have TP).",
                    includes: ["Accidental Damages into your Car", "Fire & Explosion", "Theft", "Natural & Man-made Calamities"],
                    excludes: ["Third-Party Property Damage", "Third-Party Injury/Death Liability", "Normal Wear & Tear", "Mechanical/Electrical Breakdown", "Consequential Loss"]
                },
            ]
        },
        bike: {
            title: "Ride Stress-Free",
            desc: "Two-wheelers are prone to accidents and theft. Get the right cover at the best price.",
            proTip: "Accumulate No Claim Bonus (NCB) by driving safely. It can reduce your renewal premium by up to 50%!",
            types: [
                {
                    title: "Comprehensive",
                    desc: "Complete peace of mind. Covers bike + third-party.",
                    includes: ["Accidental Damage to Bike", "Fire, Explosion & Lightning", "Theft of Bike", "Natural Calamities (Flood, Storm)", "Third-Party Liability (Injury/Property)", "Personal Accident Cover"],
                    excludes: ["Normal Wear & Tear", "Mechanical or Electrical Breakdown", "Driving without valid License", "Driving under influence", "Consequential Loss", "Tyre/Tube Damage (unless accident)"]
                },
                {
                    title: "Third-Party Only",
                    desc: "Legal requirement. Covers liability only.",
                    includes: ["Third-Party Property Damage", "Third-Party Injury or Death", "Legal Costs for Third-Party Claims", "Personal Accident Cover (Mandatory)"],
                    excludes: ["Damages to Your own Bike", "Theft of Bike", "Fire Damage to Bike", "Natural Calamity Damage", "Self-Accident (unless PA added)"]
                },
                {
                    title: "5-Year Bundle",
                    desc: "Long-term protection (1 Year OD + 5 Years TP).",
                    includes: ["1 Year Own Damage Cover", "5 Years Third-Party Cover", "Personal Accident Cover", "No Yearly Renewal Hassle for TP"],
                    excludes: ["Own Damage Claims after 1st Year (needs renewal)", "Normal Wear & Tear", "Drunk Driving", "Illegal usage"]
                },
            ]
        },
        commercial: {
            title: "Secure Your Business Assets",
            desc: "Trucks, Taxis, and Buses are your livelihood. Don't let downtime kill your profits.",
            proTip: "For Taxi owners, 'Insure a new Taxi' with us ensures valid permits and avoids heavy RTO fines.",
            types: [
                {
                    title: "PCV (Passenger)",
                    desc: "For Taxis, Autos, and School Buses.",
                    includes: ["Passenger Liability", "Accidents & Overturning", "Fire & Theft", "Third-Party Liability (Unlimited Injury)", "Towing to nearest garage"],
                    excludes: ["Overloading of Passengers", "Use for illegal activities/racing", "Invalid Permit/Fitness Certificate", "Driver negligence", "Normal Wear & Tear"]
                },
                {
                    title: "GCV (Goods)",
                    desc: "For Trucks, Tempos, and Lorries.",
                    includes: ["Accindental Damage to Vehicle", "Third-Party Liability", "Driver/Cleaner Cover (WC)", "Theft & Fire", "Natural Calamities"],
                    excludes: ["Overloading of Goods", "Consequential Loss", "Driving without Valid License/Permit", "Mechanical Failure", "Tyre Damage"]
                },
                {
                    title: "Fleet Policy",
                    desc: "Discounts for insuring multiple vehicles.",
                    includes: ["Coverage for multiple vehicles under one policy", "Streamlined Administration", "Fleet Discounts on Premium", "Customized Add-on selection"],
                    excludes: ["Vehicles not declared in schedule", "Private use of commercial vehicle", "Wear and tear", "Freezing of engine"]
                },
            ]
        }
    };

    const activeContent = content[activeTab];
    const activePlanData = activeContent.types[activePlanBox];

    return (
        <section className="py-24 bg-mv-cream relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-mv-gold font-bold tracking-[0.2em] uppercase text-xs mb-3">Knowledge Bank</h2>
                    <h3 className="font-heading font-bold text-3xl md:text-5xl text-mv-navy mb-6">Understand Your Coverage</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">
                        Make informed decisions. Compare exactly what you get with each plan type.
                    </p>
                </div>

                {/* Tabs - Authentic Pill Style */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold transition-all duration-300 border ${activeTab === tab.id
                                ? 'bg-mv-navy text-white border-mv-navy shadow-xl scale-105'
                                : 'bg-white text-slate-500 border-gray-200 hover:border-mv-navy/30 hover:bg-gray-50'
                                }`}
                        >
                            <tab.icon size={20} className={activeTab === tab.id ? "text-mv-gold" : "text-slate-400"} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
                    >
                        {/* Left Column: Types & Pro-Tip */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-heading font-bold text-3xl text-mv-navy mb-3">{activeContent.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-lg font-light">{activeContent.desc}</p>
                            </div>

                            <div className="grid gap-4">
                                {activeContent.types.map((type, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActivePlanBox(idx)}
                                        className={`p-6 rounded-xl border-l-[6px] cursor-pointer transition-all duration-300 relative overflow-hidden group 
                        ${activePlanBox === idx
                                                ? 'border-l-mv-gold bg-white shadow-lg ring-1 ring-gray-100'
                                                : 'border-l-transparent bg-white border-gray-100 hover:border-l-gray-300 hover:bg-gray-50'}`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h5 className={`font-heading font-bold text-xl ${activePlanBox === idx ? 'text-mv-navy' : 'text-slate-600'}`}>
                                                {type.title}
                                            </h5>
                                            {activePlanBox === idx && <div className="w-2 h-2 rounded-full bg-mv-gold mt-2"></div>}
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed">{type.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 border-l-4 border-mv-primary p-6 rounded-lg flex gap-4 shadow-sm items-start">
                                <div className="mt-1">
                                    <Lightbulb size={24} className="text-mv-primary" fill="currentColor" fillOpacity={0.2} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-mv-navy mb-1 text-lg">Pro Tip</h5>
                                    <p className="text-slate-700 text-sm leading-relaxed">{activeContent.proTip}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Inclusions vs Exclusions */}
                        <div className="bg-white rounded-[2rem] shadow-2xl shadow-mv-navy/5 border border-gray-100 overflow-hidden sticky top-24">
                            {/* Header for the dynamic card */}
                            <div className="bg-gray-50 p-8 border-b border-gray-100">
                                <span className="text-xs font-bold text-mv-gold uppercase tracking-[0.2em] block mb-2">Coverage Analysis</span>
                                <h3 className="font-heading font-bold text-3xl text-mv-navy">{activePlanData.title}</h3>
                            </div>

                            <div className="grid grid-cols-2 text-center border-b border-gray-100">
                                <div className="p-4 bg-emerald-50/30 text-emerald-800 font-bold border-r border-gray-100 text-sm uppercase tracking-wide">
                                    <Shield size={16} className="inline-block mr-2 mb-1" /> Included
                                </div>
                                <div className="p-4 bg-rose-50/30 text-rose-800 font-bold text-sm uppercase tracking-wide">
                                    <X size={16} className="inline-block mr-2 mb-1" /> Excluded
                                </div>
                            </div>

                            <div className="grid grid-cols-2 divide-x divide-gray-100 min-h-[350px]">
                                <div className="p-6 space-y-5 bg-white">
                                    <AnimatePresence mode='popLayout'>
                                        {activePlanData.includes.map((item, i) => (
                                            <motion.div
                                                key={`${activePlanBox}-inc-${item}`} // Unique key forces re-render animation
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="mt-1 min-w-[16px]"><Check size={16} className="text-emerald-600" strokeWidth={3} /></div>
                                                <span className="text-sm text-mv-navy font-medium leading-relaxed">{item}</span>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                <div className="p-6 space-y-5 bg-gray-50/50">
                                    <AnimatePresence mode='popLayout'>
                                        {activePlanData.excludes.map((item, i) => (
                                            <motion.div
                                                key={`${activePlanBox}-exc-${item}`}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="mt-1 min-w-[16px]"><X size={16} className="text-rose-500" strokeWidth={3} /></div>
                                                <span className="text-sm text-slate-500 leading-relaxed">{item}</span>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 text-center border-t border-gray-100 flex justify-center items-center gap-2">
                                <Info size={14} className="text-slate-400" />
                                <p className="text-xs text-slate-400 font-medium">
                                    Terms subject to policy wording.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default InsuranceGuide;
