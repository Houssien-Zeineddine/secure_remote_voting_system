import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import { FetchCandidatesContext } from "../../components/Context/FetchCandidatesContext";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import addCampaign from "../../assets/plus (1) 1.svg";
import Dialogue from "../../components/Dialogue";
import Button from "../../components/Button";
import { CheckCampaignContext } from "../../components/Context/CheckCampaignContext";

const AddCampaign = () => {
  // const { user } = useContext(AuthContext);
  // const { candidates } = useContext(FetchCandidatesContext);
  const { campaigns } = useContext(CheckCampaignContext);

  const [isAddCampaignOpen, setIsAddCampaignOpen] = useState(false);
  const [campaign, setCampaign] = useState(null);

  const openAddCampaignDialog = () => {
    setIsAddCampaignOpen(true);
  };

  const closeAddCampaignDialog = () => {
    setIsAddCampaignOpen(false);
  };

  const handleCampaignChange = (e) => {
    setCampaign(e.target.value);
  };

  const handleAddCampaign = () => {};

  // useEffect(() => {
  //   if (user && candidates) {
  //     const foundCandidate = Object.values(candidates).find(
  //       (candidate) => candidate.id === user.id
  //     );

  //     console.log(foundCandidate);

  //     if (foundCandidate?.campaign) {
  //       setCampaign(foundCandidate.campaign);
  //     }
  //   }
  // }, [user, candidates]);

  //use useEffect to log campaign
  // useEffect(() => {
  //   console.log("Campaign state updated:", campaign); // Logs AFTER state updates
  // }, [campaign]);

  return (
    <div className="along-sidebar-positioning">
      {!campaigns ? (
        <div>there is a campaign</div>
      ) : (
        <div className="create-elections-container">
          <h1>Add Campaign</h1>
          <img
            src={addCampaign}
            alt="Add Campaign"
            onClick={openAddCampaignDialog}
            style={{ cursor: "pointer" }}
          />
          {/* add elections dialogue */}
          <Dialogue
            isOpen={isAddCampaignOpen}
            onClose={closeAddCampaignDialog}
            title="Add Campaign"
            footerContent={
              <Button
                text="Add Campaign"
                variant="blue"
                size="small"
                onClick={handleAddCampaign}
              />
            }
          >
            <textarea
              className="create-elections-textarea"
              value={campaign}
              placeholder="Enter your campaign here..."
              onChange={handleCampaignChange}
            ></textarea>
          </Dialogue>
        </div>
      )}
    </div>
  );
};

export default AddCampaign;
