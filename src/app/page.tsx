import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Details from "@/components/details"; 
import Services from "@/components/Services"
import Step from "@/components/Step";
import Pricing from "@/components/Pricing"; 
import Ques from "@/components/Que"; 
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-[#f25e24] selection:text-white scroll-smooth"> 
      {/* Navbar Container */}
      <div className="fixed top-0 inset-x-0 z-[100]">
        <Navbar />
      </div>

      <div className="relative z-10">
        {/* 1. Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Portfolio - No ID needed unless you link it */}
        <Portfolio />

        {/* Content Wrapper */}
        <div className="bg-white relative z-20 rounded-t-[48px] -mt-12 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
          {/* 2. Services Section (About, Details aur Services ek hi flow mein ho sakte hain) */}
          <section id="services">
            <About />
            <Details /> 
            <Services />
          </section>

          {/* 3. Steps/Process Section */}
          <section id="steps">
            <Step />
          </section>

          {/* 4. Pricing Section */}
          <section id="pricing">
            <Pricing />
          </section>

          {/* 5. FAQ Section */}
          <section id="faq">
            <Ques />
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}
