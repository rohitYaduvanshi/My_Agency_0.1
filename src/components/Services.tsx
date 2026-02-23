"use client";
import { motion } from "framer-motion";
import { 
  Github, ExternalLink, ArrowRight, Zap, 
  CheckCircle2, Activity, Clock 
} from "lucide-react";

const pinnedProjects = [
  {
    title: "Propertix Ledger",
    desc: "Blockchain land registry system.",
    image: "./propertix.png",
    stack: ["Solidity", "React", "Node.js","Tailwind"],
    liveLink: "https://propertix-0-1.vercel.app/",
    gitLink: "https://github.com/rohitYaduvanshi",
    status: "LIVE"
  },
  {
    title: "Obizax",
    desc: "Premium wellness digital portal.",
    image: "./obizax.png",
    stack: ["Next.js", "Tailwind", "Framer"],
    liveLink: "https://obizax.netlify.app/",
    gitLink: "https://github.com/rohitYaduvanshi",
    status: "In progress"
  },
  {
    title: "Auditra AI",
    desc: "AI-driven smart contract auditing.",
    image: "./auditra.png",
    stack: ["Next.js", "Python", "Framer"],
    liveLink: "#",
    gitLink: "https://github.com/rohitYaduvanshi",
    status: "IN PROGRESS"
  },
  {
    title: "Coders' Club",
    desc: "Developer community platform.",
    image: "./coder.png",
    stack: ["React", "Sepolia", "CSS"],
    liveLink: "https://codersclub-bbit.netlify.app/",
    gitLink: "https://github.com/rohitYaduvanshi",
    status: "LIVE"
  },
    {
    title: "Safe Report",
    desc: "Safety platform.",
    image: "./saferepo.png",
    stack: ["React", "Sepolia", "CSS"],
    liveLink: "https://codersclub-bbit.netlify.app/",
    gitLink: "https://github.com/rohitYaduvanshi",
    status: "LIVE"
  },
    {
    title: "Indus AI",
    desc: "SIH Project",
    image: "./doj.png",
    stack: ["React", "Sepolia", "CSS"],
    liveLink: "https://codersclub-bbit.netlify.app/",
    gitLink: "https://github.com/rohitYaduvanshi",
    status: "LIVE"
  }
];

const statusStyles = {
  LIVE: { label: "Live", color: "text-green-500", dot: "bg-green-500" },
  "IN PROGRESS": { label: "Working", color: "text-orange-500", dot: "bg-orange-500" },
  FUTURE: { label: "Pipeline", color: "text-blue-500", dot: "bg-blue-500" }
};

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-32 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Minimal Header --- */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8">
            Deployment Ecosystem <span className="text-gray-600 italic font-serif">WORKS</span>
          </h2>
          <p className="text-gray-500 text-xl max-w-xl font-light">
            A collection of high-performance builds focused on blockchain and AI ecosystems.
          </p>
        </div>

        {/* --- Clean Project List --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pinnedProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group cursor-pointer"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#111] mb-6 border border-white/5 transition-colors group-hover:border-white/20">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Clean Status Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                   <div className={`w-1.5 h-1.5 rounded-full ${statusStyles[project.status as keyof typeof statusStyles]?.dot || 'bg-gray-500'} ${project.status === 'IN PROGRESS' ? 'animate-pulse' : ''}`} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">{project.status}</span>
                </div>

                <a 
                  href={project.liveLink}
                  target="_blank"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ArrowRight size={24} />
                  </div>
                </a>
              </div>

              {/* Project Meta */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{project.desc}</p>
                  <div className="flex gap-2">
                    {project.stack.map(s => (
                      <span key={s} className="text-[9px] font-black uppercase text-gray-400 border border-white/10 px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                   <a href={project.gitLink} target="_blank"><Github size={20} className="hover:text-orange-500" /></a>
                   <a href={project.liveLink} target="_blank"><ExternalLink size={20} className="hover:text-orange-500" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Simple Footer Info --- */}
        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase">Ready for hire</span>
             </div>
             <div className="h-4 w-[1px] bg-white/10" />
             <div className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase flex gap-4">
                <span>React</span> <span>Next.js</span> <span>Solidity</span>
             </div>
          </div>
          <button className="text-sm font-medium flex items-center gap-2 group hover:text-orange-500 transition-colors">
            LET'S BUILD SOMETHING <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}