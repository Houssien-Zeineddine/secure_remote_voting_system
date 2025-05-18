import React, { useContext, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../Context/AuthorizationContext";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/AI-powered-secure-remote-voting-system-logo-white-bg 2.svg";
import Button from "../Button";
import "./style.css";
import "../Button/style.css";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="nav-container">
      <ul className="nav-list">
        <nav className="nav-content">
          <div className="nav-logo">
            <li>
              <HashLink smooth to={"/#home"} onClick={closeMenu}>
                <img
                  src={logo}
                  alt="Secure Remote Voting"
                  className="navbar-logo"
                />
              </HashLink>
            </li>
          </div>

          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
            <div className="nav-links">
              <li
                className={`nav-link ${
                  pathname === "/" && hash === "#home" ? "active" : ""
                }`}
              >
                <HashLink smooth to={"/#home"} onClick={closeMenu}>
                  Home
                </HashLink>
              </li>
              <li
                className={`nav-link ${
                  pathname === "/" && hash === "#about-us" ? "active" : ""
                }`}
              >
                <HashLink smooth to="/#about-us" onClick={closeMenu}>
                  About Us
                </HashLink>
              </li>
              <li
                className={`nav-link ${
                  pathname === "/" && hash === "#faqs" ? "active" : ""
                }`}
              >
                <HashLink smooth to={"/#faqs"} onClick={closeMenu}>
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
                    size="medium"
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                    className="btn-logout"
                  />
                ) : (
                  <Button
                    text="Register"
                    variant="white"
                    size="medium"
                    onClick={() => {
                      navigate("/register");
                      closeMenu();
                    }}
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
