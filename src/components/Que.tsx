"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How fast will I receive my designs?",
    answer: "Most designs are delivered within 24-48 hours. Complex projects like multi-page websites or mobile apps might take a bit longer, but we always keep you updated.",
  },
  {
    question: "How does onboarding work?",
    answer: "Once you subscribe, you'll get access to your dedicated dashboard where you can submit your first design request immediately.",
  },
  {
    question: "What tools do you use?",
    answer: "Designs are primarily done in Figma. Development is handled in Webflow or Framer, depending on your needs.",
  },
  {
    question: "How does web development work?",
    answer: "We build responsive, high-performance websites optimized for SEO and conversion, ensuring your brand stands out online.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-4 md:px-6 relative z-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-black">
            <span className="font-serif italic text-gray-500">Frequently</span> Asked Questions.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className="bg-white border border-gray-400 rounded-[20px] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 md:p-8 flex justify-between items-center text-left group"
                >
                  <span className="text-[1em] md:text-xl font-medium text-gray-800">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon Box */}
                  {/* Plus Icon with Rotation Animation */}
                  <div className={`bg-[#f25e24] p-2 rounded-lg transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                    <Plus size={24} className="text-white stroke-[3]" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "circOut" }}
                    >
                      {/* --- Answer Section with Divider --- */}
                      <div className="px-8 pb-8">
                        {/* Thin Light Divider Line */}
                        <div className="w-full h-[1px] bg-gray-100 mb-6" />
                        
                        {/* Answer Text Styling */}
                        <p className="text-gray-500 text-[0.9em] leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}