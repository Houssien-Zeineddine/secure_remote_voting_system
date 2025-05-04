import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import { FetchCandidatesContext } from "../../components/Context/FetchCandidates";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const { candidates } = useContext(FetchCandidatesContext);

  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    if (user && candidates) {
      const foundCandidate = Object.values(candidates).find(
        (candidate) => candidate.id === user.id
      );

      console.log(foundCandidate);

      if (foundCandidate?.campaign) {
        setCampaign(foundCandidate.campaign);
      }
    }
  }, [user, candidates]);

  //use useEffect to log campaign
  // useEffect(() => {
  //   console.log("Campaign state updated:", campaign); // Logs AFTER state updates
  // }, [campaign]);

  return (
    <div className="along-sidebar-positioning">
      {campaign ? <div>there is a campaign</div> : <div></div>}
    </div>
  );
};

export default AddCampaign;
