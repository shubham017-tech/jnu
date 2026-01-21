import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { ShieldCheck, Lock, Fingerprint, Activity } from 'lucide-react';

const Security: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
                        Security at JNU
                    </h1>
                    <p className="text-xl text-gray-400">
                        Advanced security protocols protecting your academic journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { title: "Encryption", icon: Lock, desc: "End-to-end encryption for all data transmissions." },
                        { title: "Authentication", icon: Fingerprint, desc: "Multi-factor authentication for higher security." },
                        { title: "Monitoring", icon: Activity, desc: "24/7 system monitoring for threat detection." },
                        { title: "Compliance", icon: ShieldCheck, desc: "Alignment with global data protection standards." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-900/50 p-8 rounded-3xl border border-gray-800 text-center hover:bg-emerald-500/5 transition-all">
                            <div className="bg-emerald-500/10 p-4 rounded-2xl w-fit mx-auto mb-6">
                                <item.icon className="h-8 w-8 text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 p-12 rounded-3xl border border-emerald-500/20 text-center">
                    <h2 className="text-3xl font-bold mb-4">Found a Security Vulnerability?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        We value your help in keeping our platform safe. Participate in our Bug Bounty program or report issues directly to our security team.
                    </p>
                    <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20">
                        Report Issue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(Security);
