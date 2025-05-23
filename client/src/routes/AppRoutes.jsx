import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Candidates from "../pages/Candidates";
import Guidelines from "../pages/Guidelines";
import AddCampaign from "../pages/AddCampaign";
import AddElections from "../pages/AddElections";
import LayoutWithSidebarAndProvider from "../layouts/LayoutWithSidebarAndProvider";
import PrivateRoute from "../components/PrivateRoute/index.jsx";

const AppRoutes = () => {
  return (
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
          <Route path="/addelections" element={<AddElections />} />
          <Route path="/addcampaign" element={<AddCampaign />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
