// components/Dialogue/index.js
import React from "react";
import Button from "../../components/Button";
import "./style.css"; // You might want to create separate styles

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
    <div className="dialogue-overlay">
      <div className="dialogue-content">
        <div className="dialogue-header">
          <h2>{title}</h2>
          {closeButton && (
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          )}
        </div>
        <div className="dialogue-body">
          {children} {/* This allows any content to be passed in */}
        </div>
        {footerContent && (
          <div className="dialogue-footer">{footerContent}</div>
        )}
      </div>
    </div>
  );
};

export default Dialogue;
