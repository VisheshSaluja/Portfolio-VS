import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Mason Critique (HackFax 2nd Place)",
    tech: "Next.js · Firebase · Google Auth",
    description: "GPA dashboards, real-time reviews, auto-filled course data.",
    link: "https://github.com/VisheshSaluja/Mason-Critique",
  },
  {
    title: "MindMate – AI Mental Wellness Bot",
    tech: "React · Azure OpenAI · Tailwind",
    description: "A chatbot with journaling and mood support using AI.",
    link: "https://github.com/VisheshSaluja/MindMate",
  },
  {
    title: "Diabetic Retinopathy Detection",
    tech: "EfficientNet · ResNet · CNN",
    description: "ML on retinal images with QWK of 0.69.",
    link: "https://github.com/VisheshSaluja/Diabetic-Retinopathy",
  },
  {
    title: "Brain Hemorrhage Detection",
    tech: "ResNet18 · CT Scan Images",
    description: "Binary classification of hemorrhagic vs normal CT scans.",
    link: "https://github.com/VisheshSaluja/Brain-Hemorrhage-Detection",
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <Tilt
            key={idx}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#14b8a6"
            glarePosition="all"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            transitionSpeed={800}
            className="rounded-xl"
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl p-6 border border-gray-700 hover:shadow-cyan-500/40 shadow-lg transition duration-300 hover:scale-[1.03]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-cyan-300 mt-1">{project.tech}</p>
              <p className="mt-3 text-gray-300">{project.description}</p>
              <p className="mt-4 text-cyan-400 font-medium">View Project →</p>
            </motion.a>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;
