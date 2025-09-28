import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx"; // adjust path if needed

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar stays on the left */}
      <Sidebar />

      {/* Page content changes here */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
