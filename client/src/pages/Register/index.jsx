import React from "react";
import Button from "../../components/Button";
import welcomeIllustration from "../../assets/register illautration.svg";

const Register = () => {
  return (
    <div className="login-page-container">
      <div></div>
      <div className="description-container">
        <div className="description-wrapper">
          <Button
            text="Home"
            variant="transparent"
            size="small"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="inside-description-container">
            <h1>Welcome!</h1>
            <p>
              Welcome to Secure Remote Voting system. Register to vote for your
              preferred candidate
            </p>
            <img src={welcomeIllustration} alt="Secure Web" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
