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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/i6.jpeg"
          alt="Mallika Verma"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay — gradient from bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content — positioned at bottom-left, editorial style */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
        {/* Name — huge, serif, cinematic */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-[var(--font-playfair)] font-bold text-white leading-[0.95] mb-4"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Mallika
          <br />
          <span className="text-gradient">Verma</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-2xl text-white/70 font-light mb-6 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          Writer who codes.
        </motion.p>

        {/* Typewriter */}
        <motion.div
          className="h-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          <span className="text-xs md:text-sm font-[var(--font-mono)] text-white/40">
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

        {/* Minimal CTA */}
        <motion.a
          href="#about"
          className="inline-flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <span className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all" />
          Scroll to explore
        </motion.a>
      </div>

      {/* Scroll indicator — bottom right */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
      >
        <motion.div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-2.5 bg-white/60 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
