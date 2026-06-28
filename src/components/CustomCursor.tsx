"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<"default" | "link" | "project">("default");
  const trailRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      trailRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.dataset.cursor === "project" || target.closest("[data-cursor='project']")) {
        setCursorVariant("project");
        setIsHovering(true);
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorVariant("link");
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorVariant("default");
    };
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          width: cursorVariant === "project" ? 60 : isHovering ? 8 : 10,
          height: cursorVariant === "project" ? 60 : isHovering ? 8 : 10,
          backgroundColor: cursorVariant === "project"
            ? "rgba(196, 181, 253, 0.2)"
            : isHovering
            ? "rgba(249, 168, 212, 0.8)"
            : "rgba(26, 16, 53, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30, mass: 0.3 }}
        style={{ mixBlendMode: cursorVariant === "project" ? "normal" : "normal" }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2"
        animate={{
          x: position.x - (isHovering ? 24 : 18),
          y: position.y - (isHovering ? 24 : 18),
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          borderColor: cursorVariant === "project"
            ? "rgba(125, 211, 252, 0.6)"
            : isHovering
            ? "rgba(196, 181, 253, 0.6)"
            : "rgba(26, 16, 53, 0.2)",
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />
      {/* Project label */}
      {cursorVariant === "project" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] text-xs font-semibold text-[#1a1035]/70"
          animate={{ x: position.x - 12, y: position.y - 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          View
        </motion.div>
      )}
    </>
  );
}
