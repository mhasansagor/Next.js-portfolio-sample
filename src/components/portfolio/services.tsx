"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Server, Smartphone, Zap, Layers } from "lucide-react";
import SectionTitle from "@/components/ui-portfolio/section-title";
import Badge from "@/components/ui-portfolio/badge";

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    badge: "Frontend",
    description:
      "Building production-grade web apps with React, Next.js & TypeScript. Pixel-perfect, accessible, and lightning fast.",
    color: "#E97451",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    badge: "Design",
    description:
      "Crafting thoughtful interfaces and design systems in Figma. From wireframe to handoff, with developers in mind.",
    color: "#7EE7C4",
  },
  {
    icon: Server,
    title: "Backend & API",
    badge: "Systems",
    description:
      "Designing scalable APIs with Node.js, Bun, and Prisma. REST or GraphQL — I speak both fluently.",
    color: "#5AA8FF",
  },
];

const SECONDARY = [
  { icon: Smartphone, label: "Mobile" },
  { icon: Zap, label: "Performance" },
  { icon: Layers, label: "Architecture" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines-fine opacity-25" />
      <div className="relative container-term">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionTitle
            index="04"
            label="Services"
            title="What I can"
            highlight="do for you."
            highlightColor="blue"
            description="Three core offerings, each refined over a decade of building for the web."
          />
          {/* Secondary chips */}
          <div className="flex flex-wrap gap-2">
            {SECONDARY.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#23425B] bg-[#09233B]/60 font-mono text-[13px] text-[#BFC8D1]"
              >
                <s.icon className="w-3.5 h-3.5 text-[#7EE7C4]" />
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* 3-col grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "32px" }}
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[20px] border border-[#23425B] bg-[#09233B] hover-lift hover:border-[#315A7A] shadow-card overflow-hidden"
              style={{ padding: "40px", minHeight: "240px" }}
            >
              {/* Gradient glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${s.color}22 0%, transparent 60%)`,
                }}
              />

              {/* Top — icon + badge */}
              <div className="relative flex items-start justify-between mb-7">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border"
                  style={{
                    background: `${s.color}15`,
                    borderColor: `${s.color}30`,
                    color: s.color,
                  }}
                >
                  <s.icon className="w-5 h-5" />
                </div>
                <Badge color="neutral" variant="soft" size="sm">
                  {s.badge}
                </Badge>
              </div>

              {/* Middle — title + description */}
              <div className="relative">
                <h3
                  className="font-mono font-medium text-[#F5F7FA] tracking-tight"
                  style={{ fontSize: "28px" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 font-mono text-[#BFC8D1] leading-[28px]"
                  style={{ fontSize: "16px" }}
                >
                  {s.description}
                </p>
              </div>

              {/* Bottom — arrow */}
              <div className="relative mt-8 pt-5 border-t border-[#173248] flex items-center justify-between">
                <span className="font-mono text-[12px] text-[#6E7B88] tracking-wider">
                  0{i + 1} / 0{SERVICES.length}
                </span>
                <div
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all group-hover:rotate-45"
                  style={{
                    borderColor: s.color,
                    color: s.color,
                    background: `${s.color}10`,
                  }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
