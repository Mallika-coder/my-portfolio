"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  { name: "Email", href: "mailto:sonimallikav@gmail.com", label: "sonimallikav@gmail.com", icon: HiOutlineMail },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mallikaverma58/", label: "/mallikaverma58", icon: FaLinkedinIn },
  { name: "GitHub", href: "https://github.com/Mallika-coder", label: "/Mallika-coder", icon: FaGithub },
  { name: "LeetCode", href: "https://leetcode.com/u/Mallikaaaa", label: "/Mallikaaaa", icon: SiLeetcode },
  { name: "Medium", href: "https://medium.com/@mallikav", label: "@mallikav", icon: FaMediumM },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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
    <section id="contact" className="py-32 md:py-44 px-6 md:px-12 lg:px-16" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-3">
            Let&apos;s build <span className="text-gradient">something.</span>
          </h2>
          <p className="text-sm text-white/30">
            Whether it&apos;s about engineering, writing, or an idea — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Your name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-5 py-4 glass rounded-xl text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all text-sm bg-transparent"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-5 py-4 glass rounded-xl text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all text-sm bg-transparent"
              required
            />
            <textarea
              placeholder="Your message"
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-5 py-4 glass rounded-xl text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all resize-none text-sm bg-transparent"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-sky-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] text-sm"
            >
              {submitted ? "Sent!" : "Send Message"}
            </button>
          </motion.form>

          {/* Socials */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card-hover flex items-center gap-4 p-4 rounded-xl glass group"
                initial={{ opacity: 0, x: 15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.06 }}
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover:text-purple-400 transition-colors">
                  <social.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold text-white/25 uppercase tracking-wider block">
                    {social.name}
                  </span>
                  <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors truncate">
                    {social.label}
                  </p>
                </div>
                <span className="text-white/10 group-hover:text-purple-400 transition-colors">
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
