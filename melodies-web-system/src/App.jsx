import "./App.css";
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { MusicProvider } from "./context/MusicProvider";

const App = () => {
  return (
    <MusicProvider>
        <AppRoutes />
    </MusicProvider>
  );
};

export default App;
