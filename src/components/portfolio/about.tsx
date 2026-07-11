"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Coffee,
  Award,
  BookOpen,
} from "lucide-react";
import SectionTitle from "@/components/ui-portfolio/section-title";

const PILLS = [
  { icon: MapPin, label: "Dhaka, Bangladesh" },
  { icon: Mail, label: "cse.mhasan158@gmail.com" },
  { icon: Globe, label: "mhasansagor.netlify.app" },
  { icon: Coffee, label: "Available for hire" },
  { icon: Award, label: "Awwwards Honoree" },
  { icon: BookOpen, label: "Open-source maintainer" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 diag-overlay opacity-50" />

      <div className="relative container-term">
        {/* Section title */}
        <SectionTitle
          index="03"
          label="About Me"
          title="Senior"
          highlight="Software Engineer."
          highlightColor="green"
          description="I build the web with care, precision, and a relentless focus on the user. Currently shipping at Nimbus Labs while mentoring the next generation of frontend devs."
        />

        {/* Body */}
        <div className="mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT — Portrait image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-[#23425B] rounded-[24px] translate-x-4 translate-y-4 opacity-50" />

            {/* Image card */}
            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-[#23425B] bg-gradient-to-br from-[#0C263C] to-[#011629] shadow-card">
              <div className="absolute inset-0 grid-lines-fine opacity-30" />
              <div className="absolute inset-0 diag-overlay" />

              {/* SVG portrait */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src="/logo.webp"
                  alt="Mehedi Hasan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tag — bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-[#011629]/85 backdrop-blur-md border border-[#23425B]">
                <div>
                  <div className="font-mono text-[14px] text-[#F5F7FA] font-medium">
                    Mehedi Hasan
                  </div>
                  <div className="font-mono text-[12px] text-[#6E7B88]">
                    SENIOR_SOFTWARE_ENGINEER
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(126,231,196,0.10)] text-[#7EE7C4] text-[11px] font-mono border border-[rgba(126,231,196,0.25)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7EE7C4] pulse-dot" />
                  ONLINE
                </span>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-[#315A7A]" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-[#315A7A]" />
            </div>
          </motion.div>

          {/* RIGHT — Bio card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div
              className="relative p-8 sm:p-10 rounded-[24px] border border-[#23425B] bg-[#0C263C] shadow-card overflow-hidden"
              style={{ maxWidth: "560px" }}
            >
              {/* Top label */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#173248]">
                <div className="flex items-center gap-2 font-mono text-[12px] text-[#6E7B88] uppercase tracking-wider">
                  <span className="text-[#E97451]">{"<"}</span>
                  bio.md
                  <span className="text-[#E97451]">{"/>"}</span>
                </div>
                <div className="font-mono text-[12px] text-[#6E7B88]">
                  v2.0.29
                </div>
              </div>

              {/* Bio body */}
              <div
                className="font-mono text-[#BFC8D1] space-y-5"
                style={{ fontSize: "18px", lineHeight: "34px" }}
              >
                <p>
                  <span className="text-[#E97451]">{"> "}</span> I&apos;m a
                  senior Senior Software Engineer with{" "}
                  <span className="text-[#7EE7C4]">6+ years</span> professional
                  experience building scalable, high-performance web
                  applications. I specialize in React, Next.js, and the modern
                  JavaScript ecosystem — and over the last two years I've
                  expanded into full-stack work with Node.js, NestJS,
                  PostgreSQL, Redis, Go, and AI/RAG applications.
                </p>
                <p>
                  <span className="text-[#E97451]">{">"}</span> Currently
                  shipping at <span className="text-[#5AA8FF]">BerryLabs</span>,
                  where I lead the frontend for a real-time analytics platform
                  used by thousands of teams worldwide.
                </p>
                <p>
                  <span className="text-[#E97451]">{">"}</span> When I&apos;m
                  not coding, you&apos;ll find me contributing to open source,
                  mentoring junior devs, or sketching UI concepts at a local
                  café.
                </p>
              </div>

              {/* Information pills */}
              <div className="mt-8 pt-6 border-t border-[#173248]">
                <div className="flex items-center gap-2 mb-4 font-mono text-[12px] text-[#6E7B88] uppercase tracking-wider">
                  <span className="text-[#E97451]">_</span>
                  Quick Info
                </div>
                <div className="flex flex-wrap gap-2">
                  {PILLS.map((p, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="inline-flex items-center gap-2 px-5 py-4 rounded-[16px] bg-[#16334B] border border-[#23425B] hover:border-[#315A7A] transition-colors"
                      style={{ padding: "16px 20px" }}
                    >
                      <p.icon className="w-3.5 h-3.5 text-[#7EE7C4]" />
                      <span className="font-mono text-[13px] text-[#BFC8D1]">
                        {p.label}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
