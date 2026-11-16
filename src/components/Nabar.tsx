import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/useTheme";

// [MARK: Modernized Navbar with Light/Dark Mode Theme Toggle]
function Nabar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  // Helper to determine active link
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.toLowerCase() === path.toLowerCase()) return true;
    return false;
  };

  return (
    <>
      {/* [MARK: Modern Sticky Glassmorphism Navigation Bar supporting Light and Dark modes] */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/85 dark:bg-[#090d16]/85 border-b border-slate-200/80 dark:border-slate-800/80 text-slate-800 dark:text-white px-6 md:px-12 lg:px-20 py-4 transition-colors duration-300 shadow-xs dark:shadow-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* [MARK: Layout Section 1 - Left Brand Header] */}
          <header className="flex items-center gap-2">
            <Link to="/" className="group flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent group-hover:opacity-80 transition-all duration-300">
                Chia<span className="text-blue-500">.</span>dev
              </h1>
            </Link>
          </header>

          {/* [MARK: Layout Section 2 - Center Navigation Links (Desktop)] */}
          <ul className="hidden md:flex items-center gap-8 text-center text-sm font-medium">
            <li>
              <Link
                to="/"
                className={`transition-all duration-200 py-1.5 px-3 rounded-lg ${
                  isActive("/")
                    ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={`transition-all duration-200 py-1.5 px-3 rounded-lg ${
                  isActive("/About")
                    ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Project"
                className={`transition-all duration-200 py-1.5 px-3 rounded-lg ${
                  isActive("/Project") || isActive("/projects")
                    ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`transition-all duration-200 py-1.5 px-3 rounded-lg ${
                  isActive("/Contact")
                    ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* [MARK: Layout Section 3 - Right Section: Theme Toggle Button + "Hire ME" CTA + Mobile Toggle] */}
          <div className="flex items-center gap-3">
            
            {/* [MARK: Theme Mode Toggle Button (Light/Dark)] */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
              title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            >
              {isDark ? (
                <HiSun className="text-xl text-amber-400 animate-in spin-in-180 duration-300" />
              ) : (
                <HiMoon className="text-xl text-blue-600 animate-in spin-in-180 duration-300" />
              )}
            </button>

            {/* Hire ME Button */}
            <Link
              to="/Contact"
              className="hidden sm:inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-400/30"
            >
              Hire ME
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

        </div>

        {/* [MARK: Responsive Mobile Menu (Preserves same navigation links and shows theme)] */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-3 text-base">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg ${
                    isActive("/")
                      ? "bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg ${
                    isActive("/About")
                      ? "bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Project"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg ${
                    isActive("/Project") || isActive("/projects")
                      ? "bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg ${
                    isActive("/Contact")
                      ? "bg-blue-50 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  Contact
                </Link>
              </li>
              
              {/* Mobile Theme Toggle Info Row */}
              <li className="pt-2 flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/60">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 shadow-xs"
                >
                  {isDark ? (
                    <>
                      <HiSun className="text-amber-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <HiMoon className="text-blue-600" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </li>

              <li className="pt-2">
                <Link
                  to="/Contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center font-semibold px-4 py-2.5 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30"
                >
                  Hire ME
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nabar;
