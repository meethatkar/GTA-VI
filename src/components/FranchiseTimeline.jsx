import React, { useState } from 'react';
import { History, Calendar, Map, Users, Award, ChevronRight, Sparkles } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';

const FranchiseTimeline = () => {
  const [selectedGame, setSelectedGame] = useState(5); // GTA VI by default

  const franchise = [
    {
      title: "Grand Theft Auto III",
      year: "2001",
      city: "Liberty City",
      protagonist: "Claude (1)",
      mapSize: "3.2 sq mi",
      metacritic: "97/100",
      ratingRAWG: "4.7 / 5.0",
      engine: "RenderWare 3D",
      innovations: "Pioneered the entire 3D open-world genre; dynamic radio stations; living pedestrian ecosystem.",
      accent: "text-amber-400",
      border: "border-amber-500/40"
    },
    {
      title: "Grand Theft Auto: Vice City",
      year: "2002",
      city: "Vice City (1986)",
      protagonist: "Tommy Vercetti (1)",
      mapSize: "5.6 sq mi",
      metacritic: "95/100",
      ratingRAWG: "4.8 / 5.0",
      engine: "RenderWare Enhanced",
      innovations: "Iconic 80s neon pastel aesthetic, empire-building asset acquisition, flyable helicopters and motorbikes.",
      accent: "text-pink-400",
      border: "border-pink-500/40"
    },
    {
      title: "Grand Theft Auto: San Andreas",
      year: "2004",
      city: "San Andreas (Los Santos, San Fierro, Las Venturas)",
      protagonist: "Carl 'CJ' Johnson (1)",
      mapSize: "14.6 sq mi",
      metacritic: "95/100",
      ratingRAWG: "4.9 / 5.0",
      engine: "RenderWare Advanced",
      innovations: "Full state with 3 distinct cities, RPG stamina/muscle stats, gang territory warfare, swimming/parachutes.",
      accent: "text-emerald-400",
      border: "border-emerald-500/40"
    },
    {
      title: "Grand Theft Auto IV",
      year: "2008",
      city: "HD Liberty City",
      protagonist: "Niko Bellic (1)",
      mapSize: "6.2 sq mi (Ultra Dense)",
      metacritic: "98/100",
      ratingRAWG: "4.7 / 5.0",
      engine: "RAGE 1.0 + Euphoria Physics",
      innovations: "Groundbreaking procedural physics, weight-based car handling, satirical in-game internet and phone system.",
      accent: "text-yellow-400",
      border: "border-yellow-500/40"
    },
    {
      title: "Grand Theft Auto V",
      year: "2013",
      city: "Los Santos & Blaine County",
      protagonist: "Michael, Franklin, Trevor (3)",
      mapSize: "29.3 sq mi",
      metacritic: "97/100",
      ratingRAWG: "4.8 / 5.0",
      engine: "RAGE 2.0",
      innovations: "Seamless three-protagonist switching, multi-stage tactical heists, massive underwater diving, GTA Online.",
      accent: "text-blue-400",
      border: "border-blue-500/40"
    },
    {
      title: "Grand Theft Auto VI",
      year: "2026",
      city: "State of Leonida (Vice City, Everglades, Keys)",
      protagonist: "Lucia & Jason (Dual Syndicate)",
      mapSize: "75+ sq mi (Vastest Ever)",
      metacritic: "Anticipated 98+",
      ratingRAWG: "5.0 / 5.0",
      engine: "RAGE 9 Proprietary",
      innovations: "Hyper-realistic volumetric water/hurricanes, 70%+ enterable interiors, viral social media AI mechanics.",
      accent: "text-pink-400",
      border: "border-pink-500/70"
    }
  ];

  const current = franchise[selectedGame];

  return (
    <section id="franchise" className="py-24 px-4 md:px-8 relative bg-[#090812] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
            <History className="w-3.5 h-3.5 text-purple-400" />
            <span>25 YEARS OF OPEN-WORLD DOMINANCE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            FRANCHISE <span className="text-[#FF5E7E]">EVOLUTION</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
            From the streets of 2001 Liberty City to the neon horizons of 2026 Leonida. Compare map sizes, engines, and historical Metacritic acclaim.
          </p>
        </div>

        {/* Timeline Horizontal Selector */}
        <div className="flex overflow-x-auto pb-4 gap-3 mb-10 no-scrollbar justify-start lg:justify-center">
          {franchise.map((game, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedGame(idx);
                soundSystem.playClickSfx();
              }}
              className={`shrink-0 px-4 py-3 rounded-2xl border text-left transition-all ${
                selectedGame === idx
                  ? 'bg-[#FF5E7E] border-[#FF5E7E] text-white shadow-lg shadow-[#FF5E7E]/30 scale-105'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="text-[10px] font-mono text-pink-400 font-bold">{game.year}</div>
              <div className="text-xs font-black uppercase tracking-wide truncate max-w-[140px]">{game.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Game Detailed Feature Card */}
        <div className={`rounded-3xl glass-panel border ${current.border} p-6 md:p-12 shadow-2xl relative overflow-hidden bg-[#141124]`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30">
                  RELEASED: {current.year}
                </span>
                <span className="text-xs font-mono font-bold text-slate-300 bg-white/5 px-3 py-1 rounded-full">
                  LOCATION: {current.city}
                </span>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-full">
                  METACRITIC: {current.metacritic}
                </span>
              </div>

              <div>
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
                  {current.title}
                </h3>
                <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                  {current.innovations}
                </p>
              </div>

              {/* Stats Matrix Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                <div className="bg-white/5 p-3 rounded-xl">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">MAP SCALE</div>
                  <div className="text-base md:text-lg font-black text-pink-400">{current.mapSize}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">PROTAGONISTS</div>
                  <div className="text-base md:text-lg font-black text-cyan-400">{current.protagonist}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">RAWG COMMUNITY</div>
                  <div className="text-base md:text-lg font-black text-amber-400">{current.ratingRAWG}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">GAME ENGINE</div>
                  <div className="text-base md:text-lg font-black text-white truncate">{current.engine}</div>
                </div>
              </div>

            </div>

            {/* Right Map Comparison Visual */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full aspect-square rounded-2xl bg-black/60 border-2 border-white/15 p-6 flex flex-col justify-between items-center text-center shadow-inner relative overflow-hidden">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  TERRAIN VOLUME COMPARISON
                </div>

                {/* Relative Circle Scale Graphic */}
                <div className="my-auto relative flex items-center justify-center">
                  <div
                    className="rounded-full bg-[#FF5E7E] flex items-center justify-center shadow-xl shadow-[#FF5E7E]/30 transition-all duration-700"
                    style={{
                      width: `${Math.min(180, Math.max(50, (parseFloat(current.mapSize) || 75) * 2.3))}px`,
                      height: `${Math.min(180, Math.max(50, (parseFloat(current.mapSize) || 75) * 2.3))}px`
                    }}
                  >
                    <span className="text-xs font-black text-white font-mono drop-shadow">
                      {current.mapSize}
                    </span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-cyan-400">
                  {selectedGame === 5 ? '★ LARGEST MAP IN ROCKSTAR HISTORY' : 'SCALE FACTOR RELATIVE TO GTA VI'}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FranchiseTimeline;

