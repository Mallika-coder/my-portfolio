"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Mallika-coder",
    label: "GitHub",
    color: "hover:bg-[#333] hover:text-white",
    bg: "bg-gray-100",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mallikaverma58/",
    label: "LinkedIn",
    color: "hover:bg-[#0077b5] hover:text-white",
    bg: "bg-blue-50",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/creative_mallika_0542/",
    label: "Instagram",
    color: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white",
    bg: "bg-pink-50",
  },
  {
    icon: FaMediumM,
    href: "https://medium.com/@mallikav",
    label: "Medium",
    color: "hover:bg-[#1a1035] hover:text-white",
    bg: "bg-gray-100",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Mallikaaaa",
    label: "LeetCode",
    color: "hover:bg-[#FFA116] hover:text-white",
    bg: "bg-amber-50",
  },
];

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
          className={`group relative w-11 h-11 rounded-2xl ${social.bg} flex items-center justify-center text-[#1a1035]/60 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110 ${social.color}`}
          whileHover={{ y: -2 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 + i * 0.1 }}
          aria-label={social.label}
        >
          <social.icon className="w-[18px] h-[18px]" />
          {/* Tooltip */}
          <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-[#1a1035] text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
            {social.label}
          </span>
        </motion.a>
      ))}
      {/* Vertical line */}
      <div className="w-[1px] h-12 bg-gradient-to-b from-purple-200 to-transparent mx-auto mt-2" />
    </motion.div>
  );
}
