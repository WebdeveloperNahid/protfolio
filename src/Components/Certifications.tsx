"use client";

import { motion, type Variants } from "framer-motion";
import { HiOutlineDocumentCheck, HiArrowUpRight } from "react-icons/hi2";

interface Certification {
  title: string;
  platform: string;
  detail: string;
  link: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "AI Powered Web Development Bootcamp",
    platform: "Programming Hero — Batch 13",
    detail: "7-month MERN stack bootcamp covering full-stack web engineering, from fundamentals to production-ready projects.",
    link: "https://web.programming-hero.com/",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#2DD3A8]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[#2DD3A8]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Certifications & Courses
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
            Skill-Building &{" "}
            <span className="block text-transparent [-webkit-text-stroke:1.5px_#2DD3A8] sm:[-webkit-text-stroke:2px_#2DD3A8]">
              Professional Training.
            </span>
          </h2>
        </motion.div>

        {/* Certification Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-6"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition-colors duration-300 hover:border-[#2DD3A8]/40 sm:flex-row sm:items-start sm:p-7"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2DD3A8]/30 bg-[#0A0A0A] text-[#2DD3A8] transition-colors duration-300 group-hover:bg-[#2DD3A8]/10">
                <HiOutlineDocumentCheck size={22} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-[#2DD3A8]">
                  {cert.platform}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {cert.detail}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#2DD3A8]"
                >
                  Visit Program
                  <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}