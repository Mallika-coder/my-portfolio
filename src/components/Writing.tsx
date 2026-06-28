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
    href: "https://medium.com/@mallikav",
  },
  {
    title: "What Building AI Agents Taught Me About Problem Solving",
    preview:
      "When you iterate from v1 to v7 in two days, you learn that the first solution is never the best one.",
    readTime: "4 min",
    tag: "Engineering",
    href: "https://medium.com/@mallikav",
  },
  {
    title: "Why Every Engineer Should Write",
    preview:
      "Clear code and clear prose share the same foundation: knowing what you actually mean.",
    readTime: "3 min",
    tag: "Thoughts",
    href: "https://medium.com/@mallikav",
  },
];

export default function Writing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="writing" className="py-32 md:py-44 px-6 md:px-12 lg:px-16 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-3">
            I Also <span className="text-gradient">Write</span>
          </h2>
          <p className="text-sm text-white/30">
            About the things I build and the things I&apos;m still figuring out.
          </p>
        </motion.div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover block p-7 rounded-2xl glass group h-full"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full">
                  {article.tag}
                </span>
                <span className="text-[10px] text-white/25 font-[var(--font-mono)]">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-base font-bold text-white/80 mb-3 leading-snug group-hover:text-gradient transition-all duration-300">
                {article.title}
              </h3>
              <p className="text-xs text-white/30 leading-relaxed italic">
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 text-sm"
          >
            Read all on Medium →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
