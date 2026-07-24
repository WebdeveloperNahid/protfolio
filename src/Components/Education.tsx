"use client";

import { motion, type Variants } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";

interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  result: string;
  status: "running" | "completed";
}

const EDUCATION: EducationEntry[] = [
  {
    degree: "B.S.S in Economics",
    institution: "Rajshahi New Government Degree College",
    duration: "2024 — Running",
    result: "Running",
    status: "running",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Rajshahi Shaheed Buddhijibi College, Rajshahi",
    duration: "Passed 2023",
    result: "GPA 4.67 / 5.00",
    status: "completed",
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "Paranpur High School",
    duration: "Passed 2021",
    result: "GPA 5.00 / 5.00",
    status: "completed",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Tag গুলোর জন্য আলাদা stagger — card ঢোকার পর ধাপে ধাপে আসবে
const tagContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#2DD3A8]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-6 flex items-center gap-3"
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-[#2DD3A8]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Academic Background
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold leading-[1.25] tracking-tight sm:text-4xl lg:text-5xl">
            Education &{" "}
            <span className="block text-transparent [-webkit-text-stroke:1.5px_#2DD3A8] sm:[-webkit-text-stroke:2px_#2DD3A8]">
              Qualifications.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Vertical connecting line - scroll e draw hoye ashbe */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ originY: 0 }}
            className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-[#2DD3A8]/40 via-white/10 to-transparent"
          />

          <div className="flex flex-col gap-6">
            {EDUCATION.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                whileHover={{
                  x: 6,
                  boxShadow: "0 0 25px rgba(45, 211, 168, 0.12)",
                }}
                className="group relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-colors duration-300 hover:border-[#2DD3A8]/40 sm:p-7"
              >
                {/* Icon node */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2DD3A8]/30 bg-[#0A0A0A] text-[#2DD3A8] transition-colors duration-300 group-hover:bg-[#2DD3A8]/10"
                >
                  <HiAcademicCap size={20} />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      {edu.degree}
                    </h3>
                    {edu.status === "running" && (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-full border border-[#2DD3A8]/40 bg-[#2DD3A8]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#2DD3A8]"
                      >
                        Running
                      </motion.span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm text-gray-400">{edu.institution}</p>

                  <motion.div
                    variants={tagContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    <motion.span
                      variants={tagVariants}
                      whileHover={{ scale: 1.05, borderColor: "rgba(45, 211, 168, 0.4)" }}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300"
                    >
                      {edu.duration}
                    </motion.span>
                    <motion.span
                      variants={tagVariants}
                      whileHover={{ scale: 1.05, borderColor: "rgba(45, 211, 168, 0.4)" }}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-300"
                    >
                      {edu.result}
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}