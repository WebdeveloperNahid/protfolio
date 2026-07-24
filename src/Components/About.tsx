"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaMotorcycle, FaHeart } from "react-icons/fa";

const ABOUT_CARDS = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Development",
    desc: "I feel equally comfortable working across both Frontend and Backend. I love building fast, responsive, scalable, and user-friendly web applications. Writing clean code, creating reusable components, and ensuring an exceptional user experience are my highest priorities.",
  },
  {
    icon: FaRocket,
    title: "Continuous Learning",
    desc: "I believe a developer's learning never stops. Therefore, I treat every project as a fresh opportunity to grow. Mastering new technologies, solving complex problems, and sharpening my skills every single day is my core drive.",
  },
  {
    icon: FaMotorcycle,
    title: "Beyond Coding",
    desc: "Outside of programming, I love exploring new places, going on long bike rides, and immersing myself in nature. Fresh experiences help me think creatively and approach my work with renewed energy.",
  },
  {
    icon: FaHeart,
    title: "Values & Impact",
    desc: "I believe technology can make human lives simpler and better. I aim to build software that solves meaningful problems while staying eager to support underprivileged and helpless people whenever possible, believing small acts of kindness create true societal value.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0A0A] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header - Maxel Style */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#2DD3A8]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            About Me
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Balanced Typography & Main Intro — slides in gently from the left,
              matching the Hero headline's entrance so the site feels consistent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-6 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]">
              Driven by a Passion for Code & <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#2DD3A8]">
                Global Remote Opportunities.
              </span>
            </h2>
            
            <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed">
              My programming journey started from a deep curiosity about technology and a childhood dream of becoming a software engineer. Through continuous learning, building real-world projects, and exploring modern tech stacks, I am carving my path as a Full Stack Web Developer. I currently work with Next.js, React, TypeScript, Modern JavaScript (ES6+), Express.js, Node.js, and MongoDB. My ultimate motivation is to learn, improve, and build effective solutions for real-world challenges as I target global remote opportunities.
            </p>
          </motion.div>

          {/* Right Column: Cards — each slides in gently from the right with a
              small stagger delay, and gets the same hover treatment as the
              Skills cards (scale + bg lighten) for a consistent feel */}
          <div className="lg:col-span-6 space-y-4">
            {ABOUT_CARDS.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.99 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-[#2DD3A8]/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2DD3A8]/10 text-[#2DD3A8]"
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}