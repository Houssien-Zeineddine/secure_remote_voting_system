import React from "react";

const Button = ({
  text = "Button",
  variant = "primary",
  size = "medium",
  type = "button",
  onClick,
  className = "",
}) => {
  const buttonClasses = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    className,
  ].join(" ");
  return (
    <button className={buttonClasses} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
