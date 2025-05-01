import React from "react";
import addElections from "../../assets/plus (1) 1.svg";
import "./style.css";

const CreateElections = () => {
  return (
    <div className="create-elections-container">
      <h1>Create Elections</h1>
      <img src={addElections} alt="" />
    </div>
  );
};

export default CreateElections;
