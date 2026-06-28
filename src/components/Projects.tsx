"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "DriveSafer AI",
    description:
      "20-module ML pipeline at 30fps in-browser. MLP + Transformer on 28K samples (97.8% accuracy). 7-signal fusion — eye tracking, head pose, PERCLOS, yawn detection. Federated learning with ε-DP.",
    stack: ["React", "TensorFlow.js", "MediaPipe", "scikit-learn", "Federated Learning"],
    metrics: ["97.8% accuracy", "30fps", "67% fewer false positives"],
    live: "https://drive-safer-ai.vercel.app/",
    github: "https://github.com/Mallika-coder/DriveSafer-AI",
    gradient: "from-sky-400 to-blue-500",
    bgGradient: "from-sky-50 to-blue-50",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "MindGuard",
    description:
      "Fine-tuned BERT on 200K Reddit posts (F1: 0.87). RAG pipeline with FAISS + LangChain. Multilingual CBT chatbot with voice I/O and clinical instruments.",
    stack: ["PyTorch", "BERT", "FAISS", "LangChain", "React.js"],
    metrics: ["F1: 0.87", "AUC-ROC: 0.92", "RAG pipeline"],
    live: "https://mind-guard-chi.vercel.app",
    github: "",
    gradient: "from-purple-400 to-violet-500",
    bgGradient: "from-purple-50 to-violet-50",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "MallikaAI",
    description:
      "Multi-model AI assistant (GPT-4o, Claude, LLaMA 3.1). Live code execution, web search, voice input, Chrome extension. FREE alternative.",
    stack: ["Next.js 14", "FastAPI", "LLaMA 3.1 70B", "WebSocket"],
    metrics: ["Multi-model", "Code execution", "Free"],
    live: "https://frontend-j1wm81yfe-web-booster12.vercel.app",
    github: "https://github.com/Mallika-coder/mallika-ai",
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "CureCue",
    description:
      "Gamified wellness platform with AI Oracle. JWT + bcrypt auth. Scalable MongoDB backend.",
    stack: ["Next.js 14", "MongoDB", "LLM APIs", "JWT"],
    metrics: ["AI Oracle", "Gamified", "Full-stack"],
    live: "https://curecue312.vercel.app/",
    github: "",
    gradient: "from-emerald-400 to-green-500",
    bgGradient: "from-emerald-50 to-green-50",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative" ref={ref}>
      <div className="absolute inset-0 mesh-gradient-3 -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] font-bold mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Things I <span className="text-gradient">Built</span>
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(220px,auto)]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              data-cursor="project"
              className={`card-hover group relative rounded-3xl overflow-hidden ${project.span}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
            >
              {/* Glass card */}
              <div className={`h-full p-8 glass-strong bg-gradient-to-br ${project.bgGradient} relative`}>
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    {/* Header with links */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1a1035] group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-[#1a1035]/60 hover:text-purple-500 hover:bg-white transition-all text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            ↗
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-[#1a1035]/60 hover:text-purple-500 hover:bg-white transition-all text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GH
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-[#1a1035]/60 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-2.5 py-1 text-[11px] font-semibold bg-white/70 text-[#1a1035]/70 rounded-full"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-[var(--font-mono)] text-purple-600/70 bg-purple-50/80 rounded border border-purple-100/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
