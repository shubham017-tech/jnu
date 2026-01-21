import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { PlayCircle, Video, MousePointer, Monitor } from 'lucide-react';

const Tutorials: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
                        Tutorials
                    </h1>
                    <p className="text-xl text-gray-400">
                        Step-by-step video guides and interactive tutorials to master the platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Getting Started",
                            icon: PlayCircle,
                            desc: "First-time login and navigating your dashboard.",
                            color: "text-green-500",
                            bgColor: "bg-green-500/10"
                        },
                        {
                            title: "Joining Live Classes",
                            icon: Video,
                            desc: "How to enter live sessions and interact with teachers.",
                            color: "text-blue-500",
                            bgColor: "bg-blue-500/10"
                        },
                        {
                            title: "Submitting Assignments",
                            icon: MousePointer,
                            desc: "Step-by-step guide on how to upload your work.",
                            color: "text-purple-500",
                            bgColor: "bg-purple-500/10"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all group">
                            <div className={`${item.bgColor} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`h-8 w-8 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 mb-6">{item.desc}</p>
                            <button className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300">
                                Watch Tutorial <Monitor className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(Tutorials);
