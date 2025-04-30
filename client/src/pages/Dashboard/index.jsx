import React from "react";
import Elections from "./Elections";
import NoElections from "../../components/NoElections";
import "./style.css";

const Dashboard = () => {
  const elections = true; //calling api to get elections
  return (
    <div className="along-sidebar-positioning">
      {elections ? <Elections /> : <NoElections />}
    </div>
  );
};

export default Dashboard;
