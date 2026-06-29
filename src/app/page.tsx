"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaMediumM, FaWhatsapp } from "react-icons/fa";
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
  { icon: FaWhatsapp, href: "https://wa.me/919999999999", label: "WhatsApp" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Mallikaaaa", label: "LeetCode" },
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
          {/* Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { top: "10%", left: "15%", bg: "#ff6b6b", delay: "0s" },
              { top: "20%", right: "20%", bg: "#feca57", delay: "0.5s" },
              { bottom: "25%", left: "10%", bg: "#48dbfb", delay: "1s" },
              { bottom: "15%", right: "15%", bg: "#ff9ff3", delay: "1.5s" },
              { top: "50%", left: "5%", bg: "#54a0ff", delay: "2s" },
              { top: "40%", right: "12%", bg: "#5f27cd", delay: "2.5s" },
            ].map((p, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full animate-[particle-float_4s_ease-in-out_infinite]"
                style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom, background: p.bg, animationDelay: p.delay, opacity: 0.5 } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Name — top, most highlighted */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl font-[var(--font-playfair)] font-bold text-white tracking-[2px] mb-12 text-center z-20 drop-shadow-[0_0_30px_rgba(102,126,234,0.5)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className="text-gradient">Mallika Verma</span>
          </motion.h1>

          {/* Center piece: Photo (FULL visible) + orbit ring + rotating text */}
          <motion.div
            className="relative flex items-center justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            {/* Rotating text ring — larger, visible */}
            <div className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] animate-[spin_25s_linear_infinite] z-[5]">
              <svg viewBox="0 0 480 480" className="w-full h-full">
                <defs>
                  <path id="orbitPath" d="M 240,240 m -210,0 a 210,210 0 1,1 420,0 a 210,210 0 1,1 -420,0" />
                </defs>
                <text fill="rgba(255,255,255,0.4)" fontSize="14" fontFamily="monospace" letterSpacing="4">
                  <textPath href="#orbitPath">✦ MALLIKA VERMA ✦ WRITER WHO CODES ✦ BUILD ✦ CREATE ✦ INSPIRE ✦ ENGINEER ✦</textPath>
                </text>
              </svg>
            </div>

            {/* Glow rings */}
            <div className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full border border-white/10 animate-[pulse-ring_3s_ease-in-out_infinite]" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

            {/* Photo — FULL image visible, not cropped */}
            <div className="relative w-[250px] h-[320px] md:w-[300px] md:h-[400px] z-10 animate-[float3d_5s_ease-in-out_infinite]">
              <div className="relative w-full h-full rounded-[30px] overflow-hidden border-2 border-white/10 shadow-[0_0_60px_rgba(102,126,234,0.3),0_0_120px_rgba(118,75,162,0.15)]">
                <Image
                  src="/images/hero-cutout.jpeg"
                  alt="Mallika Verma"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="300px"
                />
              </div>
            </div>
          </motion.div>

          {/* Tagline — below photo, highly highlighted */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-[var(--font-playfair)] font-semibold italic mb-10 z-20 text-gradient drop-shadow-[0_0_20px_rgba(196,181,253,0.4)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            Writer who codes.
          </motion.p>

          {/* Navigation bubbles — in a row below */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 z-20 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
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
                I was a writer
                <br />
                <span className="text-gradient">before I was an engineer.</span>
              </h2>
              <p className="text-base text-white/40 leading-relaxed mb-6">
                SDE Intern at Amazon, Bengaluru. Building autonomous AI agents and
                distributed pipelines for 22 global marketplaces. CSE @ MNNIT Allahabad.
                9.01 CPI. Published co-author.
              </p>
              <p className="text-sm text-white/30 leading-relaxed mb-8">
                Self-prepared for JEE in 2.5 months. Learned discipline from my mother.
                Haven&apos;t stopped sprinting since.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Amazon", "MNNIT", "9.01 CPI", "Published Author", "450+ LeetCode"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-[10px] text-white/30 border border-white/8 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
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

        {/* ===== SECTION 4: Bengaluru strip ===== */}
        <section className="py-24 overflow-hidden">
          <div className="px-8 md:px-16 lg:px-24 mb-12">
            <h3 className="text-3xl font-[var(--font-playfair)] font-bold text-white/80">Bengaluru, 2026</h3>
            <p className="text-sm text-white/25 mt-2">8 weeks. Most of it wasn&apos;t in the job description.</p>
          </div>
          <div className="flex gap-5 overflow-x-auto no-scrollbar px-8 md:px-16 lg:px-24 pb-4">
            {[
              { src: "/images/i7.jpeg", caption: "Day 1 — permission to not know anything yet." },
              { src: "/images/i3.jpeg", caption: "Sitting with a problem. Not solving it." },
              { src: "/images/i4.jpeg", caption: "'You are what you believe yourself to be.'" },
              { src: "/images/i1.jpeg", caption: "Building from a window seat." },
              { src: "/images/i5.jpeg", caption: "The badge comes off. The code stays." },
              { src: "/images/i2.jpeg", caption: "This desk saw v1 through v7." },
            ].map((photo, i) => (
              <motion.div
                key={photo.src}
                className="flex-shrink-0 relative w-[220px] md:w-[270px] rounded-xl overflow-hidden group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="relative h-[300px] md:h-[360px]">
                  <Image src={photo.src} alt="Amazon Bengaluru" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="270px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-[10px] text-white/70 font-[var(--font-playfair)] italic backdrop-blur-sm bg-black/30 rounded-lg px-3 py-2">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
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
