"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar } from "lucide-react";

const steps = [
    {
        title: "Choose Your Plan",
        desc: "Select a website package that fits your business goals. Simple pricing, no hidden fees.",
        visual: (
            <div className="bg-white rounded-2xl p-14 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-150 w-[580px]">
                <div className="space-y-4">
                    {[
                        "Transparent Pricing",
                        "Custom Website Design",
                        "Cancel Anytime"
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                            <div className="bg-[#f25e24] rounded-md p-0.5 shrink-0">
                                <CheckCircle2 size={12} className="text-white stroke-[3]" />
                            </div>
                            <span className="text-gray-800 font-semibold text-[16px] tracking-tight">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Submit Your Requirements",
        desc: "Tell us about your business, goals, and website needs. We handle the design & development.",
        visual: (
            <div className="space-y-3 w-[220px] relative z-10">
                {[
                    { label: "Homepage Design", date: "Step 1", initialStatus: "Planning", initialColor: "text-blue-600 bg-blue-50 border-blue-100" },
                    { label: "UI/UX Layout", date: "Step 2", initialStatus: "Designing", initialColor: "text-amber-600 bg-amber-50 border-amber-100" },
                    { label: "Website Development", date: "Step 3", initialStatus: "Building", initialColor: "text-purple-600 bg-purple-50 border-purple-100" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            groupHover: { x: 8, scale: 1.02 }
                        }}
                        className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex justify-between items-center transition-all duration-300"
                    >
                        <div className="text-left">
                            <p className="text-[12px] font-semibold text-gray-900 tracking-tight leading-none mb-1.5">
                                {item.label}
                            </p>
                            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-normal">
                                {item.date}
                            </div>
                        </div>

                        <div className="relative overflow-hidden h-6 w-24 flex items-center justify-end">
                            <motion.span
                                variants={{
                                    groupHover: { y: -30, opacity: 0 }
                                }}
                                className={`absolute ${item.initialColor} text-[8px] font-bold uppercase px-2.5 py-1 rounded-md border tracking-tighter`}
                            >
                                {item.initialStatus}
                            </motion.span>

                            <motion.span
                                initial={{ y: 30, opacity: 0 }}
                                variants={{
                                    groupHover: { y: 0, opacity: 1 }
                                }}
                                className="text-emerald-600 bg-emerald-50 border border-emerald-100 text-[8px] font-bold uppercase px-2.5 py-1 rounded-md tracking-tighter"
                            >
                                Completed
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </div>
        ),
    },
    {
        title: "Launch & Grow",
        desc: "Your website goes live, optimized for performance, SEO, and conversions.",
        visual: (
            <div className="relative flex items-center justify-center h-[160px] w-[220px]">
                <div className="absolute top-6 w-full flex justify-center -space-x-6">
                    <motion.div
                        variants={{ groupHover: { y: -45, x: -25, rotate: -15, opacity: 1 } }}
                        initial={{ y: 0, opacity: 0 }}
                        className="w-14 h-14 bg-white rounded-lg shadow-lg border-2 border-white overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200" className="object-cover h-full w-full" alt="website" />
                    </motion.div>
                    <motion.div
                        variants={{ groupHover: { y: -60, scale: 1.1, opacity: 1 } }}
                        initial={{ y: 0, opacity: 0 }}
                        className="w-16 h-16 bg-white rounded-lg shadow-xl border-2 border-white z-20 overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=200" className="object-cover h-full w-full" alt="website" />
                    </motion.div>
                    <motion.div
                        variants={{ groupHover: { y: -45, x: 25, rotate: 15, opacity: 1 } }}
                        initial={{ y: 0, opacity: 0 }}
                        className="w-14 h-14 bg-white rounded-lg shadow-lg border-2 border-white overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=200" className="object-cover h-full w-full" alt="website" />
                    </motion.div>
                </div>

                <div className="relative z-30">
                    <div className="bg-[#f25e24] w-36 h-24 rounded-tr-[24px] rounded-br-xl rounded-bl-xl shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm tracking-wide">
                            WEBSITE LIVE
                        </span>
                    </div>
                    <div className="absolute -top-2 left-0 bg-[#f25e24] w-12 h-3 rounded-t-md border-b border-black/10 shadow-sm"></div>
                </div>
            </div>
        ),
    },
];

export default function StepsSection() {
    return (
        <section className="bg-white py-24 px-4 md:px-6 relative z-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
                        Great design, <span className="font-serif italic text-gray-400">done simply</span> delivered fast.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            whileHover="groupHover"
                            animate="initial"
                            className="group bg-white rounded-[24px] border border-gray-600 p-6 h-auto transition-all duration-500 hover:border-gray-200 hover:shadow-sm flex flex-col"
                        >
                            {/* --- 1. MATERIAL BOX (Height fixed for consistent gap) --- */}
                            <div className="w-full h-[320px] rounded-[18px] border border-gray-400 p-10 relative overflow-hidden flex items-center justify-center bg-[#fcfcfc] transition-colors group-hover:bg-[#351E10] mb-6">
                                {/* Dotted Grid Pattern */}
                                <div
                                    className="absolute inset-0 opacity-[0.5]"
                                    style={{
                                        backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
                                        backgroundSize: '16px 16px' // Denser grid
                                    }}
                                />

                                {/* Internal Content (Padding ab ise border se door rakhegi) */}
                                <div className="relative z-10 w-full flex justify-center h-full items-center">
                                    {step.visual}
                                </div>
                            </div>

                            {/* --- 2. TEXT AREA (No mt-auto, fixed margin) --- */}
                            <div className="px-4 pb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{step.title}</h3>
                                <p className="text-gray-400 text-[14px] font-medium leading-relaxed max-w-[280px]">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}