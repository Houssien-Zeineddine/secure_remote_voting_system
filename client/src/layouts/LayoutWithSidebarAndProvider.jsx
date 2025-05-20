import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { CheckCampaignProvider } from "../components/Context/CheckCampaignContext";
import { CheckElectionsProvider } from "../components/Context/CheckElectionsContext";
import { FetchCandidatesProvider } from "../components/Context/FetchCandidatesContext";

const LayoutWithSidebarAndProvider = () => {
  return (
    <CheckElectionsProvider>
      <FetchCandidatesProvider>
        <CheckCampaignProvider>
          <Sidebar />
          <Outlet />
        </CheckCampaignProvider>
      </FetchCandidatesProvider>
    </CheckElectionsProvider>
  );
};

export default LayoutWithSidebarAndProvider;
