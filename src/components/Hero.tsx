"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  
  return (
    <section className="relative pt-44 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background Glow */}
       <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          Design Subscription for Agencies
        </span>

        <h1 className="mt-8 text-6xl md:text-[90px] font-bold tracking-tighter leading-[0.95] text-white max-w-4xl">
          Scale your website <br />
          <span className="text-gray-500">with unlimited design.</span>
        </h1>

        <p className="mt-10 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          The all-in-one design partner for fast-growing startups.
          Get high-end designs delivered in record time.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          {/* 1. View Plans Button -> Pricing Section Par Jayega */}
          <a href="#pricing">
            <button className="group px-8 py-3.5 bg-white text-black rounded-full font-medium text-md flex items-center gap-2 hover:bg-[#f25e24] hover:text-white transition-all shadow-xl active:scale-95">
              View Plans
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </a>

          {/* 2. See Our Work Button -> Portfolio Section Par Jayega */}
          <a href="#services">
            <button className="px-10 py-3.5 border border-white/20 text-white rounded-full font-medium text-md hover:bg-white/5 transition-all active:scale-95">
              See Our Work
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}