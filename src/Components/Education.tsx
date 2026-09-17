"use client";

import { motion, type Variants } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";
import GridBackground from "./Gridbackground";

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

const tagContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <section
      id="education"
      className="relative overflow-hidden bg-white py-24 text-gray-900 transition-colors duration-300 dark:bg-[#0A0A0A] dark:text-white lg:py-32"
    >
      {/* Dynamic Grid Background with 32px perfect squares */}
      {/* <GridBackground opacity={0.09} darkOpacity={0.04} size={56} /> */}

      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#2DD3A8]/[0.05] blur-[150px] dark:bg-[#2DD3A8]/5" />

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
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
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
            <span className="block text-[#0F8F6E] dark:text-transparent dark:[-webkit-text-stroke:2px_#2DD3A8]">
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
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ originY: 0 }}
            className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-[#2DD3A8]/40 via-gray-200 to-transparent dark:via-white/10"
          />

          <div className="flex flex-col gap-6">
            {EDUCATION.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                whileHover={{
                  x: 6,
                  boxShadow: "0 10px 30px -10px rgba(45, 211, 168, 0.2)",
                }}
                className="group relative flex gap-5 rounded-2xl border border-black/10 bg-black/[0.015] p-6 backdrop-blur-md transition-all duration-300 hover:border-[#2DD3A8]/50 hover:bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-[#2DD3A8]/40 dark:hover:bg-white/[0.045] sm:p-7"
              >
                {/* Icon node */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2DD3A8]/40 bg-white text-[#0F8F6E] shadow-sm transition-colors duration-300 group-hover:bg-[#2DD3A8]/10 dark:bg-[#0A0A0A] dark:text-[#2DD3A8]"
                >
                  <HiAcademicCap size={22} />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">
                      {edu.degree}
                    </h3>
                    {edu.status === "running" && (
                      <motion.span
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="rounded-full border border-[#2DD3A8]/40 bg-[#2DD3A8]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0F8F6E] dark:text-[#2DD3A8]"
                      >
                        Running
                      </motion.span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
                    {edu.institution}
                  </p>

                  <motion.div
                    variants={tagContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    <motion.span
                      variants={tagVariants}
                      whileHover={{
                        scale: 1.04,
                        borderColor: "rgba(45, 211, 168, 0.4)",
                      }}
                      className="rounded-full border border-black/10 bg-black/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300"
                    >
                      {edu.duration}
                    </motion.span>
                    <motion.span
                      variants={tagVariants}
                      whileHover={{
                        scale: 1.04,
                        borderColor: "rgba(45, 211, 168, 0.4)",
                      }}
                      className="rounded-full border border-black/10 bg-black/[0.03] px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300"
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