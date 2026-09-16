"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaMotorcycle } from "react-icons/fa";

const ACCENT = "#2DD3A8";

const ABOUT_CARDS = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Development",
    desc: "Comfortable across the stack — from responsive, accessible frontends to secure, scalable backends. Clean code and a smooth user experience are always the goal.",
  },
  {
    icon: FaRocket,
    title: "Continuous Learning",
    desc: "Every project is a chance to grow. I stay current with modern tools and enjoy solving complex, real-world problems.",
  },
  {
    icon: FaMotorcycle,
    title: "Beyond the Code",
    desc: "Outside of programming, I explore new places and go on long bike rides — it keeps my thinking fresh and creative.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 text-gray-900 dark:bg-[#0A0A0A] dark:text-white lg:py-32"
    >
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[420px] w-[420px] rounded-full bg-[#2DD3A8]/[0.05] blur-[140px] dark:bg-[#2DD3A8]/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 flex items-center gap-3">
          <motion.span
            className="h-2 w-2 rounded-full bg-[#2DD3A8]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            About Me
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:sticky lg:top-32 lg:col-span-6"
          >
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              Driven by Code &amp; <br />
              <span className="text-[#0F8F6E] dark:text-transparent dark:[-webkit-text-stroke:2px_#2DD3A8]">
                Global Remote Ambitions.
              </span>
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
              My curiosity for technology grew into a career path as a Full
              Stack Web Developer. I build with Next.js, React, TypeScript,
              Node.js and Express — backed by MongoDB and PostgreSQL on the
              data layer — and I&apos;m aiming to bring that stack to global
              remote teams.
            </p>
          </motion.div>

          {/* Right Column: Cards */}
          <div className="space-y-4 lg:col-span-6">
            {ABOUT_CARDS.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                  delay: idx * 0.12,
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px -18px rgba(45, 211, 168, 0.35)",
                }}
                whileTap={{ scale: 0.99 }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.015] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#2DD3A8]/50 hover:bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.045]"
              >
                {/* Left accent rail — quiet by default, brightens on hover.
                    A single, consistent brand mark rather than a different
                    hue per card. */}
                <span
                  className="absolute inset-y-0 left-0 w-[3px] opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: ACCENT }}
                />

                <div className="relative mb-3 flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2DD3A8]/10 text-[#2DD3A8]"
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="relative text-[13px] leading-relaxed text-gray-700 dark:text-gray-300 sm:text-sm">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}