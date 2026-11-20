import React from 'react';
import { Cpu, Users, Droplets, Home, Eye, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const TechFeatures = () => {
  const features = [
    {
      icon: Users,
      title: "Hyper-Dense Social Crowd AI",
      category: "NPC DYNAMICS",
      desc: "Every Leonida resident possesses distinct schedules, behavioral motivations, social media habits, and reactionary reflexes to crime and weather.",
      metric: "500+ NPCs on Screen",
      accent: "text-pink-400",
      border: "hover:border-pink-500/50"
    },
    {
      icon: Droplets,
      title: "Real-Time Volumetric Storms & Water",
      category: "WEATHER ENGINE",
      desc: "Experience hurricane-level storm surges, localized tropical downpours, dynamic road flooding, and mathematically accurate wave refraction.",
      metric: "Next-Gen Fluid Simulation",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50"
    },
    {
      icon: Home,
      title: "70%+ Enterable Interiors",
      category: "WORLD ARCHITECTURE",
      desc: "Step directly inside sprawling shopping centers, 24/7 diners, pawn shops, nightclubs, underground chop shops, and high-rise luxury penthouses without loading screens.",
      metric: "Zero Interior Load Times",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50"
    },
    {
      icon: Eye,
      title: "Social Media & Bodycam Detection",
      category: "WANTED SYSTEM",
      desc: "Witnesses pull out smartphones to livestream your crimes to Snapmatic. Police bodycam footage and viral citizen clips dynamically alter your Wanted heat.",
      metric: "Viral Crime Mechanics",
      accent: "text-rose-400",
      border: "hover:border-rose-500/50"
    },
    {
      icon: Zap,
      title: "Full Path-Traced Ray Tracing",
      category: "GRAPHICS PIPELINE",
      desc: "Unprecedented realism with realistic neon reflection on wet Vice Beach asphalt, realistic light bounce through car windshields, and physically based hair strands.",
      metric: "60 FPS Performance Mode",
      accent: "text-purple-400",
      border: "hover:border-purple-500/50"
    },
    {
      icon: ShieldCheck,
      title: "Dynamic Vehicle Deformation",
      category: "PHYSICS ENGINE",
      desc: "Deconstruct every panel, axle, tire burst, and interior trim with surgical deformation physics and hyper-responsive tuning handling.",
      metric: "Over 1,000 Custom Parts",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 md:px-8 relative bg-[#090812] overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>ROCKSTAR ADVANCED GAME ENGINE 9</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            NEXT-GEN <span className="text-[#00F0FF]">ENGINE TECH</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
            Built from the ground up for modern hardware. Every system is interlinked to create the most living, breathing, and reactive digital world ever realized.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`p-6 md:p-8 rounded-3xl glass-panel border border-white/10 ${feat.border} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${feat.accent}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {feat.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2.5">
                    {feat.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${feat.accent} flex items-center gap-1.5`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    {feat.metric}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">RAGE 9 PROPRIETARY</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechFeatures;

