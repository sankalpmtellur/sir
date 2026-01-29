import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Target, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  FileText,
  MousePointer2
} from "lucide-react";
import logo from "./assets/logo.png";

const Readme = () => {
  const navigate = useNavigate();
  const primaryColor = "#DD5626"; // Staff Orange
  const secondaryColor = "#C21F3A"; // Admin Red

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* MINIMAL NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-10 py-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="RU" className="h-9 w-auto" />
          <div className="h-5 w-[1px] bg-slate-200" />
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 leading-none">System Doc</span>
            <span className="text-xs font-bold text-slate-900 uppercase">v1.0.4</span>
          </div>
        </div>
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Exit to Portal
        </button>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-10">
          
          {/* HERO SECTION: IMPACTFUL & CLEAN */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-orange-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">The Vision</span>
              </div>
              <h1 className="text-7xl font-black tracking-tighter leading-[0.85] uppercase italic text-slate-900 mb-8">
                Sports In <br />
                <span style={{ color: primaryColor }}>Rishihood</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                A unified intelligence system bridging the gap between athletic spirit and administrative precision.
              </p>
            </motion.div>

            <div className="relative">
              <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative z-10">
                <FileText className="text-orange-500 mb-8" size={40} />
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 italic">Core Objective</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8">
                  To eliminate the friction of manual logistics, allowing our athletes to focus on what truly matters: <span className="text-white">Performance and Growth.</span>
                </p>
                <div className="flex items-center gap-3 py-4 border-t border-white/10">
                  <MousePointer2 size={14} className="text-orange-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Interactive Management Interface</span>
                </div>
              </div>
              {/* Background Decorative Element */}
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-slate-100 rounded-[3rem] -z-0" />
            </div>
          </div>

          {/* THE "WHY" SECTION - MODULAR CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
              <Target className="text-slate-900 mb-10 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-xl font-black uppercase tracking-tight mb-4">Accountability</h4>
              <p className="text-sm text-slate-500 font-medium leading-loose">
                Every piece of equipment is serialized and logged. No more missing gear or untraceable losses.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
              <BarChart3 className="text-slate-900 mb-10 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-xl font-black uppercase tracking-tight mb-4">Analytics</h4>
              <p className="text-sm text-slate-500 font-medium leading-loose">
                Data-driven insights help university admins understand peak hours and facility load effortlessly.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
              <Zap className="text-slate-900 mb-10 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-xl font-black uppercase tracking-tight mb-4">Efficiency</h4>
              <p className="text-sm text-slate-500 font-medium leading-loose">
                Real-time updates across the gym, pool, and sports room mean zero scheduling conflicts.
              </p>
            </div>
          </div>

          {/* THE PILLARS SECTION */}
          <section className="bg-slate-50 rounded-[4rem] p-16 border border-slate-100">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 italic">The Ecosystem</h2>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em] mt-2">Two Interfaces. One Goal.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:scale-[1.02] transition-transform">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl mb-8" style={{ backgroundColor: primaryColor }}>
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Staff Operations</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  The frontend engine for on-ground execution. Coaches can issue equipment and monitor gym capacity in real-time with zero lag.
                </p>
              </div>

              <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:scale-[1.02] transition-transform">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl mb-8" style={{ backgroundColor: secondaryColor }}>
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Admin Oversight</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  The strategic control center. Manage inventory lifecycle, analyze long-term usage trends, and oversee facility maintenance.
                </p>
              </div>
            </div>
          </section>

          {/* FOOTER FOOTPRINT */}
          <footer className="mt-32 pt-10 border-t border-slate-100 flex justify-between items-center">
             <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">SIR // RISHIHOOD 2026</span>
             <div className="flex gap-6">
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest cursor-pointer hover:text-orange-500 transition-colors">Privacy</span>
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest cursor-pointer hover:text-orange-500 transition-colors">Terms</span>
             </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Readme;