"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: FaGithub, href: "https://github.com/Mallika-coder", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mallikaverma58/", label: "LinkedIn" },
  { icon: FaMediumM, href: "https://medium.com/@mallikav", label: "Medium" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Mallikaaaa", label: "LeetCode" },
] as const;

export default function SocialDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col gap-4 transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
      }`}
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center text-white/20 hover:text-white/60 transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-3.5 h-3.5" />
        </a>
      ))}
      <div className="w-[1px] h-8 bg-white/10 mx-auto mt-1" />
    </motion.div>
  );
}
