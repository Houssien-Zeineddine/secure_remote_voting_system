import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../../Utils/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //used in navbar to determine what button to render whether register or logout
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const response = await axiosInstance.get("/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (err) {
          localStorage.removeItem("access_token");
          setUser(null);
        }
      }
      setAuthLoading(false);
    };

    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
