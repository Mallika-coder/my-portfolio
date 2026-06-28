"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const taglines = [
  "Engineer who thinks in stories.",
  "The one who debugs at midnight.",
  "CSE @ MNNIT · SDE Intern @ Amazon.",
];

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Background blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-sky-500/6 via-purple-500/8 to-pink-500/6 blob rounded-full blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Photo — circular with animated gradient ring */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-40 h-40 md:w-52 md:h-52">
            {/* Animated glow ring */}
            <motion.div
              className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-sky-400 via-purple-400 to-pink-400"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ padding: "3px" }}
            />
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-sky-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
            {/* Photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-[#0a0a0a]">
              <Image
                src="/images/i6.jpeg"
                alt="Mallika Verma"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-[var(--font-playfair)] font-bold text-gradient leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
        >
          Writer who codes.
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          className="h-8 flex items-center justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          <span className="text-sm md:text-base font-[var(--font-mono)] text-white/40">
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

        {/* Badge */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.6 }}
        >
          <span className="px-5 py-2.5 glass rounded-full text-xs text-white/50 tracking-wide">
            SDE Intern @ Amazon · CSE @ MNNIT Allahabad
          </span>
        </motion.div>

        {/* Single CTA */}
        <motion.a
          href="#projects"
          className="magnetic-btn px-8 py-4 bg-gradient-to-r from-purple-500 to-sky-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.6 }}
        >
          See my work ↓
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <motion.div className="w-5 h-9 border-2 border-white/10 rounded-full flex justify-center pt-2">
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
