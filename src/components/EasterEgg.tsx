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
          spread: 120,
          origin: { y: 0.5 },
          colors: ["#7dd3fc", "#c4b5fd", "#f9a8d4", "#6ee7b7", "#fda4af"],
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
          className="fixed inset-0 z-[300] flex items-center justify-center bg-white/60 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowMessage(false)}
        >
          <motion.div
            className="glass-strong rounded-3xl p-10 max-w-md mx-4 text-center shadow-2xl shadow-purple-100/30"
            initial={{ scale: 0.5, opacity: 0, rotateY: -15 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <p className="text-2xl font-[var(--font-playfair)] font-bold text-[#1a1035] mb-3">
              You found the Easter egg.
            </p>
            <p className="text-[#1a1035]/60">
              Clearly you&apos;re as detail-oriented as I am. 👀
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
