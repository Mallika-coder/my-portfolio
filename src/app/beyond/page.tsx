"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "Unstop Mentor",
    quote: "The best way to learn something is to teach it to someone who's struggling with it.",
    description:
      "Mentoring students on Unstop — helping them navigate coding interviews, build confidence, and find their own path in tech. Because someone did that for me once.",
    image: "/images/mentor-id-3277841781252375.2626.png",
    tag: "Mentorship",
  },
  {
    title: "3 Years of Tutoring",
    quote: "The students who improved fastest weren't the smartest — they were the ones who said 'I don't get it' without hesitation.",
    description:
      "Self-employed tutor for 3 years. Taught maths, science, and coding to students from class 6 to 12. Learned patience, communication, and that teaching is its own form of engineering.",
    image: "/images/my-achievements.jpeg",
    tag: "Teaching · 3 Years",
  },
  {
    title: "Jersey #07 — Kho Kho",
    quote: "Some lessons don't come from a screen. They come from the field, the team, the loss you didn't see coming.",
    description:
      "College Kho Kho team. Jersey #07. It taught me speed, strategy, and that you can't debug your way out of poor teamwork.",
    image: "/images/kho.jpeg",
    tag: "Sports",
  },
  {
    title: "1st Place — Speech Competition",
    quote: "The best writing, like the best engineering, is honest and precise. Every word has a reason.",
    description:
      "Won 1st place at Jan Jatiya Gaurav Diwas speech competition (Dec 2024). Multiple podiums in debates. Public speaking taught me to think on my feet — a skill that shows up in every design review.",
    image: "/images/my-achievements.jpeg",
    tag: "Public Speaking",
  },
  {
    title: "450+ LeetCode Problems",
    quote: "It's not about being the fastest solver. It's about closing your own knowledge gaps faster than yesterday.",
    description:
      "Consistent daily solver. 100 Days Badge 2026. Focus areas: Arrays, DP, Trees, Graphs. It's meditation disguised as problem-solving.",
    image: "/images/100day_badge.png",
    tag: "Competitive Coding",
    darkBg: true,
  },
];

export default function BeyondPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
            <span className="w-5 h-[1px] bg-white/30" />
            Home
          </Link>
          <span className="text-[11px] font-[var(--font-mono)] text-white/25 tracking-wider">BEYOND CODE</span>
        </div>
      </header>

      {/* Title */}
      <section className="pt-32 pb-10 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Life Outside the IDE
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Beyond Code
          </motion.h1>
          <motion.p
            className="text-base text-white/30 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            The things that make me who I am — mentoring, teaching, competing, speaking, and never sitting still.
          </motion.p>
        </div>
      </section>

      {/* Sections — alternating layout with images and quotes */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {sections.map((item, i) => (
            <motion.div
              key={item.title}
              className="border-t border-white/8 py-16 md:py-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Image */}
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <motion.div
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden ${item.darkBg ? "bg-[#1a1035]" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`${item.darkBg ? "object-contain p-4" : "object-cover"} group-hover:brightness-110 transition-all duration-500`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="text-[10px] font-[var(--font-mono)] text-purple-300/40 tracking-wider">
                    {item.tag}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold text-white/90 mt-3 mb-6">
                    {item.title}
                  </h2>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-purple-400/30 pl-5 mb-6">
                    <p className="text-sm text-white/50 italic leading-relaxed font-[var(--font-playfair)]">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>

                  <p className="text-sm text-white/35 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/8" />
        </div>
      </section>
    </main>
  );
}
