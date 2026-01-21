import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { Gavel, CheckCircle, AlertCircle, FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-gray-400">
                        Rules and guidelines for using the JNU Virtual Classroom platform.
                    </p>
                </div>

                <div className="bg-slate-900/50 p-8 rounded-3xl border border-gray-800 space-y-8 mb-12">
                    {[
                        { tag: "01", title: "Acceptance", desc: "By accessing this platform, you agree to be bound by these Terms of Service and all applicable laws." },
                        { tag: "02", title: "User Conduct", desc: "Users must interact respectfully and maintain academic integrity in all virtual classrooms." },
                        { tag: "03", title: "Intellectual Property", desc: "All course materials are the property of Jaipur National University and are for individual use only." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-6">
                            <span className="text-3xl font-black text-indigo-500/20">{item.tag}</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="flex items-center gap-2 px-8 py-3 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                        Accept Terms <CheckCircle className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(TermsOfService);
