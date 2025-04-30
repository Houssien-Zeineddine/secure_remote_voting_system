import React, { useCallback, useContext } from "react";
import Elections from "./Elections";
import NoElections from "../../components/NoElections";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import "./style.css";

const Dashboard = () => {
  const elections = useContext(CheckElectionsContext);
  return (
    <div className="along-sidebar-positioning">
      {elections ? <Elections /> : <NoElections />}
    </div>
  );
};

export default Dashboard;
