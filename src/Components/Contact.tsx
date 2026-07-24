"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiArrowUpRight,
  HiPaperAirplane,
} from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa6";

const CONTACT = {
  email: "omarfaruk.nahid.wevdeveloper@gmail.com",
  phone: "01757234194",
  whatsapp: "01757234194",
};

const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com/", label: "Facebook" },
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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2DD3A8]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[#2DD3A8]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
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
            <span className="text-transparent [-webkit-text-stroke:1.5px_#2DD3A8] sm:[-webkit-text-stroke:2px_#2DD3A8]">
              Talk.
            </span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 sm:text-base">
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
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#2DD3A8]/40 sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2DD3A8]/30 text-[#2DD3A8] transition-colors duration-300 group-hover:bg-[#2DD3A8]/10">
                  <item.icon size={20} />
                </span>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                    {item.value}
                  </p>
                </div>
                <HiArrowUpRight className="text-gray-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2DD3A8]" />
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#2DD3A8]"
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
            className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-400">
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
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors duration-200 focus:border-[#2DD3A8]/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-400">
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
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors duration-200 focus:border-[#2DD3A8]/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-400">
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
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors duration-200 focus:border-[#2DD3A8]/50"
              />
            </div>

            <button
              type="submit"
              className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-[#2DD3A8] px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-transform duration-200 hover:scale-[1.02]"
            >
              Send Message
              <HiPaperAirplane className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}