import { Link } from "react-router-dom";
import { HiArrowRight, HiAcademicCap, HiGlobeAlt, HiBadgeCheck } from "react-icons/hi";

// [MARK: Modernized About page supporting Light and Dark modes]
const About = () => {
  return (
    <>
      {/* [MARK: Container - Adaptive Light & Dark Ambient Background] */}
      <section className="min-h-[calc(100vh-80px)] w-full bg-slate-50 dark:bg-[#090d16] bg-radial-ambient text-slate-800 dark:text-slate-100 flex flex-col items-center px-6 md:px-12 lg:px-20 py-12 lg:py-16 transition-colors duration-300">
        
        {/* [MARK: Top Layout Section - Bio Card with Narrative Paragraphs and Project CTA Link] */}
        <div className="w-full max-w-4xl p-6 sm:p-8 md:p-10 rounded-3xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl shadow-xl dark:shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Decorative Glow Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          {/* Title */}
          <div className="text-center mb-8">
            <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              Biography
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-3 capitalize tracking-tight">
              About <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Me</span>
            </h1>
          </div>

          {/* Original Paragraphs Preserved Word-for-Word with Light/Dark Typography */}
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="p-4 rounded-xl bg-slate-100/90 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50 text-slate-900 dark:text-white font-medium">
              I am a web development , Currently I am a third-year Student at National University of Laos
            </p>
            
            <p>
              I am passoinate about building website that are simple and easy to use , I am currently learning Backend development : <span className="text-blue-600 dark:text-blue-400 font-semibold">Express.JS, Nest.JS, TypeORM, Redis, PostgreSQL, Docker-desktop, Linux, DSA & Algorithms</span>
            </p>
            
            <p>
              I'm always eager to expand my knowledge and take on new challenges in the world of technology.
            </p>
            
            <p>
              I belive that technology can make our life easier and more enjoyable , and I want to be a part of that change.
            </p>
            
            <p className="p-4 rounded-xl bg-slate-100/90 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50">
              For my class project we used to create a small website application for selling book online using php -laravel framework and mysql for database then using docker for containerization and deployment of the website and a small project game 2D using javascript and Html,CSS
            </p>
          </div>

          {/* Original Link to Project styled as Modern Interactive Button */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-center sm:justify-start">
            <Link
              to="/Project"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 group capitalize"
            >
              <span>Explore My Projects</span>
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

        </div>

        {/* [MARK: Bottom Layout Section - 3 Side-by-Side Asides (Languages, Soft Skills, Certificates)] */}
        <article className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          
          {/* [MARK: Aside 1 - Languages Section] */}
          <aside className="flex flex-col">
            <section className="h-full p-6 rounded-2xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 backdrop-blur-md shadow-lg dark:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <HiGlobeAlt className="text-2xl" />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Languages</h1>
              </div>
              <ul className="space-y-3">
                {["Hmong", "Lao", "Thai", "English"].map((lang) => (
                  <li
                    key={lang}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition"
                  >
                    <span>{lang}</span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* [MARK: Aside 2 - Soft Skills Section] */}
          <aside className="flex flex-col">
            <section className="h-full p-6 rounded-2xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/40 backdrop-blur-md shadow-lg dark:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  <HiBadgeCheck className="text-2xl" />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Soft Skills</h1>
              </div>
              <ul className="space-y-3">
                {["Teamwork", "Communication", "Problem-solving", "LeaderShip", "Adaptability"].map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition"
                  >
                    <span>{skill}</span>
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* [MARK: Aside 3 - Certificates and Awards Section] */}
          <aside className="flex flex-col">
            <section className="h-full p-6 rounded-2xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 hover:border-cyan-500/40 backdrop-blur-md shadow-lg dark:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <HiAcademicCap className="text-2xl" />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Certificates and awards
                </h1>
              </div>
              <ul className="space-y-3">
                {[
                  { name: "Okardtech course frontend", url: "/Project" },
                  { name: "Okardtech course Backend", url: "/Project" },
                  { name: "Fullstack course", url: "/Project" },
                  { name: "AI course", url: "/Project" },
                ].map((cert) => (
                  <li key={cert.name}>
                    <Link
                      to={cert.url}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition duration-200 group/link"
                    >
                      <span className="truncate pr-2">{cert.name}</span>
                      <HiArrowRight className="text-slate-400 dark:text-slate-500 group-hover/link:text-cyan-500 group-hover/link:translate-x-1 transition-all text-xs flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

        </article>
      </section>
    </>
  );
};

export default About;
