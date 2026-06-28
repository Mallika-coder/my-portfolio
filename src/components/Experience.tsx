"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experienceCards = [
  {
    title: "Built AI Agents That Replaced Hours of Manual Work",
    description:
      "Engineered 2 autonomous AI agents on Amazon's AgentZ platform using Claude Sonnet 4.5 + Cybernaut browser automation. Automated competitor feasibility evaluation across 14 SOP criteria. Iterated v1→v7 in 2 days. Achieved 100% accuracy across 26 competitors in 8 global marketplaces.",
    metrics: ["100% accuracy", "26 competitors", "11 min vs 60 min", "$0.55/run"],
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Distributed Pipeline Across 22 Global Marketplaces",
    description:
      "Onboarded LMS into GAIA governance framework. CDK TypeScript infrastructure, 22 blast-radius-isolated EventBridge schedulers, 88 Cradle/Dryad ingestion jobs, Spark transformation on EMR.",
    metrics: ["22 marketplaces", "88 ingestion jobs", "CDK + EMR"],
    accent: "from-indigo-400 to-purple-500",
  },
  {
    title: "Legacy to Modern Event-Driven Architecture",
    description:
      "Migrated Spark transformation from legacy Sagittarius workflow to modern event-driven architecture in Scala. Factory-pattern routing across enricher types.",
    metrics: ["Scala", "Apache Spark", "EMR"],
    accent: "from-green-400 to-emerald-500",
  },
  {
    title: "System Reliability Fix",
    description:
      "Replaced hardcoded individual email with team distribution list in Cognitum alerting system. Eliminated single-point-of-failure for 15+ report notifications/quarter. 100% new line test coverage.",
    metrics: ["Java", "100% coverage", "First CR shipped"],
    accent: "from-blue-400 to-cyan-500",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Where I&apos;ve Worked
        </motion.h2>

        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-400 via-amber-400/50 to-transparent" />

          {/* Company header */}
          <div className="ml-6 md:ml-20 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0d0f1a] border border-amber-400/30 rounded-xl flex items-center justify-center">
                <span className="text-amber-400 font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#f5f5f0]">Amazon</h3>
                <p className="text-[#f5f5f0]/60">
                  Software Development Engineer Intern · May 2026 – July 2026 · Bengaluru, India
                </p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="ml-6 md:ml-20 grid gap-6">
            {experienceCards.map((card, i) => (
              <motion.div
                key={i}
                className="card-hover relative p-6 md:p-8 rounded-2xl bg-[#0d0f1a]/80 border border-white/5 cursor-pointer overflow-hidden group"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                onClick={() => setExpandedCard(expandedCard === i ? null : i)}
              >
                {/* Gradient accent line */}
                <div
                  className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${card.accent} opacity-50 group-hover:opacity-100 transition-opacity`}
                />

                <div className="flex items-start justify-between">
                  <h4 className="text-lg md:text-xl font-semibold text-[#f5f5f0] group-hover:text-amber-400 transition-colors pr-4">
                    {card.title}
                  </h4>
                  <motion.span
                    className="text-[#f5f5f0]/40 text-xl flex-shrink-0"
                    animate={{ rotate: expandedCard === i ? 180 : 0 }}
                  >
                    ↓
                  </motion.span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCard === i ? "auto" : 0,
                    opacity: expandedCard === i ? 1 : 0,
                  }}
                  className="overflow-hidden"
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#f5f5f0]/70 mt-4 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 text-xs font-[var(--font-mono)] bg-amber-400/10 text-amber-400 rounded-full border border-amber-400/20"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
