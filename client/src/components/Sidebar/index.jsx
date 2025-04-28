import React from "react";
import { Link, useLocation } from "react-router-dom";
import profilePicture from "../../assets/sidebar icons/default profile picture.jpg";
import dashboardIcon from "../../assets/sidebar icons/white icons/dashboard icon.svg";
import viewProfile from "../../assets/sidebar icons/white icons/profile icon.svg";
import addElections from "../../assets/sidebar icons/white icons/plus icon.svg";
import vote from "../../assets/sidebar icons/white icons/vote icon.svg";
import guidelines from "../../assets/sidebar icons/white icons/guidelines icon.svg";
import settings from "../../assets/sidebar icons/white icons/settings icon.svg";
import blueDashboardIcon from "../../assets/sidebar icons/blue icons/dashboard icon.svg";
import blueViewProfile from "../../assets/sidebar icons/blue icons/profile icon.svg";
import blueAddElections from "../../assets/sidebar icons/blue icons/plus icon.svg";
import blueVote from "../../assets/sidebar icons/blue icons/vote icon.svg";
import blueGuidelines from "../../assets/sidebar icons/blue icons/guidelines icon.svg";
import blueSettings from "../../assets/sidebar icons/blue icons/settings icon.svg";
import "./style.css";
import Candidates from "../../pages/Candidates";

const Sidebar = () => {
  const location = useLocation().pathname;

  const user = "admin";

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
        <Link
          to="/dashboard"
          className={
            location === "/dashboard" ? "sidebar-link-current" : "sidebar-link"
          }
        >
          <img
            src={location === "/dashboard" ? dashboardIcon : blueDashboardIcon}
            alt=""
          />
          <p className="sidebar-tag">Dashboard</p>
        </Link>
        <Link
          to="/profile"
          className={
            location === "/profile" ? "sidebar-link-current" : "sidebar-link"
          }
        >
          <img
            src={location === "/profile" ? viewProfile : blueViewProfile}
            alt=""
          />
          <p className="sidebar-tag">View Profile</p>
        </Link>
        {user === "admin" && (
          <Link
            to="/addelections"
            className={
              location === "/addelections"
                ? "sidebar-link-current"
                : "sidebar-link"
            }
          >
            <img
              src={
                location === "/addelections" ? addElections : blueAddElections
              }
              alt=""
            />
            <p className="sidebar-tag">Add Elections</p>
          </Link>
        )}
        {user === "candidate" && (
          <Link
            to="/addcampaign"
            className={
              location === "/addcampaign"
                ? "sidebar-link-current"
                : "sidebar-link"
            }
          >
            <img
              src={
                location === "/addcampaign" ? addElections : blueAddElections
              }
              alt=""
            />
            <p className="sidebar-tag">Add Campaign</p>
          </Link>
        )}
        <Link
          to="/candidates"
          className={
            location === "/candidates" ? "sidebar-link-current" : "sidebar-link"
          }
        >
          <img src={location === "/candidates" ? vote : blueVote} alt="" />
          <p className="sidebar-tag">Vote</p>
        </Link>
        <Link
          to="/guidelines"
          className={
            location === "/guidelines" ? "sidebar-link-current" : "sidebar-link"
          }
        >
          <img
            src={location === "/guidelines" ? guidelines : blueGuidelines}
            alt=""
          />
          <p className="sidebar-tag">Guidelines</p>
        </Link>
        <Link
          to="/settings"
          className={
            location === "/settings" ? "sidebar-link-current" : "sidebar-link"
          }
        >
          <img
            src={location === "/settings" ? settings : blueSettings}
            alt=""
          />
          <p className="sidebar-tag">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
