import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/Context/AuthorizationContext.jsx";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
