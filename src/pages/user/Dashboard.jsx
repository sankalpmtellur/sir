import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Package,
    LogOut,
    CheckCircle2,
    XCircle,
    Plus,
    Minus,
    History,
    Activity,
    Clock,
    UserCheck,
    ChevronRight
} from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();

    const [scannedStudent, setScannedStudent] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [count, setCount] = useState(1);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [recentActivity, setRecentActivity] = useState([
        { id: 101, name: 'Rahul Kumar', item: 'Basketball', qty: 1, time: '10:45 AM', type: 'issue' },
        { id: 102, name: 'Ananya Singh', item: 'Football', qty: 1, time: '10:30 AM', type: 'return' },
    ]);

    const equipmentList = [
        { id: 1, name: 'Volleyball', icon: '🏐', available: 12 },
        { id: 2, name: 'Basketball', icon: '🏀', available: 8 },
        { id: 3, name: 'Football', icon: '⚽', available: 5 },
        { id: 4, name: 'Cricket Bat', icon: '🏏', available: 10 },
        { id: 5, name: 'Badminton', icon: '🏸', available: 15 },
    ];

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const simulateScan = () => {
        setScannedStudent({
            name: "Aryan Sharma",
            id: "2401010416",
            batch: "B.Tech CSE 2026",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan"
        });
    };

    const handleIssue = () => {
        if (!selectedItem || count > selectedItem.available) return;

        const newLog = {
            id: Date.now(),
            name: scannedStudent.name,
            item: selectedItem.name,
            qty: count,
            time: currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'issue'
        };

        setRecentActivity(prev => [newLog, ...prev]);
        setScannedStudent(null);
        setSelectedItem(null);
        setCount(1);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans relative overflow-hidden">

            {/* Background Branding Blobs */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px]" />
            {/* NAVBAR */}
            <nav className="relative z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 px-6 md:px-10 py-3 flex justify-between items-center sticky top-0 shadow-sm">

                {/* Left Side: Brand Identity */}
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <img src="/src/assets/logo.webp" alt="Rishihood Logo" className="relative h-10 w-auto transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    <div className="h-6 w-[1px] bg-slate-200 hidden md:block" />

                    <div className="hidden md:block">
                        <h1 className="text-lg font-black tracking-tight text-slate-900 leading-none">
                            Rishihood Sports
                        </h1>
                        <div className="flex items-center gap-1.5 mt-1">
                            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                                Inventory & Facility Access
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: System Info & Control */}
                <div className="flex items-center gap-6 md:gap-8">

                    {/* Live Clock Module - Compact Version */}
                    <div className="hidden sm:flex items-center gap-3 bg-slate-50 px-4 py-1.5 rounded-xl border border-slate-100">
                        <div className="text-right flex flex-col justify-center">
                            <p className="font-bold text-base tabular-nums tracking-tight leading-none text-slate-900">
                                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
                            </p>
                            <p className="text-[8px] font-black text-indigo-500 uppercase tracking-widest mt-0.5">
                                {currentTime.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                            </p>
                        </div>
                        <div className="text-indigo-600 opacity-60">
                            <Clock size={16} strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Compact Logout / Session End */}
                    <button
                        onClick={() => navigate('/')}
                        className="group relative flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl font-bold transition-all duration-300 hover:bg-red-600 hover:shadow-lg active:scale-95 border-b-2 border-slate-950 hover:border-red-700"
                    >
                        <LogOut size={14} strokeWidth={3} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span className="text-[10px] uppercase tracking-wider">Logout</span>
                    </button>
                </div>
            </nav>

            <main className="relative z-10 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] mx-auto auto-rows-fr">
    
    {/* LEFT SECTION: MAIN INTERACTION */}
    <div className="lg:col-span-8 h-full">
        {!scannedStudent ? (
            /* IDLE STATE - Height matched to sidebar */
            <div className="bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 h-full min-h-[600px] flex flex-col items-center justify-center text-center p-12 transition-all hover:border-indigo-300 hover:bg-indigo-50/30 group">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Activity size={40} className="text-slate-300 group-hover:text-indigo-400 animate-pulse" />
                </div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">Ready for Scan</h2>
                <p className="text-slate-500 max-w-xs text-sm font-medium">
                    Waiting for student ID card signal from the hardware node...
                </p>
                <button
                    onClick={simulateScan}
                    className="mt-8 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-colors"
                >
                    Force Simulate Scan
                </button>
            </div>
        ) : (
            /* ACTIVE TRANSACTION STATE */
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden h-full flex flex-col animate-in fade-in zoom-in-95 duration-500">

                {/* STUDENT HEADER - More compact padding */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-6 md:p-8 flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <img src={scannedStudent.photo} className="w-20 h-20 rounded-2xl bg-white p-1 border-2 border-white/20 shadow-lg" />
                        <div className="text-white">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-white/20 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded">Active</span>
                                <span className="text-indigo-100 text-xs font-bold opacity-80">{scannedStudent.id}</span>
                            </div>
                            <h2 className="text-2xl font-black tracking-tight">{scannedStudent.name}</h2>
                            <p className="text-indigo-100 text-sm opacity-90 italic">{scannedStudent.batch}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => { setScannedStudent(null); setSelectedItem(null); }}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all hover:rotate-90"
                    >
                        <XCircle size={22} />
                    </button>
                </div>

                {/* EQUIPMENT SELECTION - Scrollable if content is long */}
                <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-black flex items-center gap-2 text-slate-900 tracking-tight">
                            <Package className="text-indigo-600" size={22} /> Select Gear
                        </h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Now</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {equipmentList.map(item => {
                            const isSelected = selectedItem?.id === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => { setSelectedItem(item); setCount(1); }}
                                    className={`group relative p-5 rounded-[2rem] border-2 transition-all duration-300 flex flex-col items-center justify-center
                                    ${isSelected ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-50 bg-slate-50/50 hover:border-indigo-200 hover:bg-white'}`}
                                >
                                    {isSelected && (
                                        <div className="absolute top-2 right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-md animate-in zoom-in">
                                            <CheckCircle2 size={14} />
                                        </div>
                                    )}
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <p className={`font-bold text-sm ${isSelected ? 'text-indigo-600' : 'text-slate-800'}`}>{item.name}</p>
                                    <p className="text-[9px] font-black text-slate-400 mt-1">STOCK: {item.available}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* QUANTITY & CONFIRMATION - Properly aligned & sized */}
                <div className={`p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-500 ${selectedItem ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200">
                        <button onClick={() => setCount(c => Math.max(1, c - 1))} className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all"><Minus size={18} /></button>
                        <div className="px-4 text-center">
                            <span className="text-xl font-black text-slate-900 tabular-nums leading-none block">{count.toString().padStart(2, '0')}</span>
                            <span className="text-[8px] font-black text-slate-400 uppercase">Qty</span>
                        </div>
                        <button onClick={() => setCount(c => c + 1)} disabled={count >= (selectedItem?.available || 0)} className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-all"><Plus size={18} /></button>
                    </div>

                    <button
                        onClick={handleIssue}
                        className="group relative px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black text-sm flex items-center gap-3 transition-all active:scale-95 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CheckCircle2 className="relative z-10" size={18} />
                        <span className="relative z-10 uppercase tracking-widest">Issue {selectedItem?.name}</span>
                    </button>
                </div>
            </div>
        )}
    </div>

    {/* RIGHT SECTION: SYSTEM MONITOR */}
    <div className="lg:col-span-4 flex flex-col gap-6 h-full min-h-[600px]">
        {/* Vitals - Fixed height */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Activity size={14} className="text-orange-500" /> System Vitals
            </h3>
            <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                    <p className="text-xl font-black text-indigo-600">38</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-tight">Gear Issued</p>
                </div>
                <div className="p-3 bg-orange-50/50 rounded-2xl border border-orange-100">
                    <p className="text-xl font-black text-orange-600">12</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-tight">Active Ent.</p>
                </div>
            </div>
        </div>

        {/* Logs - Flexes to fill remaining height */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 flex flex-col flex-1 min-h-0">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-black flex items-center gap-2 text-slate-900 tracking-tight">
                    <History className="text-indigo-500" size={18} /> Activity Logs
                </h3>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                {recentActivity.map(log => (
                    <div key={log.id} className="group bg-slate-50 border border-slate-100 rounded-xl p-3 flex justify-between items-center transition-all hover:bg-white hover:shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${log.type === 'issue' ? 'bg-indigo-600' : 'bg-emerald-600'}`}>
                                {log.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-xs leading-none mb-1">{log.name}</p>
                                <p className="text-[10px] font-bold text-slate-500">{log.qty} × {log.item}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[8px] font-black text-slate-400 mb-1">{log.time}</p>
                            <span className={`text-[7px] px-1.5 py-0.5 rounded font-black tracking-widest ${log.type === 'issue' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                {log.type.toUpperCase()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-4 pt-4 border-t border-slate-100 text-[9px] font-black text-indigo-600 uppercase tracking-[0.2em] hover:text-indigo-800 transition-colors flex items-center justify-center gap-2">
                Digital Register <ChevronRight size={12} />
            </button>
                </div>
                </div>
            </main>
        </div>
    );
    
};

export default Dashboard;