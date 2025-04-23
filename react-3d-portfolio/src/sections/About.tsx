import { motion } from "framer-motion";
import { FaCode, FaGuitar, FaGlobeAsia } from "react-icons/fa";
import { GiBlackBelt } from "react-icons/gi";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-cyan-400 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          Hey — I’m Vishesh!{" "}
          <FaCode className="inline-block text-cyan-400 ml-1" /> I love building
          cool stuff with code and turning ideas into experiences that actually{" "}
          <em>work</em>. I’m big on learning new things, solving real problems,
          and keeping things clean (in code and design!).
        </p>

        <p>
          Outside of tech, I’ve kicked my way to an international taekwondo
          medal <GiBlackBelt className="inline-block text-yellow-400" /> jam on
          the guitar when I can{" "}
          <FaGuitar className="inline-block text-pink-400" /> and chase sunsets
          wherever I travel{" "}
          <FaGlobeAsia className="inline-block text-green-400" />.
        </p>

        <p>
          Basically, I like a good challenge — whether it’s debugging or board
          breaking.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
