"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // স্প্রিং অ্যানিমেশন কনফিগারেশন (এটি বাবল বা গ্লো ইফেক্টকে স্মুথ করবে)
  const cursorVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
    },
  };

  return (
    <>
      {/* গ্লোয়িং বাবল কার্সার */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-10 w-10 rounded-full bg-[#2DD3A8]/20 blur-md transition-opacity duration-300"
        variants={cursorVariants}
        animate="default"
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* মেইন ছোট পয়েন্টার ডট */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2.5 w-2.5 rounded-full bg-[#2DD3A8]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  );
}