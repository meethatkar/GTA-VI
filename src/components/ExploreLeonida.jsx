import React, { useState } from 'react';
import { Compass, Volume2, X, ShieldAlert, Sparkles, Navigation } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';
import TiltedCard from './react-bits/TiltedCard';
import DecryptedText from './react-bits/DecryptedText';

const ExploreLeonida = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [ambientPlaying, setAmbientPlaying] = useState(false);

  const postcards = [
    {
      id: 'vice-beach',
      name: 'Vice Beach & Ocean Drive',
      type: 'beach',
      tagline: 'Art Deco Neon, Supercars & Luxury Nightlife',
      danger: 'High / Metro SWAT',
      climate: '88°F Sunny Clear',
      stamp: 'VICE BEACH • POSTCARD 01',
      coordinates: '25.7617° N, 80.1918° W',
      desc: 'The vibrant pastel epicenter of Leonida. Supercars cruise alongside South Beach promenades while cartel syndicates orchestrate multimillion-dollar heists.',
      vibeTags: ['#OceanDrive', '#Supercars', '#MalibuClub', '#ViceBeach'],
      accent: '#FF5E7E',
      image: '/buildings.png'
    },
    {
      id: 'leonida-keys',
      name: 'Leonida Keys Archipelago',
      type: 'beach',
      tagline: 'Overseas Highways, Speedboats & Stilt Shacks',
      danger: 'Moderate / Coast Guard',
      climate: '84°F Ocean Breeze',
      stamp: 'LEONIDA KEYS • POSTCARD 02',
      coordinates: '24.5551° N, 81.7800° W',
      desc: 'Turquoise ocean water connected by fragile overseas viaduct bridges. A paradise for speedboats, coral reef diving, and contraband smuggling runs.',
      vibeTags: ['#SevenMileBridge', '#SpeedboatHeist', '#TikiLounge', '#CoralKeys'],
      accent: '#00F0FF',
      image: '/clouds.png'
    },
    {
      id: 'grassrivers',
      name: 'The Grassrivers (Everglades)',
      type: 'swamp',
      tagline: 'Airboats, 14-Foot Alligators & Mud Clubs',
      danger: 'Extreme / Apex Predators',
      climate: '94°F Swamp Humid',
      stamp: 'GRASSRIVERS • POSTCARD 03',
      coordinates: '25.2866° N, 80.8987° W',
      desc: 'Untamed sawgrass bayous where police radar fails. Airboat racers dodge territorial alligators while moonshine stills operate deep in the swamps.',
      vibeTags: ['#AirboatDrifting', '#ApexGators', '#SwampDerby', '#MudTracks'],
      accent: '#FF9966',
      image: '/buildings.png'
    },
    {
      id: 'port-gellhorn',
      name: 'Port Gellhorn Shipping Docks',
      type: 'industrial',
      tagline: 'Container Yards, Chop Shops & Biker Turfs',
      danger: 'Very High / Heavy Gun Crime',
      climate: '82°F Smoggy Haze',
      stamp: 'PORT GELLHORN • POSTCARD 04',
      coordinates: '26.1224° N, 80.1373° W',
      desc: 'Industrial rust belt of southern Leonida. Heavy crane terminals and dark alley chop shops where stolen luxury vehicles disappear forever.',
      vibeTags: ['#ChopShops', '#CargoHeist', '#CraneTerminals', '#LostMC'],
      accent: '#9D4EDD',
      image: '/clouds.png'
    }
  ];

  const current = postcards[selectedLocation];

  const handleCardClick = (index) => {
    setSelectedLocation(index);
    setIsDrawerOpen(true);
    soundSystem.playClickSfx();
  };

  const handlePlayAmbient = (type) => {
    soundSystem.playAmbientLocation(type);
    setAmbientPlaying(true);
    setTimeout(() => setAmbientPlaying(false), 2400);
  };

  return (
    <section id="leonida" className="py-24 px-4 md:px-8 relative bg-[#090812] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-[#00F0FF] animate-pulse" />
            <DecryptedText text="// 02. INTERACTIVE POSTCARD CAROUSEL" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#F8F7FC] mb-4">
            LEONIDA <span className="text-[#00F0FF]">POSTCARD STACK</span>
          </h2>
          <p className="text-[#9E9BB8] text-base md:text-lg font-medium leading-relaxed">
            Hover over any postcard for tactile 3D perspective tilt. Click any location card to open the glassmorphic Location Intel drawer with audio soundscapes.
          </p>
        </div>

        {/* 3D Tilted Postcard Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {postcards.map((card, idx) => {
            const isSelected = selectedLocation === idx;
            return (
              <div key={card.id} onClick={() => handleCardClick(idx)} className="cursor-pointer group">
                <TiltedCard maxTilt={15} scale={1.03} className="h-full">
                  <div
                    className={`rounded-[20px] bg-[rgba(20,17,36,0.65)] backdrop-blur-md border p-4 transition-all duration-300 flex flex-col justify-between h-[380px] relative overflow-hidden ${
                      isSelected
                        ? 'border-[#FF5E7E] shadow-xl shadow-[#FF5E7E]/20'
                        : 'border-white/[0.08] hover:border-[#FF5E7E]/45'
                    }`}
                  >
                    {/* Top Location Postal Stamp */}
                    <div className="flex items-center justify-between mb-3 z-10">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF5E7E] bg-black/60 px-2.5 py-1 rounded-md border border-white/10 uppercase">
                        {card.stamp}
                      </span>
                      <span className="text-[10px] font-mono text-[#00F0FF]">
                        GPS READY
                      </span>
                    </div>

                    {/* Artwork Container */}
                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-black mb-3 border border-white/[0.08]">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80 bg-black/70 px-2 py-0.5 rounded">
                        {card.climate}
                      </div>
                    </div>

                    {/* Bottom Details */}
                    <div className="z-10">
                      <h4 className="text-lg font-black text-[#F8F7FC] uppercase tracking-tight group-hover:text-[#FF5E7E] transition-colors truncate">
                        {card.name}
                      </h4>
                      <p className="text-xs text-[#9E9BB8] line-clamp-2 leading-relaxed mb-3">
                        {card.tagline}
                      </p>

                      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#00F0FF]">
                        <span>OPEN INTEL DRAWER</span>
                        <Navigation className="w-3.5 h-3.5 text-[#FF5E7E] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                  </div>
                </TiltedCard>
              </div>
            );
          })}
        </div>

        {/* Expandable Glassmorphic Location Intel Drawer */}
        {isDrawerOpen && (
          <div className="rounded-[20px] bg-[rgba(20,17,36,0.85)] backdrop-blur-xl border border-[#FF5E7E]/50 p-6 md:p-8 shadow-2xl relative animate-in fade-in slide-in-from-bottom-3 duration-300">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 text-[#9E9BB8] hover:text-white p-1 rounded-full bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF5E7E] bg-[#FF5E7E]/15 px-3 py-1 rounded-full border border-[#FF5E7E]/30 uppercase">
                    COORDINATES: <DecryptedText text={current.coordinates} />
                  </span>
                  <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded-full border border-[#00F0FF]/30">
                    CLIMATE: {current.climate}
                  </span>
                  <span className="text-[10px] font-mono text-[#FF9966] bg-[#FF9966]/10 px-3 py-1 rounded-full border border-[#FF9966]/30 flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3 text-[#FF9966]" />
                    {current.danger}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                  {current.name}
                </h3>
                <div className="text-sm font-mono font-bold text-[#FF5E7E]">
                  {current.tagline}
                </div>
                <p className="text-[#F8F7FC] text-sm leading-relaxed max-w-2xl">
                  {current.desc}
                </p>

                {/* Vibe Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {current.vibeTags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono font-bold text-[#00F0FF] bg-black/50 px-2.5 py-1 rounded-lg border border-white/[0.08]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Action: Ambient Audio Preview */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-[16px] bg-black/40 border border-white/[0.08] text-center">
                <div className="text-xs font-mono text-[#9E9BB8] mb-3">ATMOSPHERIC SOUNDSCAPE</div>
                <button
                  onClick={() => handlePlayAmbient(current.type)}
                  className="w-full py-3.5 rounded-xl bg-[#FF5E7E] hover:bg-[#FF4568] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#FF5E7E]/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <Volume2 className={`w-4 h-4 ${ambientPlaying ? 'animate-bounce text-white' : ''}`} />
                  <span>{ambientPlaying ? 'SYNTHESIZING SOUNDSCAPE...' : 'PLAY AMBIENT AUDIO'}</span>
                </button>
                <span className="text-[10px] font-mono text-[#9E9BB8] mt-2">
                  WEB AUDIO API LIVE CLIENT-SIDE GENERATOR
                </span>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ExploreLeonida;
