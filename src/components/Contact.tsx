"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { FaGithub, FaLinkedinIn, FaInstagram, FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#7dd3fc", "#c4b5fd", "#f9a8d4", "#6ee7b7"],
    });
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  const socials = [
    { name: "Email", href: "mailto:sonimallikav@gmail.com", label: "sonimallikav@gmail.com", color: "from-pink-400 to-rose-400", icon: HiOutlineMail, iconBg: "bg-pink-50 text-pink-500" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mallikaverma58/", label: "/mallikaverma58", color: "from-sky-400 to-blue-400", icon: FaLinkedinIn, iconBg: "bg-blue-50 text-blue-500" },
    { name: "GitHub", href: "https://github.com/Mallika-coder", label: "/Mallika-coder", color: "from-purple-400 to-violet-400", icon: FaGithub, iconBg: "bg-gray-100 text-gray-700" },
    { name: "Instagram", href: "https://www.instagram.com/creative_mallika_0542/", label: "@creative_mallika_0542", color: "from-fuchsia-400 to-orange-400", icon: FaInstagram, iconBg: "bg-pink-50 text-pink-500" },
    { name: "LeetCode", href: "https://leetcode.com/u/Mallikaaaa", label: "/Mallikaaaa", color: "from-amber-400 to-orange-400", icon: SiLeetcode, iconBg: "bg-amber-50 text-amber-600" },
    { name: "Medium", href: "https://medium.com/@mallikav", label: "@mallikav", color: "from-emerald-400 to-green-400", icon: FaMediumM, iconBg: "bg-gray-100 text-gray-700" },
  ];

  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative" ref={ref}>
      <div className="absolute inset-0 mesh-gradient-2 -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with avatar */}
        <motion.div
          className="flex items-center gap-5 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-sky-300 via-purple-300 to-pink-300 rounded-full blur-sm" />
            <Image
              src="/images/me.jpeg"
              alt="Mallika"
              width={60}
              height={60}
              className="relative rounded-full border-2 border-white"
            />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] font-bold">
            Let&apos;s <span className="text-gradient">Talk</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-lg text-[#1a1035]/50 mb-16 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Whether it&apos;s about engineering, writing, or something I&apos;ve
          built — I&apos;d love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Your name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-6 py-4 glass-strong rounded-2xl text-[#1a1035] placeholder-[#1a1035]/30 focus:outline-none focus:ring-2 focus:ring-purple-300/50 transition-all duration-300"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-6 py-4 glass-strong rounded-2xl text-[#1a1035] placeholder-[#1a1035]/30 focus:outline-none focus:ring-2 focus:ring-purple-300/50 transition-all duration-300"
              required
            />
            <textarea
              placeholder="Your message"
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-6 py-4 glass-strong rounded-2xl text-[#1a1035] placeholder-[#1a1035]/30 focus:outline-none focus:ring-2 focus:ring-purple-300/50 transition-all duration-300 resize-none"
              required
            />
            <button
              type="submit"
              className="magnetic-btn w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 via-sky-500 to-pink-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {submitted ? "Sent! 🎉" : "Send Message"}
            </button>
          </motion.form>

          {/* Socials */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card-hover flex items-center gap-4 p-4 rounded-2xl glass-strong group"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <div className={`w-10 h-10 rounded-xl ${social.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="w-[18px] h-[18px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold text-[#1a1035]/40 uppercase tracking-wider">
                    {social.name}
                  </span>
                  <p className="text-sm text-[#1a1035]/70 group-hover:text-[#1a1035] transition-colors font-medium truncate">
                    {social.label}
                  </p>
                </div>
                <span className="text-[#1a1035]/20 group-hover:text-purple-400 transition-colors text-lg flex-shrink-0">
                  ↗
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
