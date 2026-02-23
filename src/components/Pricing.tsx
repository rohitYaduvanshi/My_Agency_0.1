"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Basic",
    basePrice: 1000,
    extraPrice: 1000,
    features: [
      "1 active task at a time",
      "48-hour turn around",
      "Unlimited stock photos",
      "Source files included",
      "Pause or cancel anytime",
    ],
    isDark: false,
    toggleLabel: "Additional Active Task",
  },
  {
    name: "Pro",
    basePrice: 2995,
    extraPrice: 1600,
    features: [
      "2 active task at a time",
      "24-hour turn around",
      "Unlimited stock photos",
      "Source files included",
      "Pause or cancel anytime",
    ],
    isDark: true,
    toggleLabel: "No-Code Web Development",
    spots: "2 Spots Available",
  },
];

export default function Pricing() {
  const [basicExtra, setBasicExtra] = useState(false);
  const [proExtra, setProExtra] = useState(false);

  return (
    <section className="bg-white py-24 px-4 md:px-6 relative z-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-900 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-tight">
            Transparent pricing,{" "}
            <span className="font-serif italic text-gray-400 text-6xl">
              no hidden fees.
            </span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => {
            const isExtra =
              plan.name === "Basic" ? basicExtra : proExtra;

            const currentPrice = isExtra
              ? plan.basePrice + plan.extraPrice
              : plan.basePrice;

            return (
              <div
                key={plan.name}
                className={`rounded-[32px] border border-gray-200/60 p-2 shadow-sm ${
                  plan.isDark ? "bg-[#0a0a0a]" : "bg-white"
                }`}
              >
                <div
                  className={`w-full h-full rounded-[26px] p-10 relative overflow-hidden flex flex-col ${
                    plan.isDark
                      ? "bg-[#0a0a0a] border border-white/10"
                      : "bg-[#fcfcfc] border border-gray-100"
                  }`}
                >
                  <div
                    className={`absolute inset-0 opacity-[0.4] ${
                      plan.isDark ? "invert" : ""
                    }`}
                    style={{
                      backgroundImage:
                        "radial-gradient(#d1d5db 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Row */}
                    <div className="flex justify-between items-center mb-8">
                      <span
                        className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase border ${
                          plan.isDark
                            ? "bg-white/10 text-white border-white/20"
                            : "bg-gray-100 text-gray-400 border-gray-200"
                        }`}
                      >
                        {plan.name}
                      </span>

                      {plan.spots && (
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-white text-xs font-bold tracking-tight">
                            {plan.spots}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mb-10">
                      <h3
                        className={`text-5xl font-bold tracking-tighter ${
                          plan.isDark ? "text-white" : "text-black"
                        }`}
                      >
                        ₹{currentPrice.toLocaleString("en-IN")}
                        <span className="text-lg font-medium text-gray-400">
                          {" "}
                          /month
                        </span>
                      </h3>

                      <div
                        className={`w-full h-px mt-8 ${
                          plan.isDark ? "bg-white/10" : "bg-gray-200"
                        } border-dashed border-t-2`}
                      />
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-10 flex-1">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-center gap-3">
                          <div className="bg-[#f25e24] rounded-md p-0.5">
                            <CheckCircle2
                              size={12}
                              className="text-white stroke-[3]"
                            />
                          </div>
                          <span
                            className={`text-[15px] font-medium ${
                              plan.isDark
                                ? "text-white"
                                : "text-gray-700"
                            }`}
                          >
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Toggle + Button */}
                    <div className="mt-auto space-y-6">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() =>
                          plan.name === "Basic"
                            ? setBasicExtra(!basicExtra)
                            : setProExtra(!proExtra)
                        }
                      >
                        <span
                          className={`text-xs font-bold ${
                            plan.isDark
                              ? "text-white"
                              : "text-gray-800"
                          }`}
                        >
                          {plan.toggleLabel}
                        </span>

                        <div
                          className={`w-11 h-6 rounded-full p-1 transition-colors ${
                            isExtra
                              ? "bg-[#f25e24]"
                              : "bg-gray-200"
                          }`}
                        >
                          <motion.div
                            animate={{ x: isExtra ? 20 : 0 }}
                            className="w-4 h-4 bg-white rounded-full shadow-sm"
                          />
                        </div>
                      </div>

                      <RollingButton isDark={plan.isDark} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ========================= */
/* BUTTON COMPONENT */
/* ========================= */

function RollingButton({ isDark }: { isDark: boolean }) {

  const handleScroll = () => {
    const services = document.getElementById("services");
    if (services) {
      services.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={handleScroll}
      className={`group relative w-full h-[54px] rounded-xl text-sm font-medium overflow-hidden border transition-all duration-500 ${
        isDark
          ? "bg-[#f25e24] border-[#f25e24] text-white"
          : "bg-white border-[#f25e24] text-[#f25e24]"
      }`}
    >
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <span className="inline-block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-[360%]">
          Start scaling
        </span>

        <span className="absolute inline-block transition-transform duration-500 ease-[0.76,0,0.24,1] translate-y-[160%] group-hover:translate-y-0">
          Start scaling
        </span>
      </div>

      {!isDark && (
        <div className="absolute inset-0 bg-[#f25e24]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      )}
    </motion.button>
  );
}