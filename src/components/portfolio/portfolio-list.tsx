"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import SectionTitle from "@/components/ui-portfolio/section-title";

type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  accent: "#E97451" | "#7EE7C4" | "#5AA8FF";
};

const PROJECTS: Project[] = [
  {
    title: "Nimbus Analytics",
    category: "Web App / SaaS",
    year: "2025",
    description:
      "A real-time analytics dashboard for SaaS teams. Built with Next.js, WebSocket streams, and a custom chart engine rendering 50k+ points without dropping a frame. Shipped to 4k+ teams.",
    tags: ["Next.js", "TypeScript", "WebSocket", "D3.js"],
    accent: "#E97451",
  },
  {
    title: "Lumen Commerce",
    category: "E-commerce / Headless",
    year: "2025",
    description:
      "Headless storefront powering a fashion brand with 200k monthly visitors. Stripe checkout, Algolia search, and a custom CMS — all built from scratch with a 99 Lighthouse score.",
    tags: ["React", "Stripe", "Algolia", "Prisma"],
    accent: "#7EE7C4",
  },
];

export default function PortfolioList() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 diag-overlay opacity-40" />
      <div className="relative container-term">
        <SectionTitle
          index="05"
          label="Featured Work"
          title="Selected"
          highlight="projects."
          highlightColor="orange"
          description="A curated selection of recent client and personal projects, each shipped end-to-end."
        />

        <div className="mt-14 flex flex-col gap-8">
          {PROJECTS.map((p, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-[24px] border border-[#23425B] bg-[#09233B] overflow-hidden hover:border-[#315A7A] transition-all shadow-card"
                style={{ minHeight: "420px" }}
              >
                <div
                  className={`grid lg:grid-cols-2 ${isReversed ? "lg:[direction:rtl]" : ""}`}
                >
                  {/* LEFT — Visual */}
                  <div className="relative h-[280px] lg:h-auto overflow-hidden [direction:ltr]">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${p.accent}25 0%, transparent 50%, ${p.accent}10 100%)`,
                      }}
                    />
                    <div className="absolute inset-0 grid-lines opacity-40" />

                    {/* Floating window mockup */}
                    <div className="absolute inset-0 flex items-center justify-center p-10">
                      <div className="w-full max-w-sm rounded-[16px] border border-[#23425B] bg-[#021D34] shadow-card overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="h-8 border-b border-[#173248] bg-[#011629] flex items-center px-3 gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#E97451]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#7EE7C4]/70" />
                          <span className="w-2 h-2 rounded-full bg-[#5AA8FF]/70" />
                          <span className="ml-3 font-mono text-[10px] text-[#6E7B88]">
                            {p.title.toLowerCase().replace(/\s+/g, "-")}.app
                          </span>
                        </div>
                        <div className="p-5 space-y-2.5">
                          <div className="h-3 rounded-full w-3/4" style={{ background: `${p.accent}40` }} />
                          <div className="h-3 rounded-full w-full bg-[#173248]" />
                          <div className="h-3 rounded-full w-5/6 bg-[#173248]" />
                          <div className="grid grid-cols-3 gap-2 pt-2">
                            <div className="h-12 rounded-md bg-[#011629] border border-[#173248]" />
                            <div className="h-12 rounded-md" style={{ background: `${p.accent}25` }} />
                            <div className="h-12 rounded-md bg-[#011629] border border-[#173248]" />
                          </div>
                          <div className="h-3 rounded-full w-2/3 bg-[#173248] mt-3" />
                        </div>
                      </div>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-[#011629]/80 backdrop-blur-md border border-[#23425B] font-mono text-[12px] text-[#BFC8D1]">
                      {p.year}
                    </div>
                  </div>

                  {/* RIGHT — Description */}
                  <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between [direction:ltr]">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="font-mono text-[12px] tracking-[0.2em] uppercase"
                          style={{ color: p.accent }}
                        >
                          {p.category}
                        </span>
                        <span className="h-px flex-1 bg-[#173248]" />
                        <span className="font-mono text-[12px] text-[#6E7B88]">
                          0{i + 1} / 0{PROJECTS.length}
                        </span>
                      </div>

                      <h3
                        className="font-mono font-medium text-[#F5F7FA] tracking-tight"
                        style={{ fontSize: "32px" }}
                      >
                        {p.title}
                      </h3>

                      <p
                        className="mt-5 font-mono text-[#BFC8D1]"
                        style={{ fontSize: "16px", lineHeight: "30px" }}
                      >
                        {p.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[14px] text-[#BFC8D1] rounded-full"
                            style={{
                              padding: "10px 18px",
                              background: "#16334B",
                              border: "1px solid #23425B",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-[#173248] flex items-center justify-between">
                      <div className="flex items-center gap-4 font-mono text-[13px] text-[#6E7B88]">
                        <span className="inline-flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5" style={{ color: p.accent }} />
                          {(i + 3) * 124}
                        </span>
                        <span>|</span>
                        <span className="inline-flex items-center gap-1.5">
                          <Github className="w-3.5 h-3.5" />
                          Source
                        </span>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 font-mono text-[13px] text-[#F5F7FA] hover:text-[#E97451] transition-colors"
                      >
                        View Case
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
