"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  index?: string; // e.g. "02"
  label: string; // e.g. "ABOUT"
  title: string;
  highlight?: string; // colored part
  highlightColor?: "orange" | "green" | "blue";
  description?: string;
  align?: "left" | "center";
}

const colorMap = {
  orange: "text-[#E97451]",
  green: "text-[#7EE7C4]",
  blue: "text-[#5AA8FF]",
};

export default function SectionTitle({
  index,
  label,
  title,
  highlight,
  highlightColor = "orange",
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <div className="flex items-center gap-3">
        {index && (
          <span className="font-mono text-[12px] text-[#6E7B88] tracking-widest">
            {index}
          </span>
        )}
        <span className="h-px w-8 bg-[#23425B]" />
        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#6E7B88]">
          {label}
        </span>
      </div>

      <h2
        className="font-mono font-medium tracking-tight leading-[1.05] text-[#F5F7FA]"
        style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
      >
        {title}{" "}
        {highlight && (
          <span className={colorMap[highlightColor]}>{highlight}</span>
        )}
      </h2>

      {description && (
        <p
          className={`font-mono text-[#BFC8D1] leading-[28px] mt-2 ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}
          style={{ fontSize: "16px" }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
