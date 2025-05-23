import React from "react";
import { createContext, useEffect, useState } from "react";
import axiosInstance from "../../Utils/axios";

export const FetchCandidatesContext = createContext();

export const FetchCandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);

  const access_token = localStorage.getItem("access_token");

  const fetchCandidates = async () => {
    try {
      const response = await axiosInstance.get("/user/candidates", {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      setCandidates(response.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <FetchCandidatesContext.Provider
      value={{ candidates, setCandidates, fetchCandidates }}
    >
      {children}
    </FetchCandidatesContext.Provider>
  );
};
