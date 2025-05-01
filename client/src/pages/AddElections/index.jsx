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
                text="Close"
                variant="white"
                size="small"
                onClick={closeDialogue}
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
            {/* need to change the below input to select region from list */}
            {/* <Input
              label="description"
              labelText="Description"
              type="text"
              name="description"
              id="description"
              placeholder="Enter elections description"
              classNames="input-vertical"
            /> */}
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
