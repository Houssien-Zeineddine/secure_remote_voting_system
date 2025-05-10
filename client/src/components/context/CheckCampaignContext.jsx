import React, { useEffect } from "react";
import axiosBaseUrl from "../../Utils/axios";

export const CheckCampaignContext = useContext();

export const CheckCampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState(null);
  const access_token = localStorage.getItem("access_token");

  const fetchCampaigns = async () => {
    try {
      const response = await axiosBaseUrl.get("user/getcampaigns", {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const campaignsArray = response.data;

      if (campaignsArray) {
        setCampaigns(campaignsArray);
      } else {
        setCampaigns(null);
      }
    } catch (error) {
      console.log(error);
      setCampaigns(null);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <CheckCampaignContext.Provider value={{ campaigns }}>
      {children}
    </CheckCampaignContext.Provider>
  );
};
