import React from "react";
import "./style.css";

const Input = ({
  label = "",
  labelText = "",
  type = "text",
  name = "",
  id = "",
  placeholder = "",
  value,
  classNames = "",
  onChange,
}) => {
  return (
    <div className={classNames}>
      <label htmlFor={label}>{labelText}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
