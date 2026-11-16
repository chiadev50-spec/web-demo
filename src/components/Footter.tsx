import { Link } from "react-router-dom";
import { HiHeart, HiArrowUp } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const CURRENT_YEAR = new Date().getFullYear();

// [MARK: Modernized Footer component supporting Light and Dark modes]
export const Footter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* [MARK: Preserved Section Layout styled with Adaptive Light/Dark Glassmorphism] */}
      <footer className="w-full bg-slate-100 dark:bg-[#070a11] border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 py-12 px-6 md:px-12 lg:px-20 mt-auto transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info & Student Tag */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">
                Chia<span className="text-blue-500">.</span>dev
              </span>
            </Link>
            <p className="text-xs text-slate-500 mt-1">
              Website & Mobile App Developer • National University of Laos
            </p>
          </div>

          {/* Quick Navigation Links */}
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/Project" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Project
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/chiadev50-spec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 shadow-xs transition"
            >
              <SiGithub className="text-lg" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs transition cursor-pointer"
              title="Back to top"
            >
              <HiArrowUp className="text-lg" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {CURRENT_YEAR} Chia-dev. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <HiHeart className="text-rose-500 inline" /> using React 19, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
};
