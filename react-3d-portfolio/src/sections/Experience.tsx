import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer & Research Assistant",
    company: "NASA/ESIP",
    period: "Feb – Oct 2024",
    description: [
      "Led 4 interns on ML workflows for geospatial data.",
      "Added support for PostgreSQL, MySQL, and H2 with CLI integration.",
      "Improved UI responsiveness by 30% and reduced model runtime by 25%.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "QBurst Technologies",
    period: "Jul – Aug 2022",
    description: [
      "Improved BigQuery performance by 15%.",
      "Built documentation and trained teams, boosting output by 10%.",
    ],
  },
  {
    title: "ML Intern",
    company: "DynPro",
    period: "Apr – Jun 2022",
    description: [
      "Built models improving accuracy by 18%.",
      "Delivered clustering and regression boosting success rate by 20%.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-cyan-500/30 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {exp.title}
            </h3>
            <p className="text-cyan-400 font-medium">
              {exp.company} • {exp.period}
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
              {exp.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
