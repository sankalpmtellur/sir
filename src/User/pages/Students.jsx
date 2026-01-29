import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ClipboardList } from "lucide-react";

const Students = () => {
  const [activeIssues, setActiveIssues] = useState([
    {
      id: 1,
      name: "Arjun Mehta",
      equipment: "Football",
      issueTime: "09:30 PM",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      equipment: "Basketball",
      issueTime: "01:15 PM",
      phone: "8877655443",
    },
    {
      id: 3,
      name: "Rohan Varma",
      equipment: "Cricket Bat",
      issueTime: "01:45 PM",
      phone: "7766544332",
    },
    {
      id: 4,
      name: "Ishita Jain",
      equipment: "Badminton Racket",
      issueTime: "10:00 PM",
      phone: "9988777665",
    },
    {
      id: 5,
      name: "Kabir Singh",
      equipment: "Tennis Racket",
      issueTime: "08:45 PM",
      phone: "9122334455",
    },
    {
      id: 6,
      name: "Meera Nair",
      equipment: "Volleyball",
      issueTime: "10:30 PM",
      phone: "9556677889",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(activeIssues.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = activeIssues.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-5">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-slate-200 pb-8">
              <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
                  Active Logistics
                </h1>
                <p className="text-slate-400 font-bold text-sm tracking-wide">
                  Real-time record of equipment currently issued to students.
                </p>
              </div>

              <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">
                  Total Items Issued: {activeIssues.length}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="px-10 py-5 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                        Student Name
                      </th>
                      <th className="px-10 py-5 text-[10px] font-black text-slate-600 uppercase tracking-widest text-center">
                        Equipment
                      </th>
                      <th className="px-10 py-5 text-[10px] font-black text-slate-600 uppercase tracking-widest text-center">
                        Contact Number
                      </th>
                      <th className="px-10 py-5 text-[10px] font-black text-slate-600 uppercase tracking-widest text-center">
                        Issue Timestamp
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <AnimatePresence mode="wait">
                      {currentItems.map((issue) => (
                        <motion.tr
                          key={issue.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="hover:bg-slate-50/80 transition-all group"
                        >
                          <td className="px-10 py-6">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-black text-slate-400 border border-slate-200 group-hover:bg-white transition-colors">
                                {issue.name.charAt(0)}
                              </div>
                              <p className="font-bold text-slate-800 uppercase text-sm tracking-tight">
                                {issue.name}
                              </p>
                            </div>
                          </td>
                          <td className="px-10 py-6 text-center">
                            <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-slate-600 uppercase tracking-widest shadow-sm">
                              {issue.equipment}
                            </span>
                          </td>
                          <td className="px-10 py-6 text-center">
                            <span className="text-sm font-black tracking-[0.15em] text-slate-700">
                              {issue.phone}
                            </span>
                          </td>
                          <td className="px-10 py-6 text-center">
                            <span className="font-bold text-slate-500 text-sm">
                              {issue.issueTime}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50/50 border-t border-slate-100 px-10 py-5 flex items-center justify-between">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Showing {indexOfFirstItem + 1} to{" "}
                  {Math.min(indexOfLastItem, activeIssues.length)} of{" "}
                  {activeIssues.length} Entries
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-1">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => paginate(i + 1)}
                        className={`w-8 h-8 rounded-lg text-[10px] font-black transition-all ${
                          currentPage === i + 1
                            ? "bg-slate-900 text-white"
                            : "bg-white text-slate-400 border border-slate-200 hover:border-slate-400"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Students;
