import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  UserCircle,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const primaryColor = "#DD5626";

  const menuItems = [
    {
      name: "Dashboard",
      path: "/user/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { name: "Inventory", path: "/user/inventory", icon: <Package size={20} /> },
    {
      name: "Student Profiles",
      path: "/user/students",
      icon: <UserCircle size={20} />,
    },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-64px)] sticky top-16">
      <div className="flex-1 py-6 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-[#DD5626]/10 text-[#DD5626]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <span className="transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <span className="font-semibold">{item.name}</span>
            </div>
            <ChevronRight
              size={14}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="bg-slate-50 rounded-2xl p-4">
          <p className="text-xs text-gray-500 font-medium">System Status</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-bold text-gray-700">Online</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;