"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const footerLinks = [
  { href: "https://github.com/Mallika-coder", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/mallikaverma58/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://medium.com/@mallikav", icon: FaMediumM, label: "Medium" },
  { href: "https://leetcode.com/u/Mallikaaaa", icon: SiLeetcode, label: "LeetCode" },
];

export default function Footer() {
  return (
    <footer className="py-14 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Social icons */}
        <div className="flex gap-4">
          {footerLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/30 hover:text-purple-400 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -3, scale: 1.1 }}
              aria-label={link.label}
            >
              <link.icon className="w-[18px] h-[18px]" />
            </motion.a>
          ))}
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-white/30 text-sm font-[var(--font-playfair)] italic">
            Built by Mallika — writer, engineer, eternal work in progress.
          </p>
          <p className="text-white/15 text-xs mt-2">
            © 2026 · Made with Next.js, Tailwind, and too much coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
