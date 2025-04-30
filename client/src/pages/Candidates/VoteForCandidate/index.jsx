import React, { useEffect, useState } from "react";
import defaultProfilePicture from "../../../assets/sidebar icons/default profile picture.jpg";
import Button from "../../../components/Button";
import "./style.css";

const VoteForCandidate = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = () => {
      //calling getcandidates API
      return [
        {
          candidate_name: "candidate 1",
          campaign: "candidate's campaign",
          profile_picture: false,
        },
        {
          candidate_name: "candidate 2",
          campaign: "candidate's campaign",
          profile_picture: false,
        },
        {
          candidate_name: "candidate 3",
          campaign: "candidate's campaign",
          profile_picture: false,
        },
        {
          candidate_name: "candidate 4",
          campaign: "candidate's campaign",
          profile_picture: false,
        },
        {
          candidate_name: "candidate 5",
          campaign: "candidate's campaign",
          profile_picture: false,
        },
        {
          candidate_name: "candidate 6",
          campaign: "candidate's campaign",
          profile_picture: false,
        },
      ];
    };
    setCandidates(fetchCandidates);
  }, []);

  const handleVote = () => {
    //function to add vote to the corresponding candidate
  };

  const handleViewDetails = () => {
    //function to get each candidate's campaign
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
    </div>
  );
};

export default VoteForCandidate;
