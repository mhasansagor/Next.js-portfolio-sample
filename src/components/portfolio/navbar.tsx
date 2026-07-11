"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";

const NAV_ITEMS = [
  { label: "Welcome", href: "#welcome" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Menu", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("welcome");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_ITEMS.map((n) => n.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#011629]/85 backdrop-blur-xl border-b border-[#173248] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-term flex items-center justify-between gap-6">
          {/* Location badge */}
          <div className="flex items-center gap-4">
            <div
              className="hidden sm:flex items-center gap-2 h-10 px-5 rounded-full border border-[#38546A] bg-transparent"
            >
              <MapPin className="w-3.5 h-3.5 text-[#7EE7C4]" />
              <span className="font-mono text-[12px] tracking-wider text-[#BFC8D1]">
                Dhaka / Bangladesh
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7EE7C4] pulse-dot" />
            </div>
            {/* Mobile: just the dot */}
            <div className="sm:hidden flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E97451] pulse-dot" />
              <span className="font-mono text-[12px] tracking-wider text-[#BFC8D1]">
                Dhaka / Bangladesh
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center" style={{ gap: "48px" }}>
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`nav-link-term font-mono text-[16px] tracking-wider ${
                  active === item.href.slice(1)
                    ? "text-[#F5F7FA] active"
                    : "text-[#BFC8D1] hover:text-[#F5F7FA]"
                }`}
                style={{ letterSpacing: "1px" }}
              >
                <span className="text-[#6E7B88] mr-1.5">0{i + 1}.</span>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden w-10 h-10 rounded-lg border border-[#38546A] flex items-center justify-center text-[#F5F7FA] hover:bg-[rgba(255,255,255,0.06)]"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-[#011629]/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#021D34] border-l border-[#23425B] p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12 pb-5 border-b border-[#173248]">
                <span className="font-mono text-[14px] uppercase tracking-[0.2em] text-[#BFC8D1]">
                  Menu<span className="text-[#E97451]">_</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-lg border border-[#38546A] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <button
                    key={item.href}
                    onClick={() => handleNav(item.href)}
                    className={`flex items-center gap-4 py-4 px-4 rounded-xl text-left font-mono transition-colors ${
                      active === item.href.slice(1)
                        ? "bg-[#09233B] text-[#F5F7FA]"
                        : "text-[#BFC8D1] hover:bg-[#09233B]/60 hover:text-[#F5F7FA]"
                    }`}
                  >
                    <span className="text-[12px] text-[#6E7B88]">0{i + 1}.</span>
                    <span className="text-[20px]">{item.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-[#173248]">
                <div className="flex items-center gap-2 font-mono text-[12px] text-[#6E7B88]">
                  <MapPin className="w-3.5 h-3.5 text-[#7EE7C4]" />
                  Dhaka / Bangladesh
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7EE7C4] pulse-dot ml-auto" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
