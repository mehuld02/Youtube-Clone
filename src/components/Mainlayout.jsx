// components/MainLayout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useUtils } from "../context/utilsContext";

const Mainlayout = () => {
  const { isSidebar } = useUtils();

  return (
  <div className="flex bg-black min-h-screen overflow-hidden">
  <Sidebar />
  <div
    className={`flex-1 mt-[4rem] transition-all duration-300 ${
      isSidebar ? "xl:ml-60" : "xl:ml-16"
    }`}
  >
    <div className="max-w-[1600px] mx-auto px-2 md:px-4">
      <Outlet />
    </div>
  </div>
</div>



  );
};

export default Mainlayout;
