"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import {
  HiOutlineDocumentCheck,
  HiOutlineUsers,
  HiArrowUpRight,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import GridBackground from "./Gridbackground";

const ACCENT = "#2DD3A8";

interface Phase {
  title: string;
  period: string;
  description: string;
}

interface Certification {
  title: string;
  platform: string;
  batch?: string;
  validationId?: string;
  badge: string;
  period: string;
  detail?: string;
  // Optional stages inside one program (e.g. training → team project)
  phases?: Phase[];
  // Shows a small "team" visual in place of a certificate thumbnail
  teamSize?: number;
  project?: string;
  // Live project URL — shows a "View Live Project" button
  projectLink?: string;
  skills: string[];
  // Certificate thumbnail + verification link — optional,
  // because hands-on training (SCIC) has no certificate.
  link?: string;
  image?: string;
  type: "certificate" | "training";
}

// Oldest first — the timeline reads top to bottom in the order things happened.
const CERTIFICATIONS: Certification[] = [
  {
    type: "certificate",
    badge: "Certified course",
    title: "Complete Web Development Course with Programming Hero",
    platform: "Programming Hero",
    batch: "Batch 13",
    validationId: "WEB13-1730",
    period: "Jan 2026 – Jun 2026",
    detail:
      "6-month web development bootcamp covering the MERN stack and Next.js, with professional web engineering readiness training.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://web.programming-hero.com/verification?validationNumber=PHbatch-13WEB13-17301518",
    image: "/images/certificate.png",
  },
  {
    type: "training",
    badge: "Merit-selected training",
    title: "Special Training & Team Lead — SCIC Bootcamp",
    platform: "SCIC Bootcamp",
    batch: "EJP-13 Cohort",
    period: "Jul 2026 – Sep 2026",
    phases: [
      {
        title: "Special training program",
        period: "Jul 1 – Sep 30, 2026",
        description:
          "Selected for strong performance in the Programming Hero course. Learned TypeScript, PostgreSQL and Prisma ORM, including relational schema design.",
      },
      {
        title: "Team project: HandyHub",
        period: "Aug 23 – Sep 23, 2026",
        description:
          "Team Lead of a 6-member team building HandyHub, a local area service platform, with Next.js, Express and MongoDB on a fixed one-month deadline. Responsible for the Git workflow and pull request reviews.",
      },
    ],
    teamSize: 6,
    project: "HandyHub",
    projectLink: "https://handyhub-silk.vercel.app",
    image: "/images/handyhub.jpg",
    skills: [
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Schema Design",
      "Team Leadership",
      "Git & GitHub",
    ],
  },
];

/* ───────────────────────── Animation variants ───────────────────────── */

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 220, damping: 24 },
  },
};

// Timeline dot pops in just after its card starts to appear
const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 18,
      delay: 0.15,
    },
  },
};

// Accent bar on top of each card draws in from the left
const barVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: "easeOut" as const, delay: 0.2 },
  },
};

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// Phases: the small connecting line draws down, each phase slides in after it
const phasesVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.05 } },
};

const phaseLineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const phaseVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const phaseDotVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 18 },
  },
};

// Skill chips fade the row in, then pop in one by one
const chipsVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 320, damping: 22 },
  },
};

const TIMELINE_MASK =
  "[-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent)] [mask-image:linear-gradient(to_bottom,black_85%,transparent)]";

/* ───────────────────────────── Component ───────────────────────────── */

