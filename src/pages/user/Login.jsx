import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, User, ArrowLeft, Loader2, Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/user/dashboard');
        }, 1000);
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fdfdfd] flex flex-col items-center justify-center px-6 font-sans">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl flex justify-between p-8 items-center z-10 pointer-events-none">
                <img
                    src="/src/assets/logo.webp"
                    alt="Rishihood University"
                    className="h-16 md:h-20 object-contain drop-shadow-sm pointer-events-auto"
                />
            </div>

            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px]" />
            <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px]" />

            <div className="relative z-30 w-full max-w-[440px] mt-20">
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="group mb-6 flex items-center text-slate-400 hover:text-indigo-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wider cursor-pointer border-none bg-transparent"
                >
                    <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portal Selection
                </button>

                <div className="relative rounded-[3rem] p-[1.5px] bg-gradient-to-br from-indigo-500 via-purple-500 to-orange-400 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                    <div className="rounded-[2.9rem] bg-white/95 backdrop-blur-2xl p-10 md:p-12 flex flex-col">

                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-slate-900 shadow-2xl mb-6 transition-transform duration-500 hover:rotate-6">
                                <ShieldCheck size={38} className="text-white" />
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Staff Login</h1>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <span className="h-[2px] w-4 bg-indigo-500 rounded-full"></span>
                                <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.15em]">Terminal Access</p>
                                <span className="h-[2px] w-4 bg-orange-500 rounded-full"></span>
                            </div>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Staff Credentials</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                                        <User size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Username or ID"
                                        className="w-full pl-12 pr-5 py-4 bg-slate-50/50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400 text-base"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Secure Pin</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-12 py-4 bg-slate-50/50 border border-slate-200 rounded-[1.25rem] focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400 text-base"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-indigo-500 transition-colors cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-4 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-[1.25rem] font-bold text-lg shadow-xl shadow-slate-200 active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative z-10">
                                    {loading ? (
                                        <Loader2 className="animate-spin" size={24} />
                                    ) : (
                                        "Authenticate Terminal"
                                    )}
                                </span>
                            </button>
                        </form>

                        <div className="mt-10 pt-8 border-t border-slate-100 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                            Authorised Personnel Only
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;