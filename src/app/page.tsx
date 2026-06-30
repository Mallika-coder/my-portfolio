"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaMediumM, FaTrophy } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const EasterEgg = dynamic(() => import("@/components/EasterEgg"), { ssr: false });
const Terminal = dynamic(() => import("@/components/Terminal"), { ssr: false });

const socials = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mallikaverma58/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Mallika-coder", label: "GitHub" },
  { icon: FaInstagram, href: "https://www.instagram.com/creative_mallika_0542/", label: "Instagram" },
  { icon: FaMediumM, href: "https://medium.com/@mallikav", label: "Medium" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Mallikaaaa", label: "LeetCode" },
  { icon: FaTrophy, href: "https://unstop.com/u/malliver21097", label: "Unstop" },
];

export default function Home() {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      return () => lenis.destroy();
    };
    initLenis();
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <EasterEgg />
      <Terminal />

      <main className="bg-[#0a0a0a] min-h-screen relative">
        {/* ===== SOCIAL LINKS — Fixed right side ===== */}
        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

        {/* ===== SECTION 1: HERO — Full photo + orbiting nav bubbles ===== */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
          {/* Floating skills in background */}
          <div className="absolute inset-0 pointer-events-none z-[1]">
            {[
              { text: "Python", top: "8%", left: "12%", delay: "0s", size: "text-xs" },
              { text: "React", top: "15%", right: "18%", delay: "0.5s", size: "text-sm" },
              { text: "AI Agents", bottom: "22%", left: "8%", delay: "1s", size: "text-xs" },
              { text: "AWS", bottom: "12%", right: "14%", delay: "1.5s", size: "text-xs" },
              { text: "Java", top: "45%", left: "4%", delay: "2s", size: "text-[10px]" },
              { text: "TypeScript", top: "35%", right: "6%", delay: "2.5s", size: "text-[10px]" },
              { text: "Spark", bottom: "35%", left: "18%", delay: "3s", size: "text-[10px]" },
              { text: "Claude", top: "65%", right: "10%", delay: "3.5s", size: "text-xs" },
              { text: "PyTorch", top: "80%", left: "15%", delay: "1.2s", size: "text-[10px]" },
              { text: "Next.js", top: "25%", left: "25%", delay: "2.8s", size: "text-[10px]" },
              { text: "MongoDB", bottom: "8%", left: "35%", delay: "0.8s", size: "text-[10px]" },
              { text: "LangChain", top: "55%", right: "20%", delay: "1.8s", size: "text-[10px]" },
            ].map((skill, i) => (
              <div
                key={i}
                className={`absolute ${skill.size} text-white/30 font-[var(--font-mono)] animate-[particle-float_5s_ease-in-out_infinite]`}
                style={{ top: skill.top, left: skill.left, right: skill.right, bottom: skill.bottom, animationDelay: skill.delay } as React.CSSProperties}
              >
                {skill.text}
              </div>
            ))}
          </div>

          {/* Name — top, biggest element */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold tracking-[2px] mb-10 text-center z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-gradient drop-shadow-[0_0_40px_rgba(125,211,252,0.4)]">Mallika Verma</span>
          </motion.h1>

          {/* Center piece: CIRCULAR photo + orbit ring + rotating text */}
          <motion.div
            className="relative flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            {/* Rotating text ring — clearly visible */}
            <div className="absolute w-[480px] h-[480px] md:w-[620px] md:h-[620px] animate-[spin_20s_linear_infinite] z-[15]">
              <svg viewBox="0 0 420 420" className="w-full h-full">
                <defs>
                  <path id="orbitPath" d="M 210,210 m -190,0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0" />
                </defs>
                <text fill="rgba(255,255,255,0.6)" fontSize="12" fontFamily="monospace" letterSpacing="5" fontWeight="bold">
                  <textPath href="#orbitPath">✦ MALLIKA VERMA ✦ ENGINEER WHO WRITES ✦ BUILD ✦ CREATE ✦ INSPIRE ✦</textPath>
                </text>
              </svg>
            </div>

            {/* Pulsing glow rings */}
            <div className="absolute w-[440px] h-[440px] md:w-[550px] md:h-[550px] rounded-full border-2 border-purple-500/20 animate-[pulse-ring_3s_ease-in-out_infinite]" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            <div className="absolute w-[470px] h-[470px] md:w-[580px] md:h-[580px] rounded-full border border-sky-500/10 animate-[pulse-ring_3s_ease-in-out_infinite_1.5s]" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

            {/* Photo — BIG circle, clickable "See my Work" */}
            <Link href="/projects" className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] z-10 animate-[float3d_5s_ease-in-out_infinite] block cursor-pointer group">
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-white/15 shadow-[0_0_60px_rgba(102,126,234,0.4),0_0_100px_rgba(118,75,162,0.2)] bg-[#d4cfc4] group-hover:shadow-[0_0_80px_rgba(102,126,234,0.5),0_0_140px_rgba(118,75,162,0.25)] transition-shadow duration-500">
                <Image
                  src="/images/hero-cutout.jpeg"
                  alt="Mallika Verma — See my Work"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="500px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)]" />
              </div>
            </Link>
          </motion.div>

          {/* "Engineer who writes." — 3D effect, biggest tagline */}
          <motion.p
            className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold italic mb-10 z-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            style={{
              background: "linear-gradient(135deg, #7dd3fc, #c4b5fd, #f9a8d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 12px rgba(196,181,253,0.3), 0 8px 30px rgba(125,211,252,0.2)",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
            }}
          >
            Engineer who writes.
          </motion.p>

          {/* Navigation bubbles */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 z-20 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
          >
            {[
              { label: "Projects", href: "/projects", color: "#ff6b6b" },
              { label: "Experience", href: "/experience", color: "#feca57" },
              { label: "Writing", href: "/writing", color: "#48dbfb" },
              { label: "Beyond Code", href: "/beyond", color: "#ff9ff3" },
              { label: "Contact", href: "/contact", color: "#54a0ff" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-bubble"
              >
                <span className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                {item.label}
              </Link>
            ))}
          </motion.div>
        </section>

        {/* ===== BENTO GRID — What I bring to the table ===== */}
        <section className="py-28 md:py-36 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-[11px] font-[var(--font-mono)] text-white/30 tracking-[6px] uppercase text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What I bring to the table
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {/* Card 1: Amazon — span 2 */}
              <motion.div
                className="col-span-2 p-6 md:p-8 rounded-2xl border border-orange-500/20 backdrop-blur-sm relative overflow-hidden group cursor-default"
                style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px rgba(249,115,22,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  </div>
                  <span className="text-[10px] font-[var(--font-mono)] text-white/40 tracking-wider uppercase flex items-center gap-2">
                    Amazon
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  </span>
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white/90 mb-2">22</p>
                <p className="text-xs text-white/35 leading-relaxed mb-4">Countries. One pipeline. Autonomous AI agents shipping across global marketplaces.</p>
                <div className="flex flex-wrap gap-2">
                  {["Bengaluru", "2026", "AI Agents"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[9px] font-[var(--font-mono)] text-orange-400/60 border border-orange-500/20 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* Card 2: JEE */}
              <motion.div
                className="col-span-1 p-6 md:p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm relative overflow-hidden group cursor-default"
                style={{ background: "linear-gradient(135deg, #1a0a2e, #2d1b69)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px rgba(168,85,247,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <span className="text-[10px] font-[var(--font-mono)] text-white/40 tracking-wider uppercase flex items-center gap-2">
                    JEE
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white/90 mb-2">98.9%</p>
                <p className="text-xs text-white/35 leading-relaxed">3 months. No coaching. Just obsession.</p>
              </motion.div>

              {/* Card 3: CPI */}
              <motion.div
                className="col-span-1 p-6 md:p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm relative overflow-hidden group cursor-default"
                style={{ background: "linear-gradient(135deg, #0a2e1a, #1b6940)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px rgba(34,197,94,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <span className="text-[10px] font-[var(--font-mono)] text-white/40 tracking-wider uppercase flex items-center gap-2">
                    CPI
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white/90 mb-2">9.01</p>
                <p className="text-xs text-white/35 leading-relaxed">CPI. Top of class.</p>
              </motion.div>

              {/* Card 4: LeetCode — span 2 */}
              <motion.div
                className="col-span-2 p-6 md:p-8 rounded-2xl border border-amber-500/20 backdrop-blur-sm relative overflow-hidden group cursor-default"
                style={{ background: "linear-gradient(135deg, #2e1a0a, #1a1a2e)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px rgba(245,158,11,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                  <span className="text-[10px] font-[var(--font-mono)] text-white/40 tracking-wider uppercase flex items-center gap-2">
                    LeetCode
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  </span>
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white/90 mb-2">450+</p>
                <p className="text-xs text-white/35 leading-relaxed mb-4">Problems solved. Still counting. The grind doesn&apos;t stop.</p>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-500/80 to-amber-400/60" style={{ width: "75%" }} />
                </div>
              </motion.div>

              {/* Card 5: Co-author */}
              <motion.div
                className="col-span-1 p-6 md:p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm relative overflow-hidden group cursor-default"
                style={{ background: "linear-gradient(135deg, #0a1a2e, #1b4069)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px rgba(59,130,246,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  </div>
                  <span className="text-[10px] font-[var(--font-mono)] text-white/40 tracking-wider uppercase flex items-center gap-2">
                    Research
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  </span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white/90 mb-2">Co-author</p>
                <p className="text-xs text-white/35 leading-relaxed">Published before I could vote.</p>
              </motion.div>

              {/* Card 6: Speaking */}
              <motion.div
                className="col-span-1 p-6 md:p-8 rounded-2xl border border-pink-500/20 backdrop-blur-sm relative overflow-hidden group cursor-default"
                style={{ background: "linear-gradient(135deg, #2e0a1a, #691b40)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px rgba(236,72,153,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                  </div>
                  <span className="text-[10px] font-[var(--font-mono)] text-white/40 tracking-wider uppercase flex items-center gap-2">
                    Speaking
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white/90 mb-2">5+</p>
                <p className="text-xs text-white/35 leading-relaxed">Talks. Never read from a script.</p>
              </motion.div>

              {/* Card 7: Mentor — span 2 */}
              <motion.div
                className="col-span-2 p-6 md:p-8 rounded-2xl border border-teal-500/20 backdrop-blur-sm relative overflow-hidden group cursor-default"
                style={{ background: "linear-gradient(135deg, #1a2e2e, #0a2e2e, #1b5069)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px rgba(20,184,166,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <span className="text-[10px] font-[var(--font-mono)] text-white/40 tracking-wider uppercase flex items-center gap-2">
                    Mentor
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white/90 mb-2">Mentor</p>
                <p className="text-xs text-white/35 leading-relaxed mb-4">Teaching what I&apos;m still learning. Because the best way to learn is to give it away.</p>
                <div className="flex flex-wrap gap-2">
                  {["Unstop", "DSA", "Career Guidance"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[9px] font-[var(--font-mono)] text-teal-400/60 border border-teal-500/20 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: About — i6 + intro ===== */}
        <section className="py-32 md:py-44 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* i6 photo — full body */}
            <motion.div
              className="relative aspect-[3/4] max-w-[380px] rounded-2xl overflow-hidden mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/i6.jpeg"
                alt="Mallika at Amazon office"
                fill
                className="object-contain"
                sizes="380px"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold mb-6 leading-tight">
                <span className="text-gradient">Engineer who writes.</span>
              </h2>
              <p className="text-base text-white/40 leading-relaxed mb-6">
                SDE Intern at Amazon, Bengaluru — building autonomous AI agents and
                distributed pipelines across 22 global marketplaces. CSE @ MNNIT Allahabad, 9.01 CPI.
              </p>
              <p className="text-sm text-white/35 leading-relaxed mb-4">
                Cracked JEE at 98.9 percentile with 3 months of self-preparation.
                No coaching. No backup plan. Just a mother who made quitting feel impossible.
              </p>
              <p className="text-sm text-white/30 leading-relaxed mb-8">
                I mentor students on Unstop because explaining something to someone struggling
                is still the fastest way I learn. I write on Medium because code disappears
                into production — but words stay with people.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== SECTION 3: me1 photo + quick quote ===== */}
        <section className="py-20 px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="border-l-2 border-purple-400/40 pl-6">
                <p className="text-lg text-white/40 italic font-[var(--font-playfair)] leading-relaxed">
                  &ldquo;The best 8 weeks of my life were at Amazon Bengaluru — building things
                  nobody had built before.&rdquo;
                </p>
              </blockquote>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] rounded-xl overflow-hidden order-1 md:order-2 max-w-[350px] mx-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/me1.jpeg"
                alt="Mallika"
                fill
                className="object-cover object-right"
                sizes="350px"
              />
            </motion.div>
          </div>
        </section>

        {/* ===== SECTION 4: "The 8 Weeks" — Bengaluru ===== */}
        <section className="py-32 md:py-40 px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <motion.div
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-white/90 mb-3">Bengaluru, 2026</h3>
              <p className="text-sm text-white/25">8 weeks. 4 lessons. Most of it wasn&apos;t in the job description.</p>
            </motion.div>

            {/* Desktop: Photo center + floating cards around it */}
            <div className="relative hidden md:block">
              {/* Connector lines (mind-map style) */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid meet">
                <line x1="400" y1="200" x2="180" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="400" y1="200" x2="620" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="400" y1="400" x2="180" y2="520" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="400" y1="400" x2="620" y2="520" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Photo — center */}
              <motion.div
                className="relative mx-auto w-[280px] md:w-[320px] aspect-[3/5] rounded-2xl overflow-hidden z-20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-sky-500/15 via-purple-500/15 to-pink-500/15 rounded-2xl blur-xl z-[-1]" />
                <Image src="/images/i5.jpeg" alt="Mallika with Amazon badge" fill className="object-cover" sizes="320px" />
              </motion.div>

              {/* Card 1: top-left */}
              <motion.div
                className="absolute top-0 left-[5%] z-30 max-w-[240px] px-5 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-200 cursor-default"
                initial={{ opacity: 0, x: -30, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                animate={{ y: [0, -6, 0] }}
                style={{ animationDuration: "4s", animationIterationCount: "infinite", animationTimingFunction: "ease-in-out" } as React.CSSProperties}
              >
                <p className="text-sm md:text-base text-white/60 italic font-[var(--font-playfair)]">&ldquo;Ask questions louder than your ego.&rdquo;</p>
              </motion.div>

              {/* Card 2: top-right */}
              <motion.div
                className="absolute top-0 right-[5%] z-30 max-w-[240px] px-5 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-200 cursor-default"
                initial={{ opacity: 0, x: 30, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                animate={{ y: [0, -6, 0] }}
                style={{ animationDuration: "5s", animationDelay: "1s", animationIterationCount: "infinite", animationTimingFunction: "ease-in-out" } as React.CSSProperties}
              >
                <p className="text-sm md:text-base text-white/60 italic font-[var(--font-playfair)]">&ldquo;Ship in Week 2. Iterate forever.&rdquo;</p>
              </motion.div>

              {/* Card 3: bottom-left */}
              <motion.div
                className="absolute bottom-0 left-[5%] z-30 max-w-[240px] px-5 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-200 cursor-default"
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                animate={{ y: [0, 6, 0] }}
                style={{ animationDuration: "4.5s", animationDelay: "0.5s", animationIterationCount: "infinite", animationTimingFunction: "ease-in-out" } as React.CSSProperties}
              >
                <p className="text-sm md:text-base text-white/60 italic font-[var(--font-playfair)]">&ldquo;Think in systems, not features.&rdquo;</p>
              </motion.div>

              {/* Card 4: bottom-right */}
              <motion.div
                className="absolute bottom-0 right-[5%] z-30 max-w-[240px] px-5 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-200 cursor-default"
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                animate={{ y: [0, 6, 0] }}
                style={{ animationDuration: "5.5s", animationDelay: "1.5s", animationIterationCount: "infinite", animationTimingFunction: "ease-in-out" } as React.CSSProperties}
              >
                <p className="text-sm md:text-base text-white/60 italic font-[var(--font-playfair)]">&ldquo;The badge comes off. The builder stays.&rdquo;</p>
              </motion.div>
            </div>

            {/* Mobile: Photo + stacked cards */}
            <div className="md:hidden">
              <motion.div
                className="relative mx-auto w-full max-w-[280px] aspect-[3/5] rounded-2xl overflow-hidden mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-sky-500/15 via-purple-500/15 to-pink-500/15 rounded-2xl blur-xl z-[-1]" />
                <Image src="/images/i5.jpeg" alt="Mallika with Amazon badge" fill className="object-cover" sizes="280px" />
              </motion.div>

              <div className="space-y-4">
                {[
                  "Ask questions louder than your ego.",
                  "Ship in Week 2. Iterate forever.",
                  "Think in systems, not features.",
                  "The badge comes off. The builder stays.",
                ].map((quote, i) => (
                  <motion.div
                    key={quote}
                    className={`max-w-[240px] px-5 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 ${i % 2 === 0 ? "" : "ml-auto"}`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <p className="text-sm text-white/60 italic font-[var(--font-playfair)]">&ldquo;{quote}&rdquo;</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Closing line */}
            <p className="text-xs text-white/15 text-center mt-16 font-[var(--font-playfair)] italic">
              — Bengaluru taught me this.
            </p>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="py-12 px-8 md:px-16 text-center border-t border-white/5">
          <p className="text-xs text-white/20">
            © 2026 Mallika Verma. Built with Next.js & Tailwind.
          </p>
        </footer>
      </main>
    </>
  );
}
