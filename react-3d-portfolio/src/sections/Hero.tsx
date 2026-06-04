import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -80]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const maskReveal = {
    hidden: { y: "110%" },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-16"
    >
      {/* Warm cursor spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 169, 110, 0.04), transparent 40%)`,
        }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-6xl mx-auto pt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-16"
      >
        {/* Left — text content */}
        <div className="flex-1 min-w-0">
          {/* Name — cinematic text mask reveal */}
          <div className="overflow-hidden pb-1">
            <motion.h1
              className="font-display text-[clamp(3rem,10vw,9rem)] font-black tracking-[-0.04em] text-stone-100 leading-[0.95]"
              variants={maskReveal}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Vishesh
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-2">
            <motion.h1
              className="font-display text-[clamp(3rem,10vw,9rem)] font-black tracking-[-0.04em] text-stone-100 leading-[0.95]"
              variants={maskReveal}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Saluja
            </motion.h1>
          </div>

          {/* Title with drawing line */}
          <div className="flex items-center gap-4 mt-8 md:mt-10">
            <motion.div
              className="h-px bg-accent/60"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.p
              className="text-xs md:text-sm text-stone-400 tracking-[0.25em] uppercase font-medium"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              AI Software Engineer
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            className="text-base md:text-lg text-stone-400 max-w-lg mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I build production AI — from RAG pipelines to multi-agent systems —
            and the infrastructure to run them at scale.
          </motion.p>

          {/* Social + Resume */}
          <motion.div
            className="flex items-center gap-5 mt-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {[
              {
                href: "https://github.com/VisheshSaluja",
                icon: <SiGithub size={18} />,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/visheshsaluja",
                icon: <SiLinkedin size={18} />,
                label: "LinkedIn",
              },
              {
                href: "https://www.instagram.com/vishesh_saluja",
                icon: <SiInstagram size={18} />,
                label: "Instagram",
              },
              {
                href: "mailto:visheshsaluja.mar03@gmail.com",
                icon: <FaEnvelope size={16} />,
                label: "Email",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-200 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}

            <div className="w-px h-4 bg-stone-700 mx-1" />

            <a
              href="/Portfolio-VS/Resume_Vishesh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 hover:text-stone-200 transition-colors duration-300"
            >
              Resume &rarr;
            </a>
          </motion.div>
        </div>

        {/* Right — profile card */}
        <motion.div
          className="hidden md:block shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative group">
            {/* Subtle glow behind the card */}
            <div className="absolute -inset-1 rounded-2xl bg-accent/[0.06] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative w-[300px] rounded-2xl border border-white/[0.08] bg-surface overflow-hidden group-hover:border-white/[0.12] transition-colors duration-500">
              {/* Photo */}
              <div className="overflow-hidden">
                <img
                  src="/Portfolio-VS/IMG_2504.jpg"
                  alt="Vishesh Saluja"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card footer */}
              <div className="p-5 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] text-stone-400 border border-white/[0.06]">
                    🥋 World Ranked in Taekwondo
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] text-stone-400 border border-white/[0.06]">
                    🎸 Guitar
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] text-stone-400 border border-white/[0.06]">
                    🌍 Explorer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{ opacity }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-600">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-stone-600 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
