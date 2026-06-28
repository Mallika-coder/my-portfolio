"use client";
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
    <footer className="py-16 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-white/20 text-xs font-[var(--font-playfair)] italic">
          Built by Mallika — writer, engineer, eternal work in progress.
        </p>

        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/15 hover:text-white/50 transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
