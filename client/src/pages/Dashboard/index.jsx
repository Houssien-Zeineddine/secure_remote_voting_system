import React, { useContext } from "react";
import Elections from "./Elections";
import NoElections from "../../components/NoElections";
import { CheckElectionsContext } from "../../components/Contex/CheckElectionsContext";
import "./style.css";

const Dashboard = () => {
  const { ongoingActiveElections } = useContext(CheckElectionsContext);

  return (
    <div className="along-sidebar-positioning">
      {ongoingActiveElections ? <Elections /> : <NoElections />}
    </div>
  );
};

export default Dashboard;
