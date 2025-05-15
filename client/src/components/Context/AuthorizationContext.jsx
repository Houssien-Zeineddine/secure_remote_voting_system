import React, { createContext, useState, useEffect } from "react";
import axiosBaseUrl from "../../Utils/axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //used in navbar to determine what button to render whether register or logout
  const [authLoading, setAuthLoading] = useState(true);
  const navoigate = useNavigate();

  const verifyToken = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setAuthLoading(false);
      return;
    }

    try {
      const response = await axiosBaseUrl.get("/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (error) {
      localStorage.removeItem("access_token");
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  console.log(user);

  return (
    <AuthContext.Provider value={{ user, setUser, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
