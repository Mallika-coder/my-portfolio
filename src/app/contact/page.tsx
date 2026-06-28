"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaMediumM, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  { name: "Email", href: "mailto:sonimallikav@gmail.com", label: "sonimallikav@gmail.com", icon: HiOutlineMail, color: "group-hover:text-pink-400" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mallikaverma58/", label: "linkedin.com/in/mallikaverma58", icon: FaLinkedinIn, color: "group-hover:text-sky-400" },
  { name: "GitHub", href: "https://github.com/Mallika-coder", label: "github.com/Mallika-coder", icon: FaGithub, color: "group-hover:text-white" },
  { name: "Instagram", href: "https://www.instagram.com/creative_mallika_0542/", label: "@creative_mallika_0542", icon: FaInstagram, color: "group-hover:text-pink-400" },
  { name: "LeetCode", href: "https://leetcode.com/u/Mallikaaaa", label: "leetcode.com/u/Mallikaaaa", icon: SiLeetcode, color: "group-hover:text-amber-400" },
  { name: "Medium", href: "https://medium.com/@mallikav", label: "medium.com/@mallikav", icon: FaMediumM, color: "group-hover:text-white" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

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
    <main className="bg-[#0a0a0a] min-h-screen text-white relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-500/5 to-transparent rounded-full blur-3xl" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
            <span className="w-5 h-[1px] bg-white/30" />
            Home
          </Link>
          <span className="text-[11px] font-[var(--font-mono)] text-white/25 tracking-wider">CONTACT</span>
        </div>
      </header>

      <section className="relative z-10 pt-32 pb-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Title — big and inviting */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-[0.3em] uppercase mb-4">
              Get in touch
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold mb-4">
              Let&apos;s build
              <br />
              <span className="text-gradient">something.</span>
            </h1>
            <p className="text-base text-white/30 max-w-md">
              Whether it&apos;s about engineering, writing, or an idea — I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Form — interactive with focus states */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {[
                { key: "name", placeholder: "Your name", type: "text" },
                { key: "email", placeholder: "Your email", type: "email" },
              ].map((field) => (
                <div key={field.key} className="relative">
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formState[field.key as keyof typeof formState]}
                    onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                    onFocus={() => setFocused(field.key)}
                    onBlur={() => setFocused(null)}
                    className="w-full px-0 py-5 bg-transparent border-b border-white/10 text-white text-lg placeholder-white/15 focus:outline-none transition-colors"
                    required
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-400 to-sky-400"
                    animate={{ width: focused === field.key ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}

              <div className="relative">
                <textarea
                  placeholder="Your message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-0 py-5 bg-transparent border-b border-white/10 text-white text-lg placeholder-white/15 focus:outline-none transition-colors resize-none"
                  required
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-400 to-sky-400"
                  animate={{ width: focused === "message" ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-sky-500 text-sm font-medium text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? "Message Sent ✓" : "Send Message →"}
              </motion.button>
            </motion.form>

            {/* Socials — interactive cards */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-[0.2em] uppercase mb-6">
                Find me elsewhere
              </p>
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/[0.02] transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/25 transition-colors ${social.color}`}>
                    <social.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-white/20 uppercase tracking-wider">{social.name}</p>
                    <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors">{social.label}</p>
                  </div>
                  <span className="text-white/0 group-hover:text-white/30 transition-colors">→</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
