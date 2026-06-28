"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const skillGroups = [
  {
    name: "Languages",
    skills: ["JavaScript", "Python", "Java", "Scala", "C++", "C"],
    dot: "bg-sky-400",
    pillColor: "bg-sky-50 border-sky-100 text-sky-700",
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js 14", "Tailwind CSS", "Framer Motion", "HTML5"],
    dot: "bg-purple-400",
    pillColor: "bg-purple-50 border-purple-100 text-purple-700",
  },
  {
    name: "Backend & Data",
    skills: ["Node.js", "Express.js", "Apache Spark", "RESTful APIs"],
    dot: "bg-emerald-400",
    pillColor: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["AWS S3", "DynamoDB", "Lambda", "EMR", "Step Functions", "EventBridge", "CDK", "CloudFormation"],
    dot: "bg-amber-400",
    pillColor: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    name: "AI & ML",
    skills: [
      "Prompt Engineering", "AgentZ", "Claude Sonnet 4.5", "LLM APIs",
      "PyTorch", "BERT", "FAISS", "LangChain", "TensorFlow.js", "MediaPipe", "scikit-learn",
    ],
    dot: "bg-pink-400",
    pillColor: "bg-pink-50 border-pink-100 text-pink-700",
  },
  {
    name: "Databases",
    skills: ["MongoDB", "DynamoDB", "Firebase", "SQLite"],
    dot: "bg-violet-400",
    pillColor: "bg-violet-50 border-violet-100 text-violet-700",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openGroups, setOpenGroups] = useState<Set<number>>(new Set([0, 4]));

  const toggleGroup = (index: number) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="skills" className="py-32 md:py-44 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-100/40 to-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold">
            What I <span className="text-gradient">Work With</span>
          </h2>
        </motion.div>

        <div className="space-y-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.name}
              className="glass-strong rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + gi * 0.06 }}
            >
              <button
                onClick={() => toggleGroup(gi)}
                className="w-full text-left px-6 md:px-8 py-4 md:py-5 flex items-center gap-4 group"
              >
                <div className={`w-2 h-2 rounded-full ${group.dot} flex-shrink-0`} />
                <span className="text-sm font-semibold text-[#1a1035]/70 group-hover:text-[#1a1035] transition-colors flex-1">
                  {group.name}
                </span>
                <span className="text-xs text-[#1a1035]/30 font-[var(--font-mono)]">
                  {group.skills.length}
                </span>
                <motion.span
                  className="text-[#1a1035]/25 text-base"
                  animate={{ rotate: openGroups.has(gi) ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  ↓
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openGroups.has(gi) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-5 pt-0">
                      <div className="flex flex-wrap gap-2.5">
                        {group.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className={`px-3.5 py-2 text-sm font-medium border rounded-xl transition-all duration-200 cursor-default hover:scale-105 ${group.pillColor}`}
                            whileHover={{ y: -2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
