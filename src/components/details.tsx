"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const detailedServices = [
    {
        title: "Custom Website Design",
        desc: "We design high-converting, visually striking websites tailored to your brand. Every layout is strategically crafted to build trust.",
        image: "./brand.png",
        tags: ["Landing Pages", "Business Websites", "UI/UX Strategy"],
    },
    {
        title: "UI/UX Design",
        desc: "We create user-first digital experiences that are intuitive, scalable, and built for growth.",
        image: "./UX.png",
        tags: ["Wireframing", "Design Systems", "Prototyping"],
    },
    {
        title: "Website Development",
        desc: "We develop fast, scalable, and SEO-ready websites using modern frameworks.",
        image: "./im-1.png",
        tags: ["Next.js", "Speed Optimization", "SEO Structure"],
    }
];

export default function Details() {
    const containerRef = useRef<HTMLElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Strict Check: Sirf 1024px se badi screens (Laptops/Monitors) par hi effect chalega
            // Isse phone ka 'Desktop View' (jo aksar 980px emulate karta hai) bypass ho jayega
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    return (
        <section 
            ref={containerRef} 
            className={`bg-[#fffdd1] relative ${isDesktop ? 'h-[350vh]' : 'h-auto py-20'} z-10`}
        >
            <div className={`${isDesktop ? 'sticky top-0 h-screen' : 'relative'} flex flex-col items-center overflow-hidden px-4 md:px-6`}>

                <motion.div
                    style={{
                        opacity: isDesktop ? headerOpacity : 1,
                        y: isDesktop ? headerY : 0
                    }}
                    className={`${isDesktop ? 'absolute top-12' : 'relative mb-12'} text-center z-[100] w-full max-w-4xl`}
                >
                    <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-black leading-tight">
                        We help brands grow up..!
                    </h2>
                </motion.div>

                <div className={`relative w-full max-w-5xl ${isDesktop ? 'h-[600px] mt-40 flex items-center justify-center' : 'flex flex-col gap-10'}`}>
                    {detailedServices.map((service, index) => (
                        <SingleCard
                            key={index}
                            service={service}
                            index={index}
                            total={detailedServices.length}
                            progress={scrollYProgress}
                            isDesktop={isDesktop}
                        />
                    ))}
                </div>
            </div >
        </section>
    );
}

function SingleCard({ service, index, total, progress, isDesktop }: { service: any, index: number, total: number, progress: MotionValue<number>, isDesktop: boolean }) {
    const start = index / total;
    
    // Inhe hamesha declare rakhein taaki Hooks order maintain rahe
    const yAnim = useTransform(progress, [0, start, start + 0.1], [1000, 0, 0]);
    const scaleAnim = useTransform(progress, [start, 1], [1, 1 - (total - index) * 0.04]);

    return (
        <motion.div
            style={{
                y: isDesktop ? (index === 0 ? 0 : yAnim) : 0,
                scale: isDesktop ? scaleAnim : 1,
                zIndex: index + 1,
                top: isDesktop ? `${index * 30}px` : 'auto', 
                position: isDesktop ? 'absolute' : 'relative'
            }}
            className="w-full rounded-[24px] md:rounded-[40px] border border-gray-600 flex flex-col md:flex-row bg-white shadow-xl md:shadow-2xl overflow-hidden min-h-fit md:h-[480px]"
        >
            <div className="w-full md:w-[45%] p-4 md:p-8 shrink-0 flex items-center">
                <div className="relative w-full aspect-video md:aspect-square rounded-[20px] overflow-hidden bg-[#f9f9f9]">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="w-full md:w-[55%] flex flex-col justify-center gap-4 md:gap-6 p-6 md:p-12 text-left">
                <h3 className="text-2xl md:text-5xl font-medium tracking-tighter text-[#1a1a1a]">{service.title}</h3>
                <p className="text-[#555] text-sm md:text-xl leading-relaxed font-sans">{service.desc}</p>
                
                <div className="grid grid-cols-2 gap-3 mt-4 pt-6 border-t border-gray-100">
                    {service.tags.map((tag: string) => (
                        <div key={tag} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-[#f25e24]" />
                            <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-wider text-gray-800">{tag}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}