"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════ NAV ═══════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 transition-all duration-300 bg-[#FAFAF8]/90 backdrop-blur-sm ${scrolled ? "border-b border-[#1a1a1a]/10" : ""}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-bold tracking-tight">MV</a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {["About", "Work", "Projects", "Writing", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FF6B35] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════════ HERO ═══════════════════ */
function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Typography */}
        <div>
          <motion.p
            className="text-sm tracking-widest uppercase text-[#FF6B35] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Portfolio 2026
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-2">
              Writer
            </h1>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-[#FF6B35]">
              who codes.
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 text-lg text-[#666] max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            CSE @ MNNIT Allahabad · SDE Intern @ Amazon
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="px-6 py-3 bg-[#1a1a1a] text-white text-sm rounded-full hover:bg-[#333] transition-colors">
              See My Work
            </a>
            <a href="https://medium.com/@mallikav" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-[#1a1a1a]/20 text-sm rounded-full hover:border-[#1a1a1a]/60 transition-colors">
              Read My Writing
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#1a1a1a]/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { value: "9.01", label: "CPI" },
              { value: "Amazon", label: "Intern" },
              { value: "22", label: "Marketplaces" },
              { value: "100%", label: "Agent Accuracy" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold font-mono">{s.value}</div>
                <div className="text-xs text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative aspect-[3/4] max-w-sm ml-auto rounded-sm overflow-hidden">
            <Image src="/images/i6.jpeg" alt="Mallika Verma" fill className="object-cover" priority />
          </div>
          <p className="mt-4 text-sm font-serif italic text-[#666] text-right max-w-sm ml-auto">
            &ldquo;I was a writer before I was an engineer. Still am.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════ ABOUT ═══════════════════ */
function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 border-t border-[#1a1a1a]/10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/80">
            I&apos;m Mallika — a second-year CSE student at MNNIT Allahabad and SDE Intern at Amazon, where I built distributed data pipelines and AI agents for 22 global marketplaces.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/80 mt-6">
            Before I wrote code, I wrote sentences. I&apos;m a published co-author, a speech competition winner, and someone who believes the best engineering — like the best writing — is honest and precise.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <blockquote className="mt-12 pl-6 border-l-4 border-[#FF6B35]">
            <p className="font-serif text-2xl md:text-3xl italic text-[#1a1a1a]/70 leading-snug">
              Every line has a reason. Every system has a story.
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════ WORK ═══════════════════ */
const workItems = [
  {
    title: "Built AI Agents That Replaced Hours of Manual Work",
    desc: "Engineered 2 autonomous AI agents on Amazon’s AgentZ platform using Claude Sonnet 4.5 + Cybernaut browser automation. Automated competitor feasibility evaluation across 14 SOP criteria. Iterated v1→v7 in 2 days.",
    stats: ["100% accuracy", "26 competitors", "11 min vs 60 min", "$0.55/run"],
    tags: ["AI Agent", "Claude", "Cybernaut"],
  },
  {
    title: "Distributed Pipeline Across 22 Global Marketplaces",
    desc: "Onboarded LMS into GAIA governance framework. CDK TypeScript infrastructure, 22 blast-radius-isolated EventBridge schedulers, 88 Cradle/Dryad ingestion jobs, Spark transformation on EMR.",
    stats: ["22 marketplaces", "88 ingestion jobs", "CDK + EMR"],
    tags: ["TypeScript", "CDK", "EventBridge", "Spark"],
  },
  {
    title: "Legacy to Modern Event-Driven Architecture",
    desc: "Migrated Spark transformation from legacy Sagittarius workflow to modern event-driven architecture in Scala. Factory-pattern routing across enricher types.",
    stats: ["Scala", "Apache Spark", "EMR"],
    tags: ["Scala", "Spark", "Event-Driven"],
  },
  {
    title: "System Reliability Fix — First CR Shipped",
    desc: "Replaced hardcoded individual email with team distribution list in Cognitum alerting system. Eliminated single-point-of-failure for 15+ report notifications/quarter. 100% new line test coverage.",
    stats: ["Java", "100% coverage", "First CR shipped"],
    tags: ["Java", "Testing", "Reliability"],
  },
];

function Work() {
  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-12 border-t border-[#1a1a1a]/10">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm tracking-widest uppercase text-[#FF6B35] mb-3">Amazon · May–July 2026 · Bengaluru</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">What I Built at Amazon</h2>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {workItems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <article className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
                <div className="text-sm text-[#666]">
                  <span className="font-mono text-[#FF6B35]">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4">{item.title}</h3>
                  <p className="text-[#666] leading-relaxed mb-5">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.stats.map((s) => (
                      <span key={s} className="px-3 py-1 text-xs font-mono bg-[#1a1a1a]/5 rounded-full">{s}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="text-xs text-[#FF6B35]/80">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ PROJECTS ═══════════════════ */
const projects = [
  { title: "DriveSafer AI", desc: "20-module ML pipeline at 30fps in-browser. 7-signal fusion with federated learning.", stats: ["97.8% accuracy", "30fps", "67% fewer false positives"], stack: ["React", "TensorFlow.js", "MediaPipe", "scikit-learn"], live: "https://drive-safer-ai.vercel.app/", github: "https://github.com/Mallika-coder/DriveSafer-AI" },
  { title: "MindGuard", desc: "Fine-tuned BERT on 200K posts. RAG pipeline with FAISS + LangChain. Multilingual CBT chatbot.", stats: ["F1: 0.87", "AUC-ROC: 0.92", "RAG pipeline"], stack: ["PyTorch", "BERT", "FAISS", "LangChain", "React.js"], live: "https://mind-guard-chi.vercel.app", github: "" },
  { title: "MallikaAI", desc: "Multi-model AI assistant with live code execution, web search, voice input. Free alternative.", stats: ["Multi-model", "Code execution", "Chrome extension"], stack: ["Next.js 14", "FastAPI", "LLaMA 3.1", "WebSocket"], live: "https://frontend-j1wm81yfe-web-booster12.vercel.app", github: "https://github.com/Mallika-coder/mallika-ai" },
  { title: "CureCue", desc: "Gamified wellness platform with generative AI Oracle for personalized health guidance.", stats: ["AI Oracle", "Gamified", "Full-stack"], stack: ["Next.js 14", "MongoDB", "LLM APIs", "JWT"], live: "https://curecue312.vercel.app/", github: "" },
];

function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-12 border-t border-[#1a1a1a]/10">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Things I Built</h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <article className="p-8 border border-[#1a1a1a]/10 rounded-lg hover:border-[#FF6B35]/30 transition-colors">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stats.map((s) => (
                    <span key={s} className="px-2.5 py-1 text-[11px] font-mono bg-[#1a1a1a]/5 rounded-full">{s}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((t) => (
                    <span key={t} className="text-[11px] text-[#666]">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-[#1a1a1a]/5">
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#FF6B35] hover:underline">Live Demo</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#666] hover:underline">Source Code</a>}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ SKILLS ═══════════════════ */
const skillGroups = [
  { name: "Languages", skills: ["JavaScript", "Python", "Java", "Scala", "C++", "C"] },
  { name: "Frontend", skills: ["React.js", "Next.js 14", "Tailwind CSS", "Framer Motion", "HTML5"] },
  { name: "Backend & Data", skills: ["Node.js", "Express.js", "Apache Spark", "RESTful APIs"] },
  { name: "Cloud & Infra", skills: ["AWS S3", "DynamoDB", "Lambda", "EMR", "Step Functions", "EventBridge", "CDK", "CloudFormation"] },
  { name: "AI & ML", skills: ["Prompt Engineering", "AI Agent", "Claude Sonnet 4.5", "LLM APIs", "PyTorch", "BERT", "FAISS", "LangChain", "TensorFlow.js", "MediaPipe", "scikit-learn"] },
  { name: "Databases", skills: ["MongoDB", "DynamoDB", "Firebase", "SQLite"] },
];

function Skills() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 border-t border-[#1a1a1a]/10">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">What I Work With</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((g, gi) => (
            <FadeIn key={g.name} delay={gi * 0.05}>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-[#FF6B35] mb-4">{g.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className="px-3 py-1.5 text-sm border border-[#1a1a1a]/10 rounded-full hover:border-[#FF6B35]/40 transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ WRITING ═══════════════════ */
function Writing() {
  return (
    <section id="writing" className="py-20 md:py-28 px-6 md:px-12 border-t border-[#1a1a1a]/10">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">I Also Write</h2>
        </FadeIn>

        {/* Featured essay */}
        <FadeIn>
          <a href="https://medium.com/@mallikav" target="_blank" rel="noopener noreferrer" className="block p-8 md:p-12 border border-[#1a1a1a]/10 rounded-lg hover:border-[#FF6B35]/30 transition-colors mb-8 group">
            <span className="text-xs tracking-widest uppercase text-[#FF6B35]">Featured Essay</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mt-4 mb-4 group-hover:text-[#FF6B35] transition-colors leading-snug">
              Seven weeks at Amazon and I&apos;m already scared of forgetting.
            </h3>
            <blockquote className="font-serif italic text-[#666] text-lg leading-relaxed max-w-2xl">
              &ldquo;Not the technical stuff — I&apos;ll remember the code. That part gets saved to GitHub. But the feeling of walking into that office on Day 1...&rdquo;
            </blockquote>
            <p className="mt-4 text-xs text-[#666]">5 min read</p>
          </a>
        </FadeIn>

        {/* Secondary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "What Building AI Agents Taught Me About Problem Solving", tag: "Engineering", time: "4 min" },
            { title: "Why Every Engineer Should Write", tag: "Thoughts", time: "3 min" },
          ].map((a, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <a href="https://medium.com/@mallikav" target="_blank" rel="noopener noreferrer" className="block p-6 border border-[#1a1a1a]/10 rounded-lg hover:border-[#FF6B35]/30 transition-colors group">
                <span className="text-[10px] tracking-widest uppercase text-[#FF6B35]">{a.tag}</span>
                <h4 className="text-lg font-bold mt-2 group-hover:text-[#FF6B35] transition-colors leading-snug">{a.title}</h4>
                <p className="mt-2 text-xs text-[#666]">{a.time} read</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ ACHIEVEMENTS ═══════════════════ */
const achievements = [
  "SDE Intern at Amazon, Bengaluru (2026)",
  "Published Co-Author — Blue Star Publication (2023)",
  "1st Place — Speech Competition, Jan Jatiya Gaurav Diwas (Dec 2024)",
  "Finalist — DevOrDie Hackathon, Avishkar MNNIT (Dec 2025)",
  "3rd Place — Antiragging Week, MNNIT Allahabad (Sep 2025)",
  "450+ LeetCode Problems Solved",
  "9.01 CPI — MNNIT Allahabad, Till 4th Semester",
];

function Achievements() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 border-t border-[#1a1a1a]/10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">Achievements</h2>
        </FadeIn>
        <ol className="space-y-6">
          {achievements.map((a, i) => (
            <FadeIn key={i} delay={i * 0.03}>
              <li className="flex gap-6 items-baseline">
                <span className="font-mono text-sm text-[#FF6B35] flex-shrink-0">0{i + 1}</span>
                <span className="text-lg">{a}</span>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ═══════════════════ GALLERY ═══════════════════ */
const galleryPhotos = [
  { src: "/images/i7.jpeg", caption: "Day 1. I didn’t know what a Brazil build was. I didn’t know anything, actually.", w: "60%", aspect: "aspect-[3/4]" },
  { src: "/images/i8.jpeg", caption: "Somewhere between Day 1 and Day 56, this started feeling normal. That scared me.", w: "40%", aspect: "aspect-[3/4]" },
  { src: "/images/i3.jpeg", caption: "Nobody tells you how much of engineering is just sitting with a problem.", w: "40%", aspect: "aspect-[4/3]" },
  { src: "/images/i4.jpeg", caption: "You are what you believe yourself to be. The sticky notes agreed.", w: "60%", aspect: "aspect-[4/3]" },
  { src: "/images/i6.jpeg", caption: "Week 7. The agent hit 100%. I was more scared of leaving than failing.", w: "50%", aspect: "aspect-[3/4]" },
  { src: "/images/i1.jpeg", caption: "Building things nobody had built before. From a window seat in Bengaluru.", w: "50%", aspect: "aspect-[3/4]" },
  { src: "/images/i5.jpeg", caption: "The badge comes off. The intern title disappears. The code stays deployed.", w: "45%", aspect: "aspect-[3/4]" },
  { src: "/images/i2.jpeg", caption: "This desk saw v1 through v7. It saw me figure out what ‘working’ really means.", w: "55%", aspect: "aspect-[3/4]" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Bengaluru.</h2>
          <p className="text-[#666] text-lg mb-16">8 weeks. A lot changed.</p>
        </FadeIn>

        {/* Masonry rows */}
        <div className="space-y-4">
          {[0, 2, 4, 6].map((rowStart) => (
            <div key={rowStart} className="flex gap-4 flex-col md:flex-row">
              {galleryPhotos.slice(rowStart, rowStart + 2).map((photo, i) => (
                <FadeIn
                  key={photo.src}
                  delay={i * 0.1}
                  className={`relative overflow-hidden rounded-sm cursor-pointer group w-full`}
                  // use inline style for width on desktop
                >
                  <div className={`relative ${photo.aspect} w-full`} style={{ maxWidth: "100%" }} onClick={() => setLightbox(rowStart + i)}>
                    <Image src={photo.src} alt={photo.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-end p-6">
                      <p className="font-serif italic text-sm text-white/0 group-hover:text-white/90 transition-all duration-400 leading-relaxed">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <a href="#writing" className="block text-center mt-16 font-serif italic text-sm text-[#666] hover:text-white transition-colors">
            I&apos;m scared of forgetting. So I wrote it all down.
          </a>
        </FadeIn>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl" onClick={() => setLightbox(null)}>×</button>
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl" onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(0, lightbox - 1)); }}>←</button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl" onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(galleryPhotos.length - 1, lightbox + 1)); }}>→</button>
          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <Image src={galleryPhotos[lightbox].src} alt="" width={1200} height={800} className="object-contain w-full h-full" />
            <p className="text-center font-serif italic text-sm text-[#666] mt-4">{galleryPhotos[lightbox].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════ CONTACT ═══════════════════ */
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-12 border-t border-[#1a1a1a]/10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Let&apos;s Talk</h2>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }}
            className="space-y-5"
          >
            <div>
              <label className="text-xs text-[#666] block mb-2">Name</label>
              <input type="text" required className="w-full px-4 py-3 border border-[#1a1a1a]/15 rounded-lg bg-transparent focus:outline-none focus:border-[#FF6B35] transition-colors text-sm" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs text-[#666] block mb-2">Email</label>
              <input type="email" required className="w-full px-4 py-3 border border-[#1a1a1a]/15 rounded-lg bg-transparent focus:outline-none focus:border-[#FF6B35] transition-colors text-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-xs text-[#666] block mb-2">Message</label>
              <textarea rows={4} required className="w-full px-4 py-3 border border-[#1a1a1a]/15 rounded-lg bg-transparent focus:outline-none focus:border-[#FF6B35] transition-colors text-sm resize-none" placeholder="What's on your mind?" />
            </div>
            <button type="submit" className="px-6 py-3 bg-[#1a1a1a] text-white text-sm rounded-full hover:bg-[#333] transition-colors">
              {submitted ? "Sent!" : "Send Message"}
            </button>
          </form>
        </FadeIn>

        {/* Links */}
        <FadeIn delay={0.1}>
          <div className="lg:pt-20">
            <p className="text-sm text-[#666] mb-6">Or find me here:</p>
            <div className="space-y-4">
              {[
                { label: "Email", value: "sonimallikav@gmail.com", href: "mailto:sonimallikav@gmail.com" },
                { label: "LinkedIn", value: "/mallikaverma58", href: "https://www.linkedin.com/in/mallikaverma58/" },
                { label: "GitHub", value: "/Mallika-coder", href: "https://github.com/Mallika-coder" },
                { label: "Instagram", value: "@creative_mallika_0542", href: "https://www.instagram.com/creative_mallika_0542/" },
                { label: "LeetCode", value: "/Mallikaaaa", href: "https://leetcode.com/u/Mallikaaaa" },
                { label: "Medium", value: "@mallikav", href: "https://medium.com/@mallikav" },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 border-b border-[#1a1a1a]/5 hover:border-[#FF6B35]/40 transition-colors group">
                  <span className="text-xs text-[#666]">{l.label}</span>
                  <span className="text-sm group-hover:text-[#FF6B35] transition-colors">{l.value}</span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════ FOOTER ═══════════════════ */
function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-[#1a1a1a]/10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif italic text-[#666]">
          Built by a writer who learned to code. Still writing.
        </p>
      </div>
    </footer>
  );
}

/* ═══════════════════ PAGE ═══════════════════ */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Writing />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
