import React from 'react';
import ServiceLayout from '../../layout/ServiceLayout';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const NewsBlog: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                        News & Blog
                    </h1>
                    <p className="text-xl text-gray-400">
                        Stay updated with the latest happenings at JNU Jaipur.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "The Future of Hybrid Learning in 2024",
                            date: "Jan 15, 2024",
                            author: "Dr. Sharma",
                            tag: "Education",
                            image: "/blog/hybrid-learning.png",
                            desc: "How Jaipur National University is integrating advanced AI tools into the virtual classroom experience."
                        },
                        {
                            title: "New Course Launch: Data Science & AI",
                            date: "Jan 10, 2024",
                            author: "Admissions Team",
                            tag: "Announcements",
                            image: "/blog/data-science.png",
                            desc: "Explore our latest postgraduate program designed for the modern tech landscape."
                        }
                    ].map((post, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="aspect-video w-full bg-slate-800 rounded-2xl mb-6 overflow-hidden border border-gray-800 relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-400/10 px-3 py-1 rounded-full mb-2">
                                        <Tag className="h-3 w-3" /> {post.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                                <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">{post.title}</h2>
                            <p className="text-gray-400 mb-6 line-clamp-2">{post.desc}</p>
                            <button className="flex items-center gap-2 text-pink-500 font-bold hover:gap-4 transition-all">
                                Read More <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceLayout()(NewsBlog);
