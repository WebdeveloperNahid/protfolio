"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse position — updated directly via motion values (not React
  // state), so a mousemove never triggers a component re-render.
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Glow bubble: soft spring trail (this is the only element allowed to lag).
  const bubbleX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const bubbleY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  // Center each element on the cursor point (bubble is 40px, dot is 10px).
  // Using x/y (→ CSS transform) instead of left/top: transform is
  // GPU-composited and doesn't force layout recalculation every frame,
  // which is what was causing the choppy movement before.
  const bubbleOffsetX = useTransform(bubbleX, (x) => x - 20);
  const bubbleOffsetY = useTransform(bubbleY, (y) => y - 20);

  // Dot: NO spring — it tracks the real pointer position exactly, with
  // zero lag, so it always lines up with where the mouse actually is.
  const dotOffsetX = useTransform(mouseX, (x) => x - 5);
  const dotOffsetY = useTransform(mouseY, (y) => y - 5);

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
      {/* গ্লোয়িং বাবল কার্সার — একমাত্র এই এলিমেন্টটা সামান্য lag/trail করবে */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 rounded-full bg-[#2DD3A8]/20 blur-md"
        style={{ x: bubbleOffsetX, y: bubbleOffsetY, width: 40, height: 40 }}
        animate={{ scale: isHovered ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* মেইন পয়েন্টার ডট — আসল মাউস পজিশনের সাথে হুবহু, কোনো lag নেই */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 rounded-full"
        style={{ x: dotOffsetX, y: dotOffsetY, width: 10, height: 10 }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "#1FAE87" : "#2DD3A8",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
}