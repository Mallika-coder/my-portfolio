"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experienceItems = [
  {
    title: "AI Agents",
    highlight: "100% accuracy · 26 competitors · $0.55/run",
    tags: ["Claude", "AgentZ", "Cybernaut"],
  },
  {
    title: "Distributed Pipeline",
    highlight: "22 marketplaces · 88 ingestion jobs",
    tags: ["TypeScript", "CDK", "Spark"],
  },
  {
    title: "Spark Migration",
    highlight: "Legacy → event-driven · Scala",
    tags: ["Scala", "EMR"],
  },
  {
    title: "First CR — Week 2",
    highlight: "Java · 100% test coverage",
    tags: ["Java", "Testing"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-40 md:py-56 px-8 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header — editorial style */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] text-white/20 font-[var(--font-mono)] tracking-[0.2em] uppercase mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-6">
            Amazon
          </h2>
          <p className="text-base text-white/30">
            SDE Intern · May – July 2026 · Bengaluru
          </p>
        </motion.div>

        {/* Timeline — clean, spacious */}
        <div className="relative pl-8 border-l border-white/8">
          {experienceItems.map((item, i) => (
            <motion.div
              key={i}
              className="mb-16 last:mb-0 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
            >
              {/* Dot */}
              <div className="absolute -left-[37px] top-2 w-3 h-3 rounded-full border border-white/20 bg-[#0a0a0a]">
                <div className="absolute inset-[3px] rounded-full bg-purple-400/60" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white/80 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/30 mb-4">
                {item.highlight}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-[var(--font-mono)] text-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
