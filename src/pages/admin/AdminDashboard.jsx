import React, { useState } from 'react';
import {
    LayoutDashboard,
    Package,
    Users,
    BarChart3,
    Settings,
    Search,
    Bell,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical,
    CheckCircle2,
    AlertCircle,
    TrendingUp
} from 'lucide-react';

const AdminDashboard = () => {
    const [inventory] = useState([
        { id: 1, name: 'Basketball', category: 'Ball Sports', stock: 8, total: 20, status: 'Healthy' },
        { id: 2, name: 'Football', category: 'Ball Sports', stock: 3, total: 15, status: 'Low Stock' },
        { id: 3, name: 'Cricket Kit', category: 'Field Sports', stock: 12, total: 12, status: 'Healthy' },
        { id: 4, name: 'Badminton Racket', category: 'Racket Sports', stock: 0, total: 10, status: 'Out of Stock' },
    ]);

    return (
        <div className="min-h-screen bg-[#f8fafc] flex font-sans">

            {/* SIDEBAR */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen z-20">
                <div className="p-6">
                    {/* BRAND SECTION */}
                    <div className="flex items-center gap-3 mb-10 group cursor-pointer">
                        <div className="relative">
                            {/* Subtle glow behind logo on hover */}
                            <div className="absolute inset-0 bg-indigo-500/15 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src="/src/assets/icon.webp"
                                alt="SportsOS Logo"
                                className="relative w-9 h-9 object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                                Sports
                            </h1>
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.25em] mt-1.5 leading-none">
                                Admin Console
                            </p>
                        </div>
                    </div>

                    {/* NAVIGATION */}
                    <nav className="space-y-1.5">
                        <NavItem icon={<LayoutDashboard size={18} strokeWidth={2.5} />} label="Overview" active />
                        <NavItem icon={<Package size={18} strokeWidth={2.5} />} label="Inventory" />
                        <NavItem icon={<Users size={18} strokeWidth={2.5} />} label="Student Hub" />
                        <NavItem icon={<BarChart3 size={18} strokeWidth={2.5} />} label="Analytics" />
                        <NavItem icon={<Settings size={18} strokeWidth={2.5} />} label="Settings" />
                    </nav>
                </div>

                {/* ADMIN PROFILE SECTION */}
                <div className="mt-auto p-5 border-t border-slate-100 bg-slate-50/30">
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-[20px]">
                            R
                        </div>
                        <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Admin Node</p>
                            <p className="text-sm font-black text-slate-900 mt-1 leading-none">Rishiwant</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">

                {/* TOP BAR */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
                    <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 w-96">
                        <Search size={16} className="text-slate-400" />
                        <input type="text" placeholder="Search inventory, students, or logs..." className="bg-transparent border-none outline-none text-xs font-medium w-full" />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
                    </div>
                </header>

                {/* SCROLLABLE DASHBOARD CONTENT */}
                <div className="p-8 overflow-y-auto">

                    {/* WELCOME SECTION */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">System Overview</h2>
                        <p className="text-sm font-medium text-slate-500">Real-time telemetry from all sports facilities.</p>
                    </div>

                    {/* KEY METRICS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard title="Total Utilization" value="84%" trend="+5.2%" up={true} color="indigo" />
                        <StatCard title="Active Issues" value="142" trend="+12" up={true} color="orange" />
                        <StatCard title="Available Assets" value="1,024" trend="-2%" up={false} color="emerald" />
                        <StatCard title="Pending Returns" value="08" trend="Critical" up={false} color="red" />
                    </div>

                    {/* MAIN DATA SECTION */}
                    <div className="grid grid-cols-12 gap-8">

                        {/* INVENTORY TABLE CARD */}
                        <div className="col-span-12 lg:col-span-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <h3 className="font-black text-slate-900 tracking-tight">Inventory Monitor</h3>
                                <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">View Full Sheet</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50/50">
                                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Equipment</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Stock Level</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {inventory.map((item) => (
                                            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="px-6 py-4 font-bold text-slate-900 text-sm">{item.name}</td>
                                                <td className="px-6 py-4 text-xs font-bold text-slate-500">{item.category}</td>
                                                <td className="px-6 py-4">
                                                    <div className="w-full max-w-[100px] h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full ${item.stock < 5 ? 'bg-orange-500' : 'bg-indigo-500'}`}
                                                            style={{ width: `${(item.stock / item.total) * 100}%` }}
                                                        />
                                                    </div>
                                                    <p className="text-[10px] font-black text-slate-400 mt-1">{item.stock}/{item.total} Units</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-[9px] px-2 py-1 rounded-md font-black tracking-widest uppercase ${item.status === 'Healthy' ? 'bg-emerald-50 text-emerald-600' :
                                                            item.status === 'Low Stock' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'
                                                        }`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* SYSTEM HEALTH SIDEBAR */}
                        <div className="col-span-12 lg:col-span-4 space-y-6">
                            <div className="bg-indigo-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                                <TrendingUp className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 rotate-12" />
                                <h3 className="text-xl font-black mb-2">Facility Load</h3>
                                <p className="text-indigo-200 text-xs font-medium leading-relaxed mb-6">Peak usage detected at Basketball Court B. Consider deploying more assets.</p>
                                <button className="bg-white text-indigo-900 px-6 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-transform active:scale-95">Analyze Trends</button>
                            </div>

                            <div className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm">
                                <h3 className="font-black text-slate-900 mb-4">Node Connectivity</h3>
                                <div className="space-y-4">
                                    <NodeItem label="Main Entrance RFID" status="Online" />
                                    <NodeItem label="Field Storage Unit" status="Syncing" />
                                    <NodeItem label="Admin Terminal" status="Online" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

// HELPER COMPONENTS
const NavItem = ({ icon, label, active = false }) => (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${active ? 'bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100' : 'text-slate-500 hover:bg-slate-50'
        }`}>
        {icon}
        {label}
    </button>
);

const StatCard = ({ title, value, trend, up, color }) => (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group hover:border-indigo-200 transition-all">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1">{title}</p>
        <h4 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h4>
        <div className={`flex items-center gap-1 mt-2 ${up ? 'text-emerald-500' : 'text-red-500'}`}>
            {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            <span className="text-xs font-black uppercase tracking-widest">{trend}</span>
        </div>
    </div>
);

const NodeItem = ({ label, status }) => (
    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
        <span className="text-xs font-bold text-slate-700">{label}</span>
        <div className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${status === 'Online' ? 'bg-emerald-500' : 'bg-orange-500'} animate-pulse`} />
            <span className="text-[9px] font-black text-slate-500 uppercase">{status}</span>
        </div>
    </div>
);

export default AdminDashboard;