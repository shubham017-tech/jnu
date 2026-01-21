import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { Terminal, Database, ShieldCheck, Zap } from 'lucide-react';

const ApiReference: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                        API Reference
                    </h1>
                    <p className="text-xl text-gray-400">
                        Developer documentation for integrating with JNU Virtual Classroom APIs.
                    </p>
                </div>

                <div className="bg-slate-900/80 p-6 rounded-2xl border border-gray-800 font-mono text-sm mb-12">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-green-400 mb-2">// Authenticate your request</p>
                    <p className="text-blue-400">GET <span className="text-white">/api/v1/auth/me</span></p>
                    <p className="text-gray-500 italic mt-2">{"{"}</p>
                    <p className="text-white ml-4">"status": "success",</p>
                    <p className="text-white ml-4">"user": {"{"} "id": "jnu_123", "role": "STUDENT" {"}"}</p>
                    <p className="text-gray-500 italic">{"}"}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Authentication", icon: ShieldCheck, desc: "OAuth2 and API Key based security protocols." },
                        { title: "Endpoint Reference", icon: Terminal, desc: "Detailed list of all available REST endpoints." },
                        { title: "Data Models", icon: Database, desc: "Comprehensive documentation of our JSON schemas." },
                        { title: "Rate Limits", icon: Zap, desc: "Usage limits and best practices for high-volume requests." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-6 p-6 bg-slate-900/30 rounded-2xl border border-gray-800">
                            <div className="bg-blue-500/10 p-3 rounded-xl h-fit">
                                <item.icon className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(ApiReference);
