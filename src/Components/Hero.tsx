"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
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

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

// LEFT column lines: subtle slide in from the left + fade/rise.
const lineVariants: Variants = {
  hidden: { x: -24, y: 40, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Bottom bar (caption) — vertical only.
const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
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

// Photo frame: fades/scales in once on mount, then holds a slow, gentle float.
const frameVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: 0.35 },
  },
};

// Status chips (remote / freelance): soft entrance + a continuing
// breathing glow so they read as "live" badges, not static labels.
const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-[#0A0A0A]"
    >
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
      {/* Faint grid texture — gives the hero a bit of engineered structure
          without competing with the type. Barely visible, adds depth. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "#2DD3A8",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-28 pt-24 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="grid grid-cols-1 items-center gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-0">
          {/* LEFT: Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 max-w-xl lg:order-1"
          >
            <motion.span
              variants={lineVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/[0.06] px-4 py-1.5 text-[13px] font-medium text-[#0F8F6E] dark:bg-[#2DD3A8]/10 dark:text-[#2DD3A8]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2DD3A8] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2DD3A8]" />
              </span>
              Full Stack Developer
            </motion.span>

            <h1 className="font-extrabold leading-[1.1] tracking-[-0.02em] text-gray-900 dark:text-white [font-size:clamp(2.25rem,7vw,3.75rem)]">
              <motion.span
                variants={lineVariants}
                className="block text-[0.5em] font-semibold text-gray-500 dark:text-[#9AA0A6]"
              >
                Hi, I&apos;m
              </motion.span>
              <motion.span variants={lineVariants} className="block">
                Omar Faruk Nahid
              </motion.span>
              {/* Light mode: solid, dark-green fill — a light outline on a
                  white background was low-contrast and hard to read.
                  Dark mode: transparent fill + stroke outline. */}
              <motion.span
                variants={lineVariants}
                className="mt-1 block text-[0.68em] text-[#0F8F6E] dark:text-transparent dark:[-webkit-text-stroke:1.5px_#2DD3A8]"
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
              and payments — using TypeScript throughout so the code stays
              reliable as it grows.
            </motion.p>

            <motion.div variants={lineVariants} className="mt-7 flex flex-wrap gap-2.5">
              {TECH_STACK.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -3, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="rounded-xl border border-[#2DD3A8]/[0.18] bg-[#2DD3A8]/[0.06] px-4 py-2 text-sm font-medium text-[#0F8F6E] shadow-[0_2px_10px_rgba(15,143,110,0.06)] transition-colors duration-200 hover:border-[#2DD3A8]/50 hover:bg-[#2DD3A8]/[0.1] dark:border-[#2DD3A8]/[0.16] dark:bg-[#2DD3A8]/[0.07] dark:text-[#7FE8CB] dark:shadow-[0_2px_10px_rgba(0,0,0,0.25)] dark:hover:bg-[#2DD3A8]/[0.12]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={lineVariants} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-[#2DD3A8] px-6 py-3 text-sm font-semibold text-[#0A0A0A] shadow-[0_8px_24px_-8px_rgba(45,211,168,0.6)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Hire Me
                <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:border-[#2DD3A8]/60 hover:text-[#128363] active:scale-[0.98] dark:border-white/20 dark:text-white dark:hover:text-[#2DD3A8]"
              >
                View Projects
                <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1YmS1d4xV3B-aF0z2UiG3Q5cvUUgME6Y0"
                className="group flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:border-[#2DD3A8]/60 hover:text-[#128363] active:scale-[0.98] dark:border-white/20 dark:text-white dark:hover:text-[#2DD3A8]"
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
            variants={frameVariants}
            initial="hidden"
            animate="visible"
            className="order-1 mx-auto w-full max-w-[240px] sm:max-w-[340px] lg:order-2 lg:mx-0 lg:ml-auto lg:max-w-[420px]"
          >
            <div className="relative aspect-[4/5] w-full">
              {/* Soft accent ring behind the frame for depth */}
              <div className="absolute -inset-3 -z-10 rounded-[34px] bg-gradient-to-br from-[#2DD3A8]/20 via-transparent to-transparent blur-2xl" />

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
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 420px"
                    className="object-cover object-top"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent dark:from-[#0A0A0A]/70" />
              </div>

              {/* Floating chip: remote availability */}
              <motion.div
                custom={0.9}
                variants={chipVariants}
                initial="hidden"
                animate="visible"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:-bottom-5"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="flex items-center gap-2 whitespace-nowrap rounded-2xl border border-[#2DD3A8]/25 bg-white/90 px-3 py-2 text-[11px] font-medium text-gray-800 shadow-[0_10px_30px_-8px_rgba(45,211,168,0.35)] backdrop-blur-md dark:border-[#2DD3A8]/20 dark:bg-[#101312]/90 dark:text-[#E8EAED] sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2DD3A8] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2DD3A8]" />
                  </span>
                  Open to remote opportunities
                </motion.div>
              </motion.div>

              {/* Floating chip: freelance availability */}
              <motion.div
                custom={1.1}
                variants={chipVariants}
                initial="hidden"
                animate="visible"
                className="absolute -right-2 -top-3 sm:-right-4 sm:-top-4"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }}
                  className="flex items-center gap-2 whitespace-nowrap rounded-2xl border border-[#2DD3A8]/25 bg-white/90 px-3 py-2 text-[11px] font-medium text-gray-800 shadow-[0_10px_30px_-8px_rgba(45,211,168,0.35)] backdrop-blur-md dark:border-[#2DD3A8]/20 dark:bg-[#101312]/90 dark:text-[#E8EAED] sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2DD3A8] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2DD3A8]" />
                  </span>
                  Available for freelance
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom bar — caption + social icons. Pinned to the absolute
          bottom of the section so it always sits flush with the edge,
          regardless of how tall the viewport is or how much space the
          centered content above takes up. */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-7xl flex-col gap-6 border-t border-black/[0.06] px-6 pb-8 pt-6 dark:border-white/[0.06] sm:flex-row sm:items-center sm:justify-between lg:px-10"
      >
          <p className="text-sm font-medium text-gray-600 dark:text-[#C7CBD1]">
            Omar Faruk Nahid{" "}
            <span className="text-[#128363] dark:text-[#2DD3A8]">— Full Stack Developer</span>
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
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-gray-600 backdrop-blur-sm transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:bg-[#2DD3A8]/[0.06] hover:text-[#128363] dark:border-white/15 dark:text-[#C7CBD1] dark:hover:bg-[#2DD3A8]/10 dark:hover:text-[#2DD3A8]"
              >
                <Icon size={16} />
              </motion.a>
            ))}
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
    </section>
  );
}