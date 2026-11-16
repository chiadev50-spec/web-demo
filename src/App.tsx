import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Project";
import Skills from "./pages/Skills";

// [MARK: App Routes - Preserving all original routes and adding case-insensitive fallback aliases]
function App() {
  return (
    <>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/about" element={<About />} />
        
        {/* Project Routes (supporting both /Project and /projects) */}
        <Route path="/Project" element={<Projects />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        
        {/* Skills Routes */}
        <Route path="/Skills" element={<Skills />} />
        <Route path="/skills" element={<Skills />} />

        {/* Contact Routes */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
