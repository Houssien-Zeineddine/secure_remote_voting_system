import React from "react";
import "./style.css";

const Input = ({
  label = "",
  labelText = "",
  type = "text",
  name = "",
  id = "",
  placeholder = "",
  classNames = "",
}) => {
  return (
    <div className={classNames}>
      <label htmlFor={label}>{labelText}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
