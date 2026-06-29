"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

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

      <main className="bg-[#0a0a0a] min-h-screen flex items-center justify-center overflow-hidden relative">
        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: "10%", left: "15%", bg: "#ff6b6b", delay: "0s" },
            { top: "20%", right: "20%", bg: "#feca57", delay: "0.5s" },
            { bottom: "25%", left: "10%", bg: "#48dbfb", delay: "1s" },
            { bottom: "15%", right: "15%", bg: "#ff9ff3", delay: "1.5s" },
            { top: "50%", left: "5%", bg: "#54a0ff", delay: "2s" },
            { top: "40%", right: "8%", bg: "#5f27cd", delay: "2.5s" },
            { top: "70%", left: "20%", bg: "#00d2d3", delay: "3s" },
            { top: "30%", left: "80%", bg: "#ff6348", delay: "3.5s" },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-[particle-float_4s_ease-in-out_infinite]"
              style={{
                top: p.top,
                left: p.left,
                right: p.right,
                bottom: p.bottom,
                background: p.bg,
                animationDelay: p.delay,
                opacity: 0.5,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Main container */}
        <div className="relative w-[650px] h-[650px] flex items-center justify-center max-w-[95vw] max-h-[95vh]">
          {/* Name top */}
          <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 text-2xl md:text-[32px] font-bold text-white tracking-[3px] whitespace-nowrap z-20 drop-shadow-[0_0_20px_rgba(102,126,234,0.5)]">
            MALLIKA VERMA
          </div>

          {/* Tagline bottom */}
          <div className="absolute -bottom-[40px] left-1/2 -translate-x-1/2 text-base md:text-lg text-[#a0a0a0] whitespace-nowrap italic tracking-wider z-20">
            Writer who codes.
          </div>

          {/* Glow rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border-2 border-[rgba(102,126,234,0.3)] z-[5] animate-[pulse-ring_3s_ease-in-out_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] rounded-full border border-[rgba(118,75,162,0.2)] z-[5] animate-[pulse-ring_3s_ease-in-out_infinite_1.5s]" />

          {/* Orbit text */}
          <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] -ml-[210px] -mt-[210px] z-[8] animate-[spin_20s_linear_infinite]">
            <svg viewBox="0 0 420 420" className="w-full h-full">
              <defs>
                <path id="circle-path" d="M 210,210 m -180,0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0" />
              </defs>
              <text fill="#ffffff" fontSize="13" fontFamily="system-ui, sans-serif" letterSpacing="3" fontWeight="300">
                <textPath href="#circle-path">✦ MALLIKA VERMA ✦ WRITER WHO CODES ✦ BUILD ✦ CREATE ✦ INSPIRE ✦</textPath>
              </text>
            </svg>
          </div>

          {/* Photo */}
          <div className="relative w-[220px] h-[220px] rounded-full z-10 animate-[float3d_4s_ease-in-out_infinite]">
            <div className="w-[220px] h-[220px] rounded-full overflow-hidden border-[3px] border-white/15 shadow-[0_0_40px_rgba(102,126,234,0.4),0_0_80px_rgba(118,75,162,0.2),inset_0_-5px_15px_rgba(0,0,0,0.3),inset_0_5px_15px_rgba(255,255,255,0.1)] relative">
              <Image
                src="/images/hero-cutout.jpeg"
                alt="Mallika Verma"
                fill
                className="object-cover"
                priority
                sizes="220px"
              />
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.15)_50%,transparent_60%)] z-[2] pointer-events-none" />
            </div>
          </div>

          {/* Navigation items */}
          <Link href="/projects" className="nav-bubble absolute top-[30px] left-1/2 -translate-x-1/2 animate-[fadeIn_0.6s_ease-out_0.1s_both]">
            <span className="icon text-[#ff6b6b]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/></svg>
            </span>
            Projects
          </Link>
          <Link href="/experience" className="nav-bubble absolute top-[150px] right-[15px] animate-[fadeIn_0.6s_ease-out_0.2s_both]">
            <span className="icon text-[#feca57]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            </span>
            Experience
          </Link>
          <Link href="/writing" className="nav-bubble absolute bottom-[150px] right-[20px] animate-[fadeIn_0.6s_ease-out_0.3s_both]">
            <span className="icon text-[#48dbfb]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </span>
            Writing
          </Link>
          <Link href="/beyond" className="nav-bubble absolute bottom-[30px] left-1/2 -translate-x-1/2 animate-[fadeIn_0.6s_ease-out_0.4s_both]">
            <span className="icon text-[#ff9ff3]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </span>
            Beyond Code
          </Link>
          <Link href="/contact" className="nav-bubble absolute bottom-[150px] left-[15px] animate-[fadeIn_0.6s_ease-out_0.5s_both]">
            <span className="icon text-[#54a0ff]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
            </span>
            Contact
          </Link>
          <a href="https://github.com/Mallika-coder" target="_blank" rel="noopener noreferrer" className="nav-bubble absolute top-[150px] left-[15px] animate-[fadeIn_0.6s_ease-out_0.6s_both]">
            <span className="icon text-[#5f27cd]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
            </span>
            GitHub
          </a>
        </div>
      </main>
    </>
  );
}
