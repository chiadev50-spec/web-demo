import { useState } from "react";
import { HiMail, HiLocationMarker, HiCheckCircle } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

// [MARK: Modern Contact Page supporting Light and Dark modes]
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      {/* [MARK: Container - Adaptive Light & Dark Ambient Background] */}
      <section className="min-h-[calc(100vh-80px)] w-full bg-slate-50 dark:bg-[#090d16] bg-radial-ambient text-slate-800 dark:text-slate-100 px-6 md:px-12 lg:px-20 py-12 lg:py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
              Contact <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3">
              Have a question, job opportunity, or want to collaborate? Feel free to reach out anytime!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* [MARK: Left Column (2 Cols) - Contact Information Cards] */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Profile Brief Card */}
              <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 backdrop-blur-xl shadow-lg dark:shadow-xl">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Let's Connect</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  I am currently a 3rd-year student at National University of Laos and a website & mobile developer eager to contribute to innovative projects.
                </p>

                <div className="space-y-4">
                  
                  {/* Email */}
                  <a
                    href="mailto:chiadev-50@gmail.com"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition group"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                      <HiMail className="text-xl" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold block">Email</span>
                      <span className="text-sm font-medium">chiadev-50@gmail.com</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <HiLocationMarker className="text-xl" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold block">Location</span>
                      <span className="text-sm font-medium">Vientiane, Laos</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">National University of Laos</span>
                    </div>
                  </div>

                  {/* GitHub Profile */}
                  <a
                    href="https://github.com/chiadev50-spec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition group"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-700/40 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      <SiGithub className="text-xl" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold block">GitHub</span>
                      <span className="text-sm font-medium">github.com/chiadev50-spec</span>
                    </div>
                  </a>

                </div>
              </div>

              {/* Availability Status */}
              <div className="p-6 rounded-3xl bg-blue-50/80 dark:bg-gradient-to-br dark:from-blue-950/40 dark:to-slate-900/60 border border-blue-200 dark:border-blue-900/40 backdrop-blur-md shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Available for Freelance & Internships</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-2">
                  Ready to take on frontend, backend, or fullstack development challenges.
                </p>
              </div>

            </div>

            {/* [MARK: Right Column (3 Cols) - Modern Glassmorphism Message Form] */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 backdrop-blur-xl shadow-lg dark:shadow-xl">
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 mb-4 border border-emerald-500/20">
                      <HiCheckCircle className="text-4xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Received!</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">
                      Thank you for reaching out, {formData.name}. Chia will get back to you as soon as possible!
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send Me a Message</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                          Your Name <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                          Your Email <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Job Opportunity / Project Inquiry"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Message <span className="text-blue-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
