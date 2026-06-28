"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-[#f5f5f0]/60 text-sm font-[var(--font-playfair)] italic">
            Built by Mallika Verma — writer, engineer, eternal work in progress.
          </p>
          <p className="text-[#f5f5f0]/30 text-xs mt-1">
            © 2026 · Made with Next.js, Tailwind, and too much coffee
          </p>
        </div>

        <div className="flex gap-6">
          {[
            { href: "https://github.com/Mallika-coder", label: "GitHub" },
            { href: "https://linkedin.com/in/mallika-verma-a89855327", label: "LinkedIn" },
            { href: "https://medium.com/@sonimallikav", label: "Medium" },
            { href: "https://leetcode.com/u/Mallikaaaa", label: "LeetCode" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#f5f5f0]/40 hover:text-amber-400 transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
