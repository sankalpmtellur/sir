import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, ShieldCheck, Code2, Layers } from "lucide-react";
import logo from "./assets/logo.png";

const Readme = () => {
  const navigate = useNavigate();
  const staffOrange = "#DD5626";
  const adminRed = "#C21F3A";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-12 py-8 flex justify-between items-center border-b border-slate-50">
        <img src={logo} alt="RU" className="h-7 w-auto" />
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-orange-600 transition-all group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Exit Portal
        </button>
      </nav>

      <main className="pt-44 pb-32 max-w-6xl mx-auto px-10">
        <section className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600 mb-6 block">
              University Athletics Portal
            </span>
            <h1 className="text-[10vw] lg:text-9xl font-black tracking-tighter uppercase italic leading-[0.75] mb-16">
              Sports In <br />
              <span style={{ color: staffOrange }}>Rishihood</span>
            </h1>

            <div className="flex flex-wrap gap-20 py-10 border-y border-slate-100">
              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                  <Code2 size={12} className="text-orange-500" /> Lead Developer
                </p>
                <p className="text-xl font-bold tracking-tight text-slate-900">
                  Sankalp M Tellur
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                  <Code2 size={12} className="text-orange-500" /> Lead Developer
                </p>
                <p className="text-xl font-bold tracking-tight text-slate-900">
                  Rishiwant Kumar
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-40">
          <div className="grid lg:grid-cols-12 gap-px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm">
            <div className="lg:col-span-7 bg-white p-12 md:p-20 flex flex-col justify-between relative">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-12">
                  <span className="w-10 h-[1px] bg-orange-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">
                    Project Mission
                  </span>
                </div>

                <h2 className="text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.9] mb-10">
                  The <br />
                  <span style={{ color: staffOrange }}>Objective</span>
                </h2>

                <p className="text-slate-500 text-2xl leading-relaxed font-medium max-w-xl">
                  Redefining the{" "}
                  <span className="text-slate-900">
                    athletic infrastructure
                  </span>{" "}
                  of Rishihood University through a unified, high-fidelity
                  digital ecosystem.
                </p>
              </div>

              <div className="mt-20 flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Status
                  </span>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-tight flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />{" "}
                    Active Deployment
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-slate-100" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Region
                  </span>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-tight text-orange-600">
                    Main Campus / RU
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FBFBFB] p-12 md:p-20 flex flex-col justify-center">
              <div className="space-y-16">
                {[
                  {
                    title: "Asset Integrity",
                    desc: "Full-lifecycle serialisation and real-time inventory tracking for all sports gear.",
                    tag: "LOGISTICS",
                  },
                  {
                    title: "Flow Control",
                    desc: "Dynamic occupancy intelligence and traffic monitoring for facilities.",
                    tag: "OPERATIONS",
                  },
                  {
                    title: "Strategic Data",
                    desc: "Automated analytics and reporting to drive long-term university budgeting.",
                    tag: "ANALYTICS",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative pl-8 border-l-2 border-orange-500 group cursor-default"
                  >
                    <div className="absolute -left-[6px] top-0 w-2.5 h-2.5 rounded-full bg-orange-500 shadow-sm" />

                    <span className="text-[8px] font-black text-orange-500 uppercase tracking-[0.2em] mb-2 block">
                      {item.tag}
                    </span>
                    <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-bold leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 px-4">
          <div className="flex flex-col items-center text-center mb-24">
            <Layers className="text-orange-600 mb-6" size={32} />
            <h2 className="text-5xl font-black uppercase tracking-tighter italic text-slate-900">
              The Ecosystem
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-500 mt-4 underline decoration-orange-500 decoration-2 underline-offset-8">
              Two Interfaces. One Objective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-orange-100 flex flex-col justify-between shadow-sm">
              <div>
                <div
                  className="w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg"
                  style={{ backgroundColor: staffOrange }}
                >
                  <Zap size={28} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6 italic">
                  Staff Portal
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-lg mb-10">
                  Engineered for on-ground agility. Enables assistants to execute
                  rapid equipment circulation and real-time capacity management.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-200 flex justify-between items-center">
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest italic">
                  Operations Engine
                </span>
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-red-100 flex flex-col justify-between shadow-sm">
              <div>
                <div
                  className="w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg"
                  style={{ backgroundColor: adminRed }}
                >
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6 italic">
                  Admin Console
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-lg mb-10">
                  The central command unit. Aggregates usage data, manages
                  global inventory, and oversees facility health analytics.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-200 flex justify-between items-center">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-widest italic">
                  Intelligence Hub
                </span>
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Readme;