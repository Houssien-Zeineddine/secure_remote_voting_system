import React, { createContext, useState, useEffect } from "react";
import axiosBaseUrl from "../../Utils/axios";

export const CheckElectionsContext = createContext();

export const CheckElectionsProvider = ({ children }) => {
  const [ongoingActiveElections, setOngoingActiveElections] = useState(null);
  const access_token = localStorage.getItem("access_token");

  const fetchElections = async () => {
    try {
      const response = await axiosBaseUrl.get("/user/getelections", {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const elections = response.data;

      setOngoingActiveElections(elections);
      //expecting calling API to get elections name if exist, or null if not

      // return {
      //   id: 1,
      //   region: "Beirut", //in elections table region_id, not to get it when calling the api
      //   title: "Municipality Elections",
      //   description: "description",
      //   ongoing: true,
      // };
      // return null;}
    } catch (error) {
      console.error("Error fetching elections:", error);
      setOngoingActiveElections(false);
    }
  };

  useEffect(() => {
    fetchElections();
  }, []);

  // if (ongoingActiveElections) {
  //   setOngoingActiveElections(ongoingActiveElections);
  // } else {
  //   setOngoingActiveElections(null);
  // }

  return (
    <CheckElectionsContext.Provider
      value={{ ongoingActiveElections, fetchElections }}
    >
      {children}
    </CheckElectionsContext.Provider>
  );
};
