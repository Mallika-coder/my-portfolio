"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const achievements = [
  { icon: "🏢", title: "SDE Intern @ Amazon", subtitle: "2026", color: "from-sky-100 to-sky-50" },
  { icon: "📚", title: "Published Co-Author", subtitle: "Blue Star Publication, 2023", color: "from-purple-100 to-purple-50" },
  { icon: "🥇", title: "1st Place — Speech Competition", subtitle: "Jan Jatiya Gaurav Diwas, Dec 2024", color: "from-amber-100 to-amber-50" },
  { icon: "🏆", title: "Finalist — DevOrDie Hackathon", subtitle: "Avishkar MNNIT, Dec 2025", color: "from-pink-100 to-pink-50" },
  { icon: "🥉", title: "3rd Place — Antiragging Week", subtitle: "MNNIT, Sep 2025", color: "from-emerald-100 to-emerald-50" },
  { icon: "🎤", title: "Multiple Podiums — Debates", subtitle: "2024–Present", color: "from-violet-100 to-violet-50" },
  { icon: "💻", title: "450+ LeetCode Problems", subtitle: "2024–Present", color: "from-sky-100 to-sky-50" },
  { icon: "📖", title: "9.01 CPI — MNNIT Allahabad", subtitle: "Till 4th Semester", color: "from-rose-100 to-rose-50" },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-36 md:py-48 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-pink-100/30 to-purple-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold">
            A Few Things I&apos;m{" "}
            <span className="text-gradient">Proud Of</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                className={`card-hover p-5 rounded-2xl bg-gradient-to-br ${item.color} border border-white/60`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              >
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h4 className="text-sm font-bold text-[#1a1035] leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#1a1035]/45 mt-1.5">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Images */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-purple-100/20">
              <Image
                src="/images/my-achievements.jpeg"
                alt="Achievement collage"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/kho.jpeg" alt="Kho Kho team" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-[#1a1035]">
                <Image src="/images/100day_badge.png" alt="LeetCode badge" fill className="object-contain p-2" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/mentor-id-3277841781252375.2626.png" alt="Unstop Mentor" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
