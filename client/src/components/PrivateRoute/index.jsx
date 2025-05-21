import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthorizationContext";
import Loading from "../Loading";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext);

  if (authLoading) return <Loading />;

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
