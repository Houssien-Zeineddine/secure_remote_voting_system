import React from "react";
import { createContext, useState, useEffect } from "react";

export const CheckElectionsContext = createContext();

export const CheckElectionsProvider = ({ children }) => {
  const [ongoingActiveElections, setOngoingActiveElections] = useState(null);

  useEffect(() => {
    const fetchElections = () => {
      //expecting calling API to get elections name if exist, or null if not

      return {
        elections_name: "Municipality Elections",
        id: 1,
        status: "ongoing",
      };
    };

    const ongoingElections = fetchElections();

    if (ongoingElections) {
      setOngoingActiveElections(ongoingElections);
    } else {
      setOngoingActiveElections(null);
    }
  }, []);

  return (
    <CheckElectionsContext.Provider value={{ ongoingActiveElections }}>
      {children}
    </CheckElectionsContext.Provider>
  );
};
