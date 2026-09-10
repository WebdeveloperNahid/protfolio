"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Avoid hydration mismatch: next-themes only knows the real theme
  // after mount, since it reads localStorage on the client.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Reserve the same footprint so the navbar doesn't jump once mounted.
    return <div className="h-10 w-10" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-gray-700 transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#2DD3A8] dark:border-white/15 dark:text-gray-300"
    >
      {isDark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
    </button>
  );
}