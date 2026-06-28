"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const experienceCards = [
  {
    title: "Built AI Agents That Replaced Hours of Manual Work",
    subtitle: "AgentZ + Claude Sonnet 4.5 · 100% accuracy",
    description:
      "Engineered 2 autonomous AI agents on Amazon's AgentZ platform using Claude Sonnet 4.5 + Cybernaut browser automation. Automated competitor feasibility evaluation across 14 SOP criteria. Iterated v1→v7 in 2 days. Achieved 100% accuracy across 26 competitors in 8 global marketplaces.",
    metrics: ["100% accuracy", "26 competitors", "11 min vs 60 min", "$0.55/run"],
    dot: "bg-purple-400",
  },
  {
    title: "Distributed Pipeline Across 22 Global Marketplaces",
    subtitle: "GAIA Framework · CDK · EMR · EventBridge",
    description:
      "Onboarded LMS into GAIA governance framework. CDK TypeScript infrastructure, 22 blast-radius-isolated EventBridge schedulers, 88 Cradle/Dryad ingestion jobs, Spark transformation on EMR.",
    metrics: ["22 marketplaces", "88 ingestion jobs", "CDK + EMR"],
    dot: "bg-sky-400",
  },
  {
    title: "Legacy to Modern Event-Driven Architecture",
    subtitle: "Scala · Apache Spark · Factory Pattern",
    description:
      "Migrated Spark transformation from legacy Sagittarius workflow to modern event-driven architecture in Scala. Factory-pattern routing across enricher types.",
    metrics: ["Scala", "Apache Spark", "EMR"],
    dot: "bg-pink-400",
  },
  {
    title: "System Reliability Fix — First CR Shipped",
    subtitle: "Java · 100% test coverage · Week 2",
    description:
      "Replaced hardcoded individual email with team distribution list in Cognitum alerting system. Eliminated single-point-of-failure for 15+ report notifications/quarter. 100% new line test coverage.",
    metrics: ["Java", "100% coverage", "First CR shipped"],
    dot: "bg-emerald-400",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 md:py-44 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="absolute inset-0 mesh-gradient-2 -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-6">
            Where I&apos;ve <span className="text-gradient">Worked</span>
          </h2>

          {/* Company badge */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
              A
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a1035]">Amazon</h3>
              <p className="text-xs text-[#1a1035]/40">
                SDE Intern · May – July 2026 · Bengaluru
              </p>
            </div>
          </div>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {experienceCards.map((card, i) => (
            <motion.div
              key={i}
              className="glass-strong rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center gap-4 group"
              >
                <div className={`w-2.5 h-2.5 rounded-full ${card.dot} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm md:text-base font-bold text-[#1a1035] group-hover:text-gradient transition-all duration-300 leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#1a1035]/35 mt-0.5 truncate">
                    {card.subtitle}
                  </p>
                </div>
                <motion.span
                  className="text-[#1a1035]/25 text-lg flex-shrink-0"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <div className="h-[1px] bg-gradient-to-r from-purple-200 to-sky-200 opacity-30 mb-5" />
                      <p className="text-sm text-[#1a1035]/55 leading-relaxed mb-5">
                        {card.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {card.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-3 py-1.5 text-[11px] font-semibold bg-white/60 text-[#1a1035]/55 rounded-full border border-white/80"
                          >
                            {metric}
                          </span>
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
