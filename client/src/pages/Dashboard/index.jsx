import React from "react";
import Elections from "./Elections";
import NoElections from "../../components/NoElections";
import "./style.css";

const Dashboard = () => {
  const elections = false;
  return (
    <div className="along-sidebar-positioning">
      {elections ? <Elections /> : <NoElections />}
    </div>
  );
};

export default Dashboard;
