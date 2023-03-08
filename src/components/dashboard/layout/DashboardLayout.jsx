import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className=" ">
      <Navbar />
      <main className="flex w-full">
        <Sidebar />
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
