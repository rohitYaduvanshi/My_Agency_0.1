"use client";
import { motion } from "framer-motion";

const labels = ["UI/UX", "Branding", "Development", "Web3", "SaaS", "Mobile Apps", "Marketing"];

export default function Ticker() {
  return (
    <div className="py-12 border-y border-white/5 bg-white overflow-hidden">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-16 items-center"
      >
        {[...labels, ...labels].map((item, i) => (
          <span key={i} className="text-gray-600 text-2xl font-bold uppercase tracking-tighter">
            {item} <span className="ml-16 text-white/10">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}