"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experienceCards = [
  {
    title: "Built AI Agents That Replaced Hours of Manual Work",
    description:
      "Engineered 2 autonomous AI agents on Amazon's AgentZ platform using Claude Sonnet 4.5 + Cybernaut browser automation. Automated competitor feasibility evaluation across 14 SOP criteria. Iterated v1→v7 in 2 days. Achieved 100% accuracy across 26 competitors in 8 global marketplaces.",
    metrics: ["100% accuracy", "26 competitors", "11 min vs 60 min", "$0.55/run"],
    gradient: "from-purple-400/20 to-sky-400/20",
    iconGradient: "from-purple-500 to-sky-500",
  },
  {
    title: "Distributed Pipeline Across 22 Global Marketplaces",
    description:
      "Onboarded LMS into GAIA governance framework. CDK TypeScript infrastructure, 22 blast-radius-isolated EventBridge schedulers, 88 Cradle/Dryad ingestion jobs, Spark transformation on EMR.",
    metrics: ["22 marketplaces", "88 ingestion jobs", "CDK + EMR"],
    gradient: "from-sky-400/20 to-mint-400/20",
    iconGradient: "from-sky-500 to-emerald-500",
  },
  {
    title: "Legacy to Modern Event-Driven Architecture",
    description:
      "Migrated Spark transformation from legacy Sagittarius workflow to modern event-driven architecture in Scala. Factory-pattern routing across enricher types.",
    metrics: ["Scala", "Apache Spark", "EMR"],
    gradient: "from-pink-400/20 to-purple-400/20",
    iconGradient: "from-pink-500 to-purple-500",
  },
  {
    title: "System Reliability Fix — First CR Shipped",
    description:
      "Replaced hardcoded individual email with team distribution list in Cognitum alerting system. Eliminated single-point-of-failure for 15+ report notifications/quarter. 100% new line test coverage.",
    metrics: ["Java", "100% coverage", "First CR shipped"],
    gradient: "from-amber-400/20 to-pink-400/20",
    iconGradient: "from-amber-500 to-pink-500",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCard, setActiveCard] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-2 -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Where I&apos;ve <span className="text-gradient">Worked</span>
        </motion.h2>

        {/* Company header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-200/30">
            A
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1a1035]">Amazon</h3>
            <p className="text-sm text-[#1a1035]/50">
              SDE Intern · May 2026 – July 2026 · Bengaluru
            </p>
          </div>
        </motion.div>

        {/* Interactive timeline cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experienceCards.map((card, i) => (
            <motion.div
              key={i}
              className={`card-hover relative p-8 rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 ${
                activeCard === i
                  ? "glass-strong shadow-xl shadow-purple-100/20 scale-[1.02]"
                  : "glass hover:shadow-lg"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
            >
              {/* Gradient background on active */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-500 ${activeCard === i ? "opacity-100" : ""}`} />

              <div className="relative z-10">
                {/* Timeline dot */}
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${card.iconGradient} mb-4`} />

                <h4 className="text-lg font-bold text-[#1a1035] mb-3 leading-snug">
                  {card.title}
                </h4>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeCard === i ? "auto" : 0,
                    opacity: activeCard === i ? 1 : 0,
                  }}
                  className="overflow-hidden"
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <p className="text-[#1a1035]/60 leading-relaxed mb-4 text-sm">
                    {card.description}
                  </p>
                </motion.div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {card.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 text-xs font-medium bg-white/60 text-[#1a1035]/70 rounded-full border border-white/80"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
