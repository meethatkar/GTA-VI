import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDownToDot, Radio, Sparkles } from "lucide-react";
import Navbar from "./components/Navbar";
import WantedHUD from "./components/WantedHUD";
import CheatCodeListener from "./components/CheatCodeListener";
import Dock from "./components/react-bits/Dock";
import Noise from "./components/react-bits/Noise";
import BreakingTicker from "./components/BreakingTicker";
import StoryDuo from "./components/StoryDuo";
import ExploreLeonida from "./components/ExploreLeonida";
import TelemetryDashboard from "./components/TelemetryDashboard";
import ViceViralReels from "./components/ViceViralReels";
import MugshotGenerator from "./components/MugshotGenerator";
import TrailerTheater from "./components/TrailerTheater";
import RadioTuner from "./components/RadioTuner";
import FranchiseTimeline from "./components/FranchiseTimeline";
import TechFeatures from "./components/TechFeatures";
import Footer from "./components/Footer";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [wantedLevel, setWantedLevel] = useState(2);
  const [, setTriggerSiren] = useState(false);

  // Original Hero SVG Mask Zoom Transition Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%" // transform from center
    }).to(".vi-mask-group", {
      scale: 10,
      delay: -1.7,
      duration: 2,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      }
    });
  });

  // Original Mousemove Parallax Effect on Hero Layers
  useGSAP(() => {
    if (!showContent) return;

    // Center baseline managed by GSAP to avoid stacking transforms
    gsap.set("#heading", { xPercent: -50, left: "50%" });

    const main = document.querySelector(".main");
    const onMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 80;
      gsap.to("#heading", {
        x: xMove,
        duration: 0.2,
        ease: "power3.out"
      });
      gsap.to(".buildings", {
        x: xMove * 0.6,
        duration: 0.2,
        ease: "power3.out"
      });
      gsap.to(".sky", {
        x: xMove * 0.8,
        duration: 0.2,
        ease: "power3.out"
      });
      gsap.to(".main-char", {
        x: xMove * 0.6,
        duration: 0.2,
        ease: "power3.out"
      });
    };

    main?.addEventListener("mousemove", onMove);
    return () => main?.removeEventListener("mousemove", onMove);
  }, [showContent]);

  const scrollToNext = () => {
    const target = document.getElementById("breaking");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenTrailer = () => {
    const target = document.getElementById("trailer");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-[#090812] text-white flex justify-center relative">
      {/* REACT BITS CINEMATIC FILM GRAIN NOISE OVERLAY */}
      <Noise opacity={0.035} />

      <div className="w-full max-w-[1900px] min-h-screen bg-[#090812] relative overflow-x-hidden shadow-2xl">
        {/* INITIAL GSAP VI MASK INTRO OVERLAY */}
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="'Bebas Neue', 'Anton', Impact, 'Arial Black', sans-serif"
                  fontWeight="900"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./buildings.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
            style={{ zIndex: "10", position: "relative" }}
          />
          <image
            href="./clouds.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
            style={{ zIndex: "5", position: "relative" }}
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full relative">
          
          {/* FIXED MODERN ROCKSTAR NAVBAR */}
          <Navbar onOpenTrailer={handleOpenTrailer} />

          {/* 5-STAR WANTED LEVEL HUD (TOP-RIGHT) */}
          <WantedHUD
            wantedLevel={wantedLevel}
            setWantedLevel={setWantedLevel}
            setTriggerSiren={setTriggerSiren}
          />

          {/* GLOBAL CHEAT CODE LISTENER (HESOYAM, AEZAKMI, PANZER, etc.) */}
          <CheatCodeListener setWantedLevel={setWantedLevel} />

          {/* REACT BITS FLOATING FROSTED GLASS DOCK (BOTTOM-CENTER) */}
          <Dock />

          {/* MAIN HERO LANDING SECTION (Original parallax layers & effects preserved) */}
          <div id="landing" className="overflow-hidden relative w-full h-screen bg-black select-none">
            
            {/* Ambient Dark Horizon Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

            {/* FLOATING "LIVE NOW: 3.8M Watching" PILL BADGE */}
            <a
              href="#telemetry"
              className="absolute top-20 left-4 sm:left-8 z-30 group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#FF5E7E]/50 shadow-xl shadow-black/80 hover:scale-105 transition-all text-xs font-mono font-bold"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-white">
                LIVE NOW: <strong className="text-[#FF5E7E]">3.8M Watching</strong>
              </span>
              <Radio className="w-3.5 h-3.5 text-[#00F0FF] group-hover:rotate-12 transition-transform" />
            </a>

            {/* SCROLL DOWN BUTTON / INDICATOR */}
            <button
              onClick={scrollToNext}
              className="group flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#FF5E7E]/40 text-sm md:text-base font-bold tracking-wider absolute bottom-[4%] left-1/2 -translate-x-1/2 md:left-[3%] md:translate-x-0 text-white z-30 hover:border-[#FF5E7E] hover:bg-[#FF5E7E]/20 transition-all shadow-lg shadow-black/50"
            >
              <ArrowDownToDot className="w-5 h-5 text-[#FF5E7E] group-hover:translate-y-1 transition-transform animate-bounce" />
              <span className="tracking-widest uppercase text-xs md:text-sm">ENTER LEONIDA</span>
            </button>

            {/* PARALLAX IMAGE LAYERS */}
            <div id="images-div" className="relative z-5 overflow-hidden w-full h-screen">
              <img
                src="./buildings.png"
                alt="Vice City Skyline"
                className="buildings absolute top-0 left-0 w-full z-5 h-screen scale-x-120 object-cover object-center pointer-events-none"
              />
              <img
                src="./clouds.png"
                alt="Vice City Sunset Sky"
                className="sky absolute top-0 left-0 w-full h-screen scale-x-120 object-cover object-top pointer-events-none"
              />
              <img
                src="./main-char.png"
                alt="Lucia Caminos"
                className="main-char absolute -bottom-[24%] md:-bottom-[28%] left-1/2 z-25 -translate-x-1/2 h-[95vh] md:h-screen scale-x-100 object-contain pointer-events-none filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />
              
              {/* PS5 Branding Asset */}
              <img
                src="/ps5.png"
                alt="PlayStation 5"
                className="absolute -bottom-[8%] left-1/2 -translate-x-1/2 scale-35 md:scale-40 z-30 pointer-events-none drop-shadow-2xl"
              />

              {/* HEADING TEXT (GTA typography, parallax maintained) */}
              <div
                id="heading"
                className="absolute top-[8%] md:top-[10%] z-20 left-1/2 text-white gta-title-stroke text-[4.5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[9.5rem] opacity-90 select-none pointer-events-none transition-opacity duration-300"
                style={{
                  fontFamily: "'Pricedown', 'Bebas Neue', 'Anton', 'Montserrat', Impact, sans-serif",
                  lineHeight: "0.85",
                  textAlign: "center"
                }}
              >
                <h2 className="leading-none -ml-[12%] tracking-wide uppercase">
                  Grand
                </h2>
                <h2 className="leading-none ml-[10%] tracking-wide uppercase text-[#FF5E7E]">
                  Theft
                </h2>
                <div className="flex items-center justify-center -ml-[18%]">
                  <h2 className="leading-none tracking-wide uppercase">
                    Auto
                  </h2>
                </div>
              </div>

            </div>
          </div>

          {/* WEAZEL NEWS TICKER */}
          <div id="breaking">
            <BreakingTicker />
          </div>

          {/* SPLIT-SCREEN STORY & DUAL PROTAGONISTS */}
          <StoryDuo />

          {/* INTERACTIVE LEONIDA POSTCARD MAP WITH LOCATION INTEL DRAWER */}
          <ExploreLeonida />

          {/* LIVE TELEMETRY DASHBOARD (BENTO-GRID STREAMING HUB) */}
          <TelemetryDashboard />

          {/* "ONLY IN LEONIDA" VIRAL SOCIAL FEED (REELS + REDDIT HOT JSON) */}
          <ViceViralReels />

          {/* CUSTOM GTA 6 "WANTED / MUGSHOT" CARD GENERATOR */}
          <MugshotGenerator onCardGenerated={() => setWantedLevel((prev) => Math.min(5, prev + 1))} />

          {/* CINEMA VAULT WITH AMBIENT GLOW & YOUTUBE DATA API TELEMETRY */}
          <TrailerTheater />

          {/* VICE CITY STEREO RADIO TUNER */}
          <RadioTuner />

          {/* FRANCHISE EVOLUTION TIMELINE (GTA III -> GTA VI) */}
          <FranchiseTimeline />

          {/* NEXT-GEN RAGE 9 ENGINE FEATURES */}
          <TechFeatures />

          {/* ROCKSTAR FOOTER WITH 5-STAR WANTED EASTER EGG & API ATTRIBUTIONS */}
          <Footer wantedLevel={wantedLevel} setWantedLevel={setWantedLevel} />

        </div>
      )}
      </div>
    </div>
  );
};

export default App;
