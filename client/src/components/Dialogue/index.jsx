import React from "react";
import "./style.css";

const Dialogue = ({
  isOpen,
  onClose,
  title,
  children,
  footerContent,
  closeButton = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="dialogue-backdrop">
      <div className="dialogue-content">
        <div className="dialogue-header">
          <h2>{title}</h2>
          {closeButton && (
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          )}
        </div>
        <div className="dialogue-body">{children}</div>
        {footerContent && (
          <div className="dialogue-footer">{footerContent}</div>
        )}
      </div>
    </div>
  );
};

export default Dialogue;
