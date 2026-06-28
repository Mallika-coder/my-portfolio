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
    "Email: sonimallikav@gmail.com\nGitHub: github.com/Mallika-coder\nLinkedIn: linkedin.com/in/mallika-verma-a89855327\nLeetCode: leetcode.com/u/Mallikaaaa",
  education:
    "B.Tech CSE @ MNNIT Allahabad (2024-2028)\nCPI: 9.01 (till 4th semester)\nNIT Allahabad — an Institute of National Importance",
  work: "SDE Intern @ Amazon, Bengaluru (May 2026 – July 2026)\n→ Built AI agents on AgentZ platform\n→ Distributed pipelines across 22 marketplaces\n→ Spark migration to event-driven architecture\n→ First CR shipped in week 2",
  leetcode:
    "450+ problems solved\n100 Days Badge 2026\nConsistent daily solver\nFocus: Arrays, DP, Trees, Graphs",
  fun: "→ Jersey #07 on the Kho Kho team\n→ Won podiums with last-minute scripts\n→ Writes poetry between debugging sessions\n→ Believes 'working' and 'correct' are not the same thing",
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
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");

    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (cmd === "exit") {
      setIsOpen(false);
      return;
    }

    const output = commands[cmd] || `Command not found: ${cmd}. Type 'help' for available commands.`;
    setHistory([...history, { cmd, output }]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-4 md:inset-16 z-[400] bg-[#0a0a0a]/95 border border-green-500/30 rounded-xl backdrop-blur-xl overflow-hidden flex flex-col"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-green-500/20 bg-[#0d0f1a]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs font-[var(--font-mono)] text-green-400/70">
              mallika@portfolio ~ (Ctrl+` to close)
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-green-400/50 hover:text-green-400 text-sm"
            >
              ×
            </button>
          </div>

          {/* Terminal body */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 font-[var(--font-mono)] text-sm space-y-3"
          >
            <div className="text-green-400/70">
              Welcome to Mallika&apos;s terminal. Type &apos;help&apos; to see available commands.
            </div>

            {history.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-[#f5f5f0]">{item.cmd}</span>
                </div>
                <pre className="text-green-400/80 whitespace-pre-wrap mt-1 ml-4">
                  {item.output}
                </pre>
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-[#f5f5f0] outline-none font-[var(--font-mono)] text-sm caret-green-400"
                autoFocus
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
