"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[9998]"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #7dd3fc, #c4b5fd, #f9a8d4)",
      }}
    />
  );
}
