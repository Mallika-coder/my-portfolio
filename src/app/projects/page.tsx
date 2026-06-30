"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "CureCue",
    subtitle: "Gamified Wellness Platform",
    year: "2024",
    role: "Full-Stack Developer",
    overview:
      "Wellness platform with generative AI Oracle. Gamified progress tracking. JWT + bcrypt auth. Scalable MongoDB architecture.",
    results: ["AI Oracle", "Gamified UX", "Full-stack"],
    stack: ["Next.js", "MongoDB", "LLM APIs", "JWT"],
    live: "https://curecue312.vercel.app/",
    github: "",
    image: "/images/projects/curecue.png",
    status: "live",
  },
  {
    title: "DriveSafer AI",
    subtitle: "Real-time Drowsiness Detection",
    year: "2025",
    role: "Full-Stack ML Engineer",
    overview:
      "20-module ML pipeline trained on 28K samples. 7-signal fusion — eye tracking, head pose, PERCLOS, yawn detection. Runs at 30fps in browser with federated learning.",
    results: ["97.8% accuracy", "30fps real-time", "67% fewer false positives"],
    stack: ["React", "TensorFlow.js", "MediaPipe", "scikit-learn"],
    live: "https://drive-safer-ai.vercel.app/",
    github: "https://github.com/Mallika-coder/DriveSafer-AI",
    image: "/images/projects/drivesafer.png",
    status: "live",
  },
  {
    title: "MindGuard",
    subtitle: "AI Mental Health Platform",
    year: "2025",
    role: "AI/ML Engineer",
    overview:
      "Fine-tuned BERT on 200K Reddit posts (F1: 0.87). RAG pipeline with FAISS + LangChain. Multilingual CBT chatbot with voice I/O.",
    results: ["F1: 0.87", "AUC-ROC: 0.92", "RAG chatbot"],
    stack: ["PyTorch", "BERT", "FAISS", "LangChain"],
    live: "https://mind-guard-chi.vercel.app",
    github: "",
    image: "/images/projects/mindguard.png",
    status: "live",
    insertAmazonAfter: true,
  },
  {
    title: "MallikaAI",
    subtitle: "Multi-Model AI Assistant",
    year: "2024",
    role: "Full-Stack Developer",
    overview:
      "GPT-4o, Claude, LLaMA 3.1 — all free. Live Python code execution, real-time web search, voice input, file upload. Chrome extension included.",
    results: ["3 LLMs unified", "Live code exec", "Chrome extension"],
    stack: ["Next.js", "FastAPI", "LLaMA 3.1", "WebSocket"],
    live: "https://frontend-mauve-nine-89.vercel.app/",
    github: "https://github.com/Mallika-coder/mallika-ai",
    image: "/images/projects/mallikaai.png",
    status: "live",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
            <span className="w-5 h-[1px] bg-white/30" />
            Home
          </Link>
          <span className="text-[11px] font-[var(--font-mono)] text-white/25 tracking-wider">PROJECTS</span>
        </div>
      </header>

      {/* Title */}
      <section className="pt-32 pb-10 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Selected Work
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-base text-white/30 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            From automating 60-minute workflows to 11 minutes, to detecting drowsiness at 30fps — here&apos;s what I&apos;ve shipped.
          </motion.p>
        </div>
      </section>

      {/* Projects — alternating image/text like Experience page, with real screenshots */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <React.Fragment key={project.title}>
            {/* Insert Amazon after MindGuard (index 2) */}
            {i === 3 && (
              <motion.div
                className="border-t border-white/8 py-16 md:py-24 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute top-8 left-0 px-4 py-1.5 rounded-full text-[10px] font-[var(--font-mono)] uppercase tracking-wider" style={{ background: "rgba(255,153,0,0.15)", border: "1px solid rgba(255,153,0,0.3)", color: "#ff9900" }}>
                  ⭐ Featured
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mt-8">
                  <div>
                    <motion.div className="relative aspect-[16/10] rounded-xl overflow-hidden group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} style={{ background: "linear-gradient(135deg, #0a0a1a, #1a1a3e, #0f1a2e)", border: "1px solid rgba(255,153,0,0.15)" }}>
                      <Image src="/images/projects/ai-agents.png" alt="Amazon System Modernization" fill className="object-cover group-hover:brightness-110 transition-all duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                    </motion.div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#ff9900]" />
                      <span className="text-[10px] font-[var(--font-mono)] text-[#ff9900]/70 tracking-wider">AMAZON</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold text-white/90 mb-1">System Modernization & Automation</h2>
                    <p className="text-base text-white/40 mb-6">Reporting, Framework Onboarding, and Competitor Feasibility Workflows</p>
                    <div className="flex items-center gap-3 mb-6 text-[11px] text-white/25 font-[var(--font-mono)]">
                      <span>2026</span><span className="w-1 h-1 rounded-full bg-white/15" /><span>SDE Intern</span><span className="w-1 h-1 rounded-full bg-white/15" /><span>Bengaluru</span>
                    </div>
                    <div className="mb-6">
                      <p className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-wider mb-3">OVERVIEW</p>
                      <p className="text-sm text-white/40 leading-relaxed">Engineered 2 autonomous AI agents, deployed distributed pipelines across 22 marketplaces, migrated legacy architecture to event-driven Scala.</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-wider mb-3">KEY RESULTS</p>
                      <div className="flex flex-wrap gap-2">
                        {["100% accuracy", "60→11 min", "22 marketplaces", "$0.55/run"].map((r) => (
                          <span key={r} className="px-3 py-1.5 text-xs text-[#ff9900]/70 border border-[#ff9900]/20 rounded-full bg-[#ff9900]/5">{r}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Claude 4.5", "CDK", "Spark", "Scala", "EventBridge", "EMR", "Java"].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-[10px] font-[var(--font-mono)] text-white/20 border border-white/6 rounded-md">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <motion.div
              className="border-t border-white/8 py-16 md:py-24 hover:shadow-[0_20px_60px_rgba(255,255,255,0.03)] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Image side */}
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  {project.image ? (
                    <motion.div
                      className="relative aspect-[16/10] rounded-xl overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:brightness-110 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  ) : (
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-sky-500/10 flex items-center justify-center">
                      <span className="text-5xl font-[var(--font-playfair)] font-bold text-white/10">AI</span>
                    </div>
                  )}
                </div>

                {/* Content side */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h2 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold text-white/90 mb-1">
                    {project.title}
                  </h2>
                  <p className="text-base text-white/40 mb-6">{project.subtitle}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-green-400/70 font-[var(--font-mono)]">Live</span>
                  </div>

                  <div className="flex items-center gap-3 mb-6 text-[11px] text-white/25 font-[var(--font-mono)]">
                    <span>{project.year}</span>
                    <span className="w-1 h-1 rounded-full bg-white/15" />
                    <span>{project.role}</span>
                  </div>

                  <div className="mb-6">
                    <p className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-wider mb-3">OVERVIEW</p>
                    <p className="text-sm text-white/40 leading-relaxed">{project.overview}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-wider mb-3">KEY RESULTS</p>
                    <div className="flex flex-wrap gap-2">
                      {project.results.map((r) => (
                        <span key={r} className="px-3 py-1.5 text-xs text-white/50 border border-white/10 rounded-full bg-white/[0.02]">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-[10px] font-[var(--font-mono)] text-white/20 border border-white/6 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-xs font-medium border border-white/15 rounded-lg text-white/70 hover:bg-white hover:text-black transition-all duration-300"
                        whileHover={{ y: -2 }}
                      >
                        Visit Live ↗
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-xs text-white/30 hover:text-white/60 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        Source ↗
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            </React.Fragment>
          ))}
          <div className="border-t border-white/8" />
        </div>
      </section>
    </main>
  );
}
