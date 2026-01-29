import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, ShieldCheck, ArrowRight, FileText } from "lucide-react";
import logo from "./assets/logo.png";

const Launch = () => {
  const primaryColor = "#DD5626";
  const secondaryColor = "#C21F3A";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative">
      <Link
        to="/readme"
        className="absolute top-6 right-8 flex items-center gap-2 text-gray-500 hover:text-gray-800 font-medium transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
      >
        <FileText size={18} />
        <span>README</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-12"
      >
        <div className="mb-6">
          <img
            src={logo}
            alt="Rishihood University Logo"
            className="w-45 h-auto mx-auto drop-shadow-md"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          SIR
        </h1>
        <p className="text-lg font-medium text-gray-500 uppercase tracking-wide">
          Sports In Rishihood
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link to="/user/login" className="group">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all h-full"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transition-transform"
              style={{ backgroundColor: primaryColor }}
            >
              <Users size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Staff</h2>
            <p className="text-gray-500 mb-6">
              Track Equipments and check availability of indoor facilities.
            </p>
            <div
              className="flex items-center font-bold"
              style={{ color: primaryColor }}
            >
              Get Started{" "}
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-2 transition-transform"
              />
            </div>
          </motion.div>
        </Link>

        <Link to="/admin/login" className="group">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all h-full"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transition-transform"
              style={{ backgroundColor: secondaryColor }}
            >
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin</h2>
            <p className="text-gray-500 mb-6">
              Manage ground bookings, maintenance, and track analytics.
            </p>
            <div
              className="flex items-center font-bold"
              style={{ color: secondaryColor }}
            >
              Management Console{" "}
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-2 transition-transform"
              />
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Launch;
