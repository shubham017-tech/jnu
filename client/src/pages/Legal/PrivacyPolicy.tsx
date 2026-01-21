import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { Shield, Eye, Lock, FileCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-400">
                        Your privacy is our priority. Learn how we protect and manage your data.
                    </p>
                </div>

                <div className="space-y-12">
                    {[
                        {
                            title: "Data Collection",
                            icon: Eye,
                            content: "We collect information essential for providing a personalized learning experience, including registration details and platform usage data."
                        },
                        {
                            title: "Security Measures",
                            icon: Lock,
                            content: "We use industry-standard encryption and security protocols to ensure your personal and academic information remains confidential."
                        },
                        {
                            title: "Data Usage",
                            icon: FileCheck,
                            content: "Your data is used solely for educational purposes, platform optimization, and communication regarding your academic progress."
                        }
                    ].map((section, idx) => (
                        <div key={idx} className="flex gap-8 group">
                            <div className="bg-blue-500/10 p-4 rounded-2xl h-fit border border-blue-500/20 group-hover:scale-110 transition-transform">
                                <section.icon className="h-8 w-8 text-blue-500" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {section.content}
                                </p>
                                <div className="mt-6 p-4 bg-slate-900 rounded-xl text-sm italic text-gray-500 border-l-4 border-blue-500">
                                    Last updated: January 20, 2024
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(PrivacyPolicy);
