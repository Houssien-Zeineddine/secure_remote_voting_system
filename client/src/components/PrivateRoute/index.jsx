import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext);

  if (authLoading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
