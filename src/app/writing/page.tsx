"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    title: "The Skill Nobody Taught Me in a Classroom",
    preview:
      "On my third day at Amazon, I spent almost three hours trying to understand a piece of code. Three hours of struggle disappeared because I finally asked one question.",
    tag: "Featured · Stackademic",
    readTime: "2 min",
    href: "https://medium.com/@mallikav",
    gradient: "from-amber-500/20 via-orange-600/10 to-red-500/5",
  },
  {
    title: "Seven weeks at Amazon and I'm already scared of forgetting.",
    preview:
      "Not the technical stuff — I'll remember the code. But the feeling of walking into that office on Day 1, not knowing what a Brazil build was...",
    tag: "Personal",
    readTime: "5 min",
    href: "https://medium.com/@mallikav",
    gradient: "from-purple-500/20 via-violet-600/10 to-fuchsia-500/5",
  },
  {
    title: "What Building AI Agents Taught Me About Problem Solving",
    preview:
      "When you iterate from v1 to v7 in two days, you learn that the first solution is never the best one.",
    tag: "Engineering",
    readTime: "4 min",
    href: "https://medium.com/@mallikav",
    gradient: "from-sky-500/20 via-blue-600/10 to-cyan-500/5",
  },
  {
    title: "Why Every Engineer Should Write",
    preview:
      "Clear code and clear prose share the same foundation: knowing what you actually mean. Both demand precision. Both punish ambiguity.",
    tag: "Thoughts",
    readTime: "3 min",
    href: "https://medium.com/@mallikav",
    gradient: "from-pink-500/20 via-rose-600/10 to-red-500/5",
  },
];

export default function WritingPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
            <span className="w-5 h-[1px] bg-white/30" />
            Home
          </Link>
          <span className="text-[11px] font-[var(--font-mono)] text-white/25 tracking-wider">WRITING</span>
        </div>
      </header>

      {/* Title */}
      <section className="pt-32 pb-10 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Essays & Reflections
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Writing
          </motion.h1>
          <motion.p
            className="text-base text-white/30 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About the things I build, the things I&apos;m still figuring out, and the lessons that didn&apos;t come from a textbook.
          </motion.p>
        </div>
      </section>

      {/* Articles — image + text alternating */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-t border-white/8 py-14 md:py-18 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "" : ""}`}>
                {/* Visual */}
                <div className={`md:col-span-4 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <motion.div
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br ${article.gradient}`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <p className="text-lg font-[var(--font-playfair)] font-bold text-white/10 text-center leading-tight">
                        {article.title.split(" ").slice(0, 5).join(" ")}...
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`md:col-span-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-[var(--font-mono)] text-purple-300/50">{article.tag}</span>
                    <span className="w-1 h-1 rounded-full bg-white/15" />
                    <span className="text-[10px] text-white/20">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-[var(--font-playfair)] font-bold text-white/75 group-hover:text-white transition-colors mb-4 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-white/30 leading-relaxed italic mb-4">
                    &quot;{article.preview}&quot;
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs text-white/20 group-hover:text-white/50 transition-colors">
                    <span className="w-4 h-[1px] bg-white/20 group-hover:w-8 transition-all" />
                    Read on Medium
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-white/8" />
        </div>
      </section>
    </main>
  );
}
