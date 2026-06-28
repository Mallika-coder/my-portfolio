"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands: Record<string, string> = {
  help: `Available commands:
  about     - Who is Mallika?
  skills    - Technical skills
  contact   - How to reach me
  education - Academic background
  work      - Current role
  leetcode  - Coding stats
  fun       - Fun facts
  clear     - Clear terminal
  exit      - Close terminal`,
  about:
    "Mallika Verma — Writer who codes. CSE student @ MNNIT Allahabad, SDE Intern @ Amazon. Published co-author. Speech competition winner. Debugs at midnight, reads fiction at 1am.",
  skills:
    "Python | Java | Scala | JavaScript | TypeScript | React | Next.js | AWS | Apache Spark | PyTorch | BERT | LangChain | CDK | AgentZ | Claude | TensorFlow.js",
  contact:
    "Email: sonimallikav@gmail.com\nGitHub: github.com/Mallika-coder\nLinkedIn: linkedin.com/in/mallikaverma58\nMedium: medium.com/@mallikav\nLeetCode: leetcode.com/u/Mallikaaaa",
  education:
    "B.Tech CSE @ MNNIT Allahabad (2024-2028)\nCPI: 9.01 (till 4th semester)\nNIT Allahabad — Institute of National Importance",
  work: "SDE Intern @ Amazon, Bengaluru (May 2026 – July 2026)\n→ Built AI agents on AgentZ platform\n→ Distributed pipelines across 22 marketplaces\n→ Spark migration to event-driven architecture\n→ First CR shipped in week 2",
  leetcode:
    "450+ problems solved\n100 Days Badge 2026\nConsistent daily solver\nFocus: Arrays, DP, Trees, Graphs",
  fun: "→ Jersey #07 on the Kho Kho team\n→ Won podiums with last-minute scripts\n→ Writes poetry between debugging sessions\n→ Believes 'working' and 'correct' are not the same thing\n→ Unstop Mentor helping other students",
};

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");

    if (cmd === "clear") { setHistory([]); return; }
    if (cmd === "exit") { setIsOpen(false); return; }

    const output = commands[cmd] || `Command not found: ${cmd}. Type 'help' for available commands.`;
    setHistory([...history, { cmd, output }]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-4 md:inset-12 lg:inset-20 z-[400] rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/30 flex flex-col"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ background: "linear-gradient(135deg, #0f0a1e, #1a1035, #0d1b2a)" }}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-[var(--font-mono)] text-white/40">
              mallika@portfolio ~ (Ctrl+` to close)
            </span>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white text-lg">
              ×
            </button>
          </div>

          {/* Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 font-[var(--font-mono)] text-sm space-y-3">
            <div className="text-green-300/80">
              Welcome to Mallika&apos;s terminal. Type &apos;help&apos; for commands.
            </div>
            {history.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <span className="text-purple-300">❯</span>
                  <span className="text-white/90">{item.cmd}</span>
                </div>
                <pre className="text-sky-300/80 whitespace-pre-wrap mt-1 ml-5 leading-relaxed">
                  {item.output}
                </pre>
              </div>
            ))}
            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-purple-300">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white/90 outline-none font-[var(--font-mono)] text-sm caret-sky-300"
                autoFocus
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
