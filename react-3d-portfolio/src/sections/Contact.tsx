import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { useRef, useState } from "react";

const Contact = () => {
  //   const form = useRef<HTMLFormElement>(null);

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

      {/* Resume buttons */}
      <motion.div
        className="mt-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="/Resume_v.pdf"
          download
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-6 py-3 rounded-lg shadow transition"
        >
          📄 Download Resume
        </a>
        <a
          href="/Resume_v.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-cyan-400 hover:text-cyan-300"
        >
          Or view it in a new tab →
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-6 text-cyan-400 text-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
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
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Vishesh Saluja. All rights reserved.
      </motion.p>
    </div>
  );
};

export default Contact;