export default function Certifications() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // The green line fills as the visitor scrolls through the timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="certifications"
        className="relative overflow-hidden bg-white py-24 text-gray-900 dark:bg-[#0A0A0A] dark:text-white lg:py-32"
      >
        <GridBackground opacity={0.09} darkOpacity={0.04} size={56} />
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#2DD3A8]/[0.06] blur-[150px] dark:bg-[#2DD3A8]/5" />

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
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Certifications & Training
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
              {/* Light mode: solid fill (outline was low-contrast on white).
                  Dark mode: original transparent + stroke outline. */}
              <span className="block text-[#0F8F6E] dark:text-transparent sm:dark:[-webkit-text-stroke:2px_#2DD3A8] dark:[-webkit-text-stroke:1.5px_#2DD3A8]">
                Professional Training.
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative pl-8 sm:pl-10">
            {/* Track + scroll-driven progress line */}
            <div
              aria-hidden
              className={`absolute bottom-0 left-[5px] top-[34px] w-[2px] rounded-full bg-black/10 dark:bg-white/10 ${TIMELINE_MASK}`}
            >
              <motion.div
                style={{ scaleY: reduceMotion ? 1 : lineScale }}
                className="h-full w-full origin-top rounded-full bg-gradient-to-b from-[#2DD3A8] to-[#2DD3A8]/40"
              />
            </div>

            <motion.ol
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-col gap-8"
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.li
                  key={cert.title}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.span
                    aria-hidden
                    variants={dotVariants}
                    className="absolute -left-8 top-7 h-3 w-3 rounded-full border-2 border-[#2DD3A8] bg-white shadow-[0_0_0_4px_rgba(45,211,168,0.15)] dark:bg-[#0A0A0A] sm:-left-10"
                  />

                  <motion.div
                    whileHover={{
                      y: -6,
                      boxShadow: "0 20px 45px -18px rgba(45, 211, 168, 0.3)",
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.015] p-6 backdrop-blur-md transition-colors duration-300 hover:border-[#2DD3A8]/40 dark:border-white/10 dark:bg-white/[0.02] sm:p-7"
                  >
                    {/* Top accent bar — draws in on entry, brightens on hover */}
                    <motion.span
                      variants={barVariants}
                      className="absolute inset-x-0 top-0 h-[3px] origin-left opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ backgroundColor: ACCENT }}
                    />

                    <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                      {/* Preview thumbnail — the certificate, or a live-site
                          screenshot on the training card. Click opens the
                          verification page / live project. */}
                      {cert.image && (cert.link || cert.projectLink) && (
                        <motion.a
                          href={cert.link ?? cert.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="relative block aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:w-56"
                        >
                          <Image
                            src={cert.image}
                            alt={
                              cert.type === "certificate"
                                ? `${cert.title} — certificate`
                                : `${cert.project ?? cert.title} — live site preview`
                            }
                            fill
                            sizes="(max-width: 640px) 100vw, 224px"
                            className="object-cover"
                          />
                          {cert.teamSize && (
                            <span className="absolute bottom-2 left-2 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                              Team Lead, {cert.teamSize} members
                            </span>
                          )}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                            <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-lg">
                              {cert.link ? "View Full Size" : "Visit Live Site"}
                              <HiArrowUpRight size={14} />
                            </span>
                          </div>
                        </motion.a>
                      )}

                      {/* Content */}
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="min-w-0 flex-1"
                      >
                        <motion.div
                          variants={fieldVariants}
                          className="mb-3 flex items-center gap-3"
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 text-[#128363] dark:text-[#2DD3A8]">
                            {cert.type === "certificate" ? (
                              <HiOutlineDocumentCheck size={20} />
                            ) : (
                              <HiOutlineUsers size={20} />
                            )}
                          </span>
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                            {cert.badge}
                          </span>
                        </motion.div>

                        <motion.h3
                          variants={fieldVariants}
                          className="text-base font-extrabold leading-snug text-gray-900 dark:text-white sm:text-lg"
                        >
                          {cert.title}
                        </motion.h3>

                        <motion.div
                          variants={fieldVariants}
                          className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1"
                        >
                          <span className="text-sm font-semibold text-[#128363] dark:text-[#2DD3A8]">
                            {cert.platform}
                            {cert.batch ? ` — ${cert.batch}` : ""}
                          </span>
                          {cert.validationId && (
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                              ID: {cert.validationId}
                            </span>
                          )}
                        </motion.div>

                        <motion.div
                          variants={fieldVariants}
                          className="mt-2 flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400"
                        >
                          <HiOutlineCalendarDays size={14} />
                          {cert.period}
                        </motion.div>

                        {cert.detail && (
                          <motion.p
                            variants={fieldVariants}
                            className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                          >
                            {cert.detail}
                          </motion.p>
                        )}

                        {/* Phases — stages inside one program */}
                        {cert.phases && (
                          <motion.div
                            variants={phasesVariants}
                            className="relative mt-5 space-y-5 pl-4"
                          >
                            <motion.span
                              aria-hidden
                              variants={phaseLineVariants}
                              className="absolute bottom-1 left-0 top-1 w-px origin-top bg-[#2DD3A8]/40"
                            />
                            {cert.phases.map((phase) => (
                              <motion.div
                                key={phase.title}
                                variants={phaseVariants}
                                className="relative"
                              >
                                <motion.span
                                  aria-hidden
                                  variants={phaseDotVariants}
                                  className="absolute -left-[21px] top-[7px] h-2 w-2 rounded-full bg-[#2DD3A8]"
                                />
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                                    {phase.title}
                                  </h4>
                                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    {phase.period}
                                  </span>
                                </div>
                                <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                  {phase.description}
                                </p>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}

                        {/* Skills */}
                        <motion.ul
                          variants={chipsVariants}
                          className="mt-5 flex flex-wrap gap-2"
                          aria-label={`Skills from ${cert.platform}`}
                        >
                          {cert.skills.map((skill) => (
                            <motion.li
                              key={skill}
                              variants={chipVariants}
                              whileHover={{ y: -2 }}
                              className="rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 px-3 py-1 text-xs font-medium text-[#0F8F6E] dark:text-[#2DD3A8]"
                            >
                              {skill}
                            </motion.li>
                          ))}
                        </motion.ul>

                        {(cert.link || cert.projectLink) && (
                          <motion.div
                            variants={fieldVariants}
                            className="mt-5 flex flex-wrap gap-3"
                          >
                            {cert.link && (
                              <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 3 }}
                                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#128363] dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:text-[#2DD3A8]"
                              >
                                Verify Certificate
                                <HiArrowUpRight size={14} />
                              </motion.a>
                            )}
                            {cert.projectLink && (
                              <motion.a
                                href={cert.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${cert.project ?? "project"} live (opens in a new tab)`}
                                whileHover={{ x: 3 }}
                                className="inline-flex items-center gap-1.5 rounded-full border border-[#2DD3A8]/40 bg-[#2DD3A8]/10 px-4 py-2 text-sm font-semibold text-[#0F8F6E] transition-colors duration-200 hover:border-[#2DD3A8]/70 hover:bg-[#2DD3A8]/20 dark:text-[#2DD3A8]"
                              >
                                View Live Project
                                <HiArrowUpRight size={14} />
                              </motion.a>
                            )}
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}