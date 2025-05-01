import React from "react";
import addElections from "../../assets/plus (1) 1.svg";
import "./style.css";

const CreateElections = ({ header = "Create Elections" }) => {
  return (
    <div className="create-elections-container">
      <h1>{header}</h1>
      <img src={addElections} alt={header} />
    </div>
  );
};

export default CreateElections;
