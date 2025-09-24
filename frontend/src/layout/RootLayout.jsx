import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0118] via-[#120327] to-black text-white">
      <ScrollToTop />
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
