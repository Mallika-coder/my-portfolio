"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    title: "Seven weeks at Amazon and I'm already scared of forgetting.",
    preview: "Not the technical stuff — I'll remember the code. But the feeling of walking into that office on Day 1...",
    tag: "Featured",
    href: "https://medium.com/@mallikav",
  },
  {
    title: "What Building AI Agents Taught Me About Problem Solving",
    preview: "When you iterate from v1 to v7 in two days, you learn that the first solution is never the best one.",
    tag: "Engineering",
    href: "https://medium.com/@mallikav",
  },
  {
    title: "Why Every Engineer Should Write",
    preview: "Clear code and clear prose share the same foundation: knowing what you actually mean.",
    tag: "Thoughts",
    href: "https://medium.com/@mallikav",
  },
];

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="writing" className="py-40 md:py-56 px-8 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] text-white/20 font-[var(--font-mono)] tracking-[0.2em] uppercase mb-4">
            Writing
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold">
            I Also Write
          </h2>
        </motion.div>

        {/* Article list — editorial rows */}
        <div className="space-y-0">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-white/8 py-10 md:py-12 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <span className="text-[10px] font-[var(--font-mono)] text-purple-300/50 tracking-wide">
                    {article.tag}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white/70 group-hover:text-white transition-colors mt-2 mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/25 italic leading-relaxed max-w-xl">
                    &quot;{article.preview}&quot;
                  </p>
                </div>
                <span className="text-white/10 group-hover:text-white/40 transition-colors text-lg mt-2 flex-shrink-0">
                  ↗
                </span>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-white/8" />
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://medium.com/@mallikav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors group"
          >
            <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 transition-all" />
            Read all on Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
}
