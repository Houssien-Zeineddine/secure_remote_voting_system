import React from "react";
import { AuthContext } from "../../components/Context/AuthorizationContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import logo from "../../assets/logos/blue-web-logo-no-bg.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import axiosBaseUrl from "../../Utils/axios";
import secureIllustration from "../../assets/web-security login page.svg";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!credentials.password.trim()) {
      setError("Password is required");
      return false;
    }

    try {
      const response = await axiosBaseUrl.post("/guest/login", credentials);
      const token = response.data.access_token;

      if (response.data.status === "error") {
        setError(response.data.message);
      } else {
        localStorage.setItem("access_token", token);
        setUser(response.data.user);
        setError(null);
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response?.status === 422) {
        setError(err.response.data.message || "Invalid email format");
      } else {
        setError(
          err.response?.data?.message || "An error occurred during login"
        );
      }
    }
  };

  return (
    <div className="login-page-container">
      <div className="form-conatiner">
        <div className="inside-form-container">
          <img src={logo} alt="Blue Logo" />
          {error && (
            <div className="error-box">
              <p>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="form-box">
            <Input
              label="email"
              labelText="Email"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              classNames="input-vertical input-width"
              onChange={handleChange}
            />
            <Input
              label="password"
              labelText="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              classNames="input-vertical input-width"
              onChange={handleChange}
            />
            <Button
              text="Login"
              variant="blue"
              size="small"
              type="submit"
              className="login-page-btn "
            />
            <p className="no-account">
              Don't have an account?<Link to="/register"> Register</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="description-container">
        <div className="description-wrapper">
          <Button
            text="Home"
            variant="transparent"
            size="small"
            type="button"
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
