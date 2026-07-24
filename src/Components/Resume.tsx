"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { HiArrowUpRight, HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { FiEye } from "react-icons/fi";

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
            >
              <span className="inline-flex rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-[#2DD3A8]">
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

              {/* Highlights */}
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
                  <h4 className="mb-2 font-semibold text-white">Experience</h4>
                  <p className="text-sm text-gray-400">
                    MERN Stack Development
                    <br />
                    REST API
                    <br />
                    Responsive UI
                  </p>
                </motion.div>

                <motion.div
                  variants={highlightItem}
                  whileHover={{ y: -4, borderColor: "rgba(45,211,168,0.4)" }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300"
                >
                  <h4 className="mb-2 font-semibold text-white">
                    Technologies
                  </h4>
                  <p className="text-sm text-gray-400">
                    React
                    <br />
                    Next.js
                    <br />
                    Node.js
                    <br />
                    MongoDB
                  </p>
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

                {/* Centered Profile Photo — square frame, always-on animated ring */}
                <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28">
                  {/* Rotating glow ring behind photo - continuous */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1.5 rounded-2xl"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #2DD3A8, transparent 30%, transparent 70%, #2DD3A8)",
                    }}
                  />
                  {/* Breathing scale wrapper */}
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
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
                <div className="mt-4 text-center">
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

              {/* CTA Buttons — pushed to bottom via justify-between on parent */}
              <motion.div
                variants={buttonContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col gap-4"
              >
                <motion.a
                  variants={buttonItem}
                  href="https://docs.google.com/document/d/1wROd_zAldT-3d_HefJSvEWuClpILDDHtkUf4Fkdw4xc/view?usp=sharing"
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
                  href="https://docs.google.com/document/d/1wROd_zAldT-3d_HefJSvEWuClpILDDHtkUf4Fkdw4xc/export?format=pdf"
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