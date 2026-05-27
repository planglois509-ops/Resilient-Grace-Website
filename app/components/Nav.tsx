"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/#specialties", label: "Specialties" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-mist/80 border-b border-midnight/8 shadow-[0_8px_30px_-20px_rgba(3,45,61,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-8 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Resilient Grace home">
          <Image
            src="/brand/logo-graphic-transparent.png"
            alt=""
            width={120}
            height={120}
            className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] transition-transform duration-700 group-hover:rotate-6"
            priority
          />
          <span className="font-display text-[28px] md:text-[34px] tracking-tight text-midnight leading-none hidden sm:inline">
            resilient grace
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-[15px] text-midnight/85">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn-cypress text-sm">
            Book a Consultation
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden p-2 rounded-full text-midnight hover:bg-midnight/5 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-midnight/10 bg-mist/95 backdrop-blur-md"
          >
            <ul className="flex flex-col px-6 py-6 gap-4 text-[18px] font-display">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setOpen(false)} className="block py-1 text-midnight">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-cypress text-sm w-full justify-center">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
