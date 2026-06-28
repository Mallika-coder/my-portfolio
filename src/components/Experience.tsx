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
    highlight: "22 marketplaces · 88 ingestion jobs · CDK",
    tags: ["TypeScript", "EventBridge", "Spark"],
  },
  {
    title: "Spark Migration",
    highlight: "Legacy → event-driven · Scala · Factory pattern",
    tags: ["Scala", "EMR", "Event-Driven"],
  },
  {
    title: "First CR — Week 2",
    highlight: "Java · 100% test coverage · Shipped",
    tags: ["Java", "Testing"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 md:py-40 px-6 md:px-12 lg:px-16" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-6">
            Where I&apos;ve <span className="text-gradient">Worked</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <div>
              <p className="text-base font-semibold text-white/80">Amazon</p>
              <p className="text-sm text-white/30">SDE Intern · May – July 2026 · Bengaluru</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline — minimal, spacious */}
        <div className="relative pl-8 border-l border-white/10">
          {experienceItems.map((item, i) => (
            <motion.div
              key={i}
              className="mb-14 last:mb-0 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            >
              {/* Dot */}
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 border-purple-400/60 bg-[#0a0a0a] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </div>

              {/* Content — clean, minimal */}
              <h3 className="text-lg md:text-xl font-bold text-white/85 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/35 mb-3">
                {item.highlight}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[10px] font-[var(--font-mono)] text-purple-300/50 bg-purple-500/8 rounded-md border border-purple-500/10">
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
