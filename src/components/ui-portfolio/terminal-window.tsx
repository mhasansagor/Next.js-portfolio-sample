"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TerminalWindow({
  title = "matthew@dodger ~ %",
  children,
  className = "",
  delay = 0,
}: TerminalWindowProps) {
  const [active, setActive] = useState(0);
  const tabs = ["about.md", "skills.ts", "contact.json"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-[20px] border border-[#23425B] bg-[#021D34] shadow-card overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 sm:px-5 h-11 border-b border-[#173248] bg-[#011629]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#E97451]/70" />
            <span className="w-3 h-3 rounded-full bg-[#7EE7C4]/70" />
            <span className="w-3 h-3 rounded-full bg-[#5AA8FF]/70" />
          </div>
          <span className="hidden sm:inline font-mono text-[12px] text-[#6E7B88] ml-2">
            {title}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`font-mono text-[11px] px-3 py-1 rounded-md transition-colors ${
                active === i
                  ? "bg-[#09233B] text-[#F5F7FA]"
                  : "text-[#6E7B88] hover:text-[#BFC8D1]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="relative p-5 sm:p-7">{children}</div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between px-4 sm:px-5 h-8 border-t border-[#173248] bg-[#011629]">
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#6E7B88]">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7EE7C4] pulse-dot" />
            connected
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">utf-8</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">ln 1, col 1</span>
        </div>
        <div className="font-mono text-[11px] text-[#6E7B88]">
          <span className="text-[#E97451]">{">"}</span> ready
        </div>
      </div>
    </motion.div>
  );
}
