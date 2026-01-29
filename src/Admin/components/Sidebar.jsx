import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, Trophy, Dumbbell, Waves, Circle } from "lucide-react";

const Sidebar = () => {
  const adminRed = "#C21F3A";

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    {
      name: "Sports Room",
      icon: <Trophy size={20} />,
      path: "/admin/sportsroom",
    },
    { name: "Gym Analytics", icon: <Dumbbell size={20} />, path: "/admin/gym" },
    { name: "Pool Management", icon: <Waves size={20} />, path: "/admin/pool" },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0 shrink-0">
      <nav className="flex-1 p-6 space-y-2 pt-10">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all group font-bold text-sm ${
                isActive
                  ? "bg-red-50 text-red-600 shadow-sm"
                  : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`${isActive ? "text-red-600" : "group-hover:text-slate-600"}`}
                >
                  {item.icon}
                </div>
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-red-600"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;