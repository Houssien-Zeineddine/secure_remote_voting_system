import React from "react";
import noElections from "../../assets/no elections illustration.svg";
import "./style.css";

const NoElections = () => {
  return (
    <div className="no-elections-container">
      <h1>No Active Elections at the Moment</h1>
      <h4>Looking forward to see you again!</h4>
      <img
        src={noElections}
        alt="No Elections"
        className="no-elections-image"
      />
    </div>
  );
};

export default NoElections;
