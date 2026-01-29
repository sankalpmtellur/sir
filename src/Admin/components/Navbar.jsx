import React from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const adminRed = "#C21F3A";
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-50 font-sans">
      <div className="flex items-center gap-4">
        <img src={logo} alt="RU Logo" className="h-10 w-auto" />
        <div className="h-6 w-[1px] bg-slate-200 mx-2" />
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">
            Rishihood
          </span>
          <span className="text-sm font-black text-slate-900 uppercase tracking-tight">
            Admin Console
          </span>
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-black text-[10px] uppercase tracking-widest transition-all hover:brightness-110 shadow-lg shadow-red-900/10 cursor-pointer"
          style={{ backgroundColor: adminRed }}
        >
          <span>Logout</span>
          <LogOut size={14} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;