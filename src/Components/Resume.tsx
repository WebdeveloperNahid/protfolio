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
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 },
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

// Headline skills only — full breakdown lives in the Skills section
const PRIMARY_SKILLS = [
  
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Framer Motion", icon: SiFramer, color: "#FF0055" },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2DD3A8]/5 blur-[160px]" />

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
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
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
            <span className="text-transparent [-webkit-text-stroke:2px_#2DD3A8]">
              Resume
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-md text-sm leading-relaxed text-gray-400 sm:text-base lg:text-right"
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
          className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          {/* Decorative Glow */}
          <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#2DD3A8]/10 blur-[120px]" />

          <div className="relative grid gap-10 p-8 lg:grid-cols-[1.3fr_.7fr] lg:items-stretch lg:p-12">
            {/* LEFT */}
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col"
            >
              <span className="inline-flex w-fit rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-[#2DD3A8]">
                Full Stack Developer
              </span>

              <h3 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                Omar Faruk Nahid
              </h3>

              <p className="mt-5 max-w-xl text-gray-400 leading-8">
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
                  whileHover={{ y: -4, borderColor: "rgba(45,211,168,0.4)" }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300"
                >
                  <h4 className="mb-2 font-semibold text-white">
                    Core Competencies
                  </h4>
                  <p className="text-sm leading-6 text-gray-400">
                    MERN Stack Development
                    <br />
                    Next.js Application Development
                    <br />
                    Authentication & Authorization
                    <br />
                    Gemini API Integration
                  </p>
                </motion.div>

                <motion.div
                  variants={highlightItem}
                  whileHover={{ y: -4, borderColor: "rgba(45,211,168,0.4)" }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <h4 className="font-semibold text-white">Education</h4>
                    <span className="rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 px-2 py-0.5 text-[10px] font-medium text-[#2DD3A8]">
                      Ongoing
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-gray-400">
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
                whileHover={{ borderColor: "rgba(45,211,168,0.4)" }}
                className="mt-4 flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="font-semibold text-white">Primary Stack</h4>
                  <span className="text-xs text-gray-500">
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
                  {PRIMARY_SKILLS.map(({ name, icon: Icon, color }) => (
                    <motion.div
                      key={name}
                      variants={primarySkillItem}
                      whileHover={{
                        y: -3,
                        borderColor: "rgba(45,211,168,0.5)",
                        backgroundColor: "rgba(45,211,168,0.05)",
                      }}
                      className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3 transition-colors"
                    >
                      <Icon size={18} style={{ color }} className="shrink-0" />
                      <span className="text-xs font-semibold text-white sm:text-sm">
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
              <div className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6 sm:p-7">
                {/* Top row: label + status dot */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[.18em] text-[#2DD3A8]">
                    Resume
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-3 w-3 rounded-full bg-[#2DD3A8] shadow-[0_0_20px_#2DD3A8]"
                  />
                </div>

                {/* Centered Profile Photo — always-on continuous animation */}
                <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 rounded-2xl"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #2DD3A8, transparent 30%, transparent 70%, #2DD3A8)",
                    }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#0A0A0A] bg-[#0A0A0A]"
                  >
                    <Image
                      src="/images/profile.png"
                      alt="Omar Faruk Nahid"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Centered Name + Role */}
                <div className="mt-5 text-center">
                  <h4 className="text-lg font-extrabold text-white sm:text-xl">
                    Omar Faruk Nahid
                  </h4>
                  <p className="mt-1 text-sm font-medium text-[#2DD3A8]">
                    Full Stack Developer
                  </p>
                </div>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Stack as chips */}
                <div>
                  <p className="mb-3 text-center text-xs uppercase tracking-[.18em] text-gray-500">
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
                          borderColor: "rgba(45,211,168,0.5)",
                          color: "#2DD3A8",
                        }}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors"
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
                  href="https://drive.google.com/file/d/19ndAv7AV0B5CP54uOkR1dSQ-pNcwajl6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-[#2DD3A8] hover:text-[#2DD3A8]"
                >
                  <FiEye size={20} />
                  View Resume
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>

                <motion.a
                  variants={buttonItem}
                  href="https://docs.google.com/document/d/1EbHVMgPrHmiZM9r8hguX7zfU43oUh0dBOaaos0YsdZc/export?format=pdf"

                 
                  download
                  whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(45,211,168,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#2DD3A8] px-6 py-4 font-semibold text-[#0A0A0A] transition-all duration-300"
                >
                  <HiOutlineDocumentArrowDown size={22} />
                  Download Resume
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>

                <motion.p
                  variants={buttonItem}
                  className="text-center text-xs leading-6 text-gray-500"
                >
                  * Currently using a demo resume.
                  <br />
                  Replace{" "}
                  <span className="text-[#2DD3A8] font-medium">
                    /public/resume.pdf
                  </span>
                  <br />
                  with your own resume later.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}