import React, { useEffect, createContext, useState } from "react";
import axiosInstance from "../../Utils/axios";

export const CheckCampaignContext = createContext();

export const CheckCampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState(null);
  const access_token = localStorage.getItem("access_token");

  const fetchCampaigns = async () => {
    try {
      const response = await axiosInstance.get("user/getcampaigns", {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const campaignsArray = response.data;

      if (campaignsArray) {
        setCampaigns(campaignsArray);
      } else {
        setCampaigns(null);
      }
    } catch (error) {
      setCampaigns(null);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <CheckCampaignContext.Provider
      value={{ campaigns, setCampaigns, fetchCampaigns }}
    >
      {children}
    </CheckCampaignContext.Provider>
  );
};
