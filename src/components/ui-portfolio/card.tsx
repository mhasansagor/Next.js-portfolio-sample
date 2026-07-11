"use client";

import { motion } from "framer-motion";
import { forwardRef, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: "lift" | "scale" | "none";
  delay?: number;
  glow?: boolean;
}

const hoverMap = {
  lift: "hover-lift hover:border-[#315A7A]",
  scale: "hover-scale",
  none: "",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hover = "lift", delay = 0, glow = false, children, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`relative rounded-[20px] border border-[#23425B] bg-[#09233B] shadow-card overflow-hidden ${hoverMap[hover]} ${className}`}
        {...(rest as any)}
      >
        {glow && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(233,116,81,0.06)] via-transparent to-[rgba(90,168,255,0.04)]" />
        )}
        <div className="relative">{children}</div>
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export default Card;
