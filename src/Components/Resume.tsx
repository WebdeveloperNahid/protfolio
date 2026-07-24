"use client";

import { motion, type Variants } from "framer-motion";
import { HiArrowUpRight, HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { FiEye } from "react-icons/fi";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2DD3A8]/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Label */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[#2DD3A8]" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Resume
          </span>
        </motion.div>

        {/* Heading */}

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Professional{" "}
            <span className="text-transparent [-webkit-text-stroke:2px_#2DD3A8]">
              Resume
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-md text-sm leading-relaxed text-gray-400 sm:text-base lg:text-right"
          >
            A quick overview of my technical skills, projects, experience and
            professional journey. Feel free to view or download my resume
            anytime.
          </motion.p>
        </div>

        {/* Resume Card */}

        <motion.div
          variants={card}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          {/* Decorative Glow */}

          <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#2DD3A8]/10 blur-[120px]" />

          <div className="relative grid gap-10 p-8 lg:grid-cols-[1.3fr_.7fr] lg:p-12">
            {/* LEFT */}

            <div>
              <span className="inline-flex rounded-full border border-[#2DD3A8]/30 bg-[#2DD3A8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-[#2DD3A8]">
                Full Stack Developer
              </span>

              <h3 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                Omar Faruk Nahid
              </h3>

              <p className="mt-5 max-w-xl text-gray-400 leading-8">
                Passionate Full Stack Web Developer specializing in modern
                JavaScript technologies including React, Next.js, Node.js,
                Express.js and MongoDB. I enjoy crafting beautiful, scalable and
                high-performance web applications with clean code and
                exceptional user experience.
              </p>

              {/* Highlights */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="mb-2 font-semibold text-white">Experience</h4>

                  <p className="text-sm text-gray-400">
                    MERN Stack Development
                    <br />
                    REST API
                    <br />
                    Responsive UI
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="mb-2 font-semibold text-white">
                    Technologies
                  </h4>

                  <p className="text-sm text-gray-400">
                    React
                    <br />
                    Next.js
                    <br />
                    Node.js
                    <br />
                    MongoDB
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-between">
              <div>
                <div className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[.18em] text-[#2DD3A8]">
                      Resume
                    </span>

                    <div className="h-3 w-3 rounded-full bg-[#2DD3A8] shadow-[0_0_20px_#2DD3A8]" />
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-xs uppercase tracking-[.18em] text-gray-500">
                        Name
                      </p>

                      <h4 className="mt-1 text-lg font-bold">
                        Omar Faruk Nahid
                      </h4>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[.18em] text-gray-500">
                        Role
                      </p>

                      <h4 className="mt-1 text-lg font-bold">
                        Full Stack Developer
                      </h4>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[.18em] text-gray-500">
                        Stack
                      </p>

                      <p className="mt-2 text-sm leading-7 text-gray-400">
                        React • Next.js • TypeScript
                        <br />
                        Node.js • Express.js
                        <br />
                        MongoDB • Tailwind CSS
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="https://docs.google.com/document/d/1wROd_zAldT-3d_HefJSvEWuClpILDDHtkUf4Fkdw4xc/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-[#2DD3A8] hover:text-[#2DD3A8]"
                >
                  <FiEye size={20} />
                  View Resume
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="https://docs.google.com/document/d/1wROd_zAldT-3d_HefJSvEWuClpILDDHtkUf4Fkdw4xc/export?format=pdf"
                  download
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#2DD3A8] px-6 py-4 font-semibold text-[#0A0A0A] transition-all duration-300 hover:scale-[1.02]"
                >
                  <HiOutlineDocumentArrowDown size={22} />
                  Download Resume
                  <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <p className="text-center text-xs leading-6 text-gray-500">
                  * Currently using a demo resume.
                  <br />
                  Replace{" "}
                  <span className="text-[#2DD3A8] font-medium">
                    /public/resume.pdf
                  </span>
                  <br />
                  with your own resume later.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
