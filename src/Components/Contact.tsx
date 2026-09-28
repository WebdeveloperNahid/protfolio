"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiArrowUpRight,
  HiPaperAirplane,
  HiCheckCircle,
} from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import GridBackground from "./Gridbackground";

const CONTACT = {
  email: "omarfaruk.nahid.webdeveloper@gmail.com",
  phone: "01757234194",
  whatsapp: "01757234194",
};

// Web3Forms Access Key (web3forms.com)
const WEB3FORMS_ACCESS_KEY = "59c1d8ae-2549-495d-9c18-c6e4cff1fc44";

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/WebdeveloperNahid", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/omarfaruk-nahid", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/omarfaruk.nahid.731385", label: "Facebook" },
];

const CONTACT_CARDS = [
  {
    icon: HiOutlineEnvelope,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: `https://wa.me/88${CONTACT.whatsapp}`,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

type Status = "idle" | "loading" | "success" | "error";

// Shared input styling (light + dark)
const INPUT_CLASS =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-[#2DD3A8] dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-gray-600 dark:focus:border-[#2DD3A8]/50";

const LABEL_CLASS =
  "mb-2 block text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Inquiry from ${form.name || "Website Visitor"}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FAFBFC] py-24 text-gray-900 dark:bg-[#0A0A0A] dark:text-white lg:py-32"
    >
      <GridBackground opacity={0.02} darkOpacity={0.04} size={60} />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2DD3A8]/[0.06] blur-[150px] dark:bg-[#2DD3A8]/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-6 flex items-center gap-3"
        >
          <motion.span
            className="h-2 w-2 rounded-full bg-[#2DD3A8]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Get In Touch
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s{" "}
            <span className="text-[#0F8F6E] dark:text-transparent dark:[-webkit-text-stroke:1.5px_#2DD3A8] sm:dark:[-webkit-text-stroke:2px_#2DD3A8]">
              Talk.
            </span>
          </h2>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            Have a project in mind or just want to say hi? I&apos;m always
            open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Direct contact cards + social */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {CONTACT_CARDS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "WhatsApp" ? "_blank" : undefined}
                rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-black/[0.015] p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#2DD3A8]/40 dark:border-white/10 dark:bg-white/[0.02] sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2DD3A8]/30 text-[#0F8F6E] transition-colors duration-300 group-hover:bg-[#2DD3A8]/10 dark:text-[#2DD3A8]">
                  <item.icon size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-1 break-all text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
                    {item.value}
                  </p>
                </div>
                <HiArrowUpRight className="shrink-0 text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0F8F6E] dark:text-gray-500 dark:group-hover:text-[#2DD3A8]" />
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div variants={fadeUp} className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-gray-600 transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:bg-[#2DD3A8]/[0.06] hover:text-[#128363] dark:border-white/15 dark:text-gray-300 dark:hover:bg-transparent dark:hover:text-[#2DD3A8]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5 rounded-2xl border border-black/10 bg-black/[0.015] p-6 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/[0.02] sm:p-8"
          >
            <div>
              <label htmlFor="name" className={LABEL_CLASS}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="email" className={LABEL_CLASS}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="message" className={LABEL_CLASS}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`${INPUT_CLASS} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-[#2DD3A8] px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] shadow-[0_8px_24px_-8px_rgba(45,211,168,0.6)] transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "loading" ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <HiPaperAirplane className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </>
              )}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm font-medium text-[#0F8F6E] dark:text-[#2DD3A8]"
              >
                <HiCheckCircle size={18} />
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-medium text-red-600 dark:text-red-400"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}