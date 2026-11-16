  import { skills } from "../types/skills";
import { HiSparkles } from "react-icons/hi";

// [MARK: Dedicated Skills Page supporting Light and Dark modes]
const Skills = () => {
  const categories = ["Frontend", "Backend", "DevOps & Tools"] as const;

  return (
    <>
      <section className="min-h-[calc(100vh-80px)] w-full bg-slate-50 dark:bg-[#090d16] bg-radial-ambient text-slate-800 dark:text-slate-100 px-6 md:px-12 lg:px-20 py-12 lg:py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              Technical Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
              My <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">Skills & Stack</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3">
              Technologies, programming languages, and engineering tools I utilize in building web and mobile applications.
            </p>
          </div>

          {/* Grouped Skills by Category */}
          <div className="space-y-10">
            {categories.map((cat) => {
              const categorySkills = skills.filter((s) => s.category === cat);
              if (categorySkills.length === 0) return null;

              return (
                <div key={cat} className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 backdrop-blur-xl shadow-lg dark:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <HiSparkles className="text-blue-500 dark:text-blue-400 text-xl" />
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{cat}</h2>
                    <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800 ml-2"></span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categorySkills.map((skill) => {
                      const Icon = skill.icons;
                      return (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-1 shadow-xs hover:shadow-md dark:hover:shadow-blue-500/10 text-center cursor-default"
                        >
                          <div
                            className="p-3 rounded-xl bg-white dark:bg-slate-900/90 shadow-xs group-hover:scale-110 transition-transform duration-300 mb-3"
                            style={{ color: skill.color || "#60A5FA" }}
                          >
                            <Icon className="text-3xl" />
                          </div>
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;
