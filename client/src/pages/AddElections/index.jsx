import React, { useContext, useState } from "react";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import { FetchCandidatesContext } from "../../components/Context/FetchCandidates";
import addElections from "../../assets/plus (1) 1.svg";
import Dialogue from "../../components/Dialogue";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./style.css";

const AdminPage = () => {
  const { ongoingActiveElections } = useContext(CheckElectionsContext);
  const { candidates } = useContext(FetchCandidatesContext);

  const [isDialogueOpen, setIsDialogueOpen] = useState(false);
  const [isStopElectionsDialogue, setIsStopElectionsDialogue] = useState(false);

  const [isRemoveCandidateDialogueOpen, setIsRemoveCandidateDialogueOpen] =
    useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const closeDialogue = () => {
    setIsDialogueOpen(false);
    setIsStopElectionsDialogue(false);
  };

  const closeRemoveCandidateDialogue = () => {
    setIsRemoveCandidateDialogueOpen(false);
    setSelectedCandidate(null);
  };

  const handleViewDetails = (candidate) => {
    setIsDialogueOpen(true);
  };

  const handleAddElections = () => {
    //API adding elections
  };

  const handleOpenDialogue = () => {
    setIsDialogueOpen(true);
  };

  const handleAddCandidate = () => {
    //API to add candidate
    closeDialogue();
  };

  const handleOpenStopElectionsDialogue = () => {
    setIsStopElectionsDialogue(true);
  };

  const handleStopElections = () => {
    //API to delete electoins
    setIsStopElectionsDialogue(false);
  };

  const handleRemoveCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
    setIsRemoveCandidateDialogueOpen(true);
  };

  const handleConfirmRemoveCandidate = () => {
    // API to remove candidate
    console.log("Removing candidate:", selectedCandidate);
    closeRemoveCandidateDialogue();
  };

  return (
    <div className="along-sidebar-positioning">
      {ongoingActiveElections?.ongoing ? (
        <div className="add-candidate-container">
          <div className="inside-add-candidate-container">
            <h2 className="inside-add-candidate-container-header">
              {ongoingActiveElections.title}
            </h2>
            <div className="add-candidate-btn-wrapper">
              <h4>Candidates List</h4>
              <Button
                text="Add Candidate"
                variant="blue"
                size="medium"
                onClick={handleOpenDialogue}
              />
            </div>
            {/* table of candidates */}
            <table>
              <thead>
                <tr>
                  <th>Candidate Name</th>
                  <th>Candidate Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate, index) => (
                  <tr key={index}>
                    <td>{candidate.candidate_name}</td>
                    <td>{candidate.email}</td>
                    <td>
                      <a
                        href="#remove"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveCandidateClick(candidate);
                        }}
                      >
                        Remove Candidate
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="stop-elections-btn-wrapper">
              <Button
                text="Stop Elections"
                variant="red"
                size="medium"
                onClick={handleOpenStopElectionsDialogue}
              />
            </div>
            {/* Add candidate dialogue */}
            <Dialogue
              isOpen={isDialogueOpen}
              onClose={closeDialogue}
              title={"Add Candidate"}
              footerContent={
                <Button
                  text="Add Candidate"
                  variant="blue"
                  size="small"
                  onClick={handleAddCandidate}
                />
              }
            >
              <Input
                label="candidate_email"
                labelText="Candidate Email"
                type="text"
                name="candidate_email"
                id="candidate_email"
                placeholder="Enter candidate email"
                classNames="input-vertical"
              />
              <Input
                label="candidate_name"
                labelText="Candidate Full Name"
                type="text"
                name="candidate_fullname"
                id="candidate_fullname"
                placeholder="Enter candidate full name"
                classNames="input-vertical"
              />
            </Dialogue>
            {/* check for elections cancelation dialogue */}
            <Dialogue
              isOpen={isStopElectionsDialogue}
              onClose={closeDialogue}
              title={"Are you sure you want to stop elections?"}
            >
              <div className="yes-no-btn-wrapper">
                <Button
                  text="Yes"
                  variant="blue"
                  size="small"
                  onClick={handleStopElections}
                />
                <Button
                  text="No"
                  variant="red"
                  size="small"
                  onClick={closeDialogue}
                />
              </div>
            </Dialogue>
            {/* checko for candidate removal dialogue */}
            <Dialogue
              isOpen={isRemoveCandidateDialogueOpen}
              onClose={closeRemoveCandidateDialogue}
              title={"Confirm Remove Candidate"}
              footerContent={
                <>
                  <div className="yes-no-btn-wrapper">
                    <Button
                      text="No"
                      variant="blue"
                      size="small"
                      onClick={closeRemoveCandidateDialogue}
                    />
                    <Button
                      text="Yes"
                      variant="red"
                      size="small"
                      onClick={handleConfirmRemoveCandidate}
                    />
                  </div>
                </>
              }
            >
              {selectedCandidate && (
                <>
                  <p>Are you sure you want to remove this candidate?</p>
                  <p>
                    <strong>Name:</strong> {selectedCandidate.candidate_name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedCandidate.email}
                  </p>
                  <p>This action cannot be undone.</p>
                </>
              )}
            </Dialogue>
          </div>
        </div>
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
