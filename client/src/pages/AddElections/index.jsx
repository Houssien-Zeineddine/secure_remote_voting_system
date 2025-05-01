import React, { useContext } from "react";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import addElections from "../../assets/plus (1) 1.svg";
import CreateElections from "../../components/CreateElections";
import "./style.css";

const AdminPage = () => {
  const { ongoingActiveElections } = useContext(CheckElectionsContext);
  return (
    <div className="along-sidebar-positioning">
      {ongoingActiveElections ? (
        <div className="create-elections-container">
          <h1>Create Elections</h1>
          <img src={addElections} alt={header} />
        </div>
      ) : (
        <CreateElections header="Create Elections" />
      )}
    </div>
  );
};

export default AdminPage;
