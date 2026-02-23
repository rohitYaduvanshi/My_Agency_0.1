"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Step", href: "#steps" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 w-full z-[100] flex justify-center px-4"
    >
      <div className="relative flex items-center justify-between w-full max-w-4xl px-4 md:px-6 py-2.5 border border-white/10 bg-black/60 backdrop-blur-xl rounded-full shadow-2xl">
        
        {/* Logo */}
        <div className="text-xl font-medium text-white pl-2">Obizax</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[13px] text-gray-400 font-medium justify-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button className="hidden md:block bg-white text-black text-[12px] px-6 py-2.5 rounded-full font-medium hover:bg-[#f25e24] hover:text-white transition-all duration-300">
            Get Started
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- Mobile Menu Overlay --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-16 left-0 right-0 bg-[#0a0a0a] border border-white/10 rounded-[32px] p-6 flex flex-col gap-4 shadow-3xl md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 text-lg font-meium hover:text-[#f25e24] transition-colors px-4 py-2 border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-[#f25e24] text-white py-4 rounded-2xl font-medium text-lg shadow-lg shadow-orange-500/20">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}