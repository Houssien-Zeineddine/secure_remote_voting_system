import React from "react";

const Button = ({
  text = "Button",
  variant = "primary",
  size = "medium",
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
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
