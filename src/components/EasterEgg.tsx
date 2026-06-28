"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const konamiCode = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA",
];

export default function EasterEgg() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.code].slice(-10);
      setSequence(newSequence);

      if (newSequence.length === 10 && newSequence.every((key, i) => key === konamiCode[i])) {
        setShowMessage(true);
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.5 },
          colors: ["#f59e0b", "#6366f1", "#22c55e", "#f5f5f0"],
        });
        setTimeout(() => setShowMessage(false), 4000);
        setSequence([]);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [sequence]);

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowMessage(false)}
        >
          <motion.div
            className="bg-[#0d0f1a] border border-amber-400/30 rounded-2xl p-8 max-w-md mx-4 text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <p className="text-2xl font-[var(--font-playfair)] text-[#f5f5f0] mb-2">
              You found the Easter egg.
            </p>
            <p className="text-[#f5f5f0]/60">
              Clearly you&apos;re as detail-oriented as I am. 👀
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
