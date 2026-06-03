import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <footer id="contact" className="py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-baseline gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-accent/50">04</span>
        </motion.div>

        {/* Large heading — text mask reveal */}
        <div className="overflow-hidden pb-2">
          <motion.h2
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-stone-100 tracking-tight"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Let&apos;s Connect
          </motion.h2>
        </div>

        <motion.p
          className="text-stone-600 max-w-lg mt-6 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Always open to interesting conversations, collaborations, or new
          opportunities.
        </motion.p>

        <motion.a
          href="mailto:visheshsaluja.mar03@gmail.com"
          className="inline-flex items-center gap-2.5 mt-8 text-stone-400 hover:text-stone-100 transition-colors duration-300 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaEnvelope size={14} />
          visheshsaluja.mar03@gmail.com
        </motion.a>

        <motion.div
          className="flex items-center gap-5 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://github.com/VisheshSaluja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-700 hover:text-stone-300 transition-colors duration-300"
            aria-label="GitHub"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/visheshsaluja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-700 hover:text-stone-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={18} />
          </a>
        </motion.div>

        {/* Footer */}
        <div className="border-t border-white/[0.03] mt-24 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-stone-800">
          <span>&copy; 2026 Vishesh Saluja</span>
          <span>Built with React + Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
