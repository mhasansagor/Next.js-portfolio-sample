"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star, Eye } from "lucide-react";
import SectionTitle from "@/components/ui-portfolio/section-title";

type GalleryItem = {
  title: string;
  category: string;
  year: string;
  tags: string[];
  accent: "#E97451" | "#7EE7C4" | "#5AA8FF";
  visual: "dashboard" | "storefront" | "mobile" | "design-system" | "extension" | "marketing";
};

const GALLERY: GalleryItem[] = [
  { title: "Pulse Fitness", category: "Mobile App", year: "2024", tags: ["React Native", "Expo"], accent: "#E97451", visual: "mobile" },
  { title: "Atlas Design System", category: "Design System", year: "2024", tags: ["React", "Radix", "Storybook"], accent: "#7EE7C4", visual: "design-system" },
  { title: "Orbit DevTools", category: "Open Source", year: "2023", tags: ["TypeScript", "Vite", "Chrome API"], accent: "#5AA8FF", visual: "extension" },
  { title: "Vertex Studio", category: "Marketing Site", year: "2023", tags: ["Next.js", "WebGL", "GSAP"], accent: "#E97451", visual: "marketing" },
];

function Visual({ type, accent }: { type: GalleryItem["visual"]; accent: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center p-8"
      style={{
        background: `linear-gradient(135deg, ${accent}20 0%, transparent 50%, ${accent}08 100%)`,
      }}
    >
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative w-full max-w-xs rounded-[12px] border border-[#23425B] bg-[#021D34] overflow-hidden shadow-card">
        {/* Window bar */}
        <div className="h-7 border-b border-[#173248] bg-[#011629] flex items-center px-3 gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: `${accent}99` }} />
          <span className="w-2 h-2 rounded-full bg-[#7EE7C4]/60" />
          <span className="w-2 h-2 rounded-full bg-[#5AA8FF]/60" />
        </div>

        {/* Visual content */}
        <div className="p-4">
          {type === "mobile" && (
            <div className="mx-auto w-24 h-40 rounded-[16px] border-2 border-[#23425B] bg-[#011629] p-2 space-y-1.5">
              <div className="h-1.5 w-8 mx-auto rounded-full bg-[#23425B]" />
              <div className="h-3 rounded" style={{ background: `${accent}40` }} />
              <div className="grid grid-cols-2 gap-1">
                <div className="h-6 rounded bg-[#09233B]" />
                <div className="h-6 rounded bg-[#09233B]" />
              </div>
              <div className="h-8 rounded" style={{ background: `${accent}30` }} />
              <div className="h-2 rounded-full bg-[#173248]" />
              <div className="h-2 rounded-full w-2/3 bg-[#173248]" />
            </div>
          )}
          {type === "design-system" && (
            <div className="space-y-2">
              <div className="flex gap-1.5">
                {[accent, "#7EE7C4", "#5AA8FF", "#23425B"].map((c, k) => (
                  <div key={k} className="w-6 h-6 rounded" style={{ background: c }} />
                ))}
              </div>
              <div className="h-3 rounded w-1/2" style={{ background: `${accent}40` }} />
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-8 rounded border border-[#23425B] bg-[#09233B]" />
                <div className="h-8 rounded border" style={{ borderColor: accent, background: `${accent}15` }} />
                <div className="h-8 rounded border border-[#23425B] bg-[#09233B]" />
              </div>
              <div className="h-2 rounded-full bg-[#173248]" />
              <div className="h-2 rounded-full w-3/4 bg-[#173248]" />
            </div>
          )}
          {type === "extension" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="h-2 w-12 rounded-full" style={{ background: accent }} />
                <div className="h-4 w-4 rounded" style={{ background: `${accent}40` }} />
              </div>
              <div className="space-y-1 pt-1">
                {[1, 2, 3, 4].map((k) => (
                  <div key={k} className="flex items-center gap-1.5">
                    <div className="h-1 w-1 rounded-full" style={{ background: accent }} />
                    <div className="h-1.5 flex-1 rounded-full bg-[#173248]" />
                    <div className="h-3 w-6 rounded" style={{ background: `${accent}30` }} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {type === "marketing" && (
            <div className="space-y-2">
              <div className="h-12 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${accent}40, transparent)` }}>
                <div className="font-mono text-[14px]" style={{ color: accent }}>Aa</div>
              </div>
              <div className="h-2 rounded-full w-3/4" style={{ background: `${accent}40` }} />
              <div className="h-2 rounded-full w-full bg-[#173248]" />
              <div className="grid grid-cols-3 gap-1">
                <div className="h-6 rounded bg-[#09233B]" />
                <div className="h-6 rounded bg-[#09233B]" />
                <div className="h-6 rounded bg-[#09233B]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines-fine opacity-25" />
      <div className="relative container-term">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionTitle
            index="06"
            label="Gallery"
            title="More from the"
            highlight="archive."
            highlightColor="green"
            description="A broader selection of work spanning mobile, design systems, open source, and experimental projects."
          />
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-[14px] text-[#BFC8D1] hover:text-[#E97451] transition-colors self-start lg:self-auto"
          >
            View all on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2-col grid */}
        <div
          className="grid sm:grid-cols-2"
          style={{ gap: "32px" }}
        >
          {GALLERY.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[24px] border border-[#23425B] bg-[#09233B] overflow-hidden hover-scale hover:border-[#315A7A] hover:shadow-card"
              style={{ height: "480px" }}
            >
              {/* Visual area (top 60%) */}
              <div className="relative h-[60%] overflow-hidden">
                <Visual type={p.visual} accent={p.accent} />
                {/* Year badge */}
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-[#011629]/80 backdrop-blur-md border border-[#23425B] font-mono text-[12px] text-[#BFC8D1]">
                  {p.year}
                </div>
                {/* Arrow */}
                <div
                  className="absolute top-5 right-5 w-9 h-9 rounded-full border flex items-center justify-center transition-all group-hover:rotate-45"
                  style={{
                    borderColor: p.accent,
                    color: p.accent,
                    background: `${p.accent}15`,
                  }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Description area (bottom 40%) */}
              <div className="relative p-7 border-t border-[#173248] flex flex-col justify-between" style={{ height: "40%" }}>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-mono text-[12px] tracking-[0.2em] uppercase"
                      style={{ color: p.accent }}
                    >
                      {p.category}
                    </span>
                    <span className="h-px flex-1 bg-[#173248]" />
                  </div>
                  <h3
                    className="font-mono font-medium text-[#F5F7FA] tracking-tight"
                    style={{ fontSize: "24px" }}
                  >
                    {p.title}
                  </h3>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-[#BFC8D1] rounded-full px-2.5 py-1 bg-[#16334B] border border-[#23425B]"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1 font-mono text-[11px] text-[#6E7B88]">
                    <Eye className="w-3 h-3" />
                    {(i + 1) * 1.4}k
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
