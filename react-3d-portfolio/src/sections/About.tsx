import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-cyan-400 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-lg md:text-xl text-gray-300 space-y-6 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p>
          I’m a passionate developer, researcher, and machine learning
          enthusiast currently pursuing my Master’s in Computer Science at
          George Mason University.
        </p>
        <p>
          With experience at NASA ESIP as a Software Developer and Research
          Assistant, I’ve built machine learning workflows for geospatial data,
          led a team of interns, and optimized large-scale supercomputer
          pipelines.
        </p>
        <p>
          My work spans cloud platforms like AWS and Azure, full-stack
          development with React and Angular, and deep learning projects in
          healthcare and climate analysis.
        </p>
        <p>
          Outside of tech, I’ve been recognized as an International Taekwondo
          Medalist and honored multiple times as Student of the Year.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
