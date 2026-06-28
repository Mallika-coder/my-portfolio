"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "View Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background — subtle gradient, not a photo (photo is featured separately) */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute top-0 right-0 w-[60%] h-full opacity-[0.03]">
          <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Identity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[10px] font-[var(--font-mono)] text-white/25 tracking-[0.3em] uppercase mb-6">
              Portfolio
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold text-white leading-[1] mb-4">
              Mallika
              <br />
              Verma
            </h1>

            <p className="text-base md:text-lg text-white/40 mb-12 max-w-sm">
              Writer who codes. SDE Intern at Amazon.
              <br />
              CSE @ MNNIT Allahabad.
            </p>

            {/* Navigation links — clean, spaced */}
            <nav className="space-y-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 text-sm text-white/35 hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2 + i * 0.1, duration: 0.6 }}
                >
                  <span className="w-6 h-[1px] bg-white/15 group-hover:w-10 group-hover:bg-white/50 transition-all duration-300" />
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Right: Photo — large, clean */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-full aspect-[3/4] max-w-[420px] ml-auto">
              <Image
                src="/images/i6.jpeg"
                alt="Mallika Verma"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — bottom center */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
