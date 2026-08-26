"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Github,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

const CONTACTS = [
  { icon: Mail, label: "Email", value: "contact@mhasansagor.me", href: "mailto:contact@mhasansagor.me", color: "#E97451" },
  { icon: Phone, label: "Phone", value: "+880 555-0142", href: "tel:+880 555-0142", color: "#7EE7C4" },
  { icon: Globe, label: "Website", value: "mhasansagor.me", href: "#", color: "#5AA8FF" },
  { icon: Linkedin, label: "LinkedIn", value: "in/mhasansagor", href: "#", color: "#7EE7C4" },
  { icon: Github, label: "Github", value: "@mhasansagor", href: "#", color: "#E97451" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute inset-0 diag-overlay opacity-50" />

      {/* Corner brackets */}
      <div className="absolute top-12 left-4 sm:left-8 w-8 h-8 border-l border-t border-[#23425B]" />
      <div className="absolute top-12 right-4 sm:right-8 w-8 h-8 border-r border-t border-[#23425B]" />
      <div className="absolute bottom-12 left-4 sm:left-8 w-8 h-8 border-l border-b border-[#23425B]" />
      <div className="absolute bottom-12 right-4 sm:right-8 w-8 h-8 border-r border-b border-[#23425B]" />

      <div className="relative container-term">
        {/* Centered hero text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Top label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="font-mono text-[12px] tracking-[0.2em] text-[#6E7B88]">
              07 / CONTACT
            </span>
            <span className="h-px w-8 bg-[#23425B]" />
          </div>

          {/* Big title */}
          <h2
            className="font-mono font-medium text-[#F5F7FA] tracking-tight leading-[1] mb-6"
            style={{ fontSize: "clamp(48px, 8vw, 72px)", letterSpacing: "-2px" }}
          >
            Say
            <span className="text-[#E97451]">...</span>Hello
            <span className="cursor-blink text-[#E97451] ml-2">_</span>
          </h2>

          {/* Subtitle */}
          <p
            className="font-mono text-[#7EE7C4] tracking-wide"
            style={{ fontSize: "20px" }}
          >
            Thank you for watching
          </p>

          <p
            className="mt-6 font-mono text-[#BFC8D1] max-w-xl mx-auto"
            style={{ fontSize: "16px", lineHeight: "28px" }}
          >
            Have a project, a question, or just want to say hi? My inbox is
            always open — let&apos;s build something great together.
          </p>
        </motion.div>

        {/* Contact info list */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 max-w-3xl mx-auto"
        >
          <div className="rounded-[24px] border border-[#23425B] bg-[#09233B] shadow-card overflow-hidden">
            {/* Window bar */}
            <div className="h-11 border-b border-[#173248] bg-[#011629] flex items-center justify-between px-5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#E97451]/70" />
                  <span className="w-3 h-3 rounded-full bg-[#7EE7C4]/70" />
                  <span className="w-3 h-3 rounded-full bg-[#5AA8FF]/70" />
                </div>
                <span className="font-mono text-[12px] text-[#6E7B88] ml-2">
                 mehedi@hasan ~ contact %
                </span>
              </div>
              <Terminal className="w-3.5 h-3.5 text-[#6E7B88]" />
            </div>

            {/* List */}
            <div className="divide-y divide-[#173248]">
              {CONTACTS.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-center justify-between gap-5 px-6 sm:px-8 py-5 hover:bg-[#021D34] transition-colors"
                >
                  <div className="flex items-center gap-5 min-w-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0"
                      style={{
                        background: `${c.color}15`,
                        borderColor: `${c.color}30`,
                        color: c.color,
                      }}
                    >
                      <c.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[12px] text-[#6E7B88] uppercase tracking-wider">
                        {c.label}
                      </div>
                      <div className="font-mono text-[16px] text-[#F5F7FA] truncate">
                        {c.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 flex-shrink-0 transition-all group-hover:rotate-45 group-hover:text-[#E97451]"
                    style={{ color: c.color }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Footer line */}
            <div className="border-t border-[#173248] bg-[#011629] px-6 sm:px-8 h-9 flex items-center justify-between">
              <div className="flex items-center gap-3 font-mono text-[11px] text-[#6E7B88]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7EE7C4] pulse-dot" />
                  available
                </span>
                <span>|</span>
                <span>reply within 24h</span>
              </div>
              <span className="font-mono text-[11px] text-[#6E7B88]">
                <span className="text-[#E97451]">{">"}</span> end_of_file
              </span>
            </div>
          </div>
        </motion.div>

        {/* Decorative bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 flex items-center justify-center gap-3 font-mono text-[12px] text-[#6E7B88] tracking-wider"
        >
          <span className="text-[#E97451]">/</span>
          <span>BUILT WITH REACT.JS &amp; TAILWIND CSS</span>
          <span className="text-[#E97451]">/</span>
        </motion.div>
      </div>
    </section>
  );
}
