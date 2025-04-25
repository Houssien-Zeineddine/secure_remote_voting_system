import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return;
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  </>;
};
