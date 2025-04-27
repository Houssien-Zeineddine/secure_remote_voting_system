import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/logos/blue-web-logo-no-bg.svg";
import "./style.css";

const Login = () => {
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
              placeholder="Enter your email"
              classNames="input-vertical full-width"
            />
            <Input
              label="password"
              labelText="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              classNames="input-vertical full-width"
            />
            <Button
              text="Login"
              variant="blue"
              size="small"
              onClick={() => {
                navigate("/login");
              }}
              className="login-page-btn "
            />
            <p className="no-account">
              Don't have an account?<Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="description-container">description</div>
    </div>
  );
};

export default Login;
