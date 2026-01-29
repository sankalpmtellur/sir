import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  Search, 
  Plus, 
  ChevronRight,
  ClipboardList
} from "lucide-react";

const SportsRoom = () => {
  const adminRed = "#C21F3A";

  const sportsInventory = [
    { name: "Basketball", total: 24, available: 18, inUse: 4, damaged: 2, trend: "High" },
    { name: "Badminton", total: 40, available: 32, inUse: 5, damaged: 3, trend: "Very High" },
    { name: "Football", total: 15, available: 10, inUse: 3, damaged: 2, trend: "Medium" },
    { name: "Table Tennis", total: 50, available: 42, inUse: 8, damaged: 0, trend: "Steady" },
    { name: "Cricket Kits", total: 10, available: 6, inUse: 2, damaged: 2, trend: "High" },
  ];

  return (
    <div className="h-screen w-full flex flex-col bg-[#F8FAFC] overflow-hidden font-sans">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-10 space-y-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              {[
                { label: "Total Assets", val: "139", icon: <Package />, color: "text-blue-600", bg: "bg-blue-50" },
                { label: "Daily Usage", val: "22", icon: <TrendingUp />, color: "text-green-600", bg: "bg-green-50" },
                { label: "Damaged/Lost", val: "09", icon: <AlertTriangle />, color: "text-red-600", bg: "bg-red-50" },
                { label: "Active Rentals", val: "14", icon: <ClipboardList />, color: "text-amber-600", bg: "bg-amber-50" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                    {stat.icon}
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">{stat.val}</h3>
                </div>
              ))}
            </div>

            {/* INVENTORY TABLE */}
            <div className="bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden mb-10">
              <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                  <Trophy size={20} style={{ color: adminRed }} /> Sport-wise Breakdown
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50/50">
                      {["Sport", "Total Qty", "Available", "In Use", "Damaged", "Usage Trend"].map((head) => (
                        <th key={head} className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          {head}
                        </th>
                      ))}
                      <th className="px-8 py-5"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sportsInventory.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-8 py-6">
                          <span className="font-bold text-slate-900">{item.name}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-black text-slate-600">{item.total}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-sm font-bold text-green-600">{item.available}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-sm font-bold text-blue-600">{item.inUse}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`text-sm font-bold ${item.damaged > 0 ? 'text-red-500' : 'text-slate-300'}`}>
                            {item.damaged}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tight
                            ${item.trend === 'Very High' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                            {item.trend}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                            <ChevronRight size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default SportsRoom;