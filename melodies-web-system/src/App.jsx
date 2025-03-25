import "./App.css";
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { MusicProvider } from "./context/MusicProvider";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <MusicProvider>
        <AppRoutes />
      </MusicProvider>
    </AuthProvider>
  );
};

export default App;
