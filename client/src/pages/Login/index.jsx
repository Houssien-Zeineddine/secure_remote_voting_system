import React from "react";
import Input from "../../components/Input";

const Login = () => {
  return (
    <Input
      labelText="email"
      label="email"
      text="email"
      name="email"
      placeholder="enter your email"
      className="input-horizontal"
    />
  );
};

export default Login;
