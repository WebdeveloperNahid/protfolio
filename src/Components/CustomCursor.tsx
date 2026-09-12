"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse position — updated directly via motion values, NOT React state,
  // so a mousemove never triggers a component re-render. This is the fix:
  // without it, every pixel of mouse movement re-rendered this whole
  // component, which got visibly janky once Lenis added its own per-frame work.
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Two springs with different stiffness for the two-layer trailing effect
  // (slow glow bubble, snappier dot) — same feel as before, just off the
  // React render cycle.
  const bubbleX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const bubbleY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });
  const dotX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  // Center each element on the cursor point (bubble is 40px, dot is 10px).
  const bubbleLeft = useTransform(bubbleX, (x) => x - 20);
  const bubbleTop = useTransform(bubbleY, (y) => y - 20);
  const dotLeft = useTransform(dotX, (x) => x - 5);
  const dotTop = useTransform(dotY, (y) => y - 5);

  useEffect(() => {
    // Skip entirely on touch devices — there's no mouse to follow.
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsTouchDevice(!hasFinePointer);
    if (!hasFinePointer) return;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(INTERACTIVE_SELECTOR)) setIsHovered(true);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(INTERACTIVE_SELECTOR)) setIsHovered(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* গ্লোয়িং বাবল কার্সার — লিংক/বাটনে হোভার করলে একটু বড় হয়ে যাবে */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-[#2DD3A8]/20 blur-md"
        style={{ left: bubbleLeft, top: bubbleTop, width: 40, height: 40 }}
        animate={{ scale: isHovered ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* মেইন ছোট পয়েন্টার ডট — হোভার করলে হালকা বড় ও রঙ পরিবর্তন */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
        style={{ left: dotLeft, top: dotTop, width: 10, height: 10 }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "#1FAE87" : "#2DD3A8",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
}