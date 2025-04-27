import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/logos/blue-web-logo-no-bg.svg";
import secureIllustration from "../../assets/web-security login page.svg";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    //calling login API
  };
  return (
    <div className="login-page-container">
      <div className="form-conatiner">
        <div className="inside-form-container">
          <img src={logo} alt="Blue Logo" />
          <div className="form-box">
            <Input
              label="email"
              labelText="Email"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              classNames="input-vertical full-width"
            />
            <Input
              label="password"
              labelText="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              classNames="input-vertical full-width"
            />
            <Button
              text="Login"
              variant="blue"
              size="small"
              onClick={handleLogin}
              className="login-page-btn "
            />
            <p className="no-account">
              Don't have an account?<Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="description-container">
        <div className="description-wrapper">
          <Button
            text="Home"
            variant="transparent"
            size="medium"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="inside-description-container">
            <h1>Welcome Back!</h1>
            <p>
              Welcome back to the number 1 secure remote voting system. Please
              login to vote for your preferred candidate
            </p>
            <img src={secureIllustration} alt="Secure Web" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
