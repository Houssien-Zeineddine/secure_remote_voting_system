import React from "react";
import Sidebar from "../components/Sidebar";
import { CheckElectionsProvider } from "../components/Context/CheckElectionsContext";
import { Outlet } from "react-router-dom";

const LayoutWithSidebarAndProvider = () => {
  return (
    <CheckElectionsProvider>
      <Sidebar />
      <Outlet />
    </CheckElectionsProvider>
  );
};

export default LayoutWithSidebarAndProvider;
