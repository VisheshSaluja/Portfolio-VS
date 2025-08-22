import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer",
    company: "College of Public Health - George Mason University",
    period: "Present",
    description: [
      "Building a secure Flask-based app for bruise image data set segregation to assist department-wide research.",
      "Developed frontend, API integrations, and robust backend for managing bruise image data.",
      "Working on the backend of a Bruise Detection Application using YOLO; integrating 3D human body visualization to display patient injuries.",
      "Application intended for use by healthcare professionals and legal proceedings related to domestic violence cases",
    ],
  },
  {
    title: "Research Assistant – Generative Deep Learning",
    company: "George Mason University",
    period: "Present",
    description: [
      "Working on molecular graph generation using MolGAN to design novel, valid molecules.",
      "Integrating Birdie-style pretraining objectives to enhance diversity and synthesizability",
      "Aiming to generate high-quality molecular candidates suitable for lab-scale development and drug discovery pipelines.",
    ],
  },
  {
    title: "Software Developer & Research Assistant",
    company: "NASA/ESIP",
    period: "Feb – Oct 2024",
    description: [
      "Led 4 interns on ML workflows for geospatial data.",
      "Added support for PostgreSQL, MySQL, and H2 with CLI integration.",
      "Implemented an in-app code editor and improved UI responsiveness by 30%.",
      "Reduced processing time by 25% in Snow/Ozone models.",
      "Ran large-scale workflows on Hopper supercomputer with 20% speed-up.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "QBurst Technologies",
    period: "Jul – Aug 2022",
    description: [
      "Improved BigQuery query performance by 15%. Conducted training and documentation improving team output by 10%.",
      "Assisted in developing a pipeline to migrate companies Database from Amazon RedShift to BigQuery.",
    ],
  },
  {
    title: "ML Intern",
    company: "DynPro",
    period: "Apr – Jun 2022",
    description: [
      "Optimized recommendation systems, leading to a 6.5% gain in prediction accuracy.",
      "Delivered regression and clustering results boosting success rate by 20%.",
    ],
  },
  {
    title: "Software Engineer Internn",
    company: "Accops Systems",
    period: "Jan – Mar 2022",
    description: [
      "Worked on backend logic using Python and C++ and Reduced bug resolution time by 15%",
    ],
  },
  {
    title: "Cloud Trainee",
    company: "Tech Explica",
    period: "Jul – Aug 2021",
    description: [
      "Deployed multiple websites on AWS using EC2 and S3.",
      "Increased deployment efficiency by 20% by implementing CI/CD pipelines with GitHub Actions.",
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
