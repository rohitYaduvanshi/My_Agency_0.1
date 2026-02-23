"use client";
import { motion } from "framer-motion";

const items = ["Brand Design", "Logo Design", "Website Design", "UI/UX Experience", "10 + Clients"];

export default function Portfolio() {
  return (
    <div className="relative">
      {/* SECTION 1: Portfolio (Dark Content) */}
      <section className="relative py-32 px-6 overflow-visible z-10 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
        
        {/* Dynamic Amber/Orange Glow */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[400px] bg-orange-600/15 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="mb-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
            >
              Where Strategy Meets Design
            </motion.h2>
            <p className="mt-4 text-gray-400 text-lg font-light">
              Crafting digital experiences that matter.
            </p>
          </div>

          {/* Running Logo Bar - Infinite Scroll */}
          <div className="mb-20 overflow-hidden relative w-full">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex whitespace-nowrap gap-16 md:gap-24 items-center w-max"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 md:gap-24 items-center opacity-30 grayscale hover:opacity-50 transition-opacity">
                  <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-sm rotate-45" /> Logoipsum
                  </span>
                  <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full" /> Logoipsum
                  </span>
                  <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-sm" /> Logoipsum
                  </span>
                  <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full" /> Logoipsum
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Premium Video Frame with Amber Border Shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative w-full aspect-video rounded-[30px] md:rounded-[40px] p-[1px] bg-gradient-to-b from-orange-500/40 to-transparent shadow-[0_-20px_60px_-20px_rgba(234,88,12,0.25)] overflow-hidden"
          >
            <div className="relative w-full h-full rounded-[29px] md:rounded-[39px] overflow-hidden bg-black">
              <iframe
                src="https://player.vimeo.com/video/1152869665?autoplay=1&loop=1&muted=1&background=1"
                className="absolute top-0 left-0 w-full h-full scale-[1.05]"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}