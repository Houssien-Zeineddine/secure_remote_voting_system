import React, { useContext } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import { FetchCandidatesContext } from "../../components/Context/FetchCandidates";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const { candidates } = useContext(FetchCandidatesContext);

  console.log(user);
  console.log(candidates);

  return (
    <div className="along-sidebar-positioning">
      <p>Add Campaign</p>
    </div>
  );
};

export default AddCampaign;
