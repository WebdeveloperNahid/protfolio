"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaMotorcycle } from "react-icons/fa";

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
      className="relative bg-white py-24 text-gray-900 dark:bg-[#0A0A0A] dark:text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#2DD3A8]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            About Me
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-6 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]">
              Driven by Code &amp; <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#2DD3A8]">
                Global Remote Ambitions.
              </span>
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              My curiosity for technology grew into a career path as a Full
              Stack Web Developer. I build with Next.js, React, TypeScript,
              Node.js and Express — backed by MongoDB and PostgreSQL on the
              data layer — and I&apos;m aiming to bring that stack to global
              remote teams.
            </p>
          </motion.div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-6 space-y-4">
            {ABOUT_CARDS.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                whileTap={{ scale: 0.99 }}
                className="group rounded-2xl border border-black/10 bg-black/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-[#2DD3A8]/50 hover:bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.05]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2DD3A8]/10 text-[#2DD3A8]"
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 sm:text-sm">
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