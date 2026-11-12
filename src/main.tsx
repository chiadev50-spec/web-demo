import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Nabar from "./components/Nabar.tsx";
import { Footter } from "./components/Footter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Nabar />
      <App />
      <Footter />
    </BrowserRouter>
  </StrictMode>,
);
