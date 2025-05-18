import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/blue-web-logo-no-bg.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import axiosBaseUrl from "../../Utils/axios";
import welcomeIllustration from "../../assets/register illautration.svg";
import "./style.css";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    id_number: "",
    birthday: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState(null);

  //setting the data entered  by user
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    console.log(userData);

    try {
      const response = await axiosBaseUrl.post("guest/register", userData);
      navigate("/login");
      console.log(response.data);
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data) {
        const { message, errors } = err.response.data;

        const allErrors = [];
        if (errors) {
          Object.values(errors).forEach((fieldErrors) => {
            allErrors.push(...fieldErrors);
          });
          setError(allErrors.join(" | "));
        } else {
          setError(message || "An error occurred.");
        }
      } else {
        setError("An unexpected error occurred.");
      }
    }
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
        <form onSubmit={handleSubmit} className="registeration-form">
          {error && (
            <div className="error-message">
              <p>{error.split(" | ")[0]}</p>
            </div>
          )}
          <div className="two-inputs-container">
            <Input
              label="first_name"
              labelText="First Name"
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your first name"
              classNames="input-vertical"
              onChange={handleChange}
            />
            <Input
              label="middle_name"
              labelText="Middle Name"
              type="text"
              name="middle_name"
              id="middle_name"
              placeholder="Enter your middle name"
              classNames="input-vertical"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <Input
              label="birthday"
              labelText="Birthday"
              type="date"
              name="birthday"
              id="birthday"
              classNames="input-vertical birthday-input"
              placeholder="Enter your birthday"
              onChange={handleChange}
            />
          </div>
          <div className="two-inputs-container">
            <Input
              label="id_number"
              labelText="ID Number"
              type="text"
              name="id_number"
              id="id_number"
              placeholder="Enter your Id number"
              classNames="input-vertical "
              onChange={handleChange}
            />
            <Input
              label="email"
              labelText="Email"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              classNames="input-vertical"
              onChange={handleChange}
            />
          </div>
          <div className="two-inputs-container">
            <Input
              label="password"
              labelText="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              classNames="input-vertical"
              onChange={handleChange}
            />
            <Input
              label="password_confirmation"
              labelText="Password Confirmation"
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="Confirm youe entered password"
              classNames="input-vertical"
              onChange={handleChange}
            />
          </div>
          <div className="register-login-container">
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
          </div>
        </form>
      </div>

      <div className="description-container">
        <div className="description-wrapper">
          <Button
            text="Home"
            variant="transparent"
            size="small"
            onClick={() => navigate("/")}
            className="home-nav-btn"
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
