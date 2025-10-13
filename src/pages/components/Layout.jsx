import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx"; // adjust path if needed

const Layout = () => {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="w-full min-h-screen ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
