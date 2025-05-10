import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import { CheckCampaignContext } from "../../components/Context/CheckCampaignContext";
import { FetchCandidatesContext } from "../../components/Context/FetchCandidatesContext";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import capitalizeFirstLetter from "../../Utils/helpers";
import addCampaign from "../../assets/plus (1) 1.svg";
import Dialogue from "../../components/Dialogue";
import Button from "../../components/Button";
import "./style.css";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
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

  const handleEditCampaign = () => {};

  useEffect(() => {
    if (user && campaigns?.length) {
      const userCampaign = campaigns.find((c) => c.user_id === user.id);

      if (userCampaign) {
        setCampaign(userCampaign);
      }
    }
  }, [user, campaigns]);

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
      {campaign ? (
        <div className="campaign-page-container">
          <div className="campaign-container">
            <h1>
              {capitalizeFirstLetter(user.first_name)}{" "}
              {capitalizeFirstLetter(user.middle_name)}{" "}
              {capitalizeFirstLetter(user.last_name)}
            </h1>
            <div className="campaign-platform-container">
              <h2>Campaign Platform</h2>
              <p>{campaign.campaign}</p>
              <div className="edit-campaign-btn">
                <Button
                  text="Edit Campaign"
                  variant="transparent"
                  size="small"
                  onClick={handleEditCampaign}
                />
              </div>
            </div>
          </div>

          {/* edit campaign dialogue */}
          <Dialogue
            isOpen={isEditCampaignOpen}
            onClose={closeEditCampaignDialog}
            title="Add Campaign"
            footerContent={
              <Button
                text="Save Changes"
                variant="blue"
                size="small"
                onClick={handleEditCampaign}
              />
            }
          >
            <textarea
              className="create-elections-textarea"
              value={campaign.campaign}
              placeholder="Enter your campaign here..."
              onChange={handleCampaignChange}
            ></textarea>
          </Dialogue>
        </div>
      ) : (
        <div className="create-elections-container">
          <h1>Add Campaign</h1>
          <img
            src={addCampaign}
            alt="Add Campaign"
            onClick={openAddCampaignDialog}
            style={{ cursor: "pointer" }}
          />
          {/* add campaign dialogue */}
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
