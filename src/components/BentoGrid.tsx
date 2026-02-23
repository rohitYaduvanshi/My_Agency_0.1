"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    desc: "Clean & intuitive interfaces.",
    size: "md:col-span-2",
    img: "https://blogs.findingpi.com/wp-content/uploads/2022/03/how-important-uiux-V2-2.jpg"
  },
  {
    title: "Web3",
    desc: "Smart contracts & DApps.",
    size: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop"
  },
  {
    title: "Branding",
    desc: "Identity that resonates.",
    size: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "SaaS Apps",
    desc: "Scalable software solutions.",
    size: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
  }
];

const badges = [
  "CUSTOM WEBSITE DESIGN",
  "HIGH-CONVERTING LANDING PAGES",
  "E-COMMERCE DEVELOPMENT",
  "WORDPRESS EXPERTS",
  "NEXT.JS DEVELOPMENT",
  "UI/UX OPTIMIZATION",
  "SPEED OPTIMIZED",
  "SEO FRIENDLY",
  "MOBILE FIRST DESIGN",
  "CONVERSION FOCUSED",
  "10+ WEBSITES BUILT",
  "GLOBAL CLIENTS",
];

const moreBadges = [
  "10+ WEBSITES BUILT",
  "GROWING PORTFOLIO",
  "TRUSTED BY CLIENTS",
  "QUALITY OVER QUANTITY",
  "CUSTOM BUILDS ONLY",
  "UI/UX FOCUSED",
  "PERFORMANCE READY",
];

export default function BentoGrid() {
  return (
    <section className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 tracking-tighter text-black">Our Expertise</h2>
         
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            {badges.map((b, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {moreBadges.map((b, idx) => (
              <span
                key={`more-${idx}`}
                className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`${s.size} group relative overflow-hidden rounded-[32px] bg-[#0a0a0a] min-h-[350px] flex flex-col justify-end p-8 border border-white/5 shadow-2xl`}
            >
              {/* Image Layer */}
              <img 
                src={s.img} 
                alt={s.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 font-light">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}