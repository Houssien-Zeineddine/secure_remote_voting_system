import React, { useContext } from "react";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import ManageElections from "./ManageElections";
import CreateElections from "../../components/CreateElections";

const AdminPage = () => {
  const { ongoingActiveElections } = useContext(CheckElectionsContext);
  return (
    <div className="along-sidebar-positioning">
      {ongoingActiveElections ? (
        <ManageElections />
      ) : (
        <CreateElections header="Create Elections" />
      )}
    </div>
  );
};

export default AdminPage;
