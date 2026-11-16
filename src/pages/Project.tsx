import { useState } from "react";
import { HiCode, HiExternalLink } from "react-icons/hi";
import { SiLaravel, SiMysql, SiDocker, SiJavascript, SiHtml5, SiCss, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";

// [MARK: Chia's Projects Data with Light/Dark Mode compatibility]
const projectData = [
  {
    id: 1,
    title: "Online Book Selling Platform",
    category: "Fullstack / Backend",
    description:
      "A complete e-commerce web application for browsing, searching, and purchasing books online. Features user authentication, cart management, inventory control, and order handling.",
    tech: [
      { name: "PHP Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
    highlights: ["Containerized with Docker", "Relational MySQL DB Schema", "RESTful MVC Architecture"],
    role: "Backend & Deployment",
  },
  {
    id: 2,
    title: "2D Interactive Canvas Game",
    category: "Game Dev / Frontend",
    description:
      "An arcade 2D game developed using vanilla JavaScript and HTML5 Canvas API. Features collision detection, physics simulation, score counter, game loop, and custom animations.",
    tech: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
    highlights: ["Custom 60 FPS Game Loop", "Collision & Physics System", "Pure Native JS"],
    role: "Sole Developer",
  },
  {
    id: 3,
    title: "Modern Developer Portfolio",
    category: "Frontend",
    description:
      "A lightning-fast, responsive web portfolio built with React 19, TypeScript, Vite, and modern Tailwind CSS. Showcases developer identity, projects, skills, and interactive UI.",
    tech: [
      { name: "React 19", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    highlights: ["Glassmorphism Styling", "Mobile-first Responsive", "Oxlint & Strict TypeScript"],
    role: "Fullstack Developer",
  },
];

// [MARK: Modernized Projects Showcase Page with Light/Dark theme compatibility]
const Project = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Fullstack / Backend", "Game Dev / Frontend", "Frontend"];

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((item) => item.category === filter);

  return (
    <>
      {/* [MARK: Container - Adaptive Light & Dark Ambient Background] */}
      <section className="min-h-[calc(100vh-80px)] w-full bg-slate-50 dark:bg-[#090d16] bg-radial-ambient text-slate-800 dark:text-slate-100 px-6 md:px-12 lg:px-20 py-12 lg:py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Title & Subtitle */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              Featured Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
              My <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3">
              Explore the real-world applications and university engineering projects developed by Chia.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                    : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* [MARK: Responsive Project Grid with Light/Dark Glass Cards] */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between p-6 rounded-3xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 backdrop-blur-xl shadow-lg dark:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/10"
              >
                <div>
                  {/* Category Pill & ID */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">0{project.id}</span>
                  </div>

                  {/* Project Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors tracking-tight">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Tech Stack Badges & Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    {project.tech.map((t) => {
                      const Icon = t.icon;
                      return (
                        <span
                          key={t.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300"
                        >
                          <Icon style={{ color: t.color }} className="text-sm" />
                          <span>{t.name}</span>
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/chiadev50-spec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700/80 hover:text-slate-900 dark:hover:text-white transition duration-200"
                    >
                      <HiCode className="text-base text-blue-500 dark:text-blue-400" />
                      <span>Source Code</span>
                    </a>
                    <button
                      onClick={() => alert(`Details for "${project.title}" will open live demo soon!`)}
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-blue-50 dark:bg-blue-600/20 hover:bg-blue-100 dark:hover:bg-blue-600/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 transition duration-200 cursor-pointer"
                      title="Preview project"
                    >
                      <HiExternalLink className="text-lg" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 p-8 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center max-w-3xl mx-auto backdrop-blur-md shadow-md dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Have a project or collaboration in mind?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
              I am open to fullstack, frontend, and backend development roles, internships, and freelance projects.
            </p>
            <a
              href="mailto:chiadev-50@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/25 transition"
            >
              Get in Touch with Chia
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Project;
