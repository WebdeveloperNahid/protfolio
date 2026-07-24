"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { PROJECTS } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#2DD3A8]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header: label + big split heading (Maxel style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[#2DD3A8]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Selected Projects
          </span>
        </motion.div>

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Crafting Scalable{" "}
            <span className="text-transparent [-webkit-text-stroke:1.5px_#2DD3A8] sm:[-webkit-text-stroke:2px_#2DD3A8]">
              Digital
            </span>{" "}
            Products That Perform
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15 }}
            className="max-w-sm text-sm leading-relaxed text-gray-400 sm:text-base lg:text-right"
          >
            Each project reflects a strategic approach to problem solving and
            user experience — built to be fast, scalable and reliable.
          </motion.p>
        </div>

        {/* Project cards grid — offset second column like Maxel's masonry feel */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={index % 2 === 1 ? "lg:mt-16" : ""}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-[#2DD3A8]/40"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden sm:h-80">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />

                  {/* Category chip */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#0A0A0A]/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>

                  {/* Floating arrow button */}
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#2DD3A8] text-lg text-[#0A0A0A] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                    <HiArrowUpRight />
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-[#2DD3A8] sm:text-2xl">
                    {project.name}
                  </h3>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 transition-colors duration-200 group-hover:text-[#2DD3A8]">
                    View Details
                    <HiArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}