import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { HelpCircle, MessageSquare, LifeBuoy, Search } from 'lucide-react';

const SupportCenter: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
                        Support Center
                    </h1>
                    <p className="text-xl text-gray-400">
                        We're here to help. Find answers or get in touch with our support team.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto mb-16">
                    <div className="relative">
                        <Search className="absolute left-4 top-3.5 h-6 w-6 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search for help..."
                            className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-gray-800 flex items-start gap-6">
                        <div className="bg-orange-500/10 p-4 rounded-xl">
                            <MessageSquare className="h-8 w-8 text-orange-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Live Chat</h2>
                            <p className="text-gray-400 mb-4">Talk to our support team in real-time for immediate assistance.</p>
                            <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold transition-colors">Start Chat</button>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-gray-800 flex items-start gap-6">
                        <div className="bg-red-500/10 p-4 rounded-xl">
                            <LifeBuoy className="h-8 w-8 text-red-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Submit a Ticket</h2>
                            <p className="text-gray-400 mb-4">Report an issue or request a feature through our ticketing system.</p>
                            <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">Open Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(SupportCenter);
