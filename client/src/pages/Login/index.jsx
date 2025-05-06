import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/logos/blue-web-logo-no-bg.svg";
import secureIllustration from "../../assets/web-security login page.svg";
import axiosBaseUrl from "../../Utils/axios";
import { AuthContext } from "../../components/Context/AuthContext";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosBaseUrl.post("/guest/login", credentials);

      console.log("response.data", response.data);

      const token = response.data.access_token;

      if (response.data.status === "error") {
        setError(response.data.payload);
      } else {
        localStorage.setItem("access_token", token);
        setUser(response.data.user);
        console.log(user);
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid credentials");
    }

    console.log("user: ", user);
    console.log("error: ", error);
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
