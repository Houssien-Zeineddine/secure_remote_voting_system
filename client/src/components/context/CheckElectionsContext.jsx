import React from "react";
import { createContext, useState, useEffect } from "react";

export const CheckElectionsContext = createContext();

export const CheckElectionsProvider = ({ children }) => {
  const [ongoingActiveElections, setOngoingActiveElections] = useState(null);

  useEffect(() => {
    const fetchElections = () => {
      //expecting calling API to get elections name if exist, or null if not

      return {
        id: 1,
        region: "Beirut", //in elections table region_id, not to get it when calling the api
        title: "Municipality Elections",
        description: "description",
        ongoing: true,
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
