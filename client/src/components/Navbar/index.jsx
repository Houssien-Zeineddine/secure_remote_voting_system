import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./style.css";
import "../Button/style.css";
import Button from "../Button";
import logo from "../../assets/AI-powered-secure-remote-voting-system-logo-white-bg 2.svg";

const Navbar = () => {
  const { user, setUser } = use(AuthContext);
  const navigate = useNavigate();

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
              <Link to={"/"}>
                <img src={logo} alt="Secure Remote Voting" />
              </Link>
            </li>
          </div>

          <div className="nav-items">
            <div className="nav-links">
              <li className="nav-link">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav-link">
                <Link to={"AboutUs"}>About Us</Link>
              </li>
              <li className="nav-link">
                <Link to={"faqs"}>FAQs</Link>
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
