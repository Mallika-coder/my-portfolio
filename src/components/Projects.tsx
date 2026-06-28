"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "DriveSafer AI",
    oneLiner: "Real-time drowsiness detection at 30fps",
    metric: "97.8%",
    metricLabel: "accuracy",
    stack: ["React", "TensorFlow.js", "MediaPipe"],
    live: "https://drive-safer-ai.vercel.app/",
    github: "https://github.com/Mallika-coder/DriveSafer-AI",
  },
  {
    title: "MindGuard",
    oneLiner: "Mental health classification + RAG chatbot",
    metric: "0.87",
    metricLabel: "F1 score",
    stack: ["PyTorch", "BERT", "FAISS", "LangChain"],
    live: "https://mind-guard-chi.vercel.app",
    github: "",
  },
  {
    title: "MallikaAI",
    oneLiner: "Multi-model assistant with code execution",
    metric: "3",
    metricLabel: "LLMs",
    stack: ["Next.js", "FastAPI", "WebSocket"],
    live: "https://frontend-j1wm81yfe-web-booster12.vercel.app",
    github: "https://github.com/Mallika-coder/mallika-ai",
  },
  {
    title: "CureCue",
    oneLiner: "Gamified wellness with AI Oracle",
    metric: "Full",
    metricLabel: "stack",
    stack: ["Next.js", "MongoDB", "JWT"],
    live: "https://curecue312.vercel.app/",
    github: "",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-40 md:py-56 px-8 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] text-white/20 font-[var(--font-mono)] tracking-[0.2em] uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold">
            Projects
          </h2>
        </motion.div>

        {/* Project list — editorial, one per row on desktop */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              data-cursor="project"
              className="group border-t border-white/8 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              {/* Metric — big number */}
              <div className="md:col-span-2 text-center md:text-left">
                <span className="text-3xl md:text-4xl font-bold text-gradient">
                  {project.metric}
                </span>
                <p className="text-[10px] text-white/20 mt-1">{project.metricLabel}</p>
              </div>

              {/* Title + one-liner */}
              <div className="md:col-span-5">
                <h3 className="text-xl md:text-2xl font-bold text-white/80 group-hover:text-white transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-white/30">
                  {project.oneLiner}
                </p>
              </div>

              {/* Stack */}
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-[10px] font-[var(--font-mono)] text-white/20">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="md:col-span-2 flex gap-4 justify-end">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white transition-colors">
                    Live ↗
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">
                    Code ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/8" />
        </div>
      </div>
    </section>
  );
}
