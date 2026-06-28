"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "DriveSafer AI",
    oneLiner: "Real-time drowsiness detection at 30fps in browser",
    metric: "97.8% accuracy",
    stack: ["React", "TensorFlow.js", "MediaPipe"],
    live: "https://drive-safer-ai.vercel.app/",
    github: "https://github.com/Mallika-coder/DriveSafer-AI",
    dot: "bg-sky-400",
  },
  {
    title: "MindGuard",
    oneLiner: "Mental health classification + RAG chatbot",
    metric: "F1: 0.87 on 200K posts",
    stack: ["PyTorch", "BERT", "FAISS", "LangChain"],
    live: "https://mind-guard-chi.vercel.app",
    github: "",
    dot: "bg-purple-400",
  },
  {
    title: "MallikaAI",
    oneLiner: "Multi-model assistant with live code execution",
    metric: "GPT-4o + Claude + LLaMA",
    stack: ["Next.js", "FastAPI", "WebSocket"],
    live: "https://frontend-j1wm81yfe-web-booster12.vercel.app",
    github: "https://github.com/Mallika-coder/mallika-ai",
    dot: "bg-pink-400",
  },
  {
    title: "CureCue",
    oneLiner: "Gamified wellness with AI Oracle",
    metric: "Full-stack + AI",
    stack: ["Next.js", "MongoDB", "JWT"],
    live: "https://curecue312.vercel.app/",
    github: "",
    dot: "bg-emerald-400",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 md:py-40 px-6 md:px-12 lg:px-16" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Things I <span className="text-gradient">Built</span>
        </motion.h2>

        {/* 2x2 Grid with generous gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              data-cursor="project"
              className="group p-8 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              {/* Dot + metric */}
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-2 h-2 rounded-full ${project.dot}`} />
                <span className="text-[11px] font-[var(--font-mono)] text-white/25">
                  {project.metric}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white/85 mb-3 group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>

              {/* One-liner */}
              <p className="text-sm text-white/35 leading-relaxed mb-6">
                {project.oneLiner}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-[10px] font-[var(--font-mono)] text-white/30 border border-white/8 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-sky-400/60 hover:text-sky-300 transition-colors">
                    Live ↗
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white/25 hover:text-white/50 transition-colors">
                    Code ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
