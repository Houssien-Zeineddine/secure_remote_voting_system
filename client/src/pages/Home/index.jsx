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
import collapse from "../../assets/Shape.svg";
import expand from "../../assets/expand.svg";
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
      <div className="our-features-container">
        <h2>Our Features</h2>
        <p>
          We offer a robust and reliable online voting solution designed to
          exceed expectations. Our platform combines secure, user-friendly
          polling software with intelligent threat detection systems to ensure
          the integrity of every vote.
        </p>
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
          <div>
            <div className="about-us-list">
              <div className="rounded-number">1</div>
              <div>
                <h4>What We Do</h4>
                <p>
                  We combine cutting-edge artificial intelligence, geolocation
                  tracking, and real-time monitoring to:
                </p>
                <ul>
                  <li>
                    <strong>Ensure Voter Legitimacy:</strong> By detecting
                    suspicious activity such as duplicate votes, bots, or
                    abnormal behavior.
                  </li>
                  <li>
                    <strong>Protect the Voting Process:</strong> Using location
                    and device checks to reduce fraud and maintain fairness.
                  </li>
                  <li>
                    <strong>Simplify Participation:</strong> Giving voters a
                    secure, user-friendly interface to cast their vote remotely
                    from approved regions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-us-list">
              <div className="rounded-number">2</div>
              <div>
                <h4>Our Core Values</h4>
                <ul>
                  <li>
                    <strong>Security First:</strong> Every vote is protected
                    using smart detection systems and encryption.
                  </li>
                  <li>
                    <strong>Transparency:</strong> Users are informed of every
                    step, from verification to vote confirmation.
                  </li>
                  <li>
                    <strong>Inclusion:</strong> We believe in equal access to
                    democracy, regardless of physical location
                  </li>
                </ul>
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
          <div className="questions-container">
            <div className="questions">
              <p className="rounded-number">1</p>
              <div className="question-section">
                <div className="question">
                  <p>Can I vote more than once?</p>
                  <img
                    src={collapse}
                    alt="Collapse Question"
                    className="collapse-question"
                  />
                  <img
                    src={expand}
                    alt="Expand Question"
                    className="expand-question"
                  />
                </div>
                <p>
                  No. Each voter is allowed to cast only one vote. Any attempt
                  to vote more than once will be blocked and logged for security
                  review.
                </p>
              </div>
            </div>
            <div className="questions">
              <p className="rounded-number">2</p>
              <div className="question-section">
                <div className="question">
                  <p>Why do you need my location and IP address?</p>
                  <img
                    src={collapse}
                    alt="Collapse Question"
                    className="collapse-question"
                  />
                  <img
                    src={expand}
                    alt="Expand Question"
                    className="expand-question"
                  />
                </div>
                <p>
                  Your location and IP are used to confirm that you’re voting
                  from an approved region and to prevent fraud. This information
                  is securely processed and never shared.
                </p>
              </div>
            </div>
            <div className="questions">
              <p className="rounded-number">3</p>
              <div className="question-section">
                <div className="question">
                  <p>What devices and browsers are supported?</p>
                  <img
                    src={collapse}
                    alt="Collapse Question"
                    className="collapse-question"
                  />
                  <img
                    src={expand}
                    alt="Expand Question"
                    className="expand-question"
                  />
                </div>
                <p>
                  You can vote using most modern web browsers on desktop,
                  tablet, or smartphone. However, avoid using VPNs, outdated
                  browsers, or automated tools (like scripts), which may cause
                  your session to be flagged.
                </p>
              </div>
            </div>
            <div className="questions">
              <p className="rounded-number">4</p>
              <div className="question-section">
                <div className="question">
                  <p>Can I change my vote after submitting it?</p>
                  <img
                    src={collapse}
                    alt="Collapse Question"
                    className="collapse-question"
                  />
                  <img
                    src={expand}
                    alt="Expand Question"
                    className="expand-question"
                  />
                </div>
                <p>
                  No. Once a vote is submitted and confirmed, it is final and
                  cannot be changed. Please review your choices carefully before
                  voting.
                </p>
              </div>
            </div>
            <div className="questions">
              <p className="rounded-number">5</p>
              <div className="question-section">
                <div className="question">
                  <p>What if I lose connection while voting?</p>
                  <img
                    src={collapse}
                    alt="Collapse Question"
                    className="collapse-question"
                  />
                  <img
                    src={expand}
                    alt="Expand Question"
                    className="expand-question"
                  />
                </div>
                <p>
                  If your session is interrupted before you submit your vote,
                  you may log back in and complete the process. If you already
                  submitted your vote, it will be saved and confirmed.
                </p>
              </div>
            </div>
            <div className="questions">
              <p className="rounded-number">6</p>
              <div className="question-section">
                <div className="question">
                  <p>How is my personal data protected?</p>
                  <img
                    src={collapse}
                    alt="Collapse Question"
                    className="collapse-question"
                  />
                  <img
                    src={expand}
                    alt="Expand Question"
                    className="expand-question"
                  />
                </div>
                <p>
                  Your data is encrypted and stored securely in accordance with
                  best practices. We do not share personal information with any
                  third parties.
                </p>
              </div>
            </div>
            <div className="questions">
              <p className="rounded-number">7</p>
              <div className="question-section">
                <div className="question">
                  <p> Who can I contact if I need help?</p>
                  <img
                    src={collapse}
                    alt="Collapse Question"
                    className="collapse-question"
                  />
                  <img
                    src={expand}
                    alt="Expand Question"
                    className="expand-question"
                  />
                </div>
                <p>
                  You can reach our support team info through the “Contact Us”
                  link on your dashboard. We’re here to assist you throughout
                  the voting process.
                </p>
              </div>
            </div>
          </div>
          <img src={faqs} alt="Frequently Asked Questions" />
        </div>
      </div>
    </div>
  );
};

export default Home;
