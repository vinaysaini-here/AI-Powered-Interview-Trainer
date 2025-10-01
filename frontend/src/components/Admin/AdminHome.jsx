import React from "react";
import { WorldMap } from "react-svg-worldmap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { FaUsers, FaClock, FaCheckCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const AdminHome = () => {
  // Mock Data
  const userActivity = [
    { name: "Sun", users: 200 },
    { name: "Mon", users: 400 },
    { name: "Tue", users: 350 },
    { name: "Wed", users: 500 },
    { name: "Thu", users: 420 },
    { name: "Fri", users: 600 },
    { name: "Sat", users: 300 },
  ];

  const successData = [
    { name: "Success", value: 85, fill: "#8b5cf6" },
    { name: "Remaining", value: 15, fill: "#e5e7eb" },
  ];

  const worldData = [
    { country: "us", value: 35 },
    { country: "in", value: 40 },
    { country: "gb", value: 10 },
    { country: "fr", value: 8 },
    { country: "de", value: 7 },
  ];

  return (
    <main className="flex-1 p-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center bg-[#2a1f38] px-4 py-2 rounded-xl shadow w-1/2">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search anything here"
            className="ml-2 flex-1 outline-none"
          />
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-2 rounded-xl shadow">
          AI Interview Dashboard
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-[#2a1f38] p-5 rounded-xl shadow flex items-center">
          <FaUsers className="text-purple-500 text-2xl mr-3" />
          <div>
            <p className="text-sm text-gray-500">Sessions</p>
            <p className="text-xl font-semibold">58k</p>
          </div>
        </div>
        <div className="bg-[#2a1f38] p-5 rounded-xl shadow flex items-center">
          <FaClock className="text-purple-500 text-2xl mr-3" />
          <div>
            <p className="text-sm text-gray-500">Avg Session</p>
            <p className="text-xl font-semibold">00:18</p>
          </div>
        </div>
        <div className="bg-[#2a1f38] p-5 rounded-xl shadow flex items-center">
          <FaCheckCircle className="text-purple-500 text-2xl mr-3" />
          <div>
            <p className="text-sm text-gray-500">Completion</p>
            <p className="text-xl font-semibold">50%</p>
          </div>
        </div>
        <div className="bg-[#2a1f38] p-5 rounded-xl shadow flex items-center">
          <FaCheckCircle className="text-purple-500 text-2xl mr-3" />
          <div>
            <p className="text-sm text-gray-500">Tasks Done</p>
            <p className="text-xl font-semibold">40</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* User Activity */}
        <div className="bg-[#2a1f38] p-5 rounded-xl shadow col-span-2">
          <h3 className="font-semibold mb-4">User Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Success Rate */}
        <div className="bg-[#2a1f38] p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Success Rate</h3>
          <ResponsiveContainer width="100%" height={250}>
            <RadialBarChart
              innerRadius="70%"
              outerRadius="100%"
              data={successData}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar dataKey="value" cornerRadius={10} />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
          <p className="text-center font-bold mt-2 text-purple-600">85%</p>
        </div>
      </div>

      {/* World Map & Pages */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#2a1f38] p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Organic Traffic</h3>
          <WorldMap
            color="#8b5cf6"
            valueSuffix="%"
            size="responsive"
            data={worldData}
          />
        </div>

        <div className="bg-[#2a1f38] p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Pages viewed by users</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Steve - Admin dashboard</span>
              <span className="font-semibold text-purple-600">95%</span>
            </li>
            <li className="flex justify-between">
              <span>Daniel - Exam dashboard</span>
              <span className="font-semibold text-purple-600">85%</span>
            </li>
            <li className="flex justify-between">
              <span>Codi - Admin dashboard</span>
              <span className="font-semibold text-purple-600">80%</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
