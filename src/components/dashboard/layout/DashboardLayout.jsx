import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
