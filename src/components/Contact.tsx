"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f59e0b", "#6366f1", "#22c55e"],
    });
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  const socials = [
    { name: "Email", href: "mailto:sonimallikav@gmail.com", label: "sonimallikav@gmail.com" },
    { name: "LinkedIn", href: "https://linkedin.com/in/mallika-verma-a89855327", label: "Mallika Verma" },
    { name: "GitHub", href: "https://github.com/Mallika-coder", label: "Mallika-coder" },
    { name: "LeetCode", href: "https://leetcode.com/u/Mallikaaaa", label: "Mallikaaaa" },
    { name: "Medium", href: "https://medium.com/@sonimallikav", label: "@sonimallikav" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative" ref={ref}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/me.jpeg"
            alt="Mallika"
            width={56}
            height={56}
            className="rounded-full border-2 border-amber-400/30"
          />
          <h2 className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold">
            Let&apos;s <span className="text-amber-400">Talk</span>
          </h2>
        </motion.div>
        <motion.p
          className="text-lg text-[#f5f5f0]/60 mb-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Whether it&apos;s about engineering, writing, or something I&apos;ve
          built — I&apos;d love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-6 py-4 bg-[#0d0f1a]/80 border border-white/10 rounded-xl text-[#f5f5f0] placeholder-[#f5f5f0]/30 focus:outline-none focus:border-amber-400/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-6 py-4 bg-[#0d0f1a]/80 border border-white/10 rounded-xl text-[#f5f5f0] placeholder-[#f5f5f0]/30 focus:outline-none focus:border-amber-400/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-6 py-4 bg-[#0d0f1a]/80 border border-white/10 rounded-xl text-[#f5f5f0] placeholder-[#f5f5f0]/30 focus:outline-none focus:border-amber-400/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-amber-400 text-[#0a0a0a] font-semibold rounded-xl hover:bg-amber-300 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              {submitted ? "Message Sent! 🎉" : "Send Message"}
            </button>
          </motion.form>

          {/* Socials */}
          <motion.div
            className="space-y-6"
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
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-amber-400/20 hover:bg-amber-400/5 transition-all duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span className="text-sm font-[var(--font-mono)] text-amber-400 w-20">
                  {social.name}
                </span>
                <span className="text-[#f5f5f0]/70 group-hover:text-[#f5f5f0] transition-colors">
                  {social.label}
                </span>
                <span className="ml-auto text-[#f5f5f0]/30 group-hover:text-amber-400 transition-colors">
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
