"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    title: "Seven weeks at Amazon and I'm already scared of forgetting.",
    preview:
      "Not the technical stuff — I'll remember the code. That part gets saved to GitHub. But the feeling of walking into that office on Day 1...",
    readTime: "5 min",
    tag: "Featured",
    gradient: "from-purple-400/15 to-pink-400/10",
  },
  {
    title: "What Building AI Agents Taught Me About Problem Solving",
    preview:
      "When you iterate from v1 to v7 in two days, you learn that the first solution is never the best one.",
    readTime: "4 min",
    tag: "Engineering",
    gradient: "from-sky-400/15 to-purple-400/10",
  },
  {
    title: "Why Every Engineer Should Write",
    preview:
      "Clear code and clear prose share the same foundation: knowing what you actually mean.",
    readTime: "3 min",
    tag: "Thoughts",
    gradient: "from-pink-400/15 to-amber-400/10",
  },
];

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="writing" className="py-36 md:py-48 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-pink-100/40 to-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-3">
            I Also <span className="text-gradient">Write</span>
          </h2>
          <p className="text-sm text-[#1a1035]/40">
            Before I was an engineer, I was a writer. Still am.
          </p>
        </motion.div>

        {/* Article cards — grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href="https://medium.com/@mallikav"
              target="_blank"
              rel="noopener noreferrer"
              className={`card-hover block p-7 rounded-3xl glass-strong bg-gradient-to-br ${article.gradient} border border-white/60 group`}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-semibold text-purple-500 bg-purple-50 px-2 py-0.5 rounded-full">
                  {article.tag}
                </span>
                <span className="text-[10px] text-[#1a1035]/30 font-[var(--font-mono)]">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1a1035] mb-3 leading-snug group-hover:text-gradient transition-all duration-300">
                {article.title}
              </h3>
              <p className="text-xs text-[#1a1035]/45 leading-relaxed italic">
                &quot;{article.preview}&quot;
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <a
            href="https://medium.com/@mallikav"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-200/30 transition-all duration-300 hover:scale-105 text-sm"
          >
            Read all on Medium →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
