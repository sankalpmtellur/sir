import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import {
  Scan,
  Minus,
  Plus,
  CheckCircle2,
  AlertCircle,
  UserCheck,
  Package,
} from "lucide-react";

const Dashboard = () => {
  const primaryColor = "#DD5626";
  const secondaryColor = "#C21F3A";

  const [inventory, setInventory] = useState([
    { id: 1, name: "Football", stock: 15, icon: "⚽" },
    { id: 2, name: "Basketball", stock: 8, icon: "🏀" },
    { id: 3, name: "Volleyball", stock: 12, icon: "🏐" },
    { id: 4, name: "Cricket Bat", stock: 6, icon: "🏏" },
    { id: 5, name: "Badminton Racket", stock: 10, icon: "🏸" },
  ]);

  const [student, setStudent] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const activeItem = inventory.find((i) => i.name === selectedItem);
  const maxStock = activeItem ? activeItem.stock : 0;

  const handleRFIDScan = () => {
    setStudent({
      name: "Aryan Sharma",
      enrollment: "2401010416",
      course: "B.Tech CSE",
      phone: "9876543210",
    });
  };

  const handleIssue = () => {
    if (!student || !selectedItem) return;
    if (quantity > maxStock) return;

    setInventory((prev) =>
      prev.map((item) =>
        item.name === selectedItem
          ? { ...item, stock: item.stock - quantity }
          : item,
      ),
    );

    alert(`Successfully Issued ${quantity} ${selectedItem} to ${student.name}`);
    setSelectedItem(null);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-8 py-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                  <div className="flex items-center gap-3">
                    <UserCheck size={20} style={{ color: primaryColor }} />
                    <h2 className="text-sm font-black uppercase tracking-widest text-slate-700">
                      Student Identity
                    </h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleRFIDScan}
                    style={{ backgroundColor: primaryColor }}
                    className="text-xs font-bold px-6 py-2.5 rounded-xl text-white flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
                  >
                    <Scan size={14} /> SCAN RFID CARD
                  </motion.button>
                </div>

                <div className="p-8">
                  {student ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-8"
                    >
                      <div className="grid grid-cols-2 lg:grid-cols-4 flex-1 gap-6">
                        <div>
                          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                            Full Name
                          </p>
                          <p className="text-lg font-bold text-slate-800">
                            {student.name}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                            Enrollment No.
                          </p>
                          <p className="text-lg font-mono font-bold text-slate-800">
                            {student.enrollment}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                            Course
                          </p>
                          <p className="text-lg font-bold text-slate-800">
                            {student.course}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                            Contact
                          </p>
                          <p className="text-lg font-bold text-slate-800">
                            {student.phone}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="py-8 text-center border-2 border-dashed border-slate-100 rounded-[1.5rem] bg-slate-50/30">
                      <p className="text-slate-400 font-semibold tracking-tight">
                        Ready to scan. Please place the student ID on the
                        reader.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-8 text-slate-800">
                  <Package size={20} style={{ color: primaryColor }} />
                  <h2 className="text-sm font-black uppercase tracking-widest">
                    Issue Selection
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {inventory.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedItem(item.name);
                        setQuantity(1);
                      }}
                      className={`relative p-6 rounded-[1.5rem] border-2 transition-all flex flex-col items-center gap-3 ${
                        selectedItem === item.name
                          ? "border-[#DD5626] bg-[#DD5626]/5 shadow-md scale-[1.02]"
                          : "border-slate-50 hover:border-slate-200 bg-slate-50/20"
                      }`}
                    >
                      <span className="text-4xl">{item.icon}</span>
                      <span className="text-sm font-black text-slate-800 tracking-tight">
                        {item.name}
                      </span>
                      <div
                        className={`text-[10px] font-black px-3 py-1 rounded-full ${item.stock <= 3 ? "bg-red-100 text-red-600" : "bg-slate-200 text-slate-500"}`}
                      >
                        {item.stock} IN STOCK
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div
                    className={`flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-200 ${!selectedItem && "opacity-20 pointer-events-none"}`}
                  >
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-10 text-center text-xl font-black text-slate-800">
                      {quantity}
                    </span>
                    <button
                      disabled={quantity >= maxStock}
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-900 disabled:opacity-30 transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      disabled={!student || !selectedItem}
                      onClick={handleIssue}
                      style={{
                        backgroundColor:
                          student && selectedItem ? primaryColor : "#E2E8F0",
                      }}
                      className={`px-12 py-4 rounded-2xl font-black text-sm flex items-center gap-3 shadow-xl transition-all ${
                        student && selectedItem
                          ? "text-white cursor-pointer hover:brightness-110 active:scale-95 shadow-orange-500/20"
                          : "text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      <CheckCircle2 size={20} />
                      {selectedItem
                        ? `ISSUE ${selectedItem.toUpperCase()}`
                        : "SELECT EQUIPMENT"}
                    </button>
                    {selectedItem && quantity >= maxStock && (
                      <p className="text-[10px] text-red-600 font-bold flex items-center gap-1 uppercase tracking-widest">
                        <AlertCircle size={12} /> Maximum available stock
                        reached
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;