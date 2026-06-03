import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const featured = {
  title: "Orbitae",
  tagline: "The Native Workspace for Software Developers",
  description:
    "A developer-focused desktop workspace manager built for native performance. Orbitae acts as a central hub for managing projects, running commands, keeping notes, and monitoring processes — all without leaving the app.",
  features: [
    "Multi-process terminal with smart persistence",
    "Notion-style notes with slash commands",
    "Visual git graph and branch history",
    "Encrypted secrets vault for env variables",
  ],
  tech: ["Rust", "Tauri", "React", "TypeScript", "SQLite"],
  site: "https://orbitae.vercel.app",
  github: "https://github.com/VisheshSaluja/Orbitae",
};

const otherProjects = [
  {
    title: "Geoweaver",
    description: "NASA's open-source platform for scientific ML workflows",
    href: "https://github.com/ESIPFed/Geoweaver",
  },
  {
    title: "Mason Critique",
    description: "Real-time course review platform — HackFax 2nd Place",
    href: "https://github.com/VisheshSaluja/Mason-Critique",
  },
  {
    title: "MindMate",
    description: "AI mental wellness chatbot with journaling support",
    href: "https://github.com/VisheshSaluja/MindMate",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-baseline gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-accent/50">03</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-100">
            Projects
          </h2>
        </motion.div>

        {/* Featured: Orbitae */}
        <motion.div
          className="relative rounded-2xl border border-white/[0.06] bg-surface p-8 md:p-12 mb-12 group hover:border-white/[0.1] transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Background label */}
          <span className="absolute top-8 right-8 md:right-12 font-display text-[6rem] md:text-[8rem] font-black text-white/[0.015] leading-none select-none pointer-events-none">
            01
          </span>

          <div className="relative z-10 grid md:grid-cols-[1fr_280px] gap-8 md:gap-12">
            <div>
              <p className="text-[10px] font-medium tracking-[0.25em] text-accent/70 uppercase mb-4">
                Featured Project
              </p>

              <h3 className="font-display text-3xl md:text-4xl font-bold text-stone-100 mb-2">
                {featured.title}
              </h3>
              <p className="text-stone-500 text-sm mb-6 italic">
                {featured.tagline}
              </p>

              <p className="text-stone-400 leading-relaxed mb-8 max-w-xl">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.02] text-stone-500 border border-white/[0.05]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a
                  href={featured.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-stone-400 hover:text-stone-100 transition-colors duration-300"
                >
                  <FaExternalLinkAlt size={12} />
                  <span>Visit Site</span>
                </a>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-stone-400 hover:text-stone-100 transition-colors duration-300"
                >
                  <SiGithub size={15} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Features list */}
            <div className="border-t md:border-t-0 md:border-l border-white/[0.04] pt-6 md:pt-0 md:pl-10">
              <p className="text-[10px] font-medium tracking-[0.25em] text-stone-700 uppercase mb-4">
                Key Features
              </p>
              <ul className="space-y-3">
                {featured.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-stone-500 leading-relaxed flex gap-3"
                  >
                    <span className="mt-[0.55em] w-1 h-1 rounded-full bg-accent/30 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Other projects — minimal links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[10px] font-medium tracking-[0.25em] text-stone-700 uppercase mb-6">
            Other Work
          </p>
          <div className="space-y-4">
            {otherProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between py-3 border-b border-white/[0.03] hover:border-white/[0.08] transition-colors duration-300"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-stone-200 font-medium group-hover:text-stone-100 transition-colors duration-300">
                    {project.title}
                  </span>
                  <span className="text-sm text-stone-700 hidden sm:inline">
                    {project.description}
                  </span>
                </div>
                <span className="text-stone-700 group-hover:text-stone-400 transition-colors duration-300 text-sm">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
