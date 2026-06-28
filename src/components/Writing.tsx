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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="writing" className="py-32 md:py-44 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-pink-100/40 to-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          I Also <span className="text-gradient">Write</span>
        </motion.h2>
        <motion.p
          className="text-lg text-[#1a1035]/50 mb-16 max-w-lg"
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
              href="https://medium.com/@mallikav"
              target="_blank"
              rel="noopener noreferrer"
              className={`card-hover block p-8 rounded-3xl glass-strong hover:shadow-xl hover:shadow-purple-100/20 transition-all duration-400 group ${
                article.featured ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-semibold text-purple-500 bg-purple-50 px-2.5 py-1 rounded-full">
                  {article.readTime}
                </span>
                {article.featured && (
                  <span className="text-xs font-semibold text-sky-500 bg-sky-50 px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-xl font-[var(--font-playfair)] font-bold text-[#1a1035] mb-3 group-hover:text-gradient transition-all duration-300 leading-snug">
                {article.title}
              </h3>
              <p className="text-[#1a1035]/50 text-sm leading-relaxed">
                {article.preview}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://medium.com/@mallikav"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-200/30 transition-all duration-300 hover:scale-105"
          >
            Read on Medium →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
