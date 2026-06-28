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
    <section id="contact" className="py-40 md:py-56 px-8 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] text-white/20 font-[var(--font-mono)] tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold">
            Let&apos;s build something.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form — minimal */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
              className="mt-4 inline-flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
            >
              <span className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all" />
              {submitted ? "Sent" : "Send message"}
            </button>
          </motion.form>

          {/* Socials — clean list */}
          <motion.div
            className="space-y-6"
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
                className="flex items-center gap-4 group"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <social.icon className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                <span className="text-sm text-white/30 group-hover:text-white/70 transition-colors">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
