import React, { useContext, useState } from "react";
import defaultProfilePicture from "../../../assets/sidebar icons/default profile picture.jpg";
import Button from "../../../components/Button";
import "./style.css";
import Dialogue from "../../../components/Dialogue";
import { FetchCandidatesContext } from "../../../components/Context/FetchCandidatesContext";
import { capitalizeFirstLetter } from "../../../Utils/helpers";

const VoteForCandidate = () => {
  const { candidates } = useContext(FetchCandidatesContext);

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const handleVote = () => {
    //function to add vote to the corresponding candidate
  };

  const handleViewDetails = (candidate) => {
    console.log("Selected Candidate:", candidate);
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
        {candidates.map((candidate, index) => (
          <div key={index} className="candidate-card">
            <img
              src={
                candidate.profile_picture
                  ? candidate.profile_picture
                  : defaultProfilePicture
              }
              alt=""
            />
            <h2>
              {capitalizeFirstLetter(candidate.first_name)}{" "}
              {capitalizeFirstLetter(candidate.middle_name)}{" "}
              {capitalizeFirstLetter(candidate.last_name)}
            </h2>
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
                onClick={() => handleViewDetails(candidate)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* dialogue/Dialog for candidate details */}
      <Dialogue
        isOpen={isDialogueOpen}
        onClose={closeDialogue}
        title={`${capitalizeFirstLetter(
          selectedCandidate?.first_name
        )} ${capitalizeFirstLetter(
          selectedCandidate?.middle_name
        )} ${capitalizeFirstLetter(selectedCandidate?.last_name)}'s Campaign`}
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
