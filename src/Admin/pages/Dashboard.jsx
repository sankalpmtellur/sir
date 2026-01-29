import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Users, Package, Activity, Calendar } from "lucide-react";

const dataSets = {
  weekly: [
    { name: "Mon", SportsRoom: 45, Gym: 60, Pool: 20 },
    { name: "Tue", SportsRoom: 52, Gym: 55, Pool: 25 },
    { name: "Wed", SportsRoom: 38, Gym: 70, Pool: 15 },
    { name: "Thu", SportsRoom: 65, Gym: 65, Pool: 30 },
    { name: "Fri", SportsRoom: 48, Gym: 80, Pool: 35 },
    { name: "Sat", SportsRoom: 70, Gym: 40, Pool: 50 },
    { name: "Sun", SportsRoom: 55, Gym: 30, Pool: 45 },
  ],
  monthly: [
    { name: "Week 1", SportsRoom: 240, Gym: 300, Pool: 120 },
    { name: "Week 2", SportsRoom: 210, Gym: 350, Pool: 150 },
    { name: "Week 3", SportsRoom: 290, Gym: 280, Pool: 180 },
    { name: "Week 4", SportsRoom: 320, Gym: 400, Pool: 200 },
  ],
};

const AdminDashboard = () => {
  const [timeframe, setTimeframe] = useState("weekly");
  const adminRed = "#C21F3A";

  return (
    <div className="h-screen w-full flex flex-col bg-[#F8FAFC] overflow-hidden font-sans">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                {
                  label: "Total Students",
                  value: "1,240",
                  icon: <Users size={22} />,
                  color: "bg-blue-600",
                },
                {
                  label: "Total Equipments",
                  value: "452",
                  icon: <Package size={22} />,
                  color: "bg-orange-600",
                },
                {
                  label: "Average Facility Load",
                  value: "76%",
                  icon: <Activity size={22} />,
                  color: "bg-red-600",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all flex items-center justify-between group"
                >
                  <div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">
                      {card.label}
                    </p>
                    <h2 className="text-4xl font-black text-slate-900 group-hover:scale-105 transition-transform origin-left">
                      {card.value}
                    </h2>
                  </div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${card.color} text-white flex items-center justify-center shadow-lg`}
                  >
                    {card.icon}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                    Usage Analytics
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Traffic across sports departments
                  </p>
                </div>

                <div className="flex p-1.5 bg-slate-100 rounded-2xl gap-1">
                  {["weekly", "monthly"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeframe(t)}
                      className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                        timeframe === t
                          ? "bg-white text-slate-900 shadow-md"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                  <button className="px-4 py-2.5 text-slate-300 cursor-not-allowed">
                    <Calendar size={16} />
                  </button>
                </div>
              </div>

              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dataSets[timeframe]}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#F1F5F9"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94A3B8", fontSize: 11, fontWeight: 800 }}
                      dy={15}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94A3B8", fontSize: 11 }}
                    />
                    <Tooltip
                      cursor={{ fill: "#F8FAFC" }}
                      contentStyle={{
                        borderRadius: "24px",
                        border: "none",
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                        padding: "15px",
                      }}
                    />
                    <Legend
                      verticalAlign="top"
                      align="right"
                      iconType="circle"
                      wrapperStyle={{
                        paddingBottom: "40px",
                        fontSize: "11px",
                        fontWeight: "900",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    />
                    <Bar
                      dataKey="SportsRoom"
                      name="Sports Room"
                      fill={adminRed}
                      radius={[8, 8, 0, 0]}
                      barSize={14}
                    />
                    <Bar
                      dataKey="Gym"
                      name="Gym Access"
                      fill="#1E293B"
                      radius={[8, 8, 0, 0]}
                      barSize={14}
                    />
                    <Bar
                      dataKey="Pool"
                      name="Pool Access"
                      fill="#CBD5E1"
                      radius={[8, 8, 0, 0]}
                      barSize={14}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="h-20" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
