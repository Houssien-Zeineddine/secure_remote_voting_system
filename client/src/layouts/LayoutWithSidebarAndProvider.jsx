import React from "react";
import Sidebar from "../components/Sidebar";
import { CheckElectionsProvider } from "../components/Context/CheckElectionsContext";
import { Outlet } from "react-router-dom";
import { FetchCandidatesProvider } from "../components/Context/FetchCandidatesContext";

const LayoutWithSidebarAndProvider = () => {
  return (
    <CheckElectionsProvider>
      <FetchCandidatesProvider>
        <Sidebar />
        <Outlet />
      </FetchCandidatesProvider>
    </CheckElectionsProvider>
  );
};

export default LayoutWithSidebarAndProvider;
