"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaLaptopCode,
  FaGoogle,
  FaUserShield,
  FaExchangeAlt,
  FaBolt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiNetlify,
  SiVercel,
  SiDaisyui,
  SiFramer,
  SiJsonwebtokens,
  SiStripe,
  SiGooglegemini,
  SiNpm,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import GridBackground from "./Gridbackground";

const ACCENT = "#2DD3A8";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend & UI Libraries",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs className="text-xl text-gray-900 dark:text-white sm:text-2xl" /> },
        { name: "React.js", icon: <FaReact className="text-xl text-[#61DAFB] sm:text-2xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-xl text-[#3178C6] sm:text-2xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-xl text-[#F7DF1E] sm:text-2xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl text-[#06B6D4] sm:text-2xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-xl text-[#E34F26] sm:text-2xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-xl text-[#1572B6] sm:text-2xl" /> },
        { name: "DaisyUI", icon: <SiDaisyui className="text-xl text-[#1095C1] sm:text-2xl" /> },
        { name: "HeroUI", icon: <FaLaptopCode className="text-xl text-[#F43F5E] sm:text-2xl" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-xl text-[#FF0055] sm:text-2xl" /> },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-xl text-[#339933] sm:text-2xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-xl text-gray-900 dark:text-white sm:text-2xl" /> },
        { name: "REST API", icon: <FaExchangeAlt className="text-xl text-[#38BDF8] sm:text-2xl" /> },
        { name: "Gemini API", icon: <SiGooglegemini className="text-xl text-[#8E75B2] sm:text-2xl" /> },
      ],
    },
    {
      title: "Auth & Security",
      skills: [
        { name: "JWT Auth", icon: <SiJsonwebtokens className="text-xl text-[#D63AFF] sm:text-2xl" /> },
        { name: "Better Auth", icon: <FaUserShield className="text-xl text-[#0E9F6E] sm:text-2xl" /> },
        { name: "Google OAuth", icon: <FaGoogle className="text-xl text-[#EA4335] sm:text-2xl" /> },
        { name: "RBAC", icon: <FaUserShield className="text-xl text-[#F59E0B] sm:text-2xl" /> },
      ],
    },
    {
      title: "Database, Tools & Deployment",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-xl text-[#47A248] sm:text-2xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-xl text-[#4169E1] sm:text-2xl" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-xl text-gray-900 dark:text-white sm:text-2xl" /> },
        { name: "Stripe", icon: <SiStripe className="text-xl text-[#635BFF] sm:text-2xl" /> },
        { name: "Git & GitHub", icon: <FaGithub className="text-xl text-gray-900 dark:text-white sm:text-2xl" /> },
        { name: "VS Code", icon: <VscVscode className="text-xl text-[#007ACC] sm:text-2xl" /> },
        { name: "Thunder Client", icon: <FaBolt className="text-xl text-[#FF8C00] sm:text-2xl" /> },
        { name: "npm", icon: <SiNpm className="text-xl text-[#CB3837] sm:text-2xl" /> },
        { name: "Vercel", icon: <SiVercel className="text-xl text-gray-900 dark:text-white sm:text-2xl" /> },
        { name: "Netlify", icon: <SiNetlify className="text-xl text-[#00C7B7] sm:text-2xl" /> },
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 260, damping: 22 },
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white py-24 text-gray-900 dark:bg-[#0A0A0A] dark:text-white lg:py-32"
    >
       <GridBackground opacity={0.02} darkOpacity={0.04} size={64} />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2DD3A8]/[0.06] blur-[150px] dark:bg-[#2DD3A8]/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-3">
          <motion.span
            className="h-2 w-2 rounded-full bg-[#2DD3A8]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            My Expertise
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold leading-[1.25] tracking-tight sm:text-4xl lg:text-5xl">
            Technologies &amp; <br />
            <span className="text-[#0F8F6E] dark:text-transparent sm:dark:[-webkit-text-stroke:2px_#2DD3A8] dark:[-webkit-text-stroke:1.5px_#2DD3A8]">
              Development Stack.
            </span>
          </h2>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -18px rgba(45, 211, 168, 0.3)",
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-black/[0.015] p-6 shadow-xl backdrop-blur-md transition-colors duration-300 hover:border-[#2DD3A8]/40 dark:border-white/10 dark:bg-white/[0.02] sm:p-8"
            >
              {/* Top accent bar — one consistent brand color, quiet by
                  default, brightens on hover */}
              <span
                className="absolute inset-x-0 top-0 h-[3px] opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: ACCENT }}
              />

              <div className="relative">
                <h3 className="mb-6 flex items-center justify-between border-b border-black/10 pb-4 text-lg font-extrabold tracking-tight text-gray-900 dark:border-white/10 dark:text-white sm:text-xl">
                  {category.title}
                  <span className="h-2 w-2 rounded-full bg-[#2DD3A8]" />
                </h3>

                <motion.div
                  className="grid grid-cols-2 gap-3"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.06,
                        y: -2,
                        backgroundColor: "rgba(45, 211, 168, 0.08)",
                        borderColor: "rgba(45, 211, 168, 0.5)",
                      }}
                      whileTap={{ scale: 0.96 }}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-black/[0.015] p-3 transition-colors dark:border-white/10 dark:bg-white/[0.02]"
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-xs font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}