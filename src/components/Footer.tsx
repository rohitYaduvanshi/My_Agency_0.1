"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Instagram, Disc as Discord, Dribbble } from "lucide-react";

export default function Footer() {
  const [selectedDate, setSelectedDate] = useState(23);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  //  Social Links Added
  const socialIcons = [
    { Icon: Twitter, id: "tw", link: "https://twitter.com" },
    { Icon: Instagram, id: "ig", link: "https://instagram.com" },
    { Icon: Discord, id: "dc", link: "https://discord.com" },
    { Icon: Dribbble, id: "dr", link: "https://dribbble.com" },
  ];

  const timeSlots = ["15:00", "15:15"];

  return (
    <footer id="footer" className="bg-white py-10 px-6 font-sans relative z-50">
      <div className="max-w-7xl mx-auto bg-[#f25e24] rounded-[48px] p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl">
        
        {/* LEFT SIDE */}
        <div className="flex-1 z-10 text-white">
          <h2 className="text-2xl font-black mb-16 tracking-tighter italic">
            Obizax
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8">
            We make design work <br />
            <span className="italic font-serif font-light opacity-80">
              easier for you.
            </span>
          </h1>

          <p className="text-xl mb-12 opacity-80 font-medium">
            Book a quick call to see how Linea works.
          </p>

          {/* ✅ Pricing Link */}
          <Link
            href="/pricing"
            className="group relative inline-block bg-white text-[#f25e24] px-10 py-5 rounded-2xl font-black text-lg overflow-hidden transition-all active:scale-95 shadow-xl hover:shadow-white/20"
          >
            <div className="relative z-10 h-6 overflow-hidden flex flex-col items-center">
              <span className="transition-transform duration-500 group-hover:-translate-y-[150%]">
                See Pricing
              </span>
              <span className="absolute transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0">
                See Pricing
              </span>
            </div>
          </Link>

          {/* ✅ Social Links */}
          <div className="flex gap-4 mt-20">
            {socialIcons.map((item) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border border-white/20 rounded-2xl cursor-pointer bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <item.Icon size={24} className="text-white" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - CALENDAR */}
        <div className="flex-1 z-10 w-full max-w-md">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl text-black"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-black text-2xl tracking-tighter">
                February <span className="text-gray-300">2026</span>
              </span>
              <div className="flex gap-4 text-gray-300 font-bold">
                <button>&lt;</button>
                <button>&gt;</button>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-y-4 text-center text-sm font-bold mb-10">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div key={i} className="text-gray-300 text-[10px] pb-2">
                  {day}
                </div>
              ))}

              {[...Array(21)].map((_, i) => {
                const day = i + 8;
                const isSelected = selectedDate === day;

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`p-2 w-10 h-10 mx-auto flex items-center justify-center transition-all rounded-xl ${
                      isSelected
                        ? "bg-[#f25e24] text-white scale-110"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Time Slots */}
            <div className="space-y-4 border-t border-gray-100 pt-8">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`w-full py-4 border-2 rounded-[20px] text-center font-black transition-all duration-300 ${
                    selectedTime === time
                      ? "border-[#f25e24] text-[#f25e24] bg-orange-50"
                      : "border-gray-100 text-gray-400 hover:border-gray-300"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Background */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[13px] font-bold gap-4 border-t pt-10">
        <div className="flex gap-10">
          <span className="hover:text-black cursor-pointer uppercase">
            Thank You
          </span>
          <span className="hover:text-black cursor-pointer uppercase">
            Terms of Service
          </span>
        </div>
        <div>
          © 2026 Obizax. Built by{" "}
          <span className="text-black font-black underline underline-offset-4">
            Rohit
          </span>
        </div>
      </div>
    </footer>
  );
}