"use client";

import { Github, Linkedin, Twitter, Dribbble, ArrowUp } from "lucide-react";

const SOCIALS = [
  { Icon: Github, label: "GitHub", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Dribbble, label: "Dribbble", href: "#" },
];

const LINKS = [
  { label: "Welcome", href: "#welcome" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Project", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#173248] bg-[#021D34] mt-auto">
      <div className="absolute inset-0 grid-lines-fine opacity-20" />

      <div className="relative container-term py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollTo("#welcome")}
              className="flex items-center gap-2.5 mb-5"
            >
              <div className="w-9 h-9 rounded-lg bg-[#E97451] flex items-center justify-center">
                <span className="font-mono font-bold text-[#011629] text-sm">M</span>
              </div>
              <span className="font-mono font-medium text-[18px] tracking-tight text-[#F5F7FA]">
                Matthew<span className="text-[#E97451]">.</span>D
              </span>
            </button>
            <p className="font-mono text-[14px] text-[#6E7B88] leading-[24px] max-w-xs">
              Senior frontend engineer crafting futuristic, performant web
              experiences from San Francisco.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-[#23425B] flex items-center justify-center text-[#BFC8D1] hover:text-[#E97451] hover:border-[#315A7A] transition-colors"
                >
                  <s.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#6E7B88] mb-5">
              <span className="text-[#E97451]">_</span> Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="font-mono text-[14px] text-[#BFC8D1] hover:text-[#E97451] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:justify-self-end md:text-right">
            <h4 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#6E7B88] mb-5">
              <span className="text-[#E97451]">_</span> Let&apos;s connect
            </h4>
            <p className="font-mono text-[14px] text-[#BFC8D1] mb-4 max-w-xs md:ml-auto">
              Available for new projects in Q3 2026.
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#38546A] text-[#F5F7FA] font-mono text-[13px] uppercase tracking-wider hover:bg-[rgba(255,255,255,0.06)] hover:border-[#315A7A] transition-all"
            >
              Start a project
              <ArrowUp className="w-3.5 h-3.5 rotate-45" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#173248] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[12px] text-[#6E7B88]">
          <p>© {new Date().getFullYear()} Matthew Dodger. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <span className="text-[#E97451]">{">"}</span>
            Designed &amp; built in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
}
