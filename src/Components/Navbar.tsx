"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";
// import { HiMenu, HiX, HiArrowUpRight } from "react-icons/hi2";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

// Fixed navbar height — keep this in sync with the `h-20` classes below
// and use the same value (e.g. pt-20) on the first section of every page
// so content never hides behind the fixed navbar.
export const NAVBAR_HEIGHT = "5rem"; // 80px

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Top Bar — fixed height h-20 (80px) on every breakpoint */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 z-50 h-20 w-full transition-colors duration-300 ${
          scrolled
            ? "bg-[#141414]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Na<span className="text-[#2DD3A8]">hid</span>
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-gray-500">
              full stack dev
            </span>
          </a>

          {/* Desktop Nav Links — visible from lg (1024px) and up */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeLink === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
                {activeLink === link.href && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#2DD3A8]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Hire Me — visible on all sizes */}
            <a
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className="group hidden items-center gap-2 rounded-full border border-[#2DD3A8]/60 px-5 py-2.5 text-sm font-semibold text-[#2DD3A8] transition-colors duration-200 hover:bg-[#2DD3A8]/10 sm:flex"
            >
              Hire Me
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2DD3A8]/15 text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <HiArrowUpRight />
              </span>
            </a>

            {/* Hamburger — only below lg (tablet + mobile) */}
            <button
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-colors duration-200 hover:border-[#2DD3A8]/60 hover:text-[#2DD3A8] lg:hidden"
            >
              <HiMenu />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Sidebar Overlay Menu — mobile & tablet only */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed left-0 top-0 z-50 h-screen w-[85%] max-w-sm bg-[#141414] px-8 py-8 sm:w-[380px] lg:hidden"
            >
              <div className="mb-14 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-white">
                  Na<span className="text-[#2DD3A8]">hid</span>
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setSidebarOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-white hover:border-[#2DD3A8]/60 hover:text-[#2DD3A8]"
                >
                  <HiX />
                </button>
              </div>

              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="group flex items-center justify-between border-b border-white/5 py-4 text-lg font-semibold text-gray-300 transition-colors duration-200 hover:text-[#2DD3A8]"
                    >
                      {link.label}
                      <HiArrowUpRight className="opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className="mt-10 flex items-center justify-center gap-2 rounded-full border border-[#2DD3A8]/60 py-3 text-sm font-semibold text-[#2DD3A8] transition-colors duration-200 hover:bg-[#2DD3A8]/10"
              >
                Hire Me
                <HiArrowUpRight />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}