"use client";

import { forwardRef } from "react";

type ButtonVariant = "default" | "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "button";
}

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "a";
  href: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[12px] rounded-full",
  md: "h-11 px-6 text-[14px] rounded-full",
  lg: "h-12 px-7 text-[14px] rounded-full",
};

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-transparent border border-[#38546A] text-[#F5F7FA] hover:bg-[rgba(255,255,255,0.06)] hover:border-[#315A7A]",
  primary:
    "bg-[#E97451] border border-[#E97451] text-[#011629] font-semibold hover:bg-[#d96541] hover:border-[#d96541] hover:shadow-[0_8px_24px_rgba(233,116,81,0.35)]",
  ghost:
    "bg-transparent border border-transparent text-[#BFC8D1] hover:text-[#F5F7FA] hover:bg-[rgba(255,255,255,0.04)]",
};

export function Button(props: ButtonProps | ButtonLinkProps) {
  const { variant = "default", size = "md", className = "", ...rest } = props as any;
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (props.as === "a") {
    const { as: _as, variant: _v, size: _s, className: _c, ...anchorProps } =
      props as ButtonLinkProps;
    return <a className={cls} {...anchorProps} />;
  }
  const { as: _as, variant: _v, size: _s, className: _c, ...btnProps } =
    props as ButtonProps;
  return <button className={cls} {...btnProps} />;
}

export default Button;
