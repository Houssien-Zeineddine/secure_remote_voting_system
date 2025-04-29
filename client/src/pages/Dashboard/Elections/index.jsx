import React from "react";
import Button from "../../../components/Button";
import politician from "../../../assets/Politician giving his speech to public.svg";
import "./style.css";

const Elections = () => {
  const registeredVoters = 200; //getting voters number from backend
  const totalVotes = 220; //getting voters number from backend
  const malisciousVotes = 20; //getting voters number from backend
  return (
    <div className="elections-dashboard-container">
      <div className="description-live-results-container">
        <div className="dashboard-description-container">
          <div className="dashboard-description">
            <h4>Ongoing Elections</h4>
            <h2>Elections Name</h2>
            <Button
              text="Vote Now"
              variant="blue"
              size="small"
              onClick={() => navigate("/vote")}
              className="vote-now-btn"
            />
          </div>
          <img src={politician} alt="Politician giving his speech to public" />
        </div>
        <div className="dashboard-live-results">
          <div className="candidates-names">
            <p>candidate 1</p>
            <p>candidate 1</p>
            <p>candidate 1</p>
            <p>candidate 1</p>
            <p>candidate 1</p>
            <p>candidate 1</p>
            <p>candidate 1</p>
            <p>candidate 1</p>
            <p>candidate 1</p>
          </div>
          <div className="live-results-bar"></div>
        </div>
      </div>
      <div className="statistics-container">
        <h4>Voting Process</h4>
        <div className="round-div registered-voter">
          <p>{registeredVoters}</p>
        </div>
        <p>Total Number of Registered Voters</p>
        <div className="round-div total-votes">
          <p>{totalVotes}</p>
        </div>
        <p>Total Number of Votes</p>
        <div className="round-div maliscious-votes">
          <p>{malisciousVotes}</p>
        </div>
        <p>Total Number of Malicious votes</p>
      </div>
    </div>
  );
};

export default Elections;
