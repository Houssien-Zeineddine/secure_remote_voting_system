import React from "react";
import axiosBaseUrl from "../../Utils/axios";

export const CheckCampaignContext = useContext();

export const CheckCampaignProvider = ({ children }) => {
  const [campaign, setCampaign] = useState(null);
  const access_token = localStorage.getItem("access_token");

  //   const fetchCampaigns =
};
