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
    aspect: "aspect-square",
  },
  {
    title: "3 Years of Tutoring",
    quote: "The students who improved fastest weren't the smartest — they were the ones who said 'I don't get it' without hesitation.",
    description:
      "Self-employed tutor for 3 years. Taught maths, science, and coding to students from class 6 to 12. Learned patience, communication, and that teaching is its own form of engineering.",
    image: "/images/i5.jpeg",
    tag: "Teaching · 3 Years",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Jersey #07 — Kho Kho",
    quote: "Some lessons don't come from a screen. They come from the field, the team, the loss you didn't see coming.",
    description:
      "College Kho Kho team. Jersey #07. It taught me speed, strategy, and that you can't debug your way out of poor teamwork.",
    image: "/images/kho.jpeg",
    tag: "Sports",
    aspect: "aspect-[3/4]",
  },
  {
    title: "1st Place Speech & Many More Podiums",
    quote: "The best writing, like the best engineering, is honest and precise. Every word has a reason.",
    description:
      "Won 1st place at Jan Jatiya Gaurav Diwas speech competition (Dec 2024). Multiple podiums in debates across college fests. Public speaking taught me to think on my feet — a skill that shows up in every design review and every stand-up.",
    image: "/images/my-achievements.jpeg",
    tag: "Public Speaking · Debates",
    aspect: "aspect-[3/4]",
  },
];

export default function BeyondPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      {/* Background decorations */}
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/3 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-500/3 to-transparent rounded-full blur-3xl pointer-events-none" />

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
      <section className="relative z-10 pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Life Outside the IDE
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Beyond
            <br />
            <span className="text-gradient">Code</span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-white/30 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            The things that make me who I am — mentoring, teaching, competing,
            speaking, and never sitting still. Code is what I do. This is who I am.
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="relative z-10 pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {sections.map((item, i) => (
            <motion.div
              key={item.title}
              className="border-t border-white/8 py-20 md:py-28"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Image — natural aspect ratio, fully visible */}
                <motion.div
                  className={`${i % 2 === 1 ? "md:order-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`relative ${item.aspect} w-full max-w-[400px] ${i % 2 === 1 ? "ml-auto" : ""} rounded-2xl overflow-hidden`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <motion.span
                    className="inline-block text-[10px] font-[var(--font-mono)] text-purple-300/50 tracking-wider uppercase mb-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.tag}
                  </motion.span>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-[var(--font-playfair)] font-bold text-white/90 mb-8 leading-tight">
                    {item.title}
                  </h2>

                  {/* Quote */}
                  <blockquote className="relative mb-8 pl-6">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400/50 to-sky-400/30 rounded-full" />
                    <p className="text-base md:text-lg text-white/45 italic leading-relaxed font-[var(--font-playfair)]">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>

                  <p className="text-sm text-white/30 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/8" />

          {/* Closing */}
          <motion.p
            className="text-center mt-20 text-sm text-white/20 font-[var(--font-playfair)] italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The person you hire isn&apos;t just a coder. She&apos;s a mentor, athlete, speaker, and someone who never stops building.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
