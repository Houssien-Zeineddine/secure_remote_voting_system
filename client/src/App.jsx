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
import { AuthProvider } from "./components/context/AuthContext";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
                  <>
                    <Sidebar />
                    <Outlet />
                  </>
                }
              >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/candidates" element={<Candidates />} />
                <Route path="/guidelines" element={<Guidelines />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/addelections" element={<AddElections />}></Route>
                <Route path="/addcampaign" element={<AddCampaign />}></Route>
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
