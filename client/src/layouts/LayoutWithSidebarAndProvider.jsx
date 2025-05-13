import React from "react";
import Sidebar from "../components/Sidebar";
import { CheckElectionsProvider } from "../components/Context/CheckElectionsContext";
import { Outlet } from "react-router-dom";
import { FetchCandidatesProvider } from "../components/Context/FetchCandidatesContext";
import { CheckCampaignProvider } from "../components/Context/CheckCampaignContext";

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
