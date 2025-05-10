import React, { createContext, useState, useEffect } from "react";
import axiosBaseUrl from "../../Utils/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //used in navbar to determine what button to render whether register or logout
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const response = await axiosBaseUrl.get("/me", {
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

  // useEffect(() => {
  //   const loggedUser = {
  //     id: 2,
  //     first_name: "houssien",
  //     middle_name: "mahdi",
  //     last_name: "zeineddine",
  //     birthday: 11 / 10 / 1993,
  //     id_number: 124294922,
  //     email: "houssienzd@hotmail.com",
  //     password: "password",
  //     profile_picture_path: "path",
  //   };

  //   setUser(loggedUser);
  // }, []);
  //excpected to call the login API and get as a response the user's profile containing id
  console.log(user);

  return (
    <AuthContext.Provider value={{ user, setUser, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
