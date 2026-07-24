"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { HiArrowLeft, HiArrowUpRight, HiOutlineLightBulb, HiOutlineRocketLaunch, HiOutlineCube } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#1A1A1A] px-6 text-center text-white">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link
          href="/#projects"
          className="flex items-center gap-2 rounded-full border border-[#2DD3A8]/60 px-5 py-2.5 text-sm font-semibold text-[#2DD3A8] hover:bg-[#2DD3A8]/10"
        >
          <HiArrowLeft /> Back to Projects
        </Link>
      </section>
    );
  }

  return (
    // Same #1A1A1A background as the Projects section for a consistent feel
    <section className="relative overflow-hidden bg-[#1A1A1A] pb-24 pt-32 text-white lg:pt-40">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#2DD3A8]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        {/* Back link */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-[#2DD3A8]"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </motion.div>

        {/* Category + Title */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}>
          <span className="rounded-full border border-[#2DD3A8]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#2DD3A8]">
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
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 h-64 w-full overflow-hidden rounded-2xl border border-white/10 sm:h-96 lg:h-[480px]"
        >
          <Image src={project.image} alt={project.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent" />
        </motion.div>

        {/* Live + GitHub (client only) buttons */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-[#2DD3A8] px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-transform duration-200 hover:scale-[1.03]"
          >
            Live Project
            <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#2DD3A8]"
          >
            <FaGithub size={16} />
            GitHub Repository (Client)
          </a>
        </motion.div>

        {/* Content grid: description + challenges + improvements | tech stack sidebar */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            {/* Brief description */}
            <h2 className="text-lg font-bold text-white sm:text-xl">Overview</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              {project.description}
            </p>

            {/* Challenges faced */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <HiOutlineLightBulb className="text-[#2DD3A8]" size={20} />
                <h3 className="text-base font-bold text-white sm:text-lg">Challenges Faced</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {project.challenges}
              </p>
            </div>

            {/* Future improvements */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <HiOutlineRocketLaunch className="text-[#2DD3A8]" size={20} />
                <h3 className="text-base font-bold text-white sm:text-lg">
                  Potential Improvements &amp; Future Plans
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {project.improvements}
              </p>
            </div>
          </motion.div>

          {/* Tech stack sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <HiOutlineCube className="text-[#2DD3A8]" size={20} />
                <h2 className="text-base font-bold text-white sm:text-lg">Main Tech Stack</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}