"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const taglines = [
  "Engineer who thinks in stories.",
  "The one who debugs at midnight.",
  "Builder of things that actually work.",
  "CSE @ MNNIT · SDE Intern @ Amazon.",
];

const skills = ["Python", "AWS", "React", "AI Agent"];

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

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24 pt-28 pb-16">
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

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Main tagline — BIG and centered */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold text-gradient leading-tight mb-6"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
        >
          Writer who codes 🧡
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          className="h-8 flex items-center justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <span className="text-sm md:text-base font-[var(--font-mono)] text-purple-500/70">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-sky-400"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Photo + Name row */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          {/* Photo */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
            <div className="absolute -inset-2 bg-gradient-to-br from-sky-300/40 via-purple-300/40 to-pink-300/40 rounded-full blur-lg" />
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-purple-200/30 border-4 border-white/80">
              <Image
                src="/images/i6.jpeg"
                alt="Mallika Verma, CSE undergrad and Amazon SDE intern"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Orbiting skill badges */}
            {skills.map((skill, i) => {
              const angle = (i / skills.length) * 360 - 90;
              const radius = 130;
              return (
                <motion.div
                  key={skill}
                  className="absolute top-1/2 left-1/2 px-2.5 py-1 glass rounded-full text-[10px] font-medium text-[#1a1035]/60 whitespace-nowrap shadow-sm"
                  style={{
                    x: Math.cos((angle * Math.PI) / 180) * radius - 16,
                    y: Math.sin((angle * Math.PI) / 180) * radius - 10,
                  }}
                  animate={{
                    y: [
                      Math.sin((angle * Math.PI) / 180) * radius - 10,
                      Math.sin((angle * Math.PI) / 180) * radius - 18,
                      Math.sin((angle * Math.PI) / 180) * radius - 10,
                    ],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
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

          {/* Name + subtitle */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#1a1035] mb-2">
              Mallika Verma
            </h2>
            <p className="text-sm md:text-base text-[#1a1035]/45">
              CSE @ MNNIT Allahabad · SDE Intern @ Amazon
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="magnetic-btn px-7 py-3.5 bg-gradient-to-r from-purple-500 to-sky-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-300/30 transition-all duration-300 hover:scale-105 text-sm"
          >
            See My Work
          </a>
          <a
            href="https://medium.com/@mallikav"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn px-7 py-3.5 glass text-[#1a1035]/80 font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm"
          >
            Read My Writing
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <motion.div className="w-5 h-9 border-2 border-[#1a1035]/15 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-2.5 bg-gradient-to-b from-purple-400 to-sky-400 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
