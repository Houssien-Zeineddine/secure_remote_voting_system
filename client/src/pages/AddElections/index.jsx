import React, { useContext, useState } from "react";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import addElections from "../../assets/plus (1) 1.svg";
import Dialogue from "../../components/Dialogue";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./style.css";

const AdminPage = () => {
  const { ongoingActiveElections } = useContext(CheckElectionsContext);

  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  const closeDialogue = () => {
    setIsDialogueOpen(false);
  };

  const handleViewDetails = (candidate) => {
    setIsDialogueOpen(true);
  };

  const handleAddElections = () => {
    //API adding elections
  };

  return (
    <div className="along-sidebar-positioning">
      {ongoingActiveElections ? (
        <div>there is elections</div>
      ) : (
        <div className="create-elections-container">
          <h1>Create Elections</h1>
          <img
            src={addElections}
            alt="Create Elections"
            onClick={handleViewDetails}
          />
          <Dialogue
            isOpen={isDialogueOpen}
            onClose={closeDialogue}
            title={"Add Elections"}
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
            />
            <div className="selection-container">
              <label htmlFor="region">Select Region</label>
              <select
                name="region"
                id="region"
                className="dialogue-select-region"
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
              placeholder="Enter elections description here..."
            ></textarea>
          </Dialogue>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
