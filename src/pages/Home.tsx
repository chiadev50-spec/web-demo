import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { skills } from "../types/skills";
import { HiArrowRight, HiDownload, HiSparkles } from "react-icons/hi";

// [MARK: Modernized Home page with Light/Dark Mode support preserving user layout]
const Home = () => {
  return (
    <>
      {/* [MARK: Main Container - Adaptive Light & Dark Ambient Background] */}
      <main className="min-h-[calc(100vh-80px)] w-full bg-slate-50 dark:bg-[#090d16] bg-radial-ambient text-slate-800 dark:text-slate-100 flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 lg:py-16 gap-12 lg:gap-8 overflow-hidden transition-colors duration-300">
        
        {/* [MARK: Layout Column 1 (Left) - Text Content, Action Buttons, and Technology Skills Grid] */}
        <section className="flex flex-col items-center lg:items-start justify-center flex-1 max-w-2xl text-center lg:text-left z-10">
          
          {/* [MARK: Element 1 - Welcome Tagline] */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wide shadow-xs hover:bg-blue-500/15 transition-all duration-300">
            <HiSparkles className="text-blue-500 dark:text-blue-400 animate-spin-slow" />
            <span>Welcome to Chia web development</span>
          </div>

          {/* [MARK: Element 2 - Main Hero Title] */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-6 leading-[1.15]">
            I am <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">Chia</span> website developer and designer
          </h1>

          {/* [MARK: Element 3 - Professional Summary Paragraph] */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-5 leading-relaxed font-normal">
            I am a website developer and website designer
          </p>

          {/* [MARK: Element 4 - Action Buttons Row ("Views my works" & "Download my CV")] */}
          <article className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white w-full">
            <Link
              to="/Project"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-blue-400/20"
            >
              <span>Views my works</span>
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <a
              href="#cv-download"
              onClick={(e) => {
                e.preventDefault();
                alert("CV download requested. Chia's resume PDF will be available shortly!");
              }}
              className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 bg-white/90 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800/90 text-slate-800 dark:text-slate-200 px-6 py-3.5 rounded-xl font-semibold backdrop-blur-md shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <HiDownload className="text-blue-500 dark:text-blue-400" />
              <span>Download my CV</span>
            </a>
          </article>

          {/* [MARK: Element 5 - Technology Stack Grid] */}
          <article className="mt-12 w-full">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Technology I work with
              </h1>
              <span className="hidden sm:inline-block h-px flex-1 bg-gradient-to-r from-slate-300 dark:from-slate-700 to-transparent"></span>
            </div>

            {/* [MARK: Responsive Grid of Skill Cards with Icons & Hover Effects] */}
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
              {skills.map((skill) => {
                const IconComponent = skill.icons;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1 shadow-xs hover:shadow-md dark:hover:shadow-blue-500/10 cursor-pointer"
                  >
                    <div
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/90 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: skill.color || "#60A5FA" }}
                    >
                      <IconComponent className="text-xl" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </section>
          </article>

        </section>

        {/* [MARK: Layout Column 2 (Right) - Profile/Hero Image with Ambient Glow Frame] */}
        <section className="relative flex items-center justify-center flex-1 max-w-lg lg:max-w-none">
          {/* Ambient colorful backlight glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-cyan-400/20 dark:from-blue-600/30 dark:via-indigo-500/20 dark:to-cyan-400/30 rounded-3xl blur-2xl opacity-70 animate-glow-pulse pointer-events-none"></div>

          {/* Glowing container border card */}
          <div className="relative p-2 rounded-3xl bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-slate-700/50 dark:via-slate-800/40 dark:to-slate-900/80 border border-slate-200 dark:border-slate-700/60 shadow-xl dark:shadow-2xl backdrop-blur-md">
            <img
              src={Logo}
              alt="myprofile"
              className="w-72 sm:w-80 md:w-96 lg:w-[420px] max-h-[520px] object-cover object-top rounded-2xl shadow-inner transition-transform duration-500 hover:scale-[1.02]"
            />
            {/* Modern floating badge */}
            <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-xl flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Open for Opportunities</span>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Home;
