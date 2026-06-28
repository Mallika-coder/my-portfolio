"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experienceCards = [
  {
    title: "Built AI Agents That Replaced Hours of Manual Work",
    subtitle: "AI Agent + Claude Sonnet 4.5",
    description:
      "Engineered 2 autonomous AI agents on Amazon's AgentZ platform using Claude Sonnet 4.5 + Cybernaut browser automation. Automated competitor feasibility evaluation across 14 SOP criteria. Iterated v1→v7 in 2 days.",
    metrics: ["100% accuracy", "26 competitors", "11 min vs 60 min", "$0.55/run"],
    tags: ["AI Agent", "Claude", "Cybernaut"],
    gradient: "from-purple-400/20 to-sky-400/10",
    dot: "bg-purple-400",
  },
  {
    title: "Distributed Pipeline Across 22 Global Marketplaces",
    subtitle: "GAIA Framework · CDK · EMR",
    description:
      "Onboarded LMS into GAIA governance framework. CDK TypeScript infrastructure, 22 blast-radius-isolated EventBridge schedulers, 88 Cradle/Dryad ingestion jobs, Spark transformation on EMR.",
    metrics: ["22 marketplaces", "88 ingestion jobs", "CDK + EMR"],
    tags: ["TypeScript", "CDK", "EventBridge", "Spark"],
    gradient: "from-sky-400/20 to-emerald-400/10",
    dot: "bg-sky-400",
  },
  {
    title: "Legacy to Modern Event-Driven Architecture",
    subtitle: "Scala · Apache Spark · Factory Pattern",
    description:
      "Migrated Spark transformation from legacy Sagittarius workflow to modern event-driven architecture in Scala. Factory-pattern routing across enricher types.",
    metrics: ["Scala", "Apache Spark", "EMR"],
    tags: ["Scala", "Spark", "Event-Driven"],
    gradient: "from-pink-400/20 to-purple-400/10",
    dot: "bg-pink-400",
  },
  {
    title: "System Reliability Fix — First CR Shipped",
    subtitle: "Java · 100% test coverage · Week 2",
    description:
      "Replaced hardcoded individual email with team distribution list in Cognitum alerting system. Eliminated single-point-of-failure for 15+ report notifications/quarter.",
    metrics: ["Java", "100% coverage", "First CR shipped"],
    tags: ["Java", "Testing", "Reliability"],
    gradient: "from-emerald-400/20 to-sky-400/10",
    dot: "bg-emerald-400",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 400;
    const scrollAmount = direction === "left" ? -(cardWidth + 20) : cardWidth + 20;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 400;
    const index = Math.round(scrollRef.current.scrollLeft / (cardWidth + 20));
    setActiveIndex(index);
  };

  return (
    <div id="experience" className="py-20 md:py-28" ref={ref}>
      <div className="relative">
        <div className="absolute inset-0 mesh-gradient-2 -z-10" />

        {/* Header — padded and isolated */}
        <div className="px-6 md:px-12 lg:px-16 mb-10">
          <motion.div
            className="flex items-end justify-between max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-4">
                Where I&apos;ve <span className="text-gradient">Worked</span>
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  A
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1035]">Amazon</p>
                  <p className="text-xs text-[#1a1035]/40">SDE Intern · May – July 2026 · Bengaluru</p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#1a1035]/50 hover:text-[#1a1035] hover:shadow-md transition-all"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#1a1035]/50 hover:text-[#1a1035] hover:shadow-md transition-all"
              >
                →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel — with top/bottom padding to prevent clipping */}
        <div className="py-4">
          <motion.div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-12 lg:px-16 pb-6 no-scrollbar"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {experienceCards.map((card, i) => (
              <motion.div
                key={i}
                className={`snap-start flex-shrink-0 w-[310px] md:w-[400px] lg:w-[440px] p-7 md:p-8 rounded-3xl glass-strong bg-gradient-to-br ${card.gradient} border border-white/60 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/20`}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${card.dot}`} />
                  <span className="text-[10px] text-[#1a1035]/35 font-[var(--font-mono)] uppercase tracking-wider">
                    {card.subtitle}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#1a1035] mb-3 leading-snug">
                  {card.title}
                </h3>

                <p className="text-sm text-[#1a1035]/50 leading-relaxed mb-5">
                  {card.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {card.metrics.map((m) => (
                    <span key={m} className="px-2.5 py-1 text-[10px] font-semibold bg-white/60 text-[#1a1035]/60 rounded-full">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[9px] font-[var(--font-mono)] text-purple-600/60 bg-purple-50/60 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2 pb-4">
          {experienceCards.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-purple-400 w-6" : "bg-[#1a1035]/10 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
