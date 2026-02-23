"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const detailedServices = [
    {
        title: "Custom Website Design",
        desc: "We design high-converting, visually striking websites tailored to your brand. Every layout is strategically crafted to build trust.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
        tags: ["Landing Pages", "Business Websites", "E-commerce Design", "Responsive Design", "Conversion Focused", "UI/UX Strategy"],
    },
    {
        title: "UI/UX Strategy",
        desc: "We create user-first digital experiences that are intuitive, scalable, and built for growth. From wireframes to high-fidelity designs.",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800",
        tags: ["Wireframing", "User Journey Mapping", "Design Systems", "Prototyping", "Usability Optimization", "Interaction Design"],
    },
    {
        title: "Website Development",
        desc: "We develop fast, scalable, and SEO-ready websites using modern frameworks. Every build is optimized for performance.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js Development", "WordPress Development", "CMS Integration", "Speed Optimization", "SEO Structure", "Domain & Hosting Setup"],
    }
];

export default function Details() {
    const containerRef = useRef<HTMLElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
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
            /* h-[300vh] desktop par scroll depth dega aur mobile par auto height */
            className={`bg-[#fffdd1] relative ${isMobile ? 'h-auto py-20' : 'h-[350vh]'} z-10`}
        >
            <div className={`${isMobile ? 'relative' : 'sticky top-0 h-screen'} flex flex-col items-center overflow-hidden px-4 md:px-6`}>

                <motion.div
                    style={{
                        opacity: isMobile ? 1 : headerOpacity,
                        y: isMobile ? 0 : headerY
                    }}
                    className={`${isMobile ? 'relative mb-12' : 'absolute top-12'} text-center z-[100] w-full max-w-4xl`}
                >
                    <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-black leading-tight">
                        We help brands show up..! <br />
                    </h2>
                </motion.div>

                {/* Container ki height mobile par h-auto rakhi hai taaki cards stack na hon */}
                <div className={`relative w-full max-w-5xl ${isMobile ? 'flex flex-col gap-10' : 'h-[600px] mt-40 flex items-center justify-center'}`}>
                    {detailedServices.map((service, index) => (
                        <SingleCard
                            key={service.title}
                            service={service}
                            index={index}
                            total={detailedServices.length}
                            progress={scrollYProgress}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div >
        </section>
    );
}

function SingleCard({ service, index, total, progress, isMobile }: { service: any, index: number, total: number, progress: MotionValue<number>, isMobile: boolean }) {
    const start = index / total;

    // Animation values desktop ke liye hamesha calculated rahengi to avoid Hook error
    const yAnim = useTransform(progress, [0, start, start + 0.1], [1000, 0, 0]);
    const scaleAnim = useTransform(progress, [start, 1], [1, 1 - (total - index) * 0.04]);

    return (
        <motion.div
            style={{
                y: isMobile ? 0 : (index === 0 ? 0 : yAnim),
                scale: isMobile ? 1 : scaleAnim,
                zIndex: index + 1,
                /* Mobile par 'relative' aur auto top, Desktop par 'absolute' aur stacked top */
                top: isMobile ? 'auto' : `${index * 30}px`, 
                position: isMobile ? 'relative' : 'absolute'
            }}
            /* Desktop par fixed height md:h-[480px] taki stack barabar dikhe */
            className="w-full rounded-[24px] md:rounded-[40px] border border-black/5 flex flex-col md:flex-row bg-white shadow-xl md:shadow-2xl overflow-hidden min-h-fit md:h-[480px]"
        >
            <div className="w-full md:w-[45%] p-4 md:p-8 shrink-0 flex items-center">
                <div className="relative w-full aspect-video md:aspect-square rounded-[20px] overflow-hidden bg-[#f9f9f9]">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="w-full md:w-[55%] flex flex-col justify-center gap-4 md:gap-6 p-6 md:p-12 text-left">
                <h3 className="text-2xl md:text-5xl font-bold tracking-tighter text-[#1a1a1a]">{service.title}</h3>
                <p className="text-[#555] text-sm md:text-xl leading-relaxed font-medium">{service.desc}</p>
                
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