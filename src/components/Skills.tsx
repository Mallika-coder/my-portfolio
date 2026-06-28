"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    name: "Languages",
    skills: ["JavaScript", "Python", "Java", "Scala", "C++", "C"],
    gradient: "from-sky-400 to-sky-500",
    bgColor: "bg-sky-50 border-sky-200/50 hover:bg-sky-100/80 hover:border-sky-300",
    textColor: "text-sky-700",
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js 14", "Tailwind CSS", "Framer Motion", "HTML5"],
    gradient: "from-purple-400 to-purple-500",
    bgColor: "bg-purple-50 border-purple-200/50 hover:bg-purple-100/80 hover:border-purple-300",
    textColor: "text-purple-700",
  },
  {
    name: "Backend & Data",
    skills: ["Node.js", "Express.js", "Apache Spark", "RESTful APIs"],
    gradient: "from-emerald-400 to-emerald-500",
    bgColor: "bg-emerald-50 border-emerald-200/50 hover:bg-emerald-100/80 hover:border-emerald-300",
    textColor: "text-emerald-700",
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["AWS S3", "DynamoDB", "Lambda", "EMR", "Step Functions", "EventBridge", "CDK", "CloudFormation"],
    gradient: "from-amber-400 to-amber-500",
    bgColor: "bg-amber-50 border-amber-200/50 hover:bg-amber-100/80 hover:border-amber-300",
    textColor: "text-amber-700",
  },
  {
    name: "AI & ML",
    skills: [
      "Prompt Engineering", "AgentZ", "Claude Sonnet 4.5", "LLM APIs",
      "PyTorch", "BERT", "FAISS", "LangChain", "TensorFlow.js", "MediaPipe", "scikit-learn",
    ],
    gradient: "from-pink-400 to-pink-500",
    bgColor: "bg-pink-50 border-pink-200/50 hover:bg-pink-100/80 hover:border-pink-300",
    textColor: "text-pink-700",
  },
  {
    name: "Databases",
    skills: ["MongoDB", "DynamoDB", "Firebase", "SQLite"],
    gradient: "from-violet-400 to-violet-500",
    bgColor: "bg-violet-50 border-violet-200/50 hover:bg-violet-100/80 hover:border-violet-300",
    textColor: "text-violet-700",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-100/40 to-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] font-bold mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What I <span className="text-gradient">Work With</span>
        </motion.h2>

        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${group.gradient}`} />
                <h3 className="text-sm font-semibold text-[#1a1035]/40 uppercase tracking-widest">
                  {group.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className={`px-4 py-2.5 text-sm font-medium border rounded-2xl transition-all duration-300 cursor-default ${group.bgColor} ${group.textColor}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: gi * 0.08 + si * 0.03 }}
                    whileHover={{ scale: 1.08, y: -3 }}
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
