"use client";
import { motion } from "framer-motion";
// Tech Icons import kar rahe hain
import { 
  SiNextdotjs, SiReact, SiTypescript, SiPostgresql, 
  SiPython, SiPandas, SiNumpy, SiTailwindcss, SiFramer 
} from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "Pandas", icon: <SiPandas className="text-white" /> },
  { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
];

export default function Portfolio() {
  return (
    <div className="relative">
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

          {/* Running Tech Bar - Infinite Scroll */}
          <div className="mb-20 overflow-hidden relative w-full  py-8">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex whitespace-nowrap gap-16 md:gap-24 items-center w-max"
            >
              {/* Do baar map kar rahe hain infinite loop ke liye */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 md:gap-24 items-center">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 group cursor-default"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {tech.icon}
                      </span>
                      <span className="text-xl text-white uppercase">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Premium Video Frame */}
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