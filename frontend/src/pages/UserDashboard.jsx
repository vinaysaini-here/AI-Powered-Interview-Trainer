import React from "react";
import UserSidebar from "../components/User/UserSidebar";
import UserHome from "../components/User/UserHome";
import { Outlet } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="flex bg-[#0f0b12] text-white">
      <UserSidebar />

      <Outlet />
    </div>
  );
}
