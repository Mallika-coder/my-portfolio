"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const achievements = [
  { icon: "🏢", title: "SDE Intern @ Amazon", subtitle: "2026" },
  { icon: "📚", title: "Published Co-Author", subtitle: "Blue Star Publication, 2023" },
  { icon: "🥇", title: "1st Place — Jan Jatiya Gaurav Diwas Speech", subtitle: "Dec 2024" },
  { icon: "🏆", title: "Finalist — DevOrDie Hackathon, Avishkar MNNIT", subtitle: "Dec 2025" },
  { icon: "🥉", title: "3rd Place — Antiragging Week, MNNIT", subtitle: "Sep 2025" },
  { icon: "🎤", title: "Multiple Podiums — Debates & Public Speaking", subtitle: "2024–Present" },
  { icon: "💻", title: "450+ LeetCode Problems Solved", subtitle: "2024–Present" },
  { icon: "📖", title: "9.01 CPI — MNNIT Allahabad", subtitle: "Till 4th Semester" },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 md:py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          A Few Things I&apos;m <span className="text-amber-400">Proud Of</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                className="card-hover p-5 rounded-xl bg-[#0d0f1a]/80 border border-white/5 hover:border-amber-400/20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <h4 className="text-sm font-semibold text-[#f5f5f0] mt-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#f5f5f0]/50 mt-1">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Achievement collage images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5">
              <Image
                src="/images/my-achievements.jpeg"
                alt="Achievement collage"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-white/5">
                <Image
                  src="/images/kho.jpeg"
                  alt="Kho Kho team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-white/5">
                <Image
                  src="/images/100day_badge.png"
                  alt="LeetCode 100 days badge"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-white/5">
                <Image
                  src="/images/mentor-id-3277841781252375.2626.png"
                  alt="Unstop Mentor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
