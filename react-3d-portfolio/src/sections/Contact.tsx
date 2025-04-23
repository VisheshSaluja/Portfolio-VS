import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-cyan-400 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Interested in collaborating, hiring, or just saying hi? I’m always open
        to a conversation!
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6 text-cyan-400 text-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:visheshsaluja.mar03@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <SiGmail title="Email" />
        </a>
        <a
          href="https://github.com/VisheshSaluja"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <SiGithub title="GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/visheshsaluja"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <SiLinkedin title="LinkedIn" />
        </a>
      </motion.div>

      <motion.p
        className="mt-10 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Vishesh Saluja. All rights reserved.
      </motion.p>
    </div>
  );
};

export default Contact;
