"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Mallika-coder",
    label: "GitHub",
    color: "hover:text-white hover:bg-white/15",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mallikaverma58/",
    label: "LinkedIn",
    color: "hover:text-sky-400 hover:bg-sky-500/10",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/creative_mallika_0542/",
    label: "Instagram",
    color: "hover:text-pink-400 hover:bg-pink-500/10",
  },
  {
    icon: FaMediumM,
    href: "https://medium.com/@mallikav",
    label: "Medium",
    color: "hover:text-white hover:bg-white/15",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Mallikaaaa",
    label: "LeetCode",
    color: "hover:text-amber-400 hover:bg-amber-500/10",
  },
] as const;

export default function SocialDock() {
  return (
    <motion.div
      className="fixed left-5 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col gap-3"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.5, duration: 0.6 }}
    >
      {socials.map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110 ${social.color}`}
          whileHover={{ y: -2 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 + i * 0.1 }}
          aria-label={social.label}
        >
          <social.icon className="w-[18px] h-[18px]" />
          <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
            {social.label}
          </span>
        </motion.a>
      ))}
      <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500/30 to-transparent mx-auto mt-2" />
    </motion.div>
  );
}
