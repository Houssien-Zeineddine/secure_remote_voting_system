import React, { useContext, useState, useEffect } from "react";
import Loading from "../../components/Loading";
import Elections from "./Elections";
import NoElections from "../../components/NoElections";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import "./style.css";

const Dashboard = () => {
  const { ongoingActiveElections } = useContext(CheckElectionsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ongoingActiveElections !== null) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [ongoingActiveElections]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="along-sidebar-positioning">
      {ongoingActiveElections ? <Elections /> : <NoElections />}
    </div>
  );
};

export default Dashboard;
