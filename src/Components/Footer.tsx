"use client";

import { motion, type Variants } from "framer-motion";
import { HiOutlinePhone, HiOutlineEnvelope, HiArrowUpRight } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa6";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com/", label: "Facebook" },
];

const CONTACT = {
  email: "omarfaruk.nahid.wevdeveloper@gmail.com",
  phone: "01757234194",
  whatsapp: "01757234194",
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#0A0A0A] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#2DD3A8]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Logo + tagline */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <a href="#home" className="text-2xl font-extrabold tracking-tight text-white">
              Na<span className="text-[#2DD3A8]">hid</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Full Stack Developer crafting fast, scalable and reliable web
              applications with the MERN stack, Next.js &amp; TypeScript.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-gray-300 transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#2DD3A8]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <div className="mt-4 h-px w-10 bg-[#2DD3A8]" />
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-[#2DD3A8]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2DD3A8]/60 transition-colors duration-200 group-hover:bg-[#2DD3A8]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <div className="mt-4 h-px w-10 bg-[#2DD3A8]" />

            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-start gap-3 text-sm text-gray-400 transition-colors duration-200 hover:text-[#2DD3A8]"
                >
                  <HiOutlineEnvelope className="mt-0.5 shrink-0 text-[#2DD3A8]" size={16} />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-200 hover:text-[#2DD3A8]"
                >
                  <HiOutlinePhone className="shrink-0 text-[#2DD3A8]" size={16} />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/88${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors duration-200 hover:text-[#2DD3A8]"
                >
                  <FaWhatsapp className="shrink-0 text-[#2DD3A8]" size={16} />
                  WhatsApp: {CONTACT.whatsapp}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Big CTA text — Maxel style */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="group mt-20 flex items-center justify-between gap-6 border-t border-white/10 pt-10"
        >
          <h3 className="text-[13vw] font-extrabold leading-none tracking-tight sm:text-[9vw] lg:text-[6.5vw]">
            <span className="text-transparent [-webkit-text-stroke:2px_#2DD3A8]">
              Let&apos;s{" "}
            </span>
            <span className="text-white">Work Together</span>
          </h3>
          <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#2DD3A8]/40 text-2xl text-[#2DD3A8] transition-all duration-300 group-hover:bg-[#2DD3A8] group-hover:text-[#0A0A0A] sm:flex">
            <HiArrowUpRight />
          </span>
        </motion.a>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Omar Faruk Nahid. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="transition-colors duration-200 hover:text-[#2DD3A8]">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-[#2DD3A8]">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}