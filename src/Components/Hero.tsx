"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const TECH_STACK = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma ORM",
];

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/WebdeveloperNahid", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/omarfaruk-nahid", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/omarfaruk.nahid.731385", label: "Facebook" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

// LEFT column lines: subtle slide in from the left (x: -30) + fade/rise.
const lineVariants: Variants = {
  hidden: { x: -30, y: 60, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Bottom bar (caption) — vertical only.
const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const socialContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

// Photo frame: fades/scales in, then holds a slow, gentle float.
const frameVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.35 },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden bg-white dark:bg-[#0A0A0A] lg:h-[180vh]"
    >
      <div className="relative min-h-screen w-full overflow-hidden lg:sticky lg:top-0 lg:h-screen">
        {/* Ambient background glow — a slow, quiet pulse instead of a static
            blob, so the page feels a little alive without being distracting.
            Softer opacity in light mode since it sits on a bright surface. */}
        <motion.div
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full bg-[#2DD3A8]/[0.07] blur-[140px] dark:bg-[#2DD3A8]/10"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[#2DD3A8]/[0.04] blur-[120px] dark:bg-[#2DD3A8]/5"
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 pb-8 pt-20 lg:px-10 lg:pb-0 lg:pt-28"
        >
          <div className="grid flex-1 grid-cols-1 items-center gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-0">
            {/* LEFT: Headline */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-2 max-w-xl lg:order-1"
            >
              <motion.span
                variants={lineVariants}
                className="mb-5 inline-block rounded-full border border-[#2DD3A8]/30 px-4 py-1.5 text-xs font-medium tracking-wide text-[#1FAE87] dark:text-[#2DD3A8]"
              >
                Full Stack Developer
              </motion.span>

              <h1 className="text-[9vw] font-extrabold leading-[1.08] text-gray-900 dark:text-white sm:text-[7vw] lg:text-[3.4vw]">
                <motion.span variants={lineVariants} className="block text-gray-500 dark:text-[#E8EAED]">
                  Hi, I&apos;m
                </motion.span>
                <motion.span variants={lineVariants} className="block">
                  Omar Faruk Nahid
                </motion.span>
                <motion.span
                  variants={lineVariants}
                  className="block text-transparent [-webkit-text-stroke:1.5px_#2DD3A8] lg:text-[2.6vw]"
                >
                  Next.js &amp; MERN Stack Developer
                </motion.span>
              </h1>

              <motion.p
                variants={lineVariants}
                className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600 dark:text-[#D7DADF] sm:text-base"
              >
                I build full-stack web apps with Next.js, React and Node.js —
                from MongoDB and PostgreSQL on the data layer to secure auth
                and payments — and use TypeScript throughout for code that
                stays reliable as it grows.
              </motion.p>

              <motion.div variants={lineVariants} className="mt-7 flex flex-wrap gap-2.5">
                {TECH_STACK.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="rounded-xl border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-gray-800 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-colors duration-200 hover:border-[#2DD3A8]/50 hover:text-[#1FAE87] dark:border-white/15 dark:bg-white/[0.06] dark:text-[#F1F3F5] dark:shadow-[0_2px_10px_rgba(0,0,0,0.25)] dark:hover:text-[#2DD3A8]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div variants={lineVariants} className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full bg-[#2DD3A8] px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Hire Me
                  <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:border-[#2DD3A8]/60 hover:text-[#1FAE87] active:scale-[0.98] dark:border-white/20 dark:text-white dark:hover:text-[#2DD3A8]"
                >
                  View Projects
                  <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1YmS1d4xV3B-aF0z2UiG3Q5cvUUgME6Y0"
                  className="group flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:border-[#2DD3A8]/60 hover:text-[#1FAE87] active:scale-[0.98] dark:border-white/20 dark:text-white dark:hover:text-[#2DD3A8]"
                >
                  Resume
                  <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT: Framed profile photo — square-cornered frame, not a circle,
                not a full-bleed background. Sits beside the text on desktop,
                stacks above it on mobile (order-1). */}
            <motion.div
              style={{ y: frameY }}
              variants={frameVariants}
              initial="hidden"
              animate="visible"
              className="order-1 mx-auto w-full max-w-[240px] sm:max-w-[340px] lg:order-2 lg:mx-0 lg:ml-auto lg:max-w-[420px]"
            >
              <div className="relative aspect-[4/5] w-full">
                {/* Frame body — static border, glow comes from the ambient
                    background blobs behind it, not from a moving ring. */}
                <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_30px_80px_-20px_rgba(45,211,168,0.2)] dark:border-white/10 dark:bg-[#0A0A0A] dark:shadow-[0_30px_80px_-20px_rgba(45,211,168,0.25)]">
                  {/* Replace /public/images/omar.png with your photo.
                      The image itself breathes gently — slow scale in/out —
                      instead of an outer moving frame. */}
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/images/omar.png"
                      alt="Omar Faruk Nahid — Full Stack Developer"
                      fill
                      priority
                      className="object-cover object-top"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent dark:from-[#0A0A0A]/70" />
                </div>

                {/* Floating chip: remote availability */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-2xl border border-black/10 bg-white/90 px-3 py-2 text-[11px] font-medium text-gray-800 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#101312]/90 dark:text-[#E8EAED] sm:-bottom-5 sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  <span className="h-2 w-2 rounded-full bg-[#2DD3A8]" />
                  Open to remote opportunities
                </motion.div>

                {/* Floating chip: freelance availability */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }}
                  className="absolute -right-2 -top-3 flex items-center gap-2 whitespace-nowrap rounded-2xl border border-black/10 bg-white/90 px-3 py-2 text-[11px] font-medium text-gray-800 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#101312]/90 dark:text-[#E8EAED] sm:-right-4 sm:-top-4 sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  <span className="h-2 w-2 rounded-full bg-[#2DD3A8]" />
                  Available for freelance
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar — caption + social icons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col gap-6 pb-12 pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-sm font-medium text-gray-600 dark:text-[#C7CBD1]">
              Omar Faruk Nahid{" "}
              <span className="text-[#1FAE87] dark:text-[#2DD3A8]">— Full Stack Developer</span>
            </p>

            <motion.div
              variants={socialContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={socialItemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-gray-600 backdrop-blur-sm transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#1FAE87] dark:border-white/15 dark:text-[#C7CBD1] dark:hover:text-[#2DD3A8]"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 lg:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-9 w-[1px] bg-gradient-to-b from-[#2DD3A8] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}