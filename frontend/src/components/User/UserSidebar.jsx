import { useState } from "react";
import { FaHome, FaBook, FaUsers, FaPlay, FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-[#1c1326] text-white flex flex-col justify-between fixed md:static top-0 left-0 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
        }`}
      >
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold p-4">Interview</h2>

          {/* Menu */}
          <ul className="space-y-2 px-4">
            <li className="flex items-center space-x-3 bg-purple-600 p-2 rounded-lg cursor-pointer">
              <FaHome /> <span>Home</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-800 cursor-pointer">
              <FaPlay /> <span>Practice</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-800 cursor-pointer">
              <FaBook /> <span>Question Bank</span>
            </li>
            <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-800 cursor-pointer">
              <FaUsers /> <span>Community</span>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="p-4">
          <button className="flex items-center justify-center space-x-2 bg-purple-600 w-full py-2 rounded-lg hover:bg-purple-700">
            <span>Upgrade</span>
          </button>
          <div className="flex items-center space-x-2 mt-4 cursor-pointer hover:underline">
            <CgProfile />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
