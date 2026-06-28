"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    title: "Seven weeks at Amazon and I'm already scared of forgetting.",
    preview:
      "Not the technical stuff — I'll remember the code. That part gets saved to GitHub...",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "What Building AI Agents Taught Me About Problem Solving",
    preview:
      "When you iterate from v1 to v7 in two days, you learn that the first solution is never the best one.",
    readTime: "4 min read",
    featured: false,
  },
  {
    title: "Why Every Engineer Should Write",
    preview:
      "Clear code and clear prose share the same foundation: knowing what you actually mean.",
    readTime: "3 min read",
    featured: false,
  },
];

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="writing" className="py-24 md:py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          I Also <span className="text-amber-400">Write</span>
        </motion.h2>
        <motion.p
          className="text-lg text-[#f5f5f0]/60 mb-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Before I was an engineer, I was a writer. Still am.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href="https://medium.com/@sonimallikav"
              target="_blank"
              rel="noopener noreferrer"
              className={`card-hover block p-8 rounded-2xl bg-[#0d0f1a]/80 border border-white/5 hover:border-amber-400/30 transition-all duration-300 ${
                article.featured ? "md:col-span-2 md:row-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-[var(--font-mono)] text-amber-400/70 px-2 py-0.5 bg-amber-400/10 rounded">
                  {article.readTime}
                </span>
                {article.featured && (
                  <span className="text-xs font-[var(--font-mono)] text-indigo-400/70 px-2 py-0.5 bg-indigo-400/10 rounded">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-xl font-[var(--font-playfair)] font-bold text-[#f5f5f0] mb-3 group-hover:text-amber-400">
                {article.title}
              </h3>
              <p className="text-[#f5f5f0]/60 text-sm leading-relaxed">
                {article.preview}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://medium.com/@sonimallikav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-amber-400 border border-amber-400/30 rounded-full hover:bg-amber-400/10 transition-all duration-300"
          >
            Read on Medium →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
