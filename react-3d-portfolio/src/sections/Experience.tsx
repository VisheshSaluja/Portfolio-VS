import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    title: "AI Software Engineer",
    qualifier: "Forward Deployed",
    company: "ProspectIntel",
    period: "Jan 2026 – Present",
    bullets: [
      "Building a production AI sales intelligence platform using agentic workflows + RAG, enabling real-time prospect research across multiple users and concurrent queries.",
      "Engineered a RAG-based intelligence pipeline using hybrid retrieval over PostgreSQL, improving reliability from 70% to 95% and reducing latency by 2–3x.",
      "Implemented a lazy-loading inference architecture with streaming LLM responses, cutting perceived latency by 40% via gated model execution.",
      "Built evaluation and observability pipelines (Langfuse) to track prompt performance, latency, and token usage, reducing token consumption by 35%.",
    ],
  },
  {
    title: "AI Software Developer",
    company: "Bruise @ GMU — College of Public Health",
    period: "Jun 2025 – Present",
    bullets: [
      "Engineered a HIPAA-compliant full-stack AI platform (FastAPI, React/Next.js) deployed across multiple universities, used by 50+ clinicians for real-time medical imaging workflows.",
      "Built a dedicated AI inference microservice (Flask) serving YOLO-based bruise detection models with dynamic model routing, offloading heavy compute from the main backend.",
      "Developed a Python-based HTTP gateway bridging a Go backend with AI services, enabling cross-language, asynchronous processing.",
      "Built LLM summarization pipelines for structured clinical notes and integrated Unity 3D body mapping for clinical visualization.",
    ],
  },
  {
    title: "Software Engineer (ML)",
    company: "Geoweaver — NASA / ESIP",
    period: "Feb 2024 – Jan 2025",
    bullets: [
      "Built and productionized scalable ML pipelines for TB-scale geospatial datasets — snow water estimation, wildfire detection, ozone analysis.",
      "Optimized workflows on HPC systems (Hopper), leveraging distributed processing to improve compute efficiency by 20%.",
      "Designed and integrated multi-database support and an in-app code editor, expanding platform flexibility for developers.",
      "Improved UI responsiveness and feature experience, contributing to a 25% increase in monthly active users.",
      "Mentored 4 interns in ML experimentation and system design, co-authoring a peer-reviewed research publication.",
    ],
  },
  {
    title: "AI/ML Engineer",
    company: "Tech Solutions",
    period: "Nov 2021 – Jul 2023",
    bullets: [
      "Built real-time fraud detection systems using Flask APIs and XGBoost, processing 10M+ financial transactions/month and reducing high-risk exposure by 15%.",
      "Developed production-grade APIs and asynchronous processing pipelines supporting real-time, explainable ML-driven decisions.",
      "Worked with AWS infrastructure (EC2, S3, CloudWatch) and Docker-based deployments for scalable, monitored model serving.",
      "Implemented CI/CD and MLOps workflows using Docker, GitHub Actions, and MLflow, reducing iteration time by 30%.",
    ],
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-baseline gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-accent/70">02</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-100">
            Experience
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline track */}
          <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-white/[0.03]" />
          <motion.div
            className="hidden md:block absolute left-[200px] top-0 w-px bg-gradient-to-b from-accent/30 to-accent/5 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-0">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="group relative grid md:grid-cols-[185px_1fr] gap-3 md:gap-16 py-10 border-b border-white/[0.03] last:border-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-[196px] top-12 w-[9px] h-[9px] rounded-full border-2 border-accent/20 bg-background group-hover:border-accent/50 transition-colors duration-500 z-10" />

                <div className="text-sm text-stone-600 md:pt-0.5 md:text-right font-mono">
                  {exp.period}
                </div>

                <div className="md:pl-4">
                  <h3 className="text-lg md:text-xl font-semibold text-stone-200 font-display">
                    {exp.title}
                    {exp.qualifier && (
                      <span className="text-stone-500 font-normal text-base">
                        {" "}
                        · {exp.qualifier}
                      </span>
                    )}
                  </h3>
                  <p className="text-stone-500 text-sm mt-1">{exp.company}</p>
                  <ul className="mt-4 space-y-2.5">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm text-stone-400 leading-relaxed flex gap-3"
                      >
                        <span className="mt-[0.55em] w-1 h-1 rounded-full bg-stone-700 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
