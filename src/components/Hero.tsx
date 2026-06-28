"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background photo — full bleed, cinematic like r3 */}
      <div className="absolute inset-0">
        <Image
          src="/images/me2.jpeg"
          alt="Mallika Verma"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Top-right: minimal nav */}
      <motion.div
        className="absolute top-8 right-8 md:right-16 z-20 flex items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <a href="#projects" className="text-[11px] text-white/50 hover:text-white tracking-wide transition-colors hidden md:block">
          Projects
        </a>
        <a href="#contact" className="text-[11px] text-white/50 hover:text-white tracking-wide transition-colors hidden md:block">
          Contact
        </a>
      </motion.div>

      {/* Top-left: logo */}
      <motion.div
        className="absolute top-8 left-8 md:left-16 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-lg font-[var(--font-playfair)] font-bold text-white/80">
          MV
        </span>
      </motion.div>

      {/* Main content — bottom-left, large name */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="w-full px-8 md:px-16 lg:px-24 pb-20 md:pb-28">
          {/* Name — massive serif, like Aveline Rheault */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-[100px] lg:text-[130px] font-[var(--font-playfair)] font-bold text-white leading-[0.9] mb-6"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Mallika
            <br />
            <span className="text-gradient">Verma</span>
          </motion.h1>

          {/* Roles — bottom left, like the "Actress / Performer / Storyteller" in r3 */}
          <motion.div
            className="flex flex-col gap-1 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <span className="text-sm md:text-base text-white/50">Writer</span>
            <span className="text-sm md:text-base text-white/50">Engineer</span>
            <span className="text-sm md:text-base text-white/50">Builder</span>
          </motion.div>

          {/* CTA — "View My Work" button like r3 */}
          <motion.a
            href="#projects"
            className="inline-block px-8 py-3.5 border border-white/30 text-sm text-white/80 hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            View My Work
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-16 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
