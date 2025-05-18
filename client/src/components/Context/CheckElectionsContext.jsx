import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../../Utils/axios";

export const CheckElectionsContext = createContext();

export const CheckElectionsProvider = ({ children }) => {
  const [ongoingActiveElections, setOngoingActiveElections] = useState(null);
  const access_token = localStorage.getItem("access_token");

  const fetchElections = async () => {
    try {
      const response = await axiosInstance.get("/user/getelections", {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const elections = response.data[0];

      if (elections && elections.id) {
        setOngoingActiveElections(elections);
        console.log("from fetch elections context", elections);
      } else {
        setOngoingActiveElections(null);
      }
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
      setOngoingActiveElections(null);
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
      value={{
        ongoingActiveElections,
        setOngoingActiveElections,
        fetchElections,
      }}
    >
      {children}
    </CheckElectionsContext.Provider>
  );
};
