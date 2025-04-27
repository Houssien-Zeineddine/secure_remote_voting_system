import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../context/AuthContext";
import "./style.css";
import "../Button/style.css";
import Button from "../Button";
import logo from "../../assets/logos/AI-powered-secure-remote-voting-system-logo-white-bg 2.svg";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="nav-container">
      <ul className="nav-list">
        <nav className="nav-content">
          <div className="nav-logo">
            <li>
              <HashLink smooth to={"/#home"}>
                <img
                  src={logo}
                  alt="Secure Remote Voting"
                  className="navbar-logo"
                />
              </HashLink>
            </li>
          </div>

          <div className="nav-items">
            <div className="nav-links">
              <li
                className={`nav-link ${
                  pathname === "/" && hash === "#home" ? "active" : ""
                }`}
              >
                <HashLink smooth to={"/#home"}>
                  Home
                </HashLink>
              </li>
              <li
                className={`nav-link ${
                  pathname === "/" && hash === "#about-us" ? "active" : ""
                }`}
              >
                <HashLink smooth to="/#about-us">
                  About Us
                </HashLink>
              </li>
              <li
                className={`nav-link ${
                  pathname === "/" && hash === "#faqs" ? "active" : ""
                }`}
              >
                <HashLink smooth to={"/#faqs"}>
                  FAQs
                </HashLink>
              </li>
            </div>

            <div className="nav-btn">
              <li>
                {user ? (
                  <Button
                    text="Logout"
                    variant="transparent"
                    size="big"
                    onClick={handleLogout}
                    className="btn-logout"
                  />
                ) : (
                  <Button
                    text="Register"
                    variant="white"
                    size="big"
                    onClick={() => navigate("/register")}
                    className="btn-register"
                  />
                )}
              </li>
            </div>
          </div>
        </nav>
      </ul>
    </div>
  );
};

export default Navbar;
