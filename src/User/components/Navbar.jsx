import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Bell } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const secondaryColor = "#C21F3A";

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src={logo} alt="SIR Logo" className="h-10 w-auto" />
        <div className="h-6 w-[1px] bg-gray-300 mx-2 hidden md:block"></div>
        <span className="font-bold text-gray-800 tracking-tight hidden md:block">
          SIR <span className="text-gray-400 font-medium">| Staff Portal</span>
        </span>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-semibold text-sm transition-all hover:brightness-110 active:scale-95 shadow-md shadow-red-900/10"
          style={{ backgroundColor: secondaryColor }}
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
