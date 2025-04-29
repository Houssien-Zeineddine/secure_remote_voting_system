import React from "react";
import politician from "../../assets/Politician giving his speech to public.svg";
import login from "../../assets/Login.svg";
import vote from "../../assets/online vote.svg";
import viewResults from "../../assets/card view result.svg";
import voteOnline from "../../assets/developer 1.svg";
import securedPlatform from "../../assets/web-security 2.svg";
import realTimeResults from "../../assets/pie-chart 1.svg";
import aboutUs from "../../assets/about us.svg";
import faqs from "../../assets/question (1) 1.svg";
// import collapse from "../../assets/Shape.svg";
// import expand from "../../assets/expand.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Questions from "../../components/Questions";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page-container" id="home">
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
      <div className="our-features-container">
        <div className="our-features-header">
          <h2>Our Features</h2>
          <p>
            We offer a robust and reliable online voting solution designed to
            exceed expectations. Our platform combines secure, user-friendly
            polling software with intelligent threat detection systems to ensure
            the integrity of every vote.
          </p>
        </div>
        <div className="our-features-cards">
          <div className="our-features-card">
            <img src={securedPlatform} alt="Secured Platform" />
            <h4>Secured Platform</h4>
            <p>With our system your data is secured</p>
          </div>
          <div className="our-features-card">
            <img src={voteOnline} alt="Vote Online" />
            <h4>Vote Online</h4>
            <p>In just few clicks, you can vote for your best candidate</p>
          </div>
          <div className="our-features-card">
            <img src={realTimeResults} alt="Real Time Results" />
            <h4>Real Time Results</h4>
            <p>View real-time voting results and scores of each candidate</p>
          </div>
        </div>
      </div>
      <div className="about-us" id="about-us">
        <div className="about-us-text">
          <h2>About US</h2>
          <p>
            Secure remote voting is an online voting system that is used to
            gather instant and trustworthy results
          </p>
          <p>We aim to make voting and elections easy, seamless and fair</p>
        </div>
        <div className="about-us-body">
          <div className="about-us-wrapper">
            <div className="about-us-list">
              <div className="rounded-number">1</div>
              <div>
                <h4>What We Do</h4>
                <p>
                  We combine cutting-edge artificial intelligence, geolocation
                  tracking, and real-time monitoring to:
                </p>
                <div>
                  <p>
                    <strong>Ensure Voter Legitimacy</strong>
                    <br /> By detecting suspicious activity such as duplicate
                    votes, bots, or abnormal behavior.
                  </p>
                  <p>
                    <strong>Protect the Voting Process</strong>
                    <br /> Using location and device checks to reduce fraud and
                    maintain fairness.
                  </p>
                  <p>
                    <strong>Simplify Participation</strong>
                    <br /> Giving voters a secure, user-friendly interface to
                    cast their vote remotely from approved regions.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-us-list">
              <div className="rounded-number">2</div>
              <div>
                <h4>Our Core Values</h4>
                <div>
                  <p>
                    <strong>Security First</strong>
                    <br /> Every vote is protected using smart detection systems
                    and encryption.
                  </p>
                  <p>
                    <strong>Transparency</strong>
                    <br /> Users are informed of every step, from verification
                    to vote confirmation.
                  </p>
                  <p>
                    <strong>Inclusion</strong>
                    <br /> We believe in equal access to democracy, regardless
                    of physical location
                  </p>
                </div>
              </div>
            </div>
            <div className="about-us-list">
              <div className="rounded-number">3</div>
              <div>
                <h4>What We Do</h4>
                <p>
                  This project was developed by Houssien Zeineddine a software
                  engineering bootcamp graduate from SE Factory, with
                  backgrounds in technology, defense, and public service. We are
                  proud to contribute to the future of digital democracy.
                </p>
              </div>
            </div>
          </div>

          <img src={aboutUs} alt="About" />
        </div>
      </div>
      <div className="faqs-container" id="faqs">
        <h2 className="faqs-title">Got Questions? We've Got Answers</h2>

        <div className="faqs-body">
          <Questions />
          <img src={faqs} alt="Frequently Asked Questions" />
        </div>
      </div>
    </div>
  );
};

export default Home;
