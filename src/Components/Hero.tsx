"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const TECH_STACK = ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"];

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com/", label: "Facebook" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const lineVariants: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const rightColVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const socialContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    // bg-[#0A0A0A]: darker near-black to match the reference screenshot
    <section ref={sectionRef} id="home" className="relative h-[180vh] bg-[#0A0A0A]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background portrait — transparent-background PNG, sits directly on
            the section's solid #0A0A0A background. No dark overlay/mask needed
            since there's no photo background left to hide; real natural lighting
            of the subject is preserved as-is. */}
        <motion.div
          style={{ scale: bgScale }}
          className="absolute inset-x-[10%] inset-y-[10%] sm:inset-x-[18%] sm:inset-y-[8%] lg:inset-x-[26%] lg:inset-y-[6%]"
        >
          {/* Replace the file at /public/images/profile.png with your
              transparent-background cutout photo */}
          <Image
            src="/images/profile.png"
            alt="Omar Faruk Nahid — Full Stack Developer"
            fill
            priority
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* Foreground content */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 pt-24 lg:px-10 lg:pt-28"
        >
          {/* pt-24 (96px) / lg:pt-28 (112px) = navbar's 80px height + ~20px breathing room */}

          <div className="flex flex-1 flex-col justify-center lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
            {/* LEFT: Headline */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.span
                variants={lineVariants}
                className="mb-5 inline-block rounded-full border border-[#2DD3A8]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#2DD3A8]"
              >
                Full Stack Developer
              </motion.span>

              <h1 className="text-[13vw] font-extrabold leading-[0.95] text-white sm:text-[9vw] lg:text-[4.4vw]">
                <motion.span variants={lineVariants} className="block">
                  Crafting
                </motion.span>
                <motion.span
                  variants={lineVariants}
                  className="block text-transparent [-webkit-text-stroke:2px_#2DD3A8]"
                >
                  Full-Stack
                </motion.span>
                <motion.span variants={lineVariants} className="block">
                  Experiences
                </motion.span>
              </h1>

              <motion.div variants={lineVariants} className="mt-7 flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Sub-content + CTAs — shown beside the image on large screens */}
            <motion.div
              variants={rightColVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 max-w-md lg:mt-0 lg:justify-self-end lg:text-right"
            >
              <motion.h2
                variants={fadeUp}
                className="text-2xl font-bold text-white sm:text-3xl"
              >
                Design. Build. Ship.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-sm text-gray-300 sm:text-base">
                I design and build scalable web applications with the MERN
                stack, Next.js and TypeScript — turning ideas into fast,
                reliable products.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-3 lg:justify-end"
              >
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full bg-[#2DD3A8] px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-transform duration-200 hover:scale-[1.03]"
                >
                  Hire Me
                  <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#2DD3A8]"
                >
                  View Projects
                  <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                
                <a
                   href="https://docs.google.com/document/d/1wROd_zAldT-3d_HefJSvEWuClpILDDHtkUf4Fkdw4xc/export?format=pdf"
                  className="group flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#2DD3A8]"
                >
                  Resume
                  <HiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

              </motion.div>
            </motion.div>
          </div>

          {/* Bottom bar — caption + social icons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col gap-6 pb-12 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-sm font-medium text-gray-300">
              Omar Faruk Nahid{" "}
              <span className="text-[#2DD3A8]">— Full Stack Developer</span>
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
                  transition={{ duration: 0.4, ease: "backOut" }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-gray-300 backdrop-blur-sm transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#2DD3A8]"
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
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