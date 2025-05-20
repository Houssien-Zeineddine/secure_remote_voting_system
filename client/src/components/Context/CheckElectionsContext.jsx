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
      } else {
        setOngoingActiveElections(null);
      }
    } catch (error) {
      setOngoingActiveElections(null);
    }
  };

  useEffect(() => {
    fetchElections();
  }, []);

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
