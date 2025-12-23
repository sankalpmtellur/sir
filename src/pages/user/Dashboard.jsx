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

            <main className="relative z-10 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1600px] mx-auto">

                {/* LEFT SECTION: MAIN INTERACTION */}
                <div className="lg:col-span-8 space-y-8">

                    {!scannedStudent ? (
                        /* IDLE STATE */
                        <div className="bg-white rounded-[3rem] border-2 border-dashed border-slate-200 h-[600px] flex flex-col items-center justify-center text-center p-12 transition-all hover:border-indigo-300 hover:bg-indigo-50/30 group">
                            <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Activity size={48} className="text-slate-300 group-hover:text-indigo-400 animate-pulse" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-3">Card Reader Ready</h2>
                            <p className="text-slate-500 max-w-sm text-lg font-medium">
                                Waiting for a student to scan their ID card on the hardware module...
                            </p>
                            <button
                                onClick={simulateScan}
                                className="mt-10 text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-colors cursor-pointer"
                            >
                                Simulate Scan
                            </button>
                        </div>
                    ) : (
                        /* ACTIVE TRANSACTION STATE */
                        <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-500">

                            {/* STUDENT HEADER */}
                            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-8 md:p-10 flex justify-between items-start">
                                <div className="flex items-center gap-6 md:gap-8">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
                                        <img src={scannedStudent.photo} className="relative w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-white p-1 border-4 border-white/20 shadow-xl" />
                                    </div>
                                    <div className="text-white">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="bg-white/20 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">Validated</span>
                                            <span className="text-indigo-100 text-sm font-bold opacity-80">{scannedStudent.id}</span>
                                        </div>
                                        <h2 className="text-4xl font-black tracking-tight mb-1">
                                            {scannedStudent.name}
                                        </h2>
                                        <p className="text-indigo-100 font-medium text-lg opacity-90 italic">
                                            {scannedStudent.batch}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setScannedStudent(null); setSelectedItem(null); }}
                                    className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl text-white transition-all hover:rotate-90"
                                >
                                    <XCircle size={28} />
                                </button>
                            </div>

                            {/* EQUIPMENT SELECTION */}
                            <div className="p-8 md:p-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-black flex items-center gap-3 text-slate-900 tracking-tight">
                                            <Package className="text-indigo-600" size={28} /> Select Equipment
                                        </h3>
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-10">Choose item to issue</p>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Inventory Live</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
                                    {equipmentList.map(item => {
                                        const isSelected = selectedItem?.id === item.id;
                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => {
                                                    setSelectedItem(item);
                                                    setCount(1);
                                                }}
                                                className={`group relative p-8 rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col items-center justify-center
                        ${isSelected
                                                        ? 'border-indigo-600 bg-white shadow-[0_20px_40px_-12px_rgba(79,70,229,0.2)] scale-[1.02] z-10'
                                                        : 'border-slate-100 bg-slate-50/50 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-slate-100'}`}
                                            >
                                                {/* Selected Badge */}
                                                {isSelected && (
                                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg animate-in zoom-in duration-300">
                                                        <CheckCircle2 size={18} />
                                                    </div>
                                                )}

                                                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
                                                    {item.icon}
                                                </div>

                                                <p className={`font-black text-lg transition-colors ${isSelected ? 'text-indigo-600' : 'text-slate-800'}`}>
                                                    {item.name}
                                                </p>

                                                <div className={`mt-3 px-3 py-1 rounded-full border transition-all ${isSelected ? 'bg-indigo-50 border-indigo-100' : 'bg-white border-slate-200'
                                                    }`}>
                                                    <p className={`text-[10px] font-black uppercase tracking-tighter ${item.available > 0 ? 'text-slate-600' : 'text-red-500'
                                                        }`}>
                                                        Stock: <span className={item.available > 0 ? 'text-slate-900' : 'text-red-600'}>{item.available}</span>
                                                    </p>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* QUANTITY & CONFIRMATION AREA */}
                                <div className={`mt-10 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-end justify-between gap-8 transition-all duration-700 ${selectedItem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>

                                    <div className="w-full md:w-auto space-y-4">
                                        <div className="flex items-center gap-2 ml-2">
                                            <div className="w-1 h-4 bg-indigo-600 rounded-full" />
                                            <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Specify Quantity</p>
                                        </div>

                                        <div className="flex items-center gap-6 bg-white p-3 rounded-[2rem] border-2 border-slate-100 shadow-sm">
                                            <button
                                                onClick={() => setCount(c => Math.max(1, c - 1))}
                                                className="w-14 h-14 bg-slate-50 rounded-[1.25rem] flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all active:scale-90 border border-transparent hover:border-indigo-100"
                                            >
                                                <Minus size={24} />
                                            </button>

                                            <div className="flex flex-col items-center min-w-[60px]">
                                                <span className="text-4xl font-black text-slate-900 tabular-nums">
                                                    {count.toString().padStart(2, '0')}
                                                </span>
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Units</p>
                                            </div>

                                            <button
                                                disabled={count >= (selectedItem?.available || 0)}
                                                onClick={() => setCount(c => c + 1)}
                                                className="w-14 h-14 bg-slate-50 rounded-[1.25rem] flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all active:scale-90 border border-transparent hover:border-indigo-100 disabled:opacity-10"
                                            >
                                                <Plus size={24} />
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleIssue}
                                        disabled={!selectedItem || selectedItem.available === 0}
                                        className="group relative w-full md:w-auto px-16 py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-[2rem] font-black text-2xl flex items-center justify-center gap-5 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] transition-all overflow-hidden active:scale-[0.98] disabled:opacity-40"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <CheckCircle2 className="relative z-10" size={28} />
                                        <span className="relative z-10 tracking-tight">Issue {selectedItem?.name}</span>
                                        <ChevronRight className="relative z-10 opacity-50 group-hover:translate-x-1 transition-transform" size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT SECTION: ACTIVITY SIDEBAR */}
                <div className="lg:col-span-4 space-y-6">

                    {/* SYSTEM STATS CARD */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            System Vitals
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-2xl font-black text-indigo-600">38</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Items Out</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-2xl font-black text-orange-500">12</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Active Ent.</p>
                            </div>
                        </div>
                    </div>

                    {/* RECENT ACTIVITY LIST */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 flex flex-col h-[520px]">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-black flex items-center gap-3 text-slate-900">
                                <History className="text-indigo-500" /> Logs
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Live Feed</span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                            {recentActivity.map(log => (
                                <div
                                    key={log.id}
                                    className="group bg-slate-50 border border-slate-100 rounded-2xl p-4 flex justify-between items-center transition-all hover:border-indigo-200 hover:shadow-md hover:bg-white"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold shadow-sm ${log.type === 'issue'
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-emerald-600 text-white'
                                            }`}>
                                            {log.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-base leading-none mb-1.5">{log.name}</p>
                                            <p className="text-sm font-bold text-slate-600">
                                                {log.qty} × <span className="text-slate-900">{log.item}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-black text-slate-500 mb-2 tabular-nums">{log.time}</p>
                                        <span className={`text-[10px] px-3 py-1 rounded-lg font-black tracking-widest transition-colors ${log.type === 'issue'
                                            ? 'bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white'
                                            : 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                                            }`}>
                                            {log.type.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 pt-5 border-t border-slate-100 text-[11px] font-black text-indigo-600 uppercase tracking-[0.2em] hover:text-indigo-800 transition-colors flex items-center justify-center gap-2">
                            View Full Register <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;