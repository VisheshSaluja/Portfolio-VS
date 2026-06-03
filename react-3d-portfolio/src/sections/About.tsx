import { motion } from "framer-motion";
import SpotlightCard from "../components/SpotlightCard";
import { GiBlackBelt } from "react-icons/gi";
import { FaGuitar, FaGlobeAsia } from "react-icons/fa";

const techStack: Record<string, string[]> = {
  "AI & LLM": ["RAG", "LangGraph", "MCP", "Prompt Engineering", "Guardrails"],
  ML: ["PyTorch", "TensorFlow", "YOLO", "XGBoost"],
  Backend: ["FastAPI", "Python", "TypeScript", "Go", "Docker"],
  Data: ["PostgreSQL", "Pinecone", "FAISS", "MongoDB"],
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-baseline gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-accent/50">01</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-100">
            About
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bio */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <SpotlightCard className="h-full">
              <p className="text-stone-300 leading-relaxed text-lg">
                I build systems where LLMs, retrieval pipelines, and multi-agent
                workflows come together to solve real business problems — not
                demos, but products that handle real users, real latency
                constraints, and real edge cases.
              </p>
              <p className="text-stone-600 mt-5 leading-relaxed">
                Currently focused on agentic AI and RAG systems, with experience
                spanning healthcare AI, geospatial ML at NASA, and fraud
                detection at scale.
              </p>
            </SpotlightCard>
          </motion.div>

          {/* Currently */}
          <motion.div variants={fadeUp}>
            <SpotlightCard className="h-full">
              <p className="text-[10px] font-medium tracking-[0.25em] text-stone-600 uppercase mb-3">
                Currently
              </p>
              <p className="text-stone-100 font-display font-bold text-xl">
                ProspectIntel
              </p>
              <p className="text-stone-500 text-sm mt-3 leading-relaxed">
                Building an AI sales intelligence platform — agentic workflows,
                RAG pipelines, real-time prospect research.
              </p>
            </SpotlightCard>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeUp}>
            <SpotlightCard className="h-full">
              <p className="text-[10px] font-medium tracking-[0.25em] text-stone-600 uppercase mb-5">
                Tech Stack
              </p>
              <div className="space-y-4">
                {Object.entries(techStack).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-[11px] text-stone-700 uppercase tracking-wider mb-1.5">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2 py-1 rounded-md bg-white/[0.02] text-stone-500 border border-white/[0.05] hover:border-white/[0.1] hover:text-stone-300 transition-all duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Beyond Code */}
          <motion.div variants={fadeUp}>
            <SpotlightCard className="h-full">
              <p className="text-[10px] font-medium tracking-[0.25em] text-stone-600 uppercase mb-5">
                Beyond Code
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <GiBlackBelt
                    className="text-amber-700/60 shrink-0 group-hover:text-amber-600 transition-colors duration-300"
                    size={18}
                  />
                  <span className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors duration-300">
                    International Taekwondo Medalist
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <FaGuitar
                    className="text-rose-800/60 shrink-0 group-hover:text-rose-600 transition-colors duration-300"
                    size={18}
                  />
                  <span className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors duration-300">
                    Guitar Player
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <FaGlobeAsia
                    className="text-emerald-800/60 shrink-0 group-hover:text-emerald-600 transition-colors duration-300"
                    size={18}
                  />
                  <span className="text-stone-400 text-sm group-hover:text-stone-300 transition-colors duration-300">
                    Traveler & Explorer
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp}>
            <SpotlightCard className="h-full">
              <p className="text-[10px] font-medium tracking-[0.25em] text-stone-600 uppercase mb-5">
                Education
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-stone-200 font-medium text-sm">
                    M.S. Computer Science
                  </p>
                  <p className="text-stone-700 text-xs mt-1">
                    George Mason University · 2023 – 2025
                  </p>
                </div>
                <div>
                  <p className="text-stone-200 font-medium text-sm">
                    B.Tech Information Technology
                  </p>
                  <p className="text-stone-700 text-xs mt-1">
                    GGS Indraprastha University · 2019 – 2023
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
