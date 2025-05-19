import React from "react";
import noElections from "../../assets/no elections illustration.svg";
import "./style.css";

const NoElections = () => {
  return (
    <div className="no-elections-container">
      <h1>No Active Elections at the Moment</h1>
      <h4>We're currently between election periods. Stay tuned for upcoming voting opportunities!</h4>
      <img
        src={noElections}
        alt="No Elections"
        className="no-elections-image"
      />
      <p className="info-text">
        When elections are active, you'll be able to:
        <ul>
          <li>View candidate profiles and their campaigns</li>
          <li>Cast your vote securely</li>
          <li>Track election results in real-time</li>
        </ul>
      </p>
    </div>
  );
};

export default NoElections;
