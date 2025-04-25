import React from "react";
import politician from "../../assets/Politician giving his speech to public.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page-container">
      <div className="landing-page-description">
        <img src={politician} alt="Politician giving his speech to public" />
        <div className="landing-page-text">
          <h2>Secure AI-Powered Voting Made Simple</h2>
          <p>
            Experience the future of remote voting with our cutting-edge
            platform. Leveraging advanced AI and geolocation technology, we
            ensure every vote is authentic, secure, and tamper-proof — from
            anywhere, anytime.
          </p>
          <Button
            text="Login"
            variant="blue"
            size="big"
            onClick={() => {
              navigate("/login");
            }}
            className="landing-page-btn"
          />
        </div>
      </div>
      <div className="landing-page-cards">
        <p>landing page cards</p>
      </div>
      <div className="our-features">
        <p>our features</p>
      </div>
      <div className="about-us">
        <p>about us</p>
      </div>
      <div className="faqs">
        <p>faqs</p>
      </div>
    </div>
  );
};

export default Home;
