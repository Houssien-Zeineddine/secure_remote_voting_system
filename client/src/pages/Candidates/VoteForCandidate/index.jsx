import React, { useContext, useState } from "react";
import defaultProfilePicture from "../../../assets/sidebar icons/default profile picture.jpg";
import Button from "../../../components/Button";
import "./style.css";
import Dialogue from "../../../components/Dialogue";
import { FetchCandidatesContext } from "../../../components/Context/FetchCandidates";

const VoteForCandidate = () => {
  const { candidates } = useContext(FetchCandidatesContext);

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const handleVote = () => {
    //function to add vote to the corresponding candidate
  };

  const handleViewDetails = (candidate) => {
    setSelectedCandidate(candidate);
    setIsDialogueOpen(true);
  };

  const closeDialogue = () => {
    setIsDialogueOpen(false);
  };

  return (
    <div className="candidates-container">
      <h1>Vote for your Preferred Candidate</h1>
      <div className="candidates-cards-container">
        {candidates.map((candidate_info, index) => (
          <div key={index} className="candidate-card">
            <img
              src={
                candidate_info.profile_picture
                  ? candidate_info.profile_picture
                  : defaultProfilePicture
              }
              alt=""
            />
            <h2>{candidate_info.candidate_name}</h2>
            <div className="vote-view-details-btns">
              <Button
                text="Vote"
                variant="blue"
                size="small"
                onClick={handleVote}
              />
              <Button
                text="View Details"
                variant="white"
                size="small"
                onClick={handleViewDetails}
              />
            </div>
          </div>
        ))}
      </div>

      {/* dialogue/Dialog for candidate details */}
      <Dialogue
        isOpen={isDialogueOpen}
        onClose={closeDialogue}
        title={`${selectedCandidate?.candidate_name}'s Campaign`}
        footerContent={
          <Button
            text="Close"
            variant="white"
            size="small"
            onClick={closeDialogue}
          />
        }
      >
        <p>{selectedCandidate?.campaign}</p>
      </Dialogue>
    </div>
  );
};

export default VoteForCandidate;
