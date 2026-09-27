"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { HiArrowUpRight, HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { FiEye } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiFramer,
  SiJavascript,
} from "react-icons/si";

const ACCENT = "#2DD3A8";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.15,
    },
  },
};

const highlightContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const highlightItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const primarySkillContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.55 },
  },
};

const primarySkillItem: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const buttonContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.5 },
  },
};

const buttonItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stackTagContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.6 },
  },
};

const stackTagItem: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
];

// `mono: true` marks brand icons that are literally black/white logos
// (Next.js, Express.js) — these need a theme-aware color instead of a
// fixed hex, or they vanish in light mode.
const PRIMARY_SKILLS = [
  { name: "React.js", icon: SiReact, color: "#61DAFB", mono: false },
  { name: "Next.js", icon: SiNextdotjs, color: undefined, mono: true },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", mono: false },
  { name: "Express.js", icon: SiExpress, color: undefined, mono: true },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", mono: false },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", mono: false },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", mono: false },
  { name: "Framer Motion", icon: SiFramer, color: "#FF0055", mono: false },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-white py-24 text-gray-900 dark:bg-[#0A0A0A] dark:text-white lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2DD3A8]/[0.06] blur-[160px] dark:bg-[#2DD3A8]/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-[#2DD3A8]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Resume
          </span>
        </motion.div>

        {/* Heading */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Professional{" "}
            {/* Light mode: solid fill (outline was low-contrast on white).
                Dark mode: original transparent + stroke outline. */}
            <span className="text-[#0F8F6E] dark:text-transparent dark:[-webkit-text-stroke:2px_#2DD3A8]">
              Resume
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-md text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-400 sm:text-base lg:text-right"
          >
            A quick overview of my technical skills, projects, experience and
            professional journey. Feel free to view or download my resume
            anytime.
          </motion.p>
        </div>

        {/* Resume Card */}
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[30px] border border-black/10 bg-black/[0.015] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]"
        >
          {/* Top accent bar — consistent with the rest of the site */}
          <span className="absolute inset-x-0 top-0 z-10 h-[3px] bg-[#2DD3A8] opacity-50" />
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#2DD3A8]/10 blur-[120px]" />

          <div className="relative grid gap-10 p-8 lg:grid-cols-[1.3fr_.7fr] lg:items-stretch lg:p-12">
            {/* LEFT */}
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col"
            >
              <span className="inline-flex w-fit rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-[#128363] dark:text-[#2DD3A8]">
                Full Stack Developer
              </span>

              <h3 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Omar Faruk Nahid
              </h3>

              <p className="mt-5 max-w-xl font-medium leading-8 text-gray-700 dark:text-gray-400">
                Passionate Full Stack Web Developer specializing in modern
                JavaScript technologies including React, Next.js, Node.js,
                Express.js and MongoDB. I enjoy crafting beautiful, scalable and
                high-performance web applications with clean code and
                exceptional user experience.
              </p>

              {/* Highlights — Core Competencies + Education snapshot */}
              <motion.div
                variants={highlightContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-10 grid gap-4 sm:grid-cols-2"
              >
                <motion.div
                  variants={highlightItem}
                  whileHover={{ y: -4, borderColor: "rgba(45,211,168,0.5)", backgroundColor: "rgba(45,211,168,0.04)" }}
                  className="rounded-2xl border border-black/10 bg-black/[0.015] p-5 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <h4 className="mb-2 font-bold text-gray-900 dark:text-white">
                    Core Competencies
                  </h4>
                  <p className="text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
                    MERN Stack Development
                    <br />
                    Next.js Application Development
                    <br />
                    Authentication &amp; Authorization
                    <br />
                    Gemini API Integration
                  </p>
                </motion.div>

                <motion.div
                  variants={highlightItem}
                  whileHover={{ y: -4, borderColor: "rgba(45,211,168,0.5)", backgroundColor: "rgba(45,211,168,0.04)" }}
                  className="rounded-2xl border border-black/10 bg-black/[0.015] p-5 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <h4 className="font-bold text-gray-900 dark:text-white">Education</h4>
                    <span className="rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 px-2 py-0.5 text-[10px] font-bold text-[#128363] dark:text-[#2DD3A8]">
                      Ongoing
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
                    B.S.S (Honours) in Economics
                    <br />
                    New Govt. Degree College, Rajshahi
                    <br />
                    Session: 2023–2024
                  </p>
                </motion.div>
              </motion.div>

              {/* Primary Stack - headline skills only, full breakdown lives in the Skills section */}
              <motion.div
                variants={highlightItem}
                whileHover={{ borderColor: "rgba(45,211,168,0.5)" }}
                className="mt-4 flex-1 rounded-2xl border border-black/10 bg-black/[0.015] p-5 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="font-bold text-gray-900 dark:text-white">Primary Stack</h4>
                  <span className="text-xs font-medium text-gray-500">
                    See Skills section for full details
                  </span>
                </div>

                <motion.div
                  variants={primarySkillContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3"
                >
                  {PRIMARY_SKILLS.map(({ name, icon: Icon, color, mono }) => (
                    <motion.div
                      key={name}
                      variants={primarySkillItem}
                      whileHover={{
                        y: -3,
                        borderColor: "rgba(45,211,168,0.5)",
                        backgroundColor: "rgba(45,211,168,0.08)",
                      }}
                      className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 transition-colors dark:border-white/10 dark:bg-white/[0.02]"
                    >
                      <Icon
                        size={18}
                        style={mono ? undefined : { color }}
                        className={`shrink-0 ${mono ? "text-gray-900 dark:text-white" : ""}`}
                      />
                      <span className="text-xs font-bold text-gray-900 dark:text-white sm:text-sm">
                        {name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT — Profile ID Card, stretched to match left column height */}
            <motion.div
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex h-full flex-col justify-between gap-8"
            >
              <div className="rounded-3xl border border-black/10 bg-gray-50/80 p-6 dark:border-white/10 dark:bg-[#111111]/80 sm:p-7">
                {/* Top row: label + status dot */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[.18em] text-[#128363] dark:text-[#2DD3A8]">
                    Resume
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-3 w-3 rounded-full bg-[#2DD3A8] shadow-[0_0_20px_#2DD3A8]"
                  />
                </div>

                {/* Centered Profile Photo — square-cornered frame (not a
                    circle), with a slow breathing scale — matching the
                    Hero section's photo treatment. No rotating ring. */}
                <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56">
                  <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-[#2DD3A8]/20 via-transparent to-transparent blur-xl" />
                  <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-white bg-white dark:border-[#0A0A0A] dark:bg-[#0A0A0A]">
                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src="/images/omar.png"
                        alt="Omar Faruk Nahid"
                        fill
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Centered Name + Role */}
                <div className="mt-5 text-center">
                  <h4 className="text-lg font-extrabold text-gray-900 dark:text-white sm:text-xl">
                    Omar Faruk Nahid
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-[#128363] dark:text-[#2DD3A8]">
                    Full Stack Developer
                  </p>
                </div>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />

                {/* Stack as chips */}
                <div>
                  <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[.18em] text-gray-500">
                    Tech Stack
                  </p>
                  <motion.div
                    variants={stackTagContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-2"
                  >
                    {STACK.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={stackTagItem}
                        whileHover={{
                          scale: 1.08,
                          borderColor: "rgba(45,211,168,0.6)",
                        }}
                        className="rounded-full border border-[#2DD3A8]/25 bg-[#2DD3A8]/[0.08] px-3 py-1.5 text-xs font-bold text-gray-800 transition-colors dark:border-[#2DD3A8]/20 dark:bg-[#2DD3A8]/[0.09] dark:text-[#D7F5EC]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                variants={buttonContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col gap-4"
              >
                <motion.a
                  variants={buttonItem}
                  href="https://drive.google.com/file/d/1YmS1d4xV3B-aF0z2UiG3Q5cvUUgME6Y0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-3 rounded-full border-2 border-gray-300 px-6 py-4 font-bold text-gray-900 transition-colors duration-300 hover:border-[#2DD3A8] hover:text-[#128363] dark:border-white/20 dark:text-white dark:hover:border-[#2DD3A8] dark:hover:text-[#2DD3A8]"
                >
                  <FiEye size={20} />
                  View Resume
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>

                <motion.a
                  variants={buttonItem}
                  href="https://drive.google.com/uc?export=download&id=1YmS1d4xV3B-aF0z2UiG3Q5cvUUgME6Y0"
                  download="Omar_Faruk_Nahid_Resume.pdf"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px rgba(45,211,168,0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#2DD3A8] px-6 py-4 font-bold text-[#0A0A0A] shadow-[0_10px_25px_-8px_rgba(45,211,168,0.5)] transition-all duration-300"
                >
                  <HiOutlineDocumentArrowDown size={22} />
                  Download Resume
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}