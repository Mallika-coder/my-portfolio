"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const experienceItems = [
  {
    title: "AI Agents That Replaced Hours of Manual Work",
    metrics: "100% accuracy · 26 competitors · $0.55/run · 11 min vs 60 min",
    overview:
      "Engineered 2 autonomous AI agents on Amazon's AgentZ platform using Claude Sonnet 4.5 + Cybernaut browser automation. Automated competitor feasibility evaluation across 14 SOP criteria. Iterated v1→v7 in 2 days.",
    tags: ["AI Agent", "Claude Sonnet 4.5", "Cybernaut", "AgentZ"],
    image: "/images/i8.jpeg",
  },
  {
    title: "Distributed Pipeline Across 22 Marketplaces",
    metrics: "22 marketplaces · 88 ingestion jobs · CDK + EMR",
    overview:
      "Onboarded LMS into GAIA governance framework. CDK TypeScript infrastructure, 22 blast-radius-isolated EventBridge schedulers, 88 Cradle/Dryad ingestion jobs, Spark transformation on EMR.",
    tags: ["TypeScript", "CDK", "EventBridge", "Spark", "EMR"],
    image: "/images/i3.jpeg",
  },
  {
    title: "Legacy to Event-Driven Architecture",
    metrics: "Scala · Apache Spark · Factory Pattern",
    overview:
      "Migrated Spark transformation from legacy Sagittarius workflow to modern event-driven architecture in Scala. Factory-pattern routing across enricher types.",
    tags: ["Scala", "Spark", "Event-Driven", "Factory Pattern"],
    image: "/images/i1.jpeg",
  },
  {
    title: "First CR Shipped — Week 2",
    metrics: "Java · 100% test coverage · Shipped in Week 2",
    overview:
      "Replaced hardcoded individual email with team distribution list in Cognitum alerting system. Eliminated single-point-of-failure for 15+ report notifications/quarter.",
    tags: ["Java", "Testing", "Reliability"],
    image: "/images/i2.jpeg",
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm font-[var(--font-playfair)] font-bold text-white/70 hover:text-white transition-colors">
            ← Back
          </Link>
          <span className="text-[11px] font-[var(--font-mono)] text-white/25 tracking-wider">
            EXPERIENCE
          </span>
        </div>
      </header>

      {/* Title */}
      <section className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Amazon
          </motion.h1>
          <motion.p
            className="text-base text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            SDE Intern · May – July 2026 · Bengaluru
          </motion.p>
        </div>
      </section>

      {/* Experience items — alternating image/text like Wix */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-2">
          {experienceItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="border-t border-white/8 py-12 md:py-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Image */}
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h2 className="text-xl md:text-2xl font-[var(--font-playfair)] font-bold mb-4">
                    {item.title}
                  </h2>

                  <p className="text-xs text-white/30 font-[var(--font-mono)] mb-6">{item.metrics}</p>

                  <div className="mb-6">
                    <p className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-wider mb-2">OVERVIEW</p>
                    <p className="text-sm text-white/45 leading-relaxed">{item.overview}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] font-[var(--font-mono)] text-white/25 border border-white/8 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
