import React from "react";
import { createContext, useEffect, useState } from "react";

export const FetchCandidatesContext = createContext();

export const FetchCandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = () => {
      //calling getcandidates API
      return [
        {
          id: 1,
          candidate_name: "candidate 1",
          campaign: "candidate's campaign",
          email: "email@gmail.com",
          profile_picture: false,
        },
        {
          id: 2,
          candidate_name: "candidate 2",
          campaign: "candidate's campaign",
          email: "email@gmail.com",
          profile_picture: false,
        },
        {
          id: 3,
          candidate_name: "candidate 3",
          campaign: "candidate's campaign",
          email: "email@gmail.com",
          profile_picture: false,
        },
        {
          id: 4,
          candidate_name: "candidate 4",
          campaign: "candidate's campaign",
          email: "email@gmail.com",
          profile_picture: false,
        },
        {
          id: 5,
          candidate_name: "candidate 5",
          campaign: "candidate's campaign",
          email: "email@gmail.com",
          profile_picture: false,
        },
        {
          id: 6,
          candidate_name: "candidate 6",
          campaign: "candidate's campaign",
          email: "email@gmail.com",
          profile_picture: false,
        },
      ];
    };
    setCandidates(fetchCandidates);
  }, []);

  return (
    <FetchCandidatesContext.Provider value={{ candidates }}>
      {children}
    </FetchCandidatesContext.Provider>
  );
};
