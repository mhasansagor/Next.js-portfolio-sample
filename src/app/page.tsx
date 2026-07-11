"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/portfolio/navbar";
import Hero from "@/components/portfolio/hero";
import Skills from "@/components/portfolio/skills";
import About from "@/components/portfolio/about";
import Services from "@/components/portfolio/services";
import PortfolioList from "@/components/portfolio/portfolio-list";
import PortfolioGallery from "@/components/portfolio/portfolio-gallery";
import Contact from "@/components/portfolio/contact";
import Footer from "@/components/portfolio/footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Cursor glow follows pointer on desktop
  const [mouse, setMouse] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative min-h-screen flex flex-col bg-[#011629] text-[#F5F7FA] overflow-x-hidden"
    >
      {/* Scroll progress bar — top */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[70]"
      >
        <div className="h-full w-full bg-gradient-to-r from-[#E97451] via-[#7EE7C4] to-[#5AA8FF]" />
      </motion.div>

      {/* Cursor glow — desktop only */}
      <div
        aria-hidden
        className="pointer-events-none fixed w-[480px] h-[480px] rounded-full hidden lg:block z-0"
        style={{
          left: mouse.x - 240,
          top: mouse.y - 240,
          background:
            "radial-gradient(circle, rgba(233,116,81,0.05) 0%, transparent 60%)",
          transition: "left 0.18s ease-out, top 0.18s ease-out",
        }}
      />

      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        <Skills />
        <About />
        <Services />
        <PortfolioList />
        <PortfolioGallery />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  );
}
