"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, MotionConfig, type Variants } from "framer-motion";
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowUpRight,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineCube,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "@/data/projects";
import GridBackground from "@/components/Gridbackground";

const EASE = [0.22, 1, 0.36, 1] as const;

// `custom` = delay in seconds, so every block can stagger without extra variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

const chipsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 320, damping: 22 },
  },
};

/* Round accent icon used in every card header (same look as Certifications) */
function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 text-[#128363] dark:text-[#2DD3A8]">
      {children}
    </span>
  );
}

function InfoCard({
  icon,
  title,
  children,
  className = "",
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-black/10 bg-black/[0.015] p-6 transition-colors duration-300 hover:border-[#2DD3A8]/40 dark:border-white/10 dark:bg-white/[0.03] sm:p-7 ${className}`}
    >
      <div className="flex items-center gap-3">
        <IconTile>{icon}</IconTile>
        <h3 className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center text-gray-900 dark:bg-[#0A0A0A] dark:text-white">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="max-w-sm text-sm text-gray-600 dark:text-gray-400">
          This project doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-[#2DD3A8]/60 px-5 py-2.5 text-sm font-semibold text-[#0F8F6E] transition-colors duration-200 hover:bg-[#2DD3A8]/10 dark:text-[#2DD3A8]"
        >
          <HiArrowLeft /> Back to Projects
        </Link>
      </section>
    );
  }

  // Next project (wraps around) for the navigation card at the bottom
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject =
    PROJECTS.length > 1 ? PROJECTS[(currentIndex + 1) % PROJECTS.length] : null;

  return (
    <MotionConfig reducedMotion="user">
      {/* overflow-x-clip (not overflow-hidden) so the sticky sidebar still works */}
      <section className="relative overflow-x-clip bg-white pb-24 pt-32 text-gray-900 dark:bg-[#0A0A0A] dark:text-white lg:pt-40">
        <GridBackground opacity={0.09} darkOpacity={0.04} size={56} />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#2DD3A8]/[0.08] blur-[150px] dark:bg-[#2DD3A8]/5" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
          {/* Back link */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link
              href="/#projects"
              className="group mb-10 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:border-[#2DD3A8]/50 hover:text-[#0F8F6E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD3A8]/60 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:text-[#2DD3A8]"
            >
              <HiArrowLeft className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Category + Title */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8F6E] dark:text-[#2DD3A8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2DD3A8]" />
              {project.category}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {project.name}
            </h1>
          </motion.div>

          {/* Cover image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="relative mt-10 h-64 w-full overflow-hidden rounded-2xl border border-black/10 bg-gray-100 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_30px_60px_-30px_rgba(45,211,168,0.18)] sm:h-96 lg:h-[480px]"
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent dark:from-[#0A0A0A]/40" />
          </motion.div>

          {/* Live + GitHub (client only) buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.3}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#2DD3A8] px-6 py-3 text-sm font-semibold text-[#0A0A0A] shadow-[0_10px_30px_-12px_rgba(45,211,168,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3FE0B6] hover:shadow-[0_16px_36px_-12px_rgba(45,211,168,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD3A8] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-0 dark:focus-visible:ring-offset-[#0A0A0A]"
            >
              Live Project
              <span className="sr-only">(opens in a new tab)</span>
              <HiArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2DD3A8]/60 hover:text-[#0F8F6E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD3A8]/60 active:translate-y-0 dark:border-white/20 dark:bg-white/[0.03] dark:text-white dark:shadow-none dark:hover:text-[#2DD3A8]"
            >
              <FaGithub size={16} />
              GitHub Repository (Client)
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </motion.div>

          {/* Content grid: description + challenges + improvements | tech stack sidebar */}
          <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.15 }}
              className="lg:col-span-2"
            >
              {/* Brief description */}
              <h2 className="flex items-center gap-3 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                <span className="h-5 w-1 rounded-full bg-[#2DD3A8]" />
                Overview
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                {project.description}
              </p>

              {/* Challenges faced */}
              <InfoCard
                className="mt-10"
                icon={<HiOutlineLightBulb size={20} />}
                title="Challenges Faced"
              >
                {project.challenges}
              </InfoCard>

              {/* Future improvements */}
              <InfoCard
                className="mt-6"
                icon={<HiOutlineRocketLaunch size={20} />}
                title="Potential Improvements & Future Plans"
              >
                {project.improvements}
              </InfoCard>
            </motion.div>

            {/* Tech stack sidebar — stays in view while reading on desktop */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="rounded-2xl border border-black/10 bg-black/[0.015] p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-7 lg:sticky lg:top-28">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <IconTile>
                      <HiOutlineCube size={20} />
                    </IconTile>
                    <h2 className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">
                      Main Tech Stack
                    </h2>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 px-2.5 py-1 text-xs font-semibold text-[#0F8F6E] dark:text-[#2DD3A8]">
                    {project.techStack.length} tools
                  </span>
                </div>

                <motion.ul
                  variants={chipsContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  aria-label="Tech stack"
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.techStack.map((tech) => (
                    <motion.li
                      key={tech}
                      variants={chipVariants}
                      whileHover={{ y: -2 }}
                      className="inline-flex cursor-default items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-colors duration-200 hover:border-[#2DD3A8]/50 hover:text-[#0F8F6E] dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300 dark:shadow-none dark:hover:text-[#2DD3A8]"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-[#2DD3A8]"
                      />
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.aside>
          </div>

          {/* Next project */}
          {nextProject && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="mt-20"
            >
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-black/10 bg-black/[0.015] p-6 transition-all duration-300 hover:border-[#2DD3A8]/40 hover:shadow-[0_20px_45px_-18px_rgba(45,211,168,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD3A8]/60 dark:border-white/10 dark:bg-white/[0.02] dark:hover:shadow-[0_0_35px_rgba(45,211,168,0.12)] sm:p-8"
              >
                <div className="min-w-0">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Next project
                  </span>
                  <p className="mt-1 truncate text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-[#0F8F6E] dark:text-white dark:group-hover:text-[#2DD3A8] sm:text-2xl">
                    {nextProject.name}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2DD3A8] text-lg text-[#0A0A0A] transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-[0_0_20px_rgba(45,211,168,0.5)]">
                  <HiArrowRight />
                </span>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </MotionConfig>
  );
}