import React from "react";
import { createContext, useState, useEffect } from "react";

export const CheckElectionsContext = createContext();

export const CheckElectionsProvider = ({ children }) => {
  const [ongoingActiveElections, setOngoingActiveElections] = useState(null);

  useEffect(() => {
    const fetchElections = "municipality elections"; //expecting calling API to get elections name if exist, or null if not
    if (fetchElections) {
      setOngoingActiveElections(fetchElections);
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
