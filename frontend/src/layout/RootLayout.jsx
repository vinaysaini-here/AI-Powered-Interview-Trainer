import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
