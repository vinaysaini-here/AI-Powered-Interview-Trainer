import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaBars,
  FaCog,
  FaVideo,
  FaTachometerAlt,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const AdminSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: "/admin/home", label: "Home", icon: <FaHome /> },
    { to: "/admin/interviews", label: "Interviews", icon: <FaVideo /> },
    {
      to: "/admin/candidates",
      label: "Candidates",
      icon: <FaUsers />,
    },
    { to: "/admin/question-bank", label: "Question Bank", icon: <FaBook /> },
    { to: "/admin/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="bg-[#12091b] text-white flex min-h-screen">
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-20 left-4 z-50 bg-purple-600 text-white p-2 rounded-md shadow-lg"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars size={20} />
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 w-64 bg-[#1c1326] shadow-lg text-white flex flex-col p-6 transform transition-transform duration-300 z-50
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        {/* Top Section */}
        <div className="flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Interview</h2>
          <nav className="space-y-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-md transition ${
                    isActive
                      ? "bg-purple-600 text-white font-semibold"
                      : "hover:bg-purple-800"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-700">
          <button className="flex items-center justify-center space-x-2 bg-purple-600 w-full py-2 rounded-lg hover:bg-purple-700 transition">
            <span>Upgrade</span>
          </button>
          <div
            className="flex items-center space-x-2 mt-4 cursor-pointer hover:underline"
            onClick={() => setSidebarOpen(false)}
          >
            <CgProfile size={20} />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
