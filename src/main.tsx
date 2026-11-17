import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Nabar from "./components/Nabar.tsx";
import { Footter } from "./components/Footter.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";

// [MARK: Wrapped application in ThemeProvider for universal Light/Dark mode state]
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Nabar />
        <App />
        <Footter />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
