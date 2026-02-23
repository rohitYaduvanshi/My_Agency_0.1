"use client";
import { motion } from "framer-motion";

const items = ["Brand Design", "Logo Design", "Website Design", "UI/UX Experience", "10 + Clients"];

const stats = [
  { value: "10+", label: "Global projects complete successfully" },
  { value: "4/5", label: "Positive reviews", hasStars: true },
  { value: "₹100k+", label: "Valuation influenced by our design" },
  { value: "2025", label: "Founded, 6 years of experience" }
];

export default function About() {
  return (
    /* Root container par hamesha overflow-x-hidden rakhein safety ke liye */
    <div className="relative overflow-x-hidden w-full">
      {/* 1. Stats Counter Section */}
      <section className="bg-gray-100 py-16 px-6 relative z-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col md:flex-row items-baseline md:items-center gap-2 md:gap-4">
              <span className="text-5xl md:text-6xl font-bold tracking-tighter text-black">
                {stat.value}
              </span>
              <div className="flex flex-col">
                {stat.hasStars && (
                  <div className="flex text-red-500 text-xs mb-1">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                )}
                <p className="text-[13px] leading-tight text-gray-900 font-medium max-w-[120px]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Crossing Tickers & Intro Section */}
      <section className="relative bg-[#fffdd0] overflow-hidden">
        {/* Sinusoidal Blend Overlay */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

        {/* Ticker Container: Ispe 'overflow-hidden' hona sabse zaroori hai */}
        <div className="relative h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden mb-16">
          
          {/* Orange Ticker */}
          {/* Mobile par scale aur width ko adjust kiya hai taaki overflow na ho */}
          <div className="absolute w-[200%] md:w-[150%] rotate-[-5deg] z-20 left-[-50%] md:left-[-25%]">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 whitespace-nowrap"
            >
              {[...items, ...items, ...items].map((text, i) => (
                <div key={i} className="px-6 py-3 md:px-8 md:py-4 bg-[#ff4d00] text-white text-lg md:text-2xl font-black rounded-2xl flex items-center gap-4 shadow-2xl uppercase italic border border-white/10">
                  {text} <span className="opacity-30 font-light not-italic text-sm">✕</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Black Ticker */}
          <div className="absolute w-[200%] md:w-[150%] rotate-[4deg] z-10 left-[-50%] md:left-[-25%]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 whitespace-nowrap"
            >
              {[...items, ...items, ...items].map((text, i) => (
                <div key={i} className="px-6 py-3 md:px-8 md:py-4 bg-black text-white text-lg md:text-2xl font-black rounded-2xl flex items-center gap-4 shadow-2xl uppercase italic border border-white/5">
                  {text} <span className="opacity-30 font-light not-italic text-sm">✕</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Intro Text Section */}
        <div className="max-w-5xl mx-auto text-center px-6 pt-10 pb-20 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-600 font-serif italic text-3xl block mb-8"
          >
            (hello)
          </motion.span>

          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.05] text-black">
            We help fast moving digital startups <br />
            <span className="text-gray-400 font-medium">launch sharper brands and websites.</span>
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {["Branding", "Logo", "Website", "Illustration", "Interface", "Strategy"].map((tag, i) => (
              <button 
                key={i} 
                className="px-6 py-2 md:px-8 md:py-3 bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 rounded-full text-xs md:text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}