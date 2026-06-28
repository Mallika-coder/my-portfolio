"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Writing", href: "#writing" },
  { name: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] px-8 md:px-16 py-5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-sm font-[var(--font-playfair)] font-bold text-white/70">
            MV
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] tracking-wide text-white/30 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <div className="w-5 h-[1px] bg-white mb-1.5" />
            <div className="w-5 h-[1px] bg-white" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-[#0a0a0a] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-8 text-white/50 text-2xl"
            >
              ×
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-[var(--font-playfair)] text-white/60 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
