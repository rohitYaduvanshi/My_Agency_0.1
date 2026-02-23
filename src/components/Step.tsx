"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
    {
        title: "Choose Your Plan",
        desc: "Select a website package that fits your business goals. Simple pricing, no hidden fees.",
        visual: (
            /* MOBILE FIX: w-[580px] ko hata kar w-full max-w-[580px] kiya taaki mobile screen se bahar na jaye */
            <div className="bg-white rounded-2xl p-6 md:p-14 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-150 w-full max-w-[580px]">
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
                            <span className="text-gray-800 font-semibold text-[14px] md:text-[16px] tracking-tight">
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
            /* MOBILE FIX: w-full max-w-[220px] taaki cards center rahein */
            <div className="space-y-3 w-full max-w-[220px] relative z-10">
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
                        className="bg-white rounded-xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100 flex justify-between items-center transition-all duration-300"
                    >
                        <div className="text-left">
                            <p className="text-[10px] md:text-[12px] font-bold text-gray-900 tracking-tight leading-none mb-1.5">
                                {item.label}
                            </p>
                            <div className="flex items-center gap-1.5 text-[8px] md:text-[10px] text-gray-400 font-normal">
                                {item.date}
                            </div>
                        </div>

                        <div className="relative overflow-hidden h-6 w-20 md:w-24 flex items-center justify-end">
                            <motion.span
                                variants={{
                                    groupHover: { y: -30, opacity: 0 }
                                }}
                                className={`absolute ${item.initialColor} text-[7px] md:text-[8px] font-bold uppercase px-2 py-1 rounded-md border tracking-tighter`}
                            >
                                {item.initialStatus}
                            </motion.span>

                            <motion.span
                                initial={{ y: 30, opacity: 0 }}
                                variants={{
                                    groupHover: { y: 0, opacity: 1 }
                                }}
                                className="text-emerald-600 bg-emerald-50 border border-emerald-100 text-[7px] md:text-[8px] font-bold uppercase px-2 py-1 rounded-md tracking-tighter"
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
            <div className="relative flex items-center justify-center h-[160px] w-full max-w-[220px]">
                <div className="absolute top-6 w-full flex justify-center -space-x-4 md:-space-x-6">
                    <motion.div
                        variants={{ groupHover: { y: -45, x: -25, rotate: -15, opacity: 1 } }}
                        initial={{ y: 0, opacity: 0 }}
                        className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg shadow-lg border-2 border-white overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200" className="object-cover h-full w-full" alt="website" />
                    </motion.div>
                    <motion.div
                        variants={{ groupHover: { y: -60, scale: 1.1, opacity: 1 } }}
                        initial={{ y: 0, opacity: 0 }}
                        className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-lg shadow-xl border-2 border-white z-20 overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=200" className="object-cover h-full w-full" alt="website" />
                    </motion.div>
                    <motion.div
                        variants={{ groupHover: { y: -45, x: 25, rotate: 15, opacity: 1 } }}
                        initial={{ y: 0, opacity: 0 }}
                        className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg shadow-lg border-2 border-white overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=200" className="object-cover h-full w-full" alt="website" />
                    </motion.div>
                </div>

                <div className="relative z-30">
                    <div className="bg-[#f25e24] w-28 md:w-36 h-20 md:h-24 rounded-tr-[24px] rounded-br-xl rounded-bl-xl shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-[10px] md:text-sm tracking-wide">
                            WEBSITE LIVE
                        </span>
                    </div>
                    <div className="absolute -top-2 left-0 bg-[#f25e24] w-10 md:w-12 h-3 rounded-t-md border-b border-black/10 shadow-sm"></div>
                </div>
            </div>
        ),
    },
];

export default function StepsSection() {
    return (
        <section className="bg-white py-16 md:py-24 px-4 md:px-6 relative z-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black">
                        Great design, <span className="font-serif italic text-gray-400">done simply</span> delivered fast.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            /* HOVER & TOUCH FIX: Mobile par jab screen par aayega toh animation start ho jayegi */
                            whileHover="groupHover"
                            whileTap="groupHover"
                            whileInView="groupHover"
                            viewport={{ once: false, amount: 0.4 }} // 40% card dikhte hi trigger hoga
                            className="group bg-white rounded-[24px] border border-gray-200 p-6 h-auto transition-all duration-500 hover:border-gray-300 hover:shadow-sm flex flex-col"
                        >
                            <div className="w-full h-[280px] md:h-[320px] rounded-[18px] border border-gray-100 p-4 md:p-10 relative overflow-hidden flex items-center justify-center bg-[#fcfcfc] transition-colors group-hover:bg-[#351E10] mb-6">
                                <div
                                    className="absolute inset-0 opacity-[0.5]"
                                    style={{
                                        backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
                                        backgroundSize: '16px 16px'
                                    }}
                                />

                                <div className="relative z-10 w-full flex justify-center h-full items-center">
                                    {step.visual}
                                </div>
                            </div>

                            <div className="px-2 md:px-4 pb-4 md:pb-6">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 tracking-tight">{step.title}</h3>
                                <p className="text-gray-500 text-[13px] md:text-[14px] font-medium leading-relaxed max-w-[280px]">
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