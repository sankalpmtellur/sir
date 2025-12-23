import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, ChevronRight } from 'lucide-react';

const Launch = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-6 font-sans">
            <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-indigo-500/10 rounded-full blur-[140px]" />
            <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-orange-500/10 rounded-full blur-[140px]" />

            <div className="relative z-10 max-w-6xl w-full">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-top-6 duration-1000">
                    <div className="flex justify-center mb-8">
                        <img
                            src="/src/assets/logo.webp"
                            alt="Rishihood University"
                            className="h-24 md:h-28 object-contain drop-shadow-md"
                        />
                    </div>

                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                        SIR
                    </h1>

                    <p className="mt-3 text-lg md:text-xl text-slate-600 font-medium tracking-wide">
                        <span className="font-semibold">S</span>ports <span className="font-semibold">I</span>n{' '}
                        <span className="font-semibold">R</span>ishihood
                    </p>

                    <div className="mt-6 flex justify-center">
                        <div className="h-1.5 w-28 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div
                        onClick={() => navigate('/user/login')}
                        className="group cursor-pointer relative rounded-[2.5rem] p-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-400 shadow-xl hover:shadow-indigo-300/40 transition-all duration-500"
                    >
                        <div className="rounded-[2.3rem] bg-white/80 backdrop-blur-xl p-10 h-full flex flex-col hover:bg-white transition-all duration-500">

                            <div className="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <ShieldCheck size={32} className="text-white" />
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Staff Terminal
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                Secure access for sports assistants to manage equipment distribution
                                and monitor facility availability in real time.
                            </p>

                            <div className="mt-auto flex items-center text-indigo-600 font-semibold text-lg group-hover:gap-3 transition-all">
                                Enter Terminal <ChevronRight size={20} />
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => navigate('/admin/login')}
                        className="group cursor-pointer relative rounded-[2.5rem] p-[1px] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-700 shadow-xl hover:shadow-slate-400/40 transition-all duration-500"
                    >
                        <div className="rounded-[2.3rem] bg-white/85 backdrop-blur-xl p-10 h-full flex flex-col hover:bg-white transition-all duration-500">

                            <div className="mb-8 w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <LayoutDashboard size={32} className="text-white" />
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Admin Console
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                Advanced dashboard for analytics, inventory tracking, and
                                decision-making insights across all sports facilities.
                            </p>

                            <div className="mt-auto flex items-center text-slate-800 font-semibold text-lg group-hover:gap-3 transition-all">
                                View Dashboard <ChevronRight size={20} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Launch;