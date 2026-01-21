import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { Book, Code, FileText, Info } from 'lucide-react';

const Documentation: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Documentation
                    </h1>
                    <p className="text-xl text-gray-400">
                        Everything you need to know about using the JNU Virtual Classroom Platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all">
                        <div className="bg-blue-500/10 p-4 rounded-xl w-fit mb-6">
                            <Book className="h-8 w-8 text-blue-500" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">User Guide</h2>
                        <p className="text-gray-400 mb-6">
                            Learn how to navigate the dashboard, join live classes, and access course materials.
                        </p>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-2">
                                <Info className="h-4 w-4 text-blue-400" /> Account Setup
                            </li>
                            <li className="flex items-center gap-2">
                                <Info className="h-4 w-4 text-blue-400" /> Joining Classrooms
                            </li>
                            <li className="flex items-center gap-2">
                                <Info className="h-4 w-4 text-blue-400" /> Managing Profile
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all">
                        <div className="bg-purple-500/10 p-4 rounded-xl w-fit mb-6">
                            <Code className="h-8 w-8 text-purple-500" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Academic Resources</h2>
                        <p className="text-gray-400 mb-6">
                            Guidelines for assignments, examinations, and accessing library resources.
                        </p>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-purple-400" /> Submission Guidelines
                            </li>
                            <li className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-purple-400" /> Exam Portal Instructions
                            </li>
                            <li className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-purple-400" /> Library Access FAQ
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(Documentation);
