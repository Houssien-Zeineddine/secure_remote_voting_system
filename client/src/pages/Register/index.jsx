import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/logos/blue-web-logo-no-bg.svg";
import welcomeIllustration from "../../assets/register illautration.svg";
import "./style.css";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    //handling registration form
  };
  return (
    <div className="registeration-page-container">
      <div className="inside-registeration-page-container">
        <div className="registeration-page-logo">
          <img src={logo} alt="Blue Logo" />
          <div>
            <h2>Fill your Information</h2>
            <h4>Please fill your information</h4>
          </div>
        </div>
        <form action={handleSubmit} className="registeration-form">
          <div className="two-inputs-container">
            <Input
              label="first_name"
              labelText="First Name"
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your first name"
              classNames="input-vertical"
            />
            <Input
              label="middle_name"
              labelText="Middle Name"
              type="text"
              name="middle_name"
              id="middle_name"
              placeholder="Enter your middle name"
              classNames="input-vertical"
            />
          </div>
          <div className="two-inputs-container">
            <Input
              label="last_name"
              labelText="Last Name"
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter your last name"
              classNames="input-vertical"
            />
            <Input
              label="id_number"
              labelText="Birthday"
              type="text"
              name="id_number"
              id="idNumber"
              placeholder="Enter your Id number"
              classNames="input-vertical"
            />
          </div>
          <Input
            label="id_number"
            labelText="ID Number"
            type="text"
            name="id_number"
            id="id_number"
            placeholder="Enter your Id number"
            classNames="input-vertical"
          />
          <Input
            label="email"
            labelText="Email"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            classNames="input-vertical"
          />
          <Input
            label="password"
            labelText="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            classNames="input-vertical"
          />
          <Input
            label="confirmed_password"
            labelText="Password Confirmation"
            type="password"
            name="confirmed_password"
            id="confirmed_password"
            placeholder="Confirm youe entered password"
            classNames="input-vertical"
          />
          <Button
            text="Register"
            variant="blue"
            size="small"
            type="submit"
            className="login-page-btn register-btn"
          />
          <p className="no-account">
            Already have an account?<Link to="/login"> Login</Link>
          </p>
        </form>
      </div>

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
