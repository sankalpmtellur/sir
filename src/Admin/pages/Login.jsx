import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Lock,
  LogIn,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import logo from "../../assets/logo.png";

const AdminLogin = () => {
  const secondaryColor = "#C21F3A";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Login:", { email, password });
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative font-sans">
      <Link
        to="/"
        className="absolute top-6 left-8 flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors font-medium"
      >
        <ArrowLeft size={18} />
        <span>Back to Portal</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <img
            src={logo}
            alt="Rishihood Logo"
            className="w-45 h-auto mx-auto mb-4"
          />
          <div className="flex items-center justify-center gap-2 mb-1">
            <ShieldCheck size={24} style={{ color: secondaryColor }} />
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
              Admin Console
            </h1>
          </div>
          <p className="text-gray-500 mt-2 font-medium">
            Management & Analytics Authorisation
          </p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-red-900/5 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                Admin Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#C21F3A]/20 focus:border-[#C21F3A] outline-none transition-all placeholder:text-gray-400 font-bold"
                  placeholder="admin@rishihood.edu.in"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 ml-1">
                <label className="text-sm font-semibold text-gray-700">
                  Access Key
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#C21F3A]/20 focus:border-[#C21F3A] outline-none transition-all font-bold"
                  placeholder="•••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-4 rounded-2xl text-white font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 transition-all hover:brightness-110 active:shadow-inner cursor-pointer"
              style={{ backgroundColor: secondaryColor }}
            >
              <LogIn size={18} />
              <span>Authenticate</span>
            </motion.button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 leading-relaxed">
              Authorised personnel only. Need help? <br />
              <button className="font-semibold text-gray-800 hover:text-[#C21F3A] transition-colors">
                Contact IT Support
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;