"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "DriveSafer AI",
    subtitle: "Real-time Drowsiness Detection",
    year: "2025",
    role: "Full-Stack ML Engineer",
    overview:
      "20-module ML pipeline trained on 28K samples achieving 97.8% accuracy. 7-signal fusion — eye tracking, head pose, PERCLOS, yawn detection. Runs at 30fps in the browser with federated learning and differential privacy.",
    results: [
      "97.8% detection accuracy",
      "30fps real-time performance",
      "67% fewer false positives",
    ],
    stack: ["React", "TensorFlow.js", "MediaPipe", "scikit-learn"],
    live: "https://drive-safer-ai.vercel.app/",
    github: "https://github.com/Mallika-coder/DriveSafer-AI",
    gradient: "from-sky-500/30 via-blue-600/20 to-cyan-500/10",
    emoji: "🚗",
  },
  {
    title: "MindGuard",
    subtitle: "AI Mental Health Platform",
    year: "2025",
    role: "AI/ML Engineer",
    overview:
      "Fine-tuned BERT on 200K Reddit posts for mental health classification (F1: 0.87, AUC-ROC: 0.92). RAG pipeline with FAISS + LangChain. Multilingual CBT chatbot with voice I/O.",
    results: [
      "F1: 0.87 classification score",
      "AUC-ROC: 0.92",
      "RAG-powered chatbot",
    ],
    stack: ["PyTorch", "BERT", "FAISS", "LangChain", "React"],
    live: "https://mind-guard-chi.vercel.app",
    github: "",
    gradient: "from-purple-500/30 via-violet-600/20 to-fuchsia-500/10",
    emoji: "🧠",
  },
  {
    title: "MallikaAI",
    subtitle: "Multi-Model AI Assistant",
    year: "2024",
    role: "Full-Stack Developer",
    overview:
      "GPT-4o, Claude, and LLaMA 3.1 via Groq — all free. Live Python code execution, real-time web search, voice input, file upload. Chrome extension included.",
    results: [
      "3 LLMs unified in one interface",
      "Live code execution",
      "Chrome extension shipped",
    ],
    stack: ["Next.js", "FastAPI", "LLaMA 3.1 70B", "WebSocket"],
    live: "https://frontend-j1wm81yfe-web-booster12.vercel.app",
    github: "https://github.com/Mallika-coder/mallika-ai",
    gradient: "from-pink-500/30 via-rose-600/20 to-red-500/10",
    emoji: "🤖",
  },
  {
    title: "CureCue",
    subtitle: "Gamified Wellness Platform",
    year: "2024",
    role: "Full-Stack Developer",
    overview:
      "Full-stack wellness platform with a generative AI Oracle for personalized health guidance. Gamified progress tracking. JWT + bcrypt authentication with scalable MongoDB architecture.",
    results: [
      "AI-powered health guidance",
      "Gamified user engagement",
      "Scalable full-stack architecture",
    ],
    stack: ["Next.js", "MongoDB", "LLM APIs", "JWT"],
    live: "https://curecue312.vercel.app/",
    github: "",
    gradient: "from-emerald-500/30 via-green-600/20 to-teal-500/10",
    emoji: "💚",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm font-[var(--font-playfair)] font-bold text-white/70 hover:text-white transition-colors">
            ← Back
          </Link>
          <span className="text-[11px] font-[var(--font-mono)] text-white/25 tracking-wider">
            PROJECTS
          </span>
        </div>
      </header>

      {/* Title section */}
      <section className="pt-32 pb-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-base text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Things I built — from AI agents to full-stack platforms.
          </motion.p>
        </div>
      </section>

      {/* Project cards — alternating layout like Wix reference */}
      <section className="pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="border-t border-white/8 py-12 md:py-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                {/* Image side */}
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <span className="text-7xl md:text-8xl">{project.emoji}</span>
                    {/* Overlay with project name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <span className="text-xs font-[var(--font-mono)] text-white/50">{project.live.replace("https://", "")}</span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h2 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold mb-1">
                    {project.title}
                  </h2>
                  <p className="text-lg text-white/50 mb-6">{project.subtitle}</p>

                  <div className="flex items-center gap-4 mb-6 text-xs text-white/30">
                    <span>{project.year}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{project.role}</span>
                  </div>

                  {/* Overview */}
                  <div className="mb-6">
                    <p className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-wider mb-2">OVERVIEW</p>
                    <p className="text-sm text-white/45 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <p className="text-[10px] font-[var(--font-mono)] text-white/20 tracking-wider mb-2">KEY RESULTS</p>
                    <ul className="space-y-1.5">
                      {project.results.map((r) => (
                        <li key={r} className="text-sm text-white/40 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-purple-400/60" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech + Links */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-[10px] font-[var(--font-mono)] text-white/25 border border-white/8 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-white/20 text-xs text-white/60 hover:bg-white hover:text-black transition-all duration-300">
                        Live Site ↗
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-xs text-white/30 hover:text-white transition-colors">
                        Source Code ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
