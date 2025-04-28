import React from "react";
import { Link, useLocation } from "react-router-dom";
import profilePicture from "../../assets/sidebar icons/default profile picture.jpg";
import dashboardIcon from "../../assets/sidebar icons/white icons/dashboard icon.svg";
import viewProfile from "../../assets/sidebar icons/white icons/profile icon.svg";
import addElection from "../../assets/sidebar icons/white icons/plus icon.svg";
import vote from "../../assets/sidebar icons/white icons/vote icon.svg";
import guidelines from "../../assets/sidebar icons/white icons/guidelines icon.svg";
import settings from "../../assets/sidebar icons/white icons/settings icon.svg";
import blueDashboardIcon from "../../assets/sidebar icons/blue icons/dashboard icon.svg";
import blueViewProfile from "../../assets/sidebar icons/blue icons/profile icon.svg";
import blueAddElection from "../../assets/sidebar icons/blue icons/plus icon.svg";
import blueVote from "../../assets/sidebar icons/blue icons/vote icon.svg";
import blueGuidelines from "../../assets/sidebar icons/blue icons/guidelines icon.svg";
import blueSettings from "../../assets/sidebar icons/blue icons/settings icon.svg";
import "./style.css";

const Sidebar = () => {
  const location = useLocation().pathname;
  // console.log("from sidebar" + location);
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="picture-name-container">
          <img
            src={profilePicture}
            alt="No Profile Pictire"
            className="profilePicture"
          />
          <h2 className="user-name">User Name</h2>
        </div>
        <Link to="/dashboard" className="sidebar-link">
          <img src={blueDashboardIcon} alt="" />
          <p className="sidebar-tag">Dashboard</p>
        </Link>
        <Link to="/profile" className="sidebar-link">
          <img src={blueViewProfile} alt="" />
          <p className="sidebar-tag">View Profile</p>
        </Link>
        <Link to="/dashboard" className="sidebar-link">
          <img src={blueAddElection} alt="" />
          <p className="sidebar-tag">Add Elections</p>
        </Link>
        <Link to="/candidates" className="sidebar-link">
          <img src={blueVote} alt="" />
          <p className="sidebar-tag">Vote</p>
        </Link>
        <Link to="/guidelines" className="sidebar-link">
          <img src={blueGuidelines} alt="" />
          <p className="sidebar-tag">Guidelines</p>
        </Link>
        <Link to="/settings" className="sidebar-link">
          <img src={blueSettings} alt="" />
          <p className="sidebar-tag">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
