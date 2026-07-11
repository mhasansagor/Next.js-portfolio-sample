"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="welcome"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 pb-12"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 diag-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#011629]" />

      {/* Corner brackets — terminal framing */}
      <div className="absolute top-24 left-4 sm:left-8 w-8 h-8 border-l border-t border-[#23425B]" />
      <div className="absolute top-24 right-4 sm:right-8 w-8 h-8 border-r border-t border-[#23425B]" />
      <div className="absolute bottom-4 left-4 sm:left-8 w-8 h-8 border-l border-b border-[#23425B]" />
      <div className="absolute bottom-4 right-4 sm:right-8 w-8 h-8 border-r border-b border-[#23425B]" />

      <div className="relative container-term flex-1 flex flex-col justify-center">
        {/* ====== Top hero block — Portfolio / Web Developer / 2029 ====== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16"
        >
          {/* Left — big "Portfolio" */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[12px] tracking-[0.2em] text-[#6E7B88]">
                01 / WELCOME
              </span>
              <span className="h-px flex-1 max-w-[100px] bg-[#23425B]" />
            </div>
            <h1
              className="font-mono font-medium text-[#F5F7FA] leading-[1.05] tracking-tight"
              style={{
                fontSize: "clamp(56px, 8vw, 92px)",
                letterSpacing: "-2px",
                lineHeight: "clamp(64px, 9vw, 100px)",
              }}
            >
              Portfolio
              <span className="text-[#E97451]">.</span>
            </h1>
          </div>

          {/* Right — > Web Developer / > 2029 */}
          <div className="flex flex-col items-start lg:items-end lg:text-right gap-3 lg:pt-6">
            <div className="flex items-center gap-3" style={{ fontSize: "36px" }}>
              <span className="font-mono text-[#E97451]">{">"}</span>
              <span className="font-mono font-medium text-[#F5F7FA]">Software Engineer</span>
            </div>
            <div className="flex items-center gap-3" style={{ fontSize: "36px" }}>
              <span className="font-mono text-[#E97451]">{">"}</span>
              <span className="font-mono font-medium text-[#F5F7FA]">2019</span>
            </div>
            <div className="mt-2 flex items-center gap-2 font-mono text-[12px] text-[#6E7B88]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7EE7C4] pulse-dot" />
              AVAILABLE FOR HIRE
            </div>
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px w-full bg-gradient-to-r from-transparent via-[#23425B] to-transparent mb-12 lg:mb-16"
        />

        {/* ====== Bottom hero block — Hello I'm ____ Mehedi Hasan ====== */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left — intro line */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="font-mono text-[20px] text-[#7EE7C4] mb-3">
              {"<Hello I'M"}
            </div>
            <div className="flex items-center gap-2 font-mono text-[14px] text-[#6E7B88]">
              <span className="text-[#E97451]">_</span>
              <span>STATUS: INITIALIZED</span>
            </div>
          </motion.div>

          {/* Middle — long separator line + arrow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden lg:flex lg:col-span-5 items-center gap-3"
          >
            <span className="font-mono text-[12px] text-[#6E7B88]">—</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#23425B] via-[#315A7A] to-[#23425B]" />
            <ArrowRight className="w-4 h-4 text-[#E97451]" />
          </motion.div>

          {/* Right — Name + Read More */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:text-right"
          >
            <h2
              className="font-mono font-medium text-[#F5F7FA] leading-[1] tracking-tight"
              style={{ fontSize: "clamp(48px, 6vw, 72px)", letterSpacing: "-1.5px" }}
            >
              Mehedi
              <br />
              Hasan
              <span className="text-[#E97451]">.</span>
            </h2>

            <div className="mt-6 lg:flex lg:justify-end">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-between gap-3 w-[140px] h-[44px] px-5 rounded-full border border-[#38546A] bg-transparent text-[#F5F7FA] font-mono text-[13px] uppercase tracking-wider hover:bg-[rgba(255,255,255,0.06)] hover:border-[#315A7A] transition-all"
              >
                Read More
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee strip — terminal symbols */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative mt-10 border-y border-[#173248] overflow-hidden bg-[#021D34]/40"
      >
        <div className="flex animate-marquee whitespace-nowrap py-3">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center font-mono text-[12px] text-[#6E7B88] tracking-wider">
              {[
                "/> FRONTEND_ENGINEER",
                "_",
                "/> REACT_SPECIALIST",
                "_",
                "/> TYPESCRIPT",
                "_",
                "/> TAILWIND_CSS",
                "_",
                "/> NEXT_JS",
                "_",
                "/> NODE_JS",
                "_",
                "/> UI_ENGINEERING",
                "_",
                "/> DESIGN_SYSTEMS",
                "_",
              ].map((s, i) => (
                <span key={`${k}-${i}`} className="mx-6 inline-flex items-center gap-2">
                  <span className="text-[#E97451]">{">"}</span>
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
