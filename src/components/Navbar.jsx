import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Play } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';

const Navbar = ({ onOpenTrailer }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAudio = () => {
    const isPlaying = soundSystem.toggle('vice-synth');
    setIsPlayingAudio(isPlaying);
    if (isPlaying) {
      soundSystem.playLaserSfx();
    }
  };

  const navLinks = [
    { name: 'Story & Duo', href: '#story' },
    { name: 'Postcard Map', href: '#leonida' },
    { name: 'Live Telemetry', href: '#telemetry' },
    { name: 'Viral Reels', href: '#viral' },
    { name: 'Wanted Studio', href: '#mugshot' },
    { name: 'Trailers', href: '#trailer' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Tech Engine', href: '#features' }
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1900px] z-40 glass-panel border-b border-white/10 px-4 md:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Rockstar Emblem */}
        <a href="#landing" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-300/40 transform group-hover:scale-105 transition-transform">
            <span className="font-black text-black text-xl tracking-tighter">R<span className="text-white">*</span></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.25em] text-[#9E9BB8] font-semibold uppercase">Rockstar Games</span>
            <span className="text-xs sm:text-sm font-black tracking-wider text-[#FF5E7E]">
              GRAND THEFT AUTO VI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase font-bold tracking-widest text-[#9E9BB8] hover:text-[#FF5E7E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5E7E] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* Radio Synth Sound Toggle */}
          <button
            onClick={toggleAudio}
            title={isPlayingAudio ? "Mute Vice City Radio" : "Play Vice City Radio"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all border ${
              isPlayingAudio 
                ? 'bg-[#FF5E7E]/20 text-[#FF5E7E] border-[#FF5E7E]/60 shadow-lg shadow-[#FF5E7E]/20' 
                : 'bg-white/5 text-[#9E9BB8] border-white/10 hover:border-[#FF5E7E]/40 hover:text-white'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#FF5E7E] animate-pulse" />
                <span className="hidden sm:inline">RADIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">RADIO</span>
              </>
            )}
          </button>

          {/* Watch Trailer CTA Button */}
          <button
            onClick={onOpenTrailer}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-[#FF5E7E] hover:bg-[#FF4568] text-white shadow-lg shadow-[#FF5E7E]/30 hover:scale-105 active:scale-95 transition-all border border-pink-300/40"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>WATCH TRAILER</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 pb-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-xs font-bold tracking-wider text-slate-200 hover:bg-white/10 hover:text-pink-400 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenTrailer) onOpenTrailer();
            }}
            className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-cyan-400 hover:bg-white/10 rounded-lg text-left uppercase"
          >
            <Play className="w-3.5 h-3.5 fill-cyan-400" />
            Watch Trailer
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
