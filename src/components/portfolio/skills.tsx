"use client";

import { motion } from "framer-motion";
import TerminalWindow from "@/components/ui-portfolio/terminal-window";
import SectionTitle from "@/components/ui-portfolio/section-title";

const STATS = [
  { value: "6+", label: "Years Experience", color: "#E97451" },
  { value: "150+", label: "Projects", color: "#7EE7C4" },
  { value: "100%", label: "Client Satisfaction", color: "#5AA8FF" },
];

const SKILLS = [
  { name: "React / Next.js", level: 96, color: "#E97451" },
  { name: "TypeScript", level: 92, color: "#5AA8FF" },
  { name: "Tailwind CSS", level: 95, color: "#7EE7C4" },
  { name: "Node.js / Bun", level: 88, color: "#E97451" },
  { name: "UI / UX Design", level: 84, color: "#7EE7C4" },
  { name: "DevOps / Docker", level: 78, color: "#5AA8FF" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines-fine opacity-30" />
      <div className="relative container-term">
        {/* Section title */}
        <SectionTitle
          index="02"
          label="Skills & Experience"
          title="My technical"
          highlight="stack."
          highlightColor="orange"
          description="A curated toolkit refined over a decade of shipping production-grade web applications at scale."
        />

        {/* Body — 2 cols */}
        <div className="mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT — Stats (3 stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-7 rounded-[20px] border border-[#23425B] bg-[#09233B] hover-lift hover:border-[#315A7A] shadow-card"
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div
                      className="font-mono font-semibold leading-none"
                      style={{ fontSize: "42px", color: s.color }}
                    >
                      {s.value}
                    </div>
                    <div className="mt-3 font-mono text-[14px] text-[#BFC8D1] tracking-wider uppercase">
                      {s.label}
                    </div>
                  </div>
                  <div className="font-mono text-[12px] text-[#6E7B88]">
                    0{i + 1} / 03
                  </div>
                </div>

                {/* Decorative bottom strip */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-[#E97451] font-mono text-[11px]">{">"}</span>
                  <div className="h-px flex-1 bg-[#173248]">
                    <div
                      className="h-px"
                      style={{
                        width: `${75 + i * 8}%`,
                        background: s.color,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Terminal window with skills */}
          <div className="lg:col-span-7">
            <TerminalWindow title="mehedi@hasan ~ skills %" delay={0.15}>
              <div className="font-mono">
                {/* Header line */}
                <div className="flex items-center gap-2 mb-6 text-[14px]">
                  <span className="text-[#6E7B88]">$</span>
                  <span className="text-[#7EE7C4]">cat</span>
                  <span className="text-[#F5F7FA]">skills.config.json</span>
                  <span className="cursor-blink text-[#E97451]">_</span>
                </div>

                {/* Skills list */}
                <div className="space-y-5">
                  {SKILLS.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    >
                      <div className="flex items-center justify-between mb-2 text-[14px]">
                        <div className="flex items-center gap-2">
                          <span className="text-[#6E7B88]">{">"}</span>
                          <span className="text-[#F5F7FA]">{skill.name}</span>
                        </div>
                        <span
                          className="font-mono text-[12px]"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 w-full rounded-full bg-[#011629] border border-[#173248] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            delay: 0.3 + i * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full rounded-full"
                          style={{ background: skill.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer command line */}
                <div className="mt-7 pt-5 border-t border-[#173248] flex items-center gap-2 text-[13px]">
                  <span className="text-[#6E7B88]">$</span>
                  <span className="text-[#7EE7C4]">run</span>
                  <span className="text-[#F5F7FA]">build --production</span>
                  <span className="cursor-blink text-[#E97451] ml-1">_</span>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
