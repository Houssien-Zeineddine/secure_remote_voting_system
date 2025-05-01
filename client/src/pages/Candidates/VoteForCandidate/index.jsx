import React, { useEffect, useState } from "react";
import defaultProfilePicture from "../../../assets/sidebar icons/default profile picture.jpg";

const VoteForCandidate = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = () => {
      //calling getcandidates API
      return [
        {
          candidate_name: "candidate 1",
          campaign: "candidate's campaign",
          profile_picture: "oicture path",
        },
        {
          candidate_name: "candidate 2",
          campaign: "candidate's campaign",
          profile_picture: "oicture path",
        },
        {
          candidate_name: "candidate 3",
          campaign: "candidate's campaign",
          profile_picture: "oicture path",
        },
        {
          candidate_name: "candidate 4",
          campaign: "candidate's campaign",
          profile_picture: "oicture path",
        },
        {
          candidate_name: "candidate 5",
          campaign: "candidate's campaign",
          profile_picture: "oicture path",
        },
        {
          candidate_name: "candidate 6",
          campaign: "candidate's campaign",
          profile_picture: "oicture path",
        },
      ];
    };
    setCandidates(fetchCandidates);
  }, []);

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteForCandidate;
