"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const articles = [
  {
    title: "Seven weeks at Amazon and I'm already scared of forgetting.",
    preview:
      "Not the technical stuff — I'll remember the code. That part gets saved to GitHub. But the feeling of walking into that office on Day 1, the 3am debugging sessions that ended in breakthroughs, the coffee-fueled brainstorming with my team...",
    readTime: "5 min",
    tag: "Featured",
  },
  {
    title: "What Building AI Agents Taught Me About Problem Solving",
    preview:
      "When you iterate from v1 to v7 in two days, you learn that the first solution is never the best one. Each version taught me something the previous couldn't.",
    readTime: "4 min",
    tag: "Engineering",
  },
  {
    title: "Why Every Engineer Should Write",
    preview:
      "Clear code and clear prose share the same foundation: knowing what you actually mean. Writing forces you to think in complete sentences about incomplete problems.",
    readTime: "3 min",
    tag: "Thoughts",
  },
];

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="writing" className="py-32 md:py-44 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-pink-100/40 to-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-14"
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

        {/* Article accordion */}
        <div className="space-y-3 mb-10">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              className="glass-strong rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center gap-4 group"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-[#1a1035] group-hover:text-gradient transition-all duration-300 leading-snug">
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="hidden md:inline text-[10px] font-semibold text-purple-500 bg-purple-50 px-2 py-0.5 rounded-full">
                    {article.tag}
                  </span>
                  <span className="text-[10px] text-[#1a1035]/30 font-[var(--font-mono)]">
                    {article.readTime}
                  </span>
                  <motion.span
                    className="text-[#1a1035]/25 text-base"
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ↓
                  </motion.span>
                </div>
              </button>

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
                      <div className="h-[1px] bg-gradient-to-r from-pink-200 to-purple-200 opacity-30 mb-5" />
                      <p className="text-sm text-[#1a1035]/50 leading-relaxed italic">
                        &quot;{article.preview}&quot;
                      </p>
                      <a
                        href="https://medium.com/@mallikav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-xs font-medium text-purple-500 hover:text-purple-600 transition-colors"
                      >
                        Read full article →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
