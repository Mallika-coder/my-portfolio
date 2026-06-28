"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const name = "Mallika Verma";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#faf8ff] flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Morphing blob behind text */}
          <motion.div
            className="absolute w-64 h-64 bg-gradient-to-br from-sky-200/40 via-purple-200/40 to-pink-200/40 blob"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative flex gap-[1px]">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold text-gradient"
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="mt-4 text-sm text-[#1a1035]/40 font-[var(--font-mono)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            writer who codes
          </motion.p>

          <motion.div
            className="absolute bottom-16 w-48 h-1 rounded-full overflow-hidden bg-purple-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
