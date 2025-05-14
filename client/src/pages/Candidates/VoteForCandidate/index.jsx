import React, { useContext, useState } from "react";
import defaultProfilePicture from "../../../assets/sidebar icons/default profile picture.jpg";
import Button from "../../../components/Button";
import "./style.css";
import Dialogue from "../../../components/Dialogue";
import { FetchCandidatesContext } from "../../../components/Context/FetchCandidatesContext";
import { CheckCampaignContext } from "../../../components/Context/CheckCampaignContext";
import { capitalizeFirstLetter } from "../../../Utils/helpers";
import getProfilePictureUrl from "../../../Utils/helpers";
import { CheckElectionsContext } from "../../../components/Context/CheckElectionsContext";

const VoteForCandidate = () => {
  const { candidates } = useContext(FetchCandidatesContext);
  const { campaigns } = useContext(CheckCampaignContext);
  const { ongoingActiveElections } = useContext(CheckElectionsContext);

  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);
  const [isVoteToCandidateOpen, setIsVoteToCandidateOpen] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const handleVote = () => {
    //function to add vote to the corresponding candidate
  };

  const openVoteToCandidateDialog = (candidate) => {
    setSelectedCandidate(candidate);
    setIsVoteToCandidateOpen(true);
  };

  const closeVoteToCandidateDialog = () => {
    setSelectedCandidate("");
    setIsVoteToCandidateOpen(false);
  };

  const getCandidateWithCampaign = (candidate) => {
    const campaign = campaigns.find((c) => c.user_id === candidate.id);
    return {
      ...candidate,
      campaign: campaign?.campaign || "No campaign information available",
    };
  };

  const handleViewDetails = (candidate) => {
    const candidateWithCampaign = getCandidateWithCampaign(candidate);
    setSelectedCandidate(candidateWithCampaign);
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
                candidate.profile_picture_path
                  ? getProfilePictureUrl(candidate.profile_picture_path)
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
                onClick={() => openVoteToCandidateDialog(candidate)}
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
        <p>{selectedCandidate.campaign}</p>
      </Dialogue>

      {/* Dialogue to double check before voting */}
      <Dialogue
        isOpen={isVoteToCandidateOpen}
        onClose={closeVoteToCandidateDialog}
        title={`Confirm voting to ${capitalizeFirstLetter(
          selectedCandidate?.first_name
        )} ${capitalizeFirstLetter(
          selectedCandidate?.middle_name
        )} ${capitalizeFirstLetter(selectedCandidate?.last_name)}`}
        footerContent={
          <div className="yes-no-btn-wrapper">
            <Button
              text="No"
              variant="white"
              size="small"
              onClick={closeVoteToCandidateDialog}
            />
            <Button
              text="Yes"
              variant="red"
              size="small"
              onClick={handleVote}
            />
          </div>
        }
      >
        {selectedCandidate && (
          <>
            <p>
              Are you sure you want to vote to{" "}
              <strong>
                {`${capitalizeFirstLetter(
                  selectedCandidate?.first_name
                )} ${capitalizeFirstLetter(
                  selectedCandidate?.middle_name
                )} ${capitalizeFirstLetter(selectedCandidate?.last_name)}`}
              </strong>{" "}
              ?
            </p>
            <p>This cannot be undone.</p>
          </>
        )}
      </Dialogue>
    </div>
  );
};

export default VoteForCandidate;
