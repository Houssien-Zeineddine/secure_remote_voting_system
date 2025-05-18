import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import Dialogue from "../../components/Dialogue";
import addCampaign from "../../assets/plus (1) 1.svg";
import { AuthContext } from "../../components/Context/AuthorizationContext";
import { CheckCampaignContext } from "../../components/Context/CheckCampaignContext";
import { FetchCandidatesContext } from "../../components/Context/FetchCandidatesContext";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import { capitalizeFirstLetter } from "../../Utils/helpers";
import "./style.css";
import axiosInstance from "../../Utils/axios";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const { campaigns, fetchCampaigns } = useContext(CheckCampaignContext);
  const { ongoingActiveElections } = useContext(CheckElectionsContext);

  const [isAddCampaignOpen, setIsAddCampaignOpen] = useState(false);
  const [isEditCampaignOpen, setIsEditCampaignOpen] = useState(false);
  const [campaign, setCampaign] = useState(null);
  const [candidateCampaign, setCandidateCampaign] = useState("");
  const [editingCampaignText, setEditingCampaignText] = useState("");

  const access_token = localStorage.getItem("access_token");

  const openAddCampaignDialog = () => {
    setIsAddCampaignOpen(true);
  };

  const closeAddCampaignDialog = () => {
    setIsAddCampaignOpen(false);
  };

  const openEditCampaignDialog = () => {
    setEditingCampaignText(campaign.campaign);
    setIsEditCampaignOpen(true);
  };

  const closeEditCampaignDialog = () => {
    setIsEditCampaignOpen(false);
  };

  useEffect(() => {
    if (user && campaigns?.length) {
      const userCampaign = campaigns.find((c) => c.user_id === user.id);

      if (userCampaign) {
        setCampaign(userCampaign);
      }
    }
  }, [user, campaigns]);

  console.log("editing campaign t4ext", editingCampaignText);

  const handleAddCampaign = async () => {
    try {
      const response = await axiosInstance.post(
        "/user/candidate/addcampaign",
        {
          elections_id: ongoingActiveElections.id,
          campaign: editingCampaignText,
        },
        { headers: { Authorization: `Bearer ${access_token}` } }
      );
      if (response.status === 200) {
        await fetchCampaigns();
        setCampaign(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCampaign = async () => {
    try {
      const response = await axiosInstance.put(
        "/user/candidate/editcampaign",
        { campaign_id: campaign.id, campaign: editingCampaignText },
        { headers: { Authorization: `Bearer ${access_token}` } }
      );
      if (response.status === 200) {
        await fetchCampaigns();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsEditCampaignOpen(false);
    }
  };

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
              <pre>{campaign.campaign}</pre>
              <div className="edit-campaign-btn">
                <Button
                  text="Edit Campaign"
                  variant="white"
                  size="small"
                  onClick={openEditCampaignDialog}
                />
              </div>
            </div>
          </div>

          {/* edit campaign dialogue */}
          <Dialogue
            isOpen={isEditCampaignOpen}
            onClose={closeEditCampaignDialog}
            title="Edit Campaign"
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
              value={editingCampaignText}
              placeholder="Enter your campaign here..."
              onChange={(e) => setEditingCampaignText(e.target.value)}
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
              value={candidateCampaign}
              placeholder="Enter your campaign here..."
              onChange={(e) => setCandidateCampaign(e.target.value)}
            ></textarea>
          </Dialogue>
        </div>
      )}
    </div>
  );
};

export default AddCampaign;
