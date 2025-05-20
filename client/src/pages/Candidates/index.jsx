import React, { useContext } from "react";
import NoElections from "../../components/NoElections";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import VoteForCandidate from "./VoteForCandidate";
import "./style.css";

const Candidates = () => {
  const { ongoingActiveElections } = useContext(CheckElectionsContext);

  return (
    <div className="along-sidebar-positioning candidates-container-wrapper">
      {ongoingActiveElections ? <VoteForCandidate /> : <NoElections />}
    </div>
  );
};

export default Candidates;
