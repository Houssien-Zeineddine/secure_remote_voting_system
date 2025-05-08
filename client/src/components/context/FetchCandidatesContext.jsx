import React from "react";
import { createContext, useEffect, useState } from "react";
import axiosBaseUrl from "../../Utils/axios";

export const FetchCandidatesContext = createContext();

export const FetchCandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);

  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axiosBaseUrl.get("/user/candidates", {
          headers: { Authorization: `Bearer ${access_token}` },
        });

        console.log("from fetchcandiates context ", response.data);
        setCandidates(response.data);
      } catch (error) {
        return error;
      }
    };

    fetchCandidates();
  }, [access_token]);

  return (
    <FetchCandidatesContext.Provider value={{ candidates }}>
      {children}
    </FetchCandidatesContext.Provider>
  );
};
