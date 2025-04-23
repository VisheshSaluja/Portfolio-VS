import { motion } from "framer-motion";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiPostgresql,
  SiMysql,
  //   SiAmazonaws,
  //   SiAzuredevops,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "React", icon: <SiReact size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "Firebase", icon: <SiFirebase size={32} /> },
  { name: "TensorFlow", icon: <SiTensorflow size={32} /> },
  { name: "PyTorch", icon: <SiPytorch size={32} /> },
  { name: "Docker", icon: <SiDocker size={32} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
  { name: "MySQL", icon: <SiMysql size={32} /> },
  //   { name: "AWS", icon: <SiAmazonaws size={32} /> },
  //   { name: "Azure", icon: <SiAzuredevops size={32} /> },
  { name: "Git", icon: <SiGit size={32} /> },
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

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center space-y-2 text-gray-300 hover:text-cyan-400 transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl">{skill.icon}</div>
            <div className="text-sm font-medium">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
