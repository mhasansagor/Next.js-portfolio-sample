"use client";

interface BadgeProps {
  children: React.ReactNode;
  color?: "orange" | "green" | "blue" | "neutral";
  variant?: "solid" | "soft" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const colorMap = {
  orange: {
    solid: "bg-[#E97451] text-[#011629] border-[#E97451]",
    soft: "bg-[rgba(233,116,81,0.10)] text-[#E97451] border-[rgba(233,116,81,0.25)]",
    outline: "bg-transparent text-[#E97451] border-[#E97451]/40",
  },
  green: {
    solid: "bg-[#7EE7C4] text-[#011629] border-[#7EE7C4]",
    soft: "bg-[rgba(126,231,196,0.10)] text-[#7EE7C4] border-[rgba(126,231,196,0.25)]",
    outline: "bg-transparent text-[#7EE7C4] border-[#7EE7C4]/40",
  },
  blue: {
    solid: "bg-[#5AA8FF] text-[#011629] border-[#5AA8FF]",
    soft: "bg-[rgba(90,168,255,0.10)] text-[#5AA8FF] border-[rgba(90,168,255,0.25)]",
    outline: "bg-transparent text-[#5AA8FF] border-[#5AA8FF]/40",
  },
  neutral: {
    solid: "bg-[#16334B] text-[#BFC8D1] border-[#23425B]",
    soft: "bg-[#16334B]/60 text-[#BFC8D1] border-[#23425B]",
    outline: "bg-transparent text-[#BFC8D1] border-[#23425B]",
  },
};

const sizeMap = {
  sm: "text-[11px] px-2.5 py-1 rounded-full",
  md: "text-[12px] px-3 py-1.5 rounded-full",
};

export default function Badge({
  children,
  color = "neutral",
  variant = "soft",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider border ${colorMap[color][variant]} ${sizeMap[size]} ${className}`}
    >
      {children}
    </span>
  );
}
