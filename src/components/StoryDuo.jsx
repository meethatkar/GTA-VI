import React, { useState } from 'react';
import { Shield, Crosshair, Award, Flame, Volume2, Zap, Star } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';
import TiltedCard from './react-bits/TiltedCard';
import DecryptedText from './react-bits/DecryptedText';

const StoryDuo = () => {
  const [hoveredChar, setHoveredChar] = useState(null); // 'lucia' | 'jason' | null
  const [playingClip, setPlayingClip] = useState(null);

  const playVoiceClip = (char) => {
    soundSystem.playLaserSfx();
    setPlayingClip(char);
    setTimeout(() => setPlayingClip(null), 2400);
  };

  return (
    <section id="story" className="py-24 px-4 md:px-8 relative bg-[#090812] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E7E]/10 border border-[#FF5E7E]/30 text-[#FF5E7E] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-[#FF5E7E] animate-pulse" />
            <DecryptedText text="// 01. DUAL PROTAGONIST DOSSIER" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#F8F7FC] mb-4">
            THE OUTLAW <span className="text-[#FF5E7E]">SYNDICATE</span>
          </h2>
          <p className="text-[#9E9BB8] text-base md:text-lg font-medium leading-relaxed">
            Hover either character column to expand their dossier from 50/50 to 65/35. Two lives intertwined by bad luck and a dangerous pact: "Trust? Trust."
          </p>
        </div>

        {/* Split-Screen 50/50 -> 65/35 Flex Container */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[580px]">
          
          {/* LUCIA COLUMN (Vice Coral #FF5E7E) */}
          <div
            onMouseEnter={() => setHoveredChar('lucia')}
            onMouseLeave={() => setHoveredChar(null)}
            className={`transition-all duration-500 ease-out flex flex-col justify-between rounded-[20px] bg-[rgba(20,17,36,0.65)] backdrop-blur-md p-6 md:p-8 border relative overflow-hidden cursor-pointer ${
              hoveredChar === 'lucia'
                ? 'lg:flex-[0_0_65%] border-[#FF5E7E] shadow-2xl shadow-[#FF5E7E]/25'
                : hoveredChar === 'jason'
                ? 'lg:flex-[0_0_35%] border-white/[0.08] opacity-65'
                : 'lg:flex-[0_0_50%] border-white/[0.08] hover:border-[#FF5E7E]/40'
            }`}
          >
            <div>
              {/* Top Header Pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5E7E] bg-[#FF5E7E]/15 px-3 py-1 rounded-full border border-[#FF5E7E]/30">
                  <DecryptedText text="PROTAGONIST 01 // VICE CORAL" />
                </span>
                <span className="text-xs font-mono font-bold text-[#FF9966] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#FF9966]" />
                  WANTED: ★★★★★
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
                
                {/* 3D Tilted Card Character Frame */}
                <div className="md:col-span-5">
                  <TiltedCard maxTilt={14} className="rounded-xl overflow-hidden shadow-2xl border-2 border-[#FF5E7E]/40">
                    <div className="aspect-[3/4] bg-black/60 relative flex items-center justify-center overflow-hidden">
                      <img
                        src="/main-char.png"
                        alt="Lucia Caminos"
                        className="w-full h-full object-cover object-top filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-center bg-black/80 px-2 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-[#FF5E7E] font-bold">
                        LEONIDA DOC #84920
                      </div>
                    </div>
                  </TiltedCard>
                </div>

                {/* Character Narrative */}
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                    LUCIA CAMINOS
                  </h3>
                  <div className="text-xs font-mono text-[#FF5E7E] font-bold tracking-wider">
                    PAROLEE • DUAL SMG TACTICIAN
                  </div>
                  <p className="text-xs md:text-sm text-[#9E9BB8] leading-relaxed">
                    Fresh out of the Leonida State Penitentiary with a monitored ankle bracelet and a hunger to rule Vice City. Lucia calls the shots and pulls no punches.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/[0.08] flex items-center gap-2">
                      <Crosshair className="w-4 h-4 text-[#FF5E7E] shrink-0" />
                      <span className="text-[#F8F7FC]">Dual Micro SMGs</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/[0.08] flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#FF5E7E] shrink-0" />
                      <span className="text-[#F8F7FC]">Heist Adrenaline</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Stat Meters */}
              <div className="space-y-2.5 bg-black/40 p-4 rounded-xl border border-white/[0.08] mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-[#9E9BB8]">CRIMINAL AMBITION</span>
                    <span className="text-[#FF5E7E]">98%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#FF5E7E] h-full rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-[#9E9BB8]">DUAL-WIELD PROFICIENCY</span>
                    <span className="text-[#FF5E7E]">94%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#FF5E7E] h-full rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => playVoiceClip('lucia')}
              className="w-full py-3 rounded-xl bg-[#FF5E7E]/20 hover:bg-[#FF5E7E]/30 border border-[#FF5E7E]/40 text-[#FF5E7E] font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <Volume2 className={`w-4 h-4 ${playingClip === 'lucia' ? 'animate-bounce' : ''}`} />
              <span>{playingClip === 'lucia' ? '"The only way out is together."' : 'PLAY LUCIA VOICE REEL'}</span>
            </button>
          </div>

          {/* JASON COLUMN (Sunset Amber #FF9966) */}
          <div
            onMouseEnter={() => setHoveredChar('jason')}
            onMouseLeave={() => setHoveredChar(null)}
            className={`transition-all duration-500 ease-out flex flex-col justify-between rounded-[20px] bg-[rgba(20,17,36,0.65)] backdrop-blur-md p-6 md:p-8 border relative overflow-hidden cursor-pointer ${
              hoveredChar === 'jason'
                ? 'lg:flex-[0_0_65%] border-[#FF9966] shadow-2xl shadow-[#FF9966]/25'
                : hoveredChar === 'lucia'
                ? 'lg:flex-[0_0_35%] border-white/[0.08] opacity-65'
                : 'lg:flex-[0_0_50%] border-white/[0.08] hover:border-[#FF9966]/40'
            }`}
          >
            <div>
              {/* Top Header Pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9966] bg-[#FF9966]/15 px-3 py-1 rounded-full border border-[#FF9966]/30">
                  <DecryptedText text="PROTAGONIST 02 // SUNSET AMBER" />
                </span>
                <span className="text-xs font-mono font-bold text-[#00F0FF] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#00F0FF]" />
                  WANTED: ★★★★★
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
                
                {/* 3D Tilted Card Character Frame */}
                <div className="md:col-span-5">
                  <TiltedCard maxTilt={14} className="rounded-xl overflow-hidden shadow-2xl border-2 border-[#FF9966]/40">
                    <div className="aspect-[3/4] bg-black/60 relative flex items-center justify-center overflow-hidden">
                      <img
                        src="/buildings.png"
                        alt="Jason Duval"
                        className="w-full h-full object-cover filter contrast-125 saturate-150"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-center bg-black/80 px-2 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-[#FF9966] font-bold">
                        EX-MILITARY OPERATIVE
                      </div>
                    </div>
                  </TiltedCard>
                </div>

                {/* Character Narrative */}
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                    JASON DUVAL
                  </h3>
                  <div className="text-xs font-mono text-[#FF9966] font-bold tracking-wider">
                    TACTICAL WHEELMAN • UNDERWORLD FIXER
                  </div>
                  <p className="text-xs md:text-sm text-[#9E9BB8] leading-relaxed">
                    A calm, military-trained operator with deep connections across Kelly County and Port Gellhorn. The precision counterweight to Lucia's relentless fire.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/[0.08] flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#FF9966] shrink-0" />
                      <span className="text-[#F8F7FC]">Tactical Carbine</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/[0.08] flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#FF9966] shrink-0" />
                      <span className="text-[#F8F7FC]">Escape Overdrive</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Stat Meters */}
              <div className="space-y-2.5 bg-black/40 p-4 rounded-xl border border-white/[0.08] mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-[#9E9BB8]">GETAWAY PRECISION</span>
                    <span className="text-[#FF9966]">97%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#FF9966] h-full rounded-full" style={{ width: '97%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-[#9E9BB8]">TACTICAL DEADEYE</span>
                    <span className="text-[#FF9966]">95%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#FF9966] h-full rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => playVoiceClip('jason')}
              className="w-full py-3 rounded-xl bg-[#FF9966]/20 hover:bg-[#FF9966]/30 border border-[#FF9966]/40 text-[#FF9966] font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <Volume2 className={`w-4 h-4 ${playingClip === 'jason' ? 'animate-bounce' : ''}`} />
              <span>{playingClip === 'jason' ? '"Trust? Trust."' : 'PLAY JASON VOICE REEL'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StoryDuo;
