import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiPython,
  SiTypescript,
  SiTensorflow,
  SiGooglecloud,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiFirebase,
  SiMysql,
  SiSqlite,
  SiNumpy,
  SiAngular,
  SiBootstrap,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiKeras,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiReact,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";

import { FaJava, FaTerminal } from "react-icons/fa"; // Java and PowerShell fallback

const skills = [
  { name: "C", icon: <SiC size={32} /> },
  { name: "C++", icon: <SiCplusplus size={32} /> },
  { name: "CSS3", icon: <SiCss3 size={32} /> },
  { name: "HTML5", icon: <SiHtml5 size={32} /> },
  { name: "Java", icon: <FaJava size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "Markdown", icon: <SiMarkdown size={32} /> },
  { name: "LaTeX", icon: <span className="text-2xl">📄</span> },
  { name: "Python", icon: <SiPython size={32} /> },
  { name: "PowerShell", icon: <FaTerminal size={32} /> }, // ✅ fallback
  { name: "Bash Script", icon: <span className="text-2xl">🐚</span> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "TensorFlow", icon: <SiTensorflow size={32} /> },
  { name: "Google Cloud", icon: <SiGooglecloud size={32} /> },
  { name: "Node.js", icon: <SiNodedotjs size={32} /> },
  { name: "React", icon: <SiReact size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "Git", icon: <SiGit size={32} /> },
  { name: "GitHub", icon: <SiGithub size={32} /> },
  { name: "GitHub Actions", icon: <SiGithubactions size={32} /> },
  { name: "Firebase", icon: <SiFirebase size={32} /> },
  { name: "MySQL", icon: <SiMysql size={32} /> },
  { name: "SQLite", icon: <SiSqlite size={32} /> },
  { name: "NumPy", icon: <SiNumpy size={32} /> },
  { name: "Anaconda", icon: <span className="text-2xl">🐍</span> },
  { name: "Angular", icon: <SiAngular size={32} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
  { name: "MongoDB", icon: <SiMongodb size={32} /> },
  { name: "Keras", icon: <SiKeras size={32} /> },
  { name: "Pandas", icon: <SiPandas size={32} /> },
  { name: "scikit-learn", icon: <SiScikitlearn size={32} /> },
  { name: "PyTorch", icon: <SiPytorch size={32} /> },
  { name: "Docker", icon: <SiDocker size={32} /> },
];

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-cyan-400 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills & Tools
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8 justify-items-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center space-y-2 text-gray-300 hover:text-cyan-400 transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.03 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl">{skill.icon}</div>
            <div className="text-xs font-medium">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
