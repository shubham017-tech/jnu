import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-12">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
                            Join Our Team
                        </h1>
                        <p className="text-xl text-gray-400">
                            Help us reshape the future of education. We're looking for passionate individuals to join our mission.
                        </p>
                    </div>
                    <div className="bg-orange-500/10 p-12 rounded-full hidden md:block border border-orange-500/20">
                        <Briefcase className="h-24 w-24 text-orange-500" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
                <div className="space-y-4">
                    {[
                        { title: "Senior React Developer", dept: "Engineering", type: "Full-time", location: "Remote / Jaipur" },
                        { title: "Content Strategist (Education)", dept: "Marketing", type: "Full-time", location: "Jaipur" },
                        { title: "UX Designer", dept: "Product", type: "Contract", location: "Remote" }
                    ].map((job, idx) => (
                        <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                            <div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">{job.title}</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.dept}</span>
                                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
                                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-orange-600 rounded-xl font-semibold transition-all group-hover:px-8">
                                Apply Now <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(Careers);
