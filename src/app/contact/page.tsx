"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaMediumM, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  { name: "Email", href: "mailto:sonimallikav@gmail.com", label: "sonimallikav@gmail.com", icon: HiOutlineMail },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mallikaverma58/", label: "linkedin.com/in/mallikaverma58", icon: FaLinkedinIn },
  { name: "GitHub", href: "https://github.com/Mallika-coder", label: "github.com/Mallika-coder", icon: FaGithub },
  { name: "Instagram", href: "https://www.instagram.com/creative_mallika_0542/", label: "@creative_mallika_0542", icon: FaInstagram },
  { name: "LeetCode", href: "https://leetcode.com/u/Mallikaaaa", label: "leetcode.com/u/Mallikaaaa", icon: SiLeetcode },
  { name: "Medium", href: "https://medium.com/@mallikav", label: "medium.com/@mallikav", icon: FaMediumM },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio message from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    window.open(
      `mailto:sonimallikav@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_self"
    );
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm font-[var(--font-playfair)] font-bold text-white/70 hover:text-white transition-colors">
            ← Back
          </Link>
          <span className="text-[11px] font-[var(--font-mono)] text-white/25 tracking-wider">
            CONTACT
          </span>
        </div>
      </header>

      {/* Title */}
      <section className="pt-32 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let&apos;s talk.
          </motion.h1>
          <motion.p
            className="text-base text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Whether it&apos;s about engineering, writing, or an idea — I&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
              required
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none text-sm"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 border border-white/20 text-xs text-white/60 hover:bg-white hover:text-black transition-all duration-300 tracking-wide"
            >
              {submitted ? "Sent ✓" : "Send Message"}
            </button>
          </motion.form>

          {/* Socials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <social.icon className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                <div>
                  <p className="text-[10px] text-white/20 uppercase tracking-wider">{social.name}</p>
                  <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors">{social.label}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
