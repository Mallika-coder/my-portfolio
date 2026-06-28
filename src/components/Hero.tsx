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
      timeout = setTimeout(() => setIsDeleting(true), 2500);
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
        isDeleting ? 25 : 55
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  const wordReveal = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: 1.8 + i * 0.15, duration: 0.8, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20 pt-24 pb-12">
      {/* Background blobs */}
      <motion.div
        className="absolute top-20 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/30 to-purple-200/20 blob rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/30 to-purple-200/20 blob rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-mint-200/20 to-sky-200/10 blob rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* Left Side */}
        <div className="space-y-8 order-2 lg:order-1">
          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="h-10 md:h-12 flex items-center">
              <span className="text-base md:text-lg font-[var(--font-mono)] text-purple-500/80">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-sky-400"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-[var(--font-playfair)] font-bold leading-[1.05] tracking-tight"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={wordReveal}
            >
              <span className="text-gradient">Mallika</span>
            </motion.h1>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-[var(--font-playfair)] font-bold leading-[1.05] tracking-tight text-[#1a1035]"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={wordReveal}
            >
              Verma
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg text-[#1a1035]/50 max-w-md"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={wordReveal}
          >
            CSE @ MNNIT Allahabad · SDE Intern @ Amazon
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={wordReveal}
          >
            <a
              href="#projects"
              className="magnetic-btn px-7 py-3.5 bg-gradient-to-r from-purple-500 to-sky-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-300/30 transition-all duration-300 hover:scale-105"
            >
              See My Work
            </a>
            <a
              href="https://medium.com/@mallikav"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-7 py-3.5 glass text-[#1a1035]/80 font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Read My Writing
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="hidden md:flex items-center gap-3 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <motion.div
              className="w-5 h-9 border-2 border-[#1a1035]/20 rounded-full flex justify-center pt-2"
            >
              <motion.div
                className="w-1.5 h-2.5 bg-gradient-to-b from-purple-400 to-sky-400 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <span className="text-xs text-[#1a1035]/30 tracking-wider uppercase">Scroll</span>
          </motion.div>
        </div>

        {/* Right Side — Photo + Skills */}
        <motion.div
          className="relative flex items-center justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="relative w-72 h-80 md:w-80 md:h-[22rem] lg:w-[22rem] lg:h-[26rem]">
            {/* Gradient border glow */}
            <div className="absolute -inset-3 bg-gradient-to-br from-sky-300/40 via-purple-300/40 to-pink-300/40 rounded-3xl blur-xl" />

            {/* Photo */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/30">
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
              const angle = (i / skills.length) * 360 - 90;
              const radiusX = 190;
              const radiusY = 210;
              return (
                <motion.div
                  key={skill}
                  className="absolute top-1/2 left-1/2 px-3 py-1.5 glass rounded-full text-xs font-medium text-[#1a1035]/70 whitespace-nowrap shadow-sm"
                  style={{
                    x: Math.cos((angle * Math.PI) / 180) * radiusX - 20,
                    y: Math.sin((angle * Math.PI) / 180) * radiusY - 12,
                  }}
                  animate={{
                    y: [
                      Math.sin((angle * Math.PI) / 180) * radiusY - 12,
                      Math.sin((angle * Math.PI) / 180) * radiusY - 22,
                      Math.sin((angle * Math.PI) / 180) * radiusY - 12,
                    ],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
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
