import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import { FetchCandidatesContext } from "../../components/Context/FetchCandidatesContext";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import addCampaign from "../../assets/plus (1) 1.svg";
import Dialogue from "../../components/Dialogue";

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
      {campaign ? (
        <div>there is a campaign</div>
      ) : (
        <div className="create-elections-container">
          <h1>Create Elections</h1>
          <img
            src={addElections}
            alt="Create Elections"
            onClick={openAddElectionsDialog}
            style={{ cursor: "pointer" }}
          />
          {/* add elections dialogue */}
          <Dialogue
            isOpen={isAddElectionsOpen}
            onClose={closeAddElectionsDialog}
            title="Add Elections"
            footerContent={
              <Button
                text="Add Elections"
                variant="blue"
                size="small"
                onClick={handleAddElections}
              />
            }
          >
            <Input
              label="title"
              labelText="Title"
              type="text"
              name="title"
              id="title"
              placeholder="Enter elections title"
              classNames="input-vertical"
              onChange={handleElectionsTitleChange}
            />
            <div className="selection-container">
              <label htmlFor="region">Select Region</label>
              <select
                name="region"
                id="region"
                className="dialogue-select-region"
                value={electionsRegion}
                onChange={handleElectionsRegionChange}
              >
                <option value="beirut">Beirut</option>
                <option value="beqaa">Beqaa</option>
                <option value="mount_lebanon">Mount Lebanon</option>
                <option value="north">North</option>
                <option value="south">South</option>
                <option value="whole_country">Whole Country</option>
              </select>
            </div>
            <textarea
              className="create-elections-textarea"
              value={electionsDescription}
              placeholder="Enter elections description here..."
              onChange={handleElectionsDescriptionChange}
            ></textarea>
          </Dialogue>
        </div>
      )}
    </div>
  );
};

export default AddCampaign;
