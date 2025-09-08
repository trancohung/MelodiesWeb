import "./App.css";
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { MusicProvider } from "./context/MusicProvider";
import { AuthProvider } from "./context/AuthProvider";
import { SongProvider } from "./context/SongProvider";

const App = () => {
  return (
    <AuthProvider>
      <SongProvider>
        <MusicProvider>
          <AppRoutes />
        </MusicProvider>
      </SongProvider>
    </AuthProvider>
  );
};

export default App;
