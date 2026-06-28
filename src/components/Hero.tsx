"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const taglines = [
  "Writer who codes.",
  "Engineer who thinks in stories.",
  "The one who debugs at midnight.",
  "Builder of things that actually work.",
];

const skills = ["Python", "Scala", "AWS", "React", "ML", "AgentZ"];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[taglineIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 30 : 60
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 pt-20">
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="h-16 md:h-20 flex items-center">
              <span className="text-lg md:text-2xl font-[var(--font-mono)] text-amber-400">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <span className="text-gradient">Mallika</span>
            <br />
            <span className="text-[#f5f5f0]">Verma</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#f5f5f0]/60"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
          >
            CSE @ MNNIT Allahabad · SDE Intern @ Amazon
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-amber-400 text-[#0a0a0a] font-semibold rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105"
            >
              See My Work
            </a>
            <a
              href="https://medium.com/@sonimallikav"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#f5f5f0]/20 text-[#f5f5f0] rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
            >
              Read My Writing
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="hidden md:flex items-center gap-2 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.div
              className="w-5 h-8 border-2 border-[#f5f5f0]/30 rounded-full flex justify-center pt-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 bg-amber-400 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
            <span className="text-xs text-[#f5f5f0]/40">Scroll to explore</span>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Photo */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-amber-400/20 glow-amber">
              <Image
                src="/images/i6.jpeg"
                alt="Mallika Verma"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Orbiting skill badges */}
            {skills.map((skill, i) => {
              const angle = (i / skills.length) * 360;
              const radius = 180;
              return (
                <motion.div
                  key={skill}
                  className="absolute top-1/2 left-1/2 px-3 py-1.5 bg-[#0a0a0a]/80 border border-amber-400/30 rounded-full text-xs font-[var(--font-mono)] text-amber-400 whitespace-nowrap"
                  animate={{
                    x: Math.cos(((angle + 0) * Math.PI) / 180) * radius - 20,
                    y: Math.sin(((angle + 0) * Math.PI) / 180) * radius - 10,
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, delay: i * 0.3 },
                  }}
                  style={{
                    x: Math.cos((angle * Math.PI) / 180) * radius - 20,
                    y: Math.sin((angle * Math.PI) / 180) * radius - 10,
                  }}
                >
                  {skill}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
