import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Admin/AdminSidebar";

export default function AdminDashboard() {
  return (
    <div className="flex bg-[#0f0b12] text-white">
      <AdminSidebar />

      <Outlet />
    </div>
  );
}
