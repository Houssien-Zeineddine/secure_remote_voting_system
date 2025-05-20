import React, { useContext, useState } from "react";
import Button from "../../../components/Button";
import Dialogue from "../../../components/Dialogue";
import axiosInstance from "../../../Utils/axios";
import getProfilePictureUrl from "../../../Utils/helpers";
import defaultProfilePicture from "../../../assets/sidebar icons/default profile picture.jpg";
import { AuthContext } from "../../../components/Context/AuthorizationContext";
import { CheckCampaignContext } from "../../../components/Context/CheckCampaignContext";
import { capitalizeFirstLetter } from "../../../Utils/helpers";
import { CheckElectionsContext } from "../../../components/Context/CheckElectionsContext";
import { FetchCandidatesContext } from "../../../components/Context/FetchCandidatesContext";
import "./style.css";

const VoteForCandidate = () => {
  const { user } = useContext(AuthContext);
  const { candidates } = useContext(FetchCandidatesContext);
  const { campaigns } = useContext(CheckCampaignContext);
  const { ongoingActiveElections } = useContext(CheckElectionsContext);

  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);
  const [isVoteToCandidateOpen, setIsVoteToCandidateOpen] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [voteStatus, setVoteStatus] = useState({ message: "", type: "" });

  const access_token = localStorage.getItem("access_token");

  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      throw new Error("Geolocation is not supported by your browser");
    }

    setIsGettingLocation(true);
    setLocationError(null);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });
      });

      setIsGettingLocation(false);

      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      };
    } catch (error) {
      setIsGettingLocation(false);
      setLocationError(error.message);
      throw error;
    }
  };

  const handleVote = async () => {
    if (isGettingLocation) return; // Prevent multiple clicks

    try {
      setIsGettingLocation(true);
      setLocationError(null);

      const location = await getCurrentLocation();

      const voteData = {
        user_id: user.id,
        candidate_id: selectedCandidate.id,
        elections_id: ongoingActiveElections.id,
        elections_region_id: ongoingActiveElections.region_id,
        latitude: location.latitude,
        longitude: location.longitude,
        accuracy: location.accuracy,
        timestamp: new Date().toISOString(),
      };

      const response = await axiosInstance.post("/user/vote", voteData, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      if (response.data.cancelation_reason) {
        // Vote was cancelled
        setVoteStatus({
          message: response.data.cancelation_reason.replace(/_/g, " "),
          type: "error",
        });
      } else {
        // Vote was successful
        setVoteStatus({
          message: "Your vote has been successfully counted!",
          type: "success",
        });
        setTimeout(() => {
          closeVoteToCandidateDialog();
          setVoteStatus({ message: "", type: "" });
        }, 2000);
      }
    } catch (error) {
      console.error("Voting error:", error);
      setLocationError(error.message || "Failed to verify your location");
    } finally {
      setIsGettingLocation(false);
    }
  };

  const openVoteToCandidateDialog = (candidate) => {
    setSelectedCandidate(candidate);
    setIsVoteToCandidateOpen(true);
    // Reset any previous errors or status
    setLocationError(null);
    setVoteStatus({ message: "", type: "" });
  };

  const closeVoteToCandidateDialog = () => {
    setSelectedCandidate("");
    setIsVoteToCandidateOpen(false);
    setVoteStatus({ message: "", type: "" });
    setLocationError(null);
    setIsGettingLocation(false);
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
    <>
      <div className="candidates-container">
        {voteStatus.type === "success" && !isVoteToCandidateOpen && (
          <div className="vote-success-message">
            <p>{voteStatus.message}</p>
          </div>
        )}
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
      </div>

      {/* Dialogues moved outside the main container */}
      {/* Dialogue for candidate details */}
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
              variant="red"
              size="small"
              onClick={closeVoteToCandidateDialog}
            />
            <Button
              text="Yes"
              variant="blue"
              size="small"
              onClick={handleVote}
              disabled={isGettingLocation || voteStatus.type === "success"}
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
            {isGettingLocation && (
              <p className="location-loading">Verifying your location...</p>
            )}

            {locationError && (
              <p className="location-error">
                Error: {locationError}. Your vote cannot be submitted without
                location verification.
              </p>
            )}

            {voteStatus.message && (
              <p className={`vote-status ${voteStatus.type}`}>
                {voteStatus.message}
              </p>
            )}
          </>
        )}
      </Dialogue>
    </>
  );
};

export default VoteForCandidate;
