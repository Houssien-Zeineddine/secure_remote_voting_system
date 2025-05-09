import React, { useContext, useState } from "react";
import { CheckElectionsContext } from "../../components/Context/CheckElectionsContext";
import { FetchCandidatesContext } from "../../components/Context/FetchCandidatesContext";
import addElections from "../../assets/plus (1) 1.svg";
import Dialogue from "../../components/Dialogue";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./style.css";
import axiosBaseUrl from "../../Utils/axios";

const AdminPage = () => {
  const { ongoingActiveElections, setOngoingActiveElections, fetchElections } =
    useContext(CheckElectionsContext);
  const { candidates, setCandidates, fetchCandidates } = useContext(
    FetchCandidatesContext
  );

  const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false);
  const [isStopElectionsOpen, setIsStopElectionsOpen] = useState(false);
  const [isRemoveCandidateOpen, setIsRemoveCandidateOpen] = useState(false);
  const [isAddElectionsOpen, setIsAddElectionsOpen] = useState(false);
  const [selectedElections, setSelectedElections] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [candidateEmail, setCandidateEmail] = useState("");
  const [electionsTitle, setElectionsTitle] = useState("");
  const [electionsRegion, setElectionsRegion] = useState("");
  const [electionsDescription, setElectionsDescription] = useState("");
  const [error, setError] = useState(null);
  const access_token = localStorage.getItem("access_token");

  // Dialogues
  const openRemoveAddCandidateDialog = (candidate) => {
    setSelectedCandidate(candidate);
    setIsRemoveCandidateOpen(true);
  };

  const closeRemoveCandidateDialog = () => {
    setSelectedCandidate(null);
    setIsRemoveCandidateOpen(false);
  };

  const openStopElectionsDialogue = (elections) => {
    setSelectedElections(elections);
    setIsStopElectionsOpen(true);
  };

  const closeStopElectionsDialogue = () => {
    setSelectedElections(null);
    setIsStopElectionsOpen(false);
  };

  const openAddElectionsDialog = () => {
    setIsAddElectionsOpen(true);
  };

  const closeAddElectionsDialog = () => {
    setIsAddElectionsOpen(false);
  };

  // Elections related logic

  const handleElectionsTitleChange = (e) => {
    setElectionsTitle(e.target.value);
  };

  const handleElectionsRegionChange = (e) => {
    setElectionsRegion(e.target.value);
  };

  const handleElectionsDescriptionChange = (e) => {
    setElectionsDescription(e.target.value);
  };

  const handleAddElections = async () => {
    try {
      const response = await axiosBaseUrl.post(
        "/user/admin/addelections",
        {
          title: electionsTitle,
          region: electionsRegion,
          description: electionsDescription,
        },
        { headers: { Authorization: `Beare ${access_token}` } }
      );

      if (response.status === 200) {
        await fetchElections();
        setIsAddElectionsOpen(false);
        setElectionsTitle("");
        setElectionsRegion("");
        setElectionsDescription("");
      }
    } catch {}
  };

  const handleConfirmStopElections = async () => {
    try {
      await axiosBaseUrl.delete(
        "/user/admin/deleteelections",
        { id: selectedElections.id },
        { headers: { Authorization: `Bearer ${access_token}` } }
      );

      await fetchElections();
    } catch (error) {
      console.log("No elections found to delete");
    } finally {
      closeStopElectionsDialogue();
      setOngoingActiveElections(false);
    }
  };

  // Candidate related logic

  const handleEmailChange = (e) => {
    setCandidateEmail(e.target.value);
  };

  const handleAddCandidate = async () => {
    try {
      const response = await axiosBaseUrl.put(
        "/user/admin/addcandidate",
        { email: candidateEmail },
        { headers: { Authorization: `Bearer ${access_token}` } }
      );

      if (response.status === 200) {
        await fetchCandidates();
        setIsAddCandidateOpen(false);
        setCandidateEmail("");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Failed to add candidate. Please try again.";
      setError(errorMessage);
    }
  };

  const handleConfirmRemoveCandidate = async () => {
    try {
      await axiosBaseUrl.put(
        "/user/admin/candidates",
        { id: selectedCandidate.id },
        { headers: { Authorization: `Bearer ${access_token}` } }
      );

      await fetchCandidates();
    } catch (err) {
      console.error("Remove candidate failed", err);
    } finally {
      closeRemoveCandidateDialog();
    }
  };

  return (
    <div className="along-sidebar-positioning">
      {ongoingActiveElections ? (
        <div className="add-candidate-container">
          <div className="inside-add-candidate-container">
            <h2>{ongoingActiveElections.title}</h2>

            <div className="add-candidate-btn-wrapper">
              <h4>Candidates List</h4>
              <Button
                text="Add Candidate"
                variant="blue"
                size="medium"
                onClick={() => setIsAddCandidateOpen(true)}
              />
            </div>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate.id}>
                    <td>
                      {candidate.first_name} {candidate.middle_name}{" "}
                      {candidate.last_name}
                    </td>
                    <td>{candidate.email}</td>
                    <td>
                      <a
                        href="#remove"
                        onClick={(e) => {
                          e.preventDefault();
                          openRemoveAddCandidateDialog(candidate);
                        }}
                      >
                        Remove
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
                onClick={() => {
                  openStopElectionsDialogue(ongoingActiveElections);
                }}
              />
            </div>

            {/* Add Candidate Dialog */}
            <Dialogue
              isOpen={isAddCandidateOpen}
              onClose={() => {
                setIsAddCandidateOpen(false);
                setError(null);
              }}
              title="Add Candidate"
              footerContent={
                <>
                  <Button
                    text="Add"
                    variant="blue"
                    size="small"
                    onClick={handleAddCandidate}
                  />
                </>
              }
            >
              {error && <div className="error-message">{error}</div>}
              <Input
                label="candidate_email"
                labelText="Email"
                type="email"
                name="candidate_email"
                placeholder="Enter candidate email"
                classNames="input-vertical"
                onChange={handleEmailChange}
              />
              {/* <Input
                label="candidate_fullname"
                labelText="Full Name"
                type="text"
                name="candidate_fullname"
                placeholder="Enter full name"
                classNames="input-vertical"
              /> */}
            </Dialogue>

            {/* Stop Elections Dialog */}
            <Dialogue
              isOpen={isStopElectionsOpen}
              onClose={() => setIsStopElectionsOpen(false)}
              title="Stop Elections?"
            >
              <div className="yes-no-btn-wrapper">
                <Button
                  text="Yes"
                  variant="blue"
                  size="small"
                  onClick={handleConfirmStopElections}
                />
                <Button
                  text="No"
                  variant="red"
                  size="small"
                  onClick={closeStopElectionsDialogue}
                />
              </div>
            </Dialogue>

            {/* Remove Candidate Dialog */}
            <Dialogue
              isOpen={isRemoveCandidateOpen}
              onClose={closeRemoveCandidateDialog}
              title="Confirm Remove Candidate"
              footerContent={
                <div className="yes-no-btn-wrapper">
                  <Button
                    text="No"
                    variant="white"
                    size="small"
                    onClick={closeRemoveCandidateDialog}
                  />
                  <Button
                    text="Yes"
                    variant="red"
                    size="small"
                    onClick={handleConfirmRemoveCandidate}
                  />
                </div>
              }
            >
              {selectedCandidate && (
                <>
                  <p>
                    Remove{" "}
                    <strong>
                      {selectedCandidate.first_name}{" "}
                      {selectedCandidate.last_name}
                    </strong>{" "}
                    from the election?
                  </p>
                  <p>This cannot be undone.</p>
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
              placeholder="Enter elections description here..."
              onChange={handleElectionsDescriptionChange}
            ></textarea>
          </Dialogue>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
