import React from "react";
import Sidebar from "../components/Sidebar";
import { CheckElectionsProvider } from "../components/Contex/CheckElectionsContext";
import { Outlet } from "react-router-dom";
import { FetchCandidatesProvider } from "../components/Contex/FetchCandidatesContext";
import { CheckCampaignProvider } from "../components/Contex/CheckCampaignContext";

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
