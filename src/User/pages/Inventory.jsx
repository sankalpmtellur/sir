import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import {
  PackagePlus,
  Trash2,
  PlusCircle,
  MinusCircle,
  X,
  AlertTriangle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Inventory = () => {
  const primaryColor = "#DD5626";
  const getIcon = (name) => {
    const icons = {
      Football: "⚽",
      Basketball: "🏀",
      Volleyball: "🏐",
      "Cricket Bat": "🏏",
      "Badminton Racket": "🏸",
      "Tennis Racket": "🎾",
      "Table Tennis": "🏓",
    };
    return icons[name] || "📦";
  };

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Football",
      category: "Outdoor",
      total: 20,
      available: 15,
      status: "Good",
    },
    {
      id: 2,
      name: "Basketball",
      category: "Indoor",
      total: 10,
      available: 8,
      status: "New",
    },
    {
      id: 3,
      name: "Volleyball",
      category: "Indoor",
      total: 15,
      available: 12,
      status: "Good",
    },
    {
      id: 4,
      name: "Cricket Bat",
      category: "Outdoor",
      total: 8,
      available: 6,
      status: "Fair",
    },
    {
      id: 5,
      name: "Badminton Racket",
      category: "Indoor",
      total: 25,
      available: 10,
      status: "Good",
    },
  ]);

  const [restockItem, setRestockItem] = useState(null);
  const [restockMode, setRestockMode] = useState("add");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [restockValue, setRestockValue] = useState("");
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Outdoor",
    total: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const confirmDelete = () => {
    setItems(items.filter((item) => item.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const handleAddNewAsset = () => {
    if (!newItem.name || !newItem.total) return;
    const count = parseInt(newItem.total);
    const existingIndex = items.findIndex(
      (i) => i.name.toLowerCase() === newItem.name.toLowerCase(),
    );
    if (existingIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingIndex].total += count;
      updatedItems[existingIndex].available += count;
      setItems(updatedItems);
    } else {
      setItems([
        {
          id: Date.now(),
          name: newItem.name,
          category: newItem.category,
          total: count,
          available: count,
          status: "New",
        },
        ...items,
      ]);
    }

    setShowAddModal(false);
    setNewItem({ name: "", category: "Outdoor", total: "" });
  };

  const handleAdjustStock = () => {
    const amount = parseInt(restockValue);
    if (isNaN(amount) || amount <= 0) return;

    setItems(
      items.map((item) => {
        if (item.id === restockItem.id) {
          if (restockMode === "add") {
            return {
              ...item,
              total: item.total + amount,
              available: item.available + amount,
            };
          } else {
            const newTotal = Math.max(0, item.total - amount);
            const newAvail = Math.max(0, item.available - amount);
            return { ...item, total: newTotal, available: newAvail };
          }
        }
        return item;
      }),
    );

    setRestockItem(null);
    setRestockValue("");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-10 overflow-y-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-end justify-between pb-6 border-b-2 border-slate-100">
              <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
                  Inventory Master
                </h1>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowAddModal(true)}
                style={{ backgroundColor: primaryColor }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-black shadow-lg shadow-orange-500/20 uppercase tracking-widest cursor-pointer"
              >
                <PackagePlus size={16} /> New Asset
              </motion.button>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden relative min-h-[500px] flex flex-col">
              <table className="w-full text-left flex-1">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <th className="px-8 py-5">Equipment</th>
                    <th className="px-8 py-5 text-center">Category</th>
                    <th className="px-8 py-5 text-center">Stock Count</th>
                    <th className="px-8 py-5 text-center">Status</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <AnimatePresence mode="popLayout">
                    {currentItems.map((item) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hover:bg-slate-50/50 group transition-all"
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-4">
                            <span className="text-3xl drop-shadow-sm">
                              {getIcon(item.name)}
                            </span>
                            <span className="font-bold text-slate-800">
                              {item.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-center">
                          <span className="text-[10px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-lg uppercase tracking-tighter">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-center">
                          <div className="inline-flex items-center gap-2">
                            <span className="font-black text-slate-900 text-lg">
                              {item.available}
                            </span>
                            <span className="text-slate-200">/</span>
                            <span className="font-bold text-slate-400">
                              {item.total}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-center">
                          <span
                            className={`text-[9px] font-black px-3 py-1 rounded-full uppercase border ${
                              item.status === "New"
                                ? "bg-green-50 text-green-600 border-green-100"
                                : "bg-slate-50 text-slate-500 border-slate-200"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => {
                                setRestockItem(item);
                                setRestockMode("add");
                              }}
                              className="p-2 text-slate-300 hover:text-green-600 cursor-pointer transition-colors"
                            >
                              <PlusCircle size={18} />
                            </button>
                            <button
                              onClick={() => {
                                setRestockItem(item);
                                setRestockMode("subtract");
                              }}
                              className="p-2 text-slate-300 hover:text-orange-600 cursor-pointer transition-colors"
                            >
                              <MinusCircle size={18} />
                            </button>
                            <button
                              onClick={() => setDeleteTarget(item)}
                              className="p-2 text-slate-300 hover:text-red-600 cursor-pointer transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>

              <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                  Showing {indexOfFirstItem + 1}-
                  {Math.min(indexOfLastItem, items.length)} of {items.length}{" "}
                  Assets
                </p>
                <div className="flex gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="p-2 rounded-lg bg-white border border-slate-600 text-slate-600 hover:text-slate-1000 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="p-2 rounded-lg bg-white border border-slate-600 text-slate-600 hover:text-slate-1000 cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {restockItem && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-md flex items-center justify-center z-50"
                  >
                    <div className="bg-white p-10 rounded-[2.5rem] border-2 border-slate-100 shadow-2xl text-center max-w-xs w-full">
                      <h3 className="font-black text-slate-900 uppercase mb-2 text-xl tracking-tight">
                        {restockMode === "add" ? "Restock" : "Deduct"}{" "}
                        {restockItem.name}
                      </h3>
                      <p className="text-slate-400 text-xs font-bold uppercase mb-6 tracking-widest">
                        {restockMode === "add"
                          ? "Add new units"
                          : "Report lost/broken items"}
                      </p>
                      <input
                        type="number"
                        autoFocus
                        value={restockValue}
                        onChange={(e) => setRestockValue(e.target.value)}
                        placeholder="0"
                        className="w-full p-5 bg-slate-50 rounded-2xl mb-6 text-center font-black text-4xl outline-none focus:border-orange-500 border-2 border-transparent transition-all shadow-inner"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleAdjustStock}
                          style={{ backgroundColor: primaryColor }}
                          className="flex-1 p-4 rounded-2xl text-white font-black uppercase text-xs tracking-widest cursor-pointer shadow-lg shadow-orange-500/20"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => setRestockItem(null)}
                          className="p-4 rounded-2xl bg-slate-50 text-slate-400 cursor-pointer hover:bg-slate-100 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {showAddModal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-md flex items-center justify-center z-[60] px-6"
                  >
                    <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 shadow-2xl w-full max-w-md">
                      <div className="flex justify-between items-center mb-8">
                        <h3 className="font-black text-slate-900 uppercase text-2xl tracking-tight">
                          Asset Entry
                        </h3>
                        <button
                          onClick={() => setShowAddModal(false)}
                          className="text-slate-300 hover:text-slate-900 transition-colors"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase px-1">
                            Equipment Name
                          </label>
                          <input
                            type="text"
                            value={newItem.name}
                            onChange={(e) =>
                              setNewItem({ ...newItem, name: e.target.value })
                            }
                            placeholder="e.g. Volleyball"
                            className="w-full p-4 bg-slate-50 rounded-2xl font-bold border-2 border-transparent focus:border-orange-500 focus:bg-white outline-none transition-all"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2 relative">
                            <label className="text-[10px] font-black text-slate-400 uppercase px-1">
                              Location
                            </label>
                            <div className="relative">
                              <select
                                value={newItem.category}
                                onChange={(e) =>
                                  setNewItem({
                                    ...newItem,
                                    category: e.target.value,
                                  })
                                }
                                className="w-full p-4 bg-slate-50 rounded-2xl font-bold outline-none appearance-none cursor-pointer pr-10"
                              >
                                <option>Outdoor</option>
                                <option>Indoor</option>
                              </select>
                              <ChevronDown
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                                size={16}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase px-1">
                              Units
                            </label>
                            <input
                              type="number"
                              value={newItem.total}
                              onChange={(e) =>
                                setNewItem({
                                  ...newItem,
                                  total: e.target.value,
                                })
                              }
                              placeholder="0"
                              className="w-full p-4 bg-slate-50 rounded-2xl font-bold text-center outline-none focus:border-orange-500 border-2 border-transparent"
                            />
                          </div>
                        </div>
                        <button
                          onClick={handleAddNewAsset}
                          style={{ backgroundColor: primaryColor }}
                          className="w-full py-5 rounded-2xl text-white font-black uppercase text-sm tracking-[0.2em] shadow-xl shadow-orange-500/20 mt-4 cursor-pointer"
                        >
                          Submit Record
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {deleteTarget && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-md flex items-center justify-center z-[70] px-6"
                  >
                    <div className="bg-white p-10 rounded-[2.5rem] border-2 border-red-50 shadow-2xl max-w-sm w-full text-center">
                      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <AlertTriangle size={32} className="text-red-500" />
                      </div>
                      <h3 className="font-black text-slate-900 uppercase text-xl mb-2">
                        Delete {deleteTarget.name}?
                      </h3>
                      <p className="text-slate-400 text-sm font-medium mb-8">
                        This asset will be permanently removed from all
                        inventory logs.
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={confirmDelete}
                          className="flex-1 py-4 bg-red-600 rounded-2xl text-white font-black uppercase text-xs cursor-pointer"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setDeleteTarget(null)}
                          className="px-8 py-4 bg-slate-100 rounded-2xl text-slate-500 font-bold cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;
