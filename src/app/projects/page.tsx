"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "DriveSafer AI",
    subtitle: "Real-time Drowsiness Detection",
    year: "2025",
    role: "Full-Stack ML Engineer",
    overview:
      "20-module ML pipeline trained on 28K samples. 7-signal fusion — eye tracking, head pose, PERCLOS, yawn detection. Runs at 30fps in browser.",
    results: ["97.8% accuracy", "30fps real-time", "67% fewer false positives"],
    stack: ["React", "TensorFlow.js", "MediaPipe", "scikit-learn"],
    live: "https://drive-safer-ai.vercel.app/",
    github: "https://github.com/Mallika-coder/DriveSafer-AI",
    color: "from-sky-400 to-blue-600",
    bgColor: "bg-sky-500/5",
    borderColor: "hover:border-sky-500/30",
  },
  {
    title: "MindGuard",
    subtitle: "AI Mental Health Platform",
    year: "2025",
    role: "AI/ML Engineer",
    overview:
      "Fine-tuned BERT on 200K Reddit posts (F1: 0.87). RAG pipeline with FAISS + LangChain. Multilingual CBT chatbot with voice.",
    results: ["F1: 0.87", "AUC-ROC: 0.92", "RAG chatbot"],
    stack: ["PyTorch", "BERT", "FAISS", "LangChain"],
    live: "https://mind-guard-chi.vercel.app",
    github: "",
    color: "from-purple-400 to-violet-600",
    bgColor: "bg-purple-500/5",
    borderColor: "hover:border-purple-500/30",
  },
  {
    title: "MallikaAI",
    subtitle: "Multi-Model AI Assistant",
    year: "2024",
    role: "Full-Stack Developer",
    overview:
      "GPT-4o, Claude, LLaMA 3.1 — all free. Live code execution, web search, voice, file upload. Chrome extension included.",
    results: ["3 LLMs unified", "Live code exec", "Chrome extension"],
    stack: ["Next.js", "FastAPI", "LLaMA 3.1", "WebSocket"],
    live: "https://frontend-j1wm81yfe-web-booster12.vercel.app",
    github: "https://github.com/Mallika-coder/mallika-ai",
    color: "from-pink-400 to-rose-600",
    bgColor: "bg-pink-500/5",
    borderColor: "hover:border-pink-500/30",
  },
  {
    title: "CureCue",
    subtitle: "Gamified Wellness Platform",
    year: "2024",
    role: "Full-Stack Developer",
    overview:
      "Wellness platform with generative AI Oracle. Gamified progress. JWT + bcrypt auth. Scalable MongoDB architecture.",
    results: ["AI Oracle", "Gamified UX", "Full-stack"],
    stack: ["Next.js", "MongoDB", "LLM APIs", "JWT"],
    live: "https://curecue312.vercel.app/",
    github: "",
    color: "from-emerald-400 to-green-600",
    bgColor: "bg-emerald-500/5",
    borderColor: "hover:border-emerald-500/30",
  },
];

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

      {/* Hero */}
      <section className="pt-32 pb-10 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
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
            transition={{ delay: 0.4 }}
          >
            From AI agents to full-stack platforms — things I built that actually work.
          </motion.p>
        </div>
      </section>

      {/* Projects — Interactive cards */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`relative border-t border-white/8 py-12 md:py-16 transition-all duration-500 ${project.bgColor} ${hoveredIndex === i ? "bg-opacity-100" : "bg-opacity-0"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${i % 2 === 1 ? "" : ""}`}>
                {/* Left: Number + Title */}
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-4 mb-4">
                    <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${project.color} bg-clip-text text-transparent`}>
                      0{i + 1}
                    </span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold text-white/90 mb-1">
                        {project.title}
                      </h2>
                      <p className="text-sm text-white/35">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 text-[10px] text-white/25 font-[var(--font-mono)] mb-6 ml-14">
                    <span>{project.year}</span>
                    <span>·</span>
                    <span>{project.role}</span>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed ml-14">
                    {project.overview}
                  </p>
                </div>

                {/* Right: Results + Tech + Actions */}
                <div className="lg:col-span-7 lg:pt-4">
                  {/* Key results as highlight chips */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.results.map((r) => (
                      <motion.span
                        key={r}
                        className={`px-4 py-2 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-white/10`}
                        whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                      >
                        {r}
                      </motion.span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-[10px] font-[var(--font-mono)] text-white/25 border border-white/6 rounded-md bg-white/[0.02]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 text-xs font-medium border border-white/15 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 ${project.borderColor}`}
                        whileHover={{ y: -2 }}
                      >
                        Visit Live Site ↗
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
                        Source Code ↗
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/8" />
        </div>
      </section>
    </main>
  );
}
