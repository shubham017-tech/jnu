import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { CheckCircle2, Award, FileBadge, Scale } from 'lucide-react';

const Compliance: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-600">
                        Compliance & Standards
                    </h1>
                    <p className="text-xl text-gray-400">
                        Jaipur National University is committed to global educational and data standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {[
                        {
                            title: "Educational Standards",
                            icon: Award,
                            desc: "Fully accredited under national education boards ensuring the highest quality of virtual curriculum."
                        },
                        {
                            title: "Data Privacy Compliance",
                            icon: Scale,
                            desc: "Adherent to international data protection regulations for student records and personal information."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-900/50 p-10 rounded-3xl border border-gray-800 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left transition-all hover:border-amber-500/30">
                            <div className="bg-amber-500/10 p-5 rounded-2xl">
                                <item.icon className="h-10 w-10 text-amber-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                                <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-amber-500 font-semibold">
                                    <CheckCircle2 className="h-5 w-5" /> Certified
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 bg-slate-900/30 rounded-2xl border border-gray-800 flex items-center justify-center gap-4 text-gray-500">
                    <FileBadge className="h-6 w-6" />
                    <span>Accreditation ID: JNU-E-2024-VR</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(Compliance);
