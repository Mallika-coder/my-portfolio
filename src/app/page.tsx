"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import Gallery from "@/components/Gallery";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialDock from "@/components/SocialDock";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const EasterEgg = dynamic(() => import("@/components/EasterEgg"), { ssr: false });
const Terminal = dynamic(() => import("@/components/Terminal"), { ssr: false });

export default function Home() {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => lenis.destroy();
    };

    initLenis();
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <EasterEgg />
      <Terminal />
      <Navbar />
      <SocialDock />

      {/* Main content — offset left on desktop to clear social dock */}
      <main className="relative lg:pl-20">
        <div className="flex flex-col">
          <section className="w-full relative block clear-both">
            <Hero />
          </section>
          <section className="w-full relative block clear-both">
            <About />
          </section>
          <section className="w-full relative block clear-both">
            <Experience />
          </section>
          <section className="w-full relative block clear-both">
            <Projects />
          </section>
          <section className="w-full relative block clear-both">
            <Skills />
          </section>
          <section className="w-full relative block clear-both">
            <Writing />
          </section>
          <section className="w-full relative block clear-both">
            <Gallery />
          </section>
          <section className="w-full relative block clear-both">
            <Achievements />
          </section>
          <section className="w-full relative block clear-both">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
