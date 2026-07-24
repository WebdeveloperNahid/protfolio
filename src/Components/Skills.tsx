"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaLaptopCode, FaGoogle, FaUserShield, FaExchangeAlt } from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, 
  SiExpress, SiMongodb, SiNetlify, SiVercel, SiDaisyui, SiFramer,
  SiJsonwebtokens, SiStripe, SiGooglegemini, SiNpm
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

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
        { name: "Next.js", icon: <SiNextdotjs className="text-white text-xl sm:text-2xl" /> },
        { name: "React.js", icon: <FaReact className="text-[#61DAFB] text-xl sm:text-2xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-xl sm:text-2xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-xl sm:text-2xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-xl sm:text-2xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] text-xl sm:text-2xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] text-xl sm:text-2xl" /> },
        { name: "DaisyUI", icon: <SiDaisyui className="text-[#1095C1] text-xl sm:text-2xl" /> },
        { name: "HeroUI", icon: <FaLaptopCode className="text-[#F43F5E] text-xl sm:text-2xl" /> },
        { name: "Motion", icon: <SiFramer className="text-[#FF0055] text-xl sm:text-2xl" /> },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-xl sm:text-2xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-white text-xl sm:text-2xl" /> },
        { name: "REST API", icon: <FaExchangeAlt className="text-[#38BDF8] text-xl sm:text-2xl" /> },
        { name: "Gemini API", icon: <SiGooglegemini className="text-[#8E75B2] text-xl sm:text-2xl" /> },
      ],
    },
    {
      title: "Auth & Security",
      skills: [
        { name: "JWT Auth", icon: <SiJsonwebtokens className="text-[#D63AFF] text-xl sm:text-2xl" /> },
        { name: "Better Auth", icon: <FaUserShield className="text-[#2DD3A8] text-xl sm:text-2xl" /> },
        { name: "Google OAuth", icon: <FaGoogle className="text-[#EA4335] text-xl sm:text-2xl" /> },
        { name: "RBAC", icon: <FaUserShield className="text-[#F59E0B] text-xl sm:text-2xl" /> },
      ],
    },
    {
      title: "Database, Tools & Deployment",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-xl sm:text-2xl" /> },
        { name: "Stripe", icon: <SiStripe className="text-[#635BFF] text-xl sm:text-2xl" /> },
        { name: "Git & GitHub", icon: <FaGithub className="text-white text-xl sm:text-2xl" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC] text-xl sm:text-2xl" /> },
        { name: "npm", icon: <SiNpm className="text-[#CB3837] text-xl sm:text-2xl" /> },
        { name: "Vercel", icon: <SiVercel className="text-white text-xl sm:text-2xl" /> },
        { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7] text-xl sm:text-2xl" /> },
      ],
    },
  ];

  // Card container variants with 'as const' to fix TypeScript errors
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
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="relative bg-[#0A0A0A] py-24 text-white lg:py-32 overflow-hidden">
      
      {/* Background Soft Glow - Safe Position */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2DD3A8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-3">
          <motion.span
            className="h-2 w-2 rounded-full bg-[#2DD3A8]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            My Expertise
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.25]">
            Technologies & <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_#2DD3A8] sm:[-webkit-text-stroke:2px_#2DD3A8]">
              Development Stack.
            </span>
          </h2>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 25px rgba(45, 211, 168, 0.15)",
              }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md shadow-xl transition-colors duration-300 hover:border-[#2DD3A8]/40"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center justify-between">
                  {category.title}
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2DD3A8]" />
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
                        backgroundColor: "rgba(45, 211, 168, 0.06)",
                        borderColor: "rgba(45, 211, 168, 0.5)",
                      }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors cursor-pointer"
                    >
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                        transition={{ duration: 0.5 }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.03]"
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-xs font-medium text-gray-200">
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