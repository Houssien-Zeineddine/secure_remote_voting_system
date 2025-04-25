import React from "react";
import politician from "../../assets/Politician giving his speech to public.svg";
import login from "../../assets/Login.svg";
import vote from "../../assets/online vote.svg";
import viewResults from "../../assets/card view result.svg";
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
      <div className="landing-page-cards-container">
        <div className="landing-page-cards">
          <div className="card">
            <div className="card-text">
              <p>step 1</p>
              <h4>Register</h4>
              <p>Create an account to be able to vote</p>
            </div>
            <div>
              <img src={login} alt="Login" />
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <p>step 2</p>
              <h4>Vote</h4>
              <p>Vote for your prefered candidate</p>
            </div>
            <div>
              <img src={vote} alt="Vote Online" />
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <p>step 3</p>
              <h4>View Results</h4>
              <p>View election results</p>
            </div>
            <div>
              <img src={viewResults} alt="View Results" />
            </div>
          </div>
        </div>
        <div className="landing-page-cards-text">
          <h4>
            Make your decision-making process more modern, safe, and efficient
          </h4>
          <p>
            "Make the shift from manual ballot voting to a secure online
            system—without compromising the integrity of your vote."
          </p>
        </div>
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
