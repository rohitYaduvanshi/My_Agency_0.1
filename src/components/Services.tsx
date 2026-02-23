"use client";
import { motion } from "framer-motion";
import { 
  MessageSquare, Share2, Code2, Mic, Send, Paperclip, 
  ExternalLink, Sparkles, Target, Zap, ShieldCheck, 
  Globe, Cpu, Layers, Database, Box, Github, Terminal
} from "lucide-react";

// 1. Pinned Projects Data
const pinnedProjects = [
  {
    title: "Propertix Ledger",
    desc: "Blockchain-based land registry system for secure property transfers.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600",
    stack: ["Solidity", "React", "Sepolia"]
  },
  {
    title: "Premium Spa Portal",
    desc: "High-conversion landing page for local luxury wellness businesses.",
    image: "https://images.unsplash.com/photo-1544161515-436cefb657f8?auto=format&fit=crop&q=80&w=600",
    stack: ["Next.js", "Tailwind", "Framer"]
  }
];

// 2. Services Strategy Data
const services = [
  {
    tag: "Building Website and Founding..!",
    strategy: "Launch & Scale",
    title: "Global Deployment",
    desc: "Deploying high-performance websites engineered for SEO, speed, and 100% uptime.",
    features: ["SEO OPTIMIZED", "VERCEL/AWS", "PERFORMANCE CHECK"],
    grid: "md:col-span-3",
    hasProjectShowcase: true,
  }
];

// 3. Updated Stack Logos using Lucide Icons
const stackLogos = [
  { name: "React", icon: <Layers size={24} /> },
  { name: "Next.js", icon: <Globe size={24} /> },
  { name: "TS", icon: <Code2 size={24} /> },
  { name: "Blockchain", icon: <Cpu size={24} /> },
  { name: "Terminal", icon: <Terminal size={24} /> },
  { name: "Database", icon: <Database size={24} /> },
  { name: "GitHub", icon: <Github size={24} /> },
  { name: "Cloud", icon: <Box size={24} /> },
];

export default function Services() {
  return (
    <section
      id="services"   // 👈 ADD THIS
      className="bg-black text-white py-20 px-6 font-sans relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: HEADER & STRATEGY */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">// MY WORKFLOW</span>
              <div className="h-[1px] w-12 bg-orange-500/50" />
            </div>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none">
              Services <br /> <span className="text-gray-500 italic">& Process</span>
            </h2>
          </div>
          <div className="border-l border-white/10 pl-8 max-w-sm">
            <p className="text-gray-400 text-lg leading-tight font-light mb-4">
              I help startups build future-proof digital products through a structured development lifecycle.
            </p>
          </div>
        </div>

        {/* SECTION 2: BENTO GRID SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative bg-[#080808] border border-white/[0.05] rounded-[48px] p-10 md:p-14 transition-all duration-700 hover:bg-[#0c0c0c] ${service.grid}`}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black tracking-[0.2em] text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                    {service.tag}
                  </span>
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-widest italic">
                    {service.strategy}
                  </span>
                </div>
                <div className="flex gap-1.5 p-2 bg-white/5 rounded-full border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                </div>
              </div>

              <div className="relative z-20 mb-12">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-xl leading-relaxed max-w-2xl font-light">{service.desc}</p>
              </div>

              <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] rounded-[40px] p-8 min-h-[320px] shadow-2xl overflow-hidden">
                {service.hasProjectShowcase && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {pinnedProjects.map((project, pIndex) => (
                      <div key={pIndex} className="group/project relative bg-black/40 rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/40 transition-all duration-500">
                        <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
                            <div className="w-2 h-2 rounded-full bg-red-500/20" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                            <div className="w-2 h-2 rounded-full bg-green-500/20" />
                        </div>
                        <div className="aspect-[16/10] overflow-hidden grayscale group-hover/project:grayscale-0 transition-all duration-700">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover scale-110 group-hover/project:scale-100 transition-transform duration-700" />
                        </div>
                        <div className="p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-white font-bold text-xl">{project.title}</h4>
                              <ExternalLink size={16} className="text-orange-500 opacity-0 group-hover/project:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-1">{project.desc}</p>
                            <div className="flex gap-2">
                              {project.stack.map(s => (
                                <span key={s} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/5 text-gray-400 font-bold uppercase">{s}</span>
                              ))}
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="absolute inset-0 rounded-[48px] border border-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* SECTION 3: TECH STACK & INTEGRATED GRID */}
        <div className="mt-32">
          <div className="mb-16">
            <span className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-4 block">// MY TECH STACK</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white">CRAFTING CODE <br /><span className="text-gray-500 font-light italic">with precision</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Live Build Console */}
            <div className="md:col-span-2 relative bg-[#080808] border border-white/[0.05] rounded-[48px] p-10 md:p-14 overflow-hidden shadow-2xl group">
              <div className="flex justify-between items-center mb-10">
                 <h3 className="text-2xl font-bold text-gray-300 tracking-tight">Live Build Console</h3>
                 <div className="flex gap-1.5 p-2 bg-white/5 rounded-full border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                 </div>
              </div>
              <div className="relative bg-black border border-white/10 rounded-3xl p-8 font-mono text-lg min-h-[300px] shadow-inner">
                <div className="flex gap-2 mb-10">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-orange-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="space-y-4 text-gray-400">
                  <div className="flex gap-3"><span className="text-orange-500">❯</span> <span>status:</span> <span className="text-green-500 uppercase font-bold tracking-widest text-sm">active_development</span></div>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                    className="overflow-hidden whitespace-nowrap text-orange-500 font-black text-3xl md:text-5xl border-r-4 border-orange-500 pr-2"
                  >
                    let me build for you
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Professional Integrated Stack Grid */}
            <div className="md:col-span-1 relative group bg-[#080808] border border-white/[0.05] rounded-[48px] p-10 md:p-14 shadow-2xl overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-orange-500/20 transition-all duration-700" />
               
               <div className="flex justify-between items-center mb-12">
                 <h3 className="text-2xl font-bold tracking-tight text-white/90">Integrated Stack</h3>
                 <div className="flex gap-1.5 p-2 bg-white/5 rounded-full border border-white/5">
                   <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                   <div className="w-2 h-2 rounded-full bg-gray-700" />
                 </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {stackLogos.map((logo, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.05 }}
                     whileHover={{ 
                       scale: 1.1, 
                       backgroundColor: "rgba(255,255,255,0.04)", 
                       borderColor: "rgba(249,115,22,0.4)",
                     }}
                     className="group/icon aspect-square bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-1 text-gray-500 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                   >
                     <div className="group-hover/icon:text-orange-500 transition-colors duration-300">
                       {logo.icon}
                     </div>
                     <span className="text-[7px] font-bold tracking-widest uppercase opacity-0 group-hover/icon:opacity-100 transition-opacity">
                       {logo.name}
                     </span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}