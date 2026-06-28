"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    name: "Languages",
    skills: ["JavaScript", "Python", "Java", "Scala", "C++", "C"],
    color: "text-amber-400 border-amber-400/30 hover:bg-amber-400/10",
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js 14", "Tailwind CSS", "Framer Motion", "HTML5"],
    color: "text-blue-400 border-blue-400/30 hover:bg-blue-400/10",
  },
  {
    name: "Backend & Data",
    skills: ["Node.js", "Express.js", "Apache Spark", "RESTful APIs"],
    color: "text-green-400 border-green-400/30 hover:bg-green-400/10",
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["AWS S3", "DynamoDB", "Lambda", "EMR", "Step Functions", "EventBridge", "CDK", "CloudFormation"],
    color: "text-orange-400 border-orange-400/30 hover:bg-orange-400/10",
  },
  {
    name: "Big Data & Compute",
    skills: ["Apache Spark", "EMR", "Cradle", "Dryad", "GAIA Framework"],
    color: "text-purple-400 border-purple-400/30 hover:bg-purple-400/10",
  },
  {
    name: "AI & ML",
    skills: [
      "Prompt Engineering",
      "AgentZ",
      "Claude Sonnet 4.5",
      "LLM APIs",
      "PyTorch",
      "BERT",
      "FAISS",
      "LangChain",
      "TensorFlow.js",
      "MediaPipe",
      "scikit-learn",
    ],
    color: "text-pink-400 border-pink-400/30 hover:bg-pink-400/10",
  },
  {
    name: "Databases",
    skills: ["MongoDB", "DynamoDB", "Firebase", "SQLite"],
    color: "text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What I <span className="text-amber-400">Work With</span>
        </motion.h2>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <h3 className="text-sm font-[var(--font-mono)] text-[#f5f5f0]/40 uppercase tracking-wider mb-4">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className={`px-4 py-2 text-sm border rounded-full transition-all duration-300 cursor-default ${group.color}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
