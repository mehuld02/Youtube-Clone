import React from "react";
import Sidebar from "./Sidebar";
import { useUtils } from "../context/utilsContext";

const SidebarLayout = ({ children }) => {
  const { isSidebar, mobileShow } = useUtils();

  const getMarginLeft = () => {
    if (mobileShow) return "ml-0";
    if (isSidebar) return "ml-[32rem]"; // full sidebar width
    return "ml-16"; // mini sidebar width
  };

  return (
    <div className="flex relative bg-black text-white">
      <Sidebar />

      <main className={`transition-all duration-300 flex-1 mt-20 ${getMarginLeft()}`}>
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
