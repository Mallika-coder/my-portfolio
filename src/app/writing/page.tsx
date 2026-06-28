"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    title: "Seven weeks at Amazon and I'm already scared of forgetting.",
    preview:
      "Not the technical stuff — I'll remember the code. That part gets saved to GitHub. But the feeling of walking into that office on Day 1, not knowing what a Brazil build was, not knowing what a CR was...",
    tag: "Featured",
    readTime: "5 min",
    href: "https://medium.com/@mallikav",
    gradient: "from-purple-500/20 via-violet-600/10 to-fuchsia-500/5",
  },
  {
    title: "What Building AI Agents Taught Me About Problem Solving",
    preview:
      "When you iterate from v1 to v7 in two days, you learn that the first solution is never the best one. You learn that 'working' and 'correct' are not the same thing.",
    tag: "Engineering",
    readTime: "4 min",
    href: "https://medium.com/@mallikav",
    gradient: "from-sky-500/20 via-blue-600/10 to-cyan-500/5",
  },
  {
    title: "Why Every Engineer Should Write",
    preview:
      "Clear code and clear prose share the same foundation: knowing what you actually mean. Both demand precision. Both punish ambiguity. Both reward revision.",
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
          <Link href="/" className="text-sm font-[var(--font-playfair)] font-bold text-white/70 hover:text-white transition-colors">
            ← Back
          </Link>
          <span className="text-[11px] font-[var(--font-mono)] text-white/25 tracking-wider">
            WRITING
          </span>
        </div>
      </header>

      {/* Title */}
      <section className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Writing
          </motion.h1>
          <motion.p
            className="text-base text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About the things I build and the things I&apos;m still figuring out.
          </motion.p>
        </div>
      </section>

      {/* Articles — large cards with gradient visual */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-2">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-t border-white/8 py-12 md:py-16 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                {/* Visual */}
                <div className={`md:col-span-2 relative aspect-[3/2] rounded-xl overflow-hidden bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                  <span className="text-4xl font-[var(--font-playfair)] font-bold text-white/10 text-center px-4 leading-tight">
                    {article.title.split(" ").slice(0, 3).join(" ")}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-[var(--font-mono)] text-purple-300/50">{article.tag}</span>
                    <span className="w-1 h-1 rounded-full bg-white/15" />
                    <span className="text-[10px] text-white/20">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-[var(--font-playfair)] font-bold text-white/80 group-hover:text-white transition-colors mb-4 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-white/30 leading-relaxed italic">
                    &quot;{article.preview}&quot;
                  </p>
                  <span className="inline-block mt-6 text-xs text-white/20 group-hover:text-white/50 transition-colors">
                    Read on Medium ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
