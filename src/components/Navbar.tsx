"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Github, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Lock for Mobile Menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#steps" },
    { name: "Pricing", href: "#pricing" },
  ];

  // Animation Variants for Smooth Stagger
  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* Top Banner */}
      <div className="hidden md:flex bg-orange-500 py-1.5 justify-center items-center gap-2">
        <Zap size={10} className="fill-black text-black" />
        <span className="text-[9px] font-black tracking-[0.3em] text-black uppercase italic">
          High-end design for fast-growing startups
        </span>
      </div>

      <nav className={`flex justify-center px-4 transition-all duration-700 ${scrolled ? "mt-4" : "mt-8"}`}>
        <div className={`
          relative flex items-center justify-between w-full max-w-5xl px-6 py-2.5
          border border-white/5 transition-all duration-700
          ${scrolled
            ? "bg-black/60 backdrop-blur-3xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            : "bg-black/20 backdrop-blur-md rounded-full"
          }
        `}>

          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer relative z-[110]">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-black font-black text-lg italic">O</span>
            </div>
            <span className="text-2xl font-medium tracking-tighter text-white">
              Obizax<span className="text-orange-500">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-white/5 border border-white/5 px-6 py-2 rounded-full">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-bold text-gray-400 hover:text-white transition-all uppercase tracking-[0.2em]">
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-4 relative z-[110]">
            <button className="hidden md:flex items-center gap-2 bg-white text-black text-[10px] px-6 py-2.5 rounded-full font-medium-400 tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-500">
              GET STARTED <ArrowUpRight size={14} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-white bg-white/5 rounded-full border border-white/10"
            >
              <AnimatePresence mode="wait">
                {isOpen ? <X size={20} key="x" /> : <Menu size={20} key="m" />}
              </AnimatePresence>
            </button>
          </div>

          {/* --- ULTRA-MODERN FULLSCREEN OVERLAY --- */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: "circle(0% at 90% 10%)", // Top-right se circle shape mein khulega
                  borderRadius: "0px 0px 0px 100%"   // Rounded corner effect
                }}
                animate={{
                  opacity: 1,
                  clipPath: "circle(150% at 90% 10%)",
                  borderRadius: "0px"
                }}
                exit={{
                  opacity: 0,
                  clipPath: "circle(0% at 90% 10%)",
                  borderRadius: "0px 0px 0px 100%"
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.19, 1, 0.22, 1] // Apple-style smooth ease
                }}
                className="fixed inset-0 bg-black z-[105] flex flex-col justify-center px-10 h-[100dvh] w-screen left-0 top-0 overflow-hidden"
              >
                {/* Background Text Deco - Pehle se behtar placement */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.02] pointer-events-none select-none uppercase">
                  Obizax
                </div>

                <div className="space-y-8 relative z-[106]">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-6 text-6xl font-black text-white hover:text-orange-500 transition-colors tracking-tighter"
                      >
                        <span className="text-sm font-mono text-orange-500/40 group-hover:text-orange-500">0{i + 1}</span>
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Footer in Menu */}
                <div className="absolute bottom-12 left-10 right-10 flex flex-col gap-6">
                  <div className="h-[1px] w-full bg-white/10" />
                  <div className="flex justify-between items-center text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase italic">
                    <span>© 2026 Obizax Studio</span>
                    <a href="https://github.com/rohitYaduvanshi" target="_blank">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}