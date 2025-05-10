import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Candidates from "./pages/Candidates";
import Guidelines from "./pages/Guidelines";
import Settings from "./pages/Settings";
import AddCampaign from "./pages/AddCampaign";
import AddElections from "./pages/AddElections";
import { AuthProvider } from "./components/Context/AuthContext";
import LayoutWithSidebarAndProvider from "./layouts/LayoutWithSidebarAndProvider";
import PrivateRoute from "./components/PrivateRoute/index.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              element={
                <>
                  <Navbar />
                  <Outlet />
                </>
              }
            >
              <Route path="/" element={<Home />} />
              <Route
                element={
                  <PrivateRoute>
                    <LayoutWithSidebarAndProvider />
                  </PrivateRoute>
                }
              >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/candidates" element={<Candidates />} />
                <Route path="/guidelines" element={<Guidelines />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/addelections" element={<AddElections />} />
                <Route path="/addcampaign" element={<AddCampaign />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
