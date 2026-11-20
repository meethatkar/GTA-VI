import React, { useState } from 'react';
import { Radio, Play, Pause, Disc } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';

const RadioTuner = () => {
  const [activeStation, setActiveStation] = useState('vice-synth');
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequency, setFrequency] = useState(105.7);

  const stations = [
    {
      id: 'vice-synth',
      name: 'Vice City Sunset Wave',
      freq: '105.7 FM',
      genre: '80s Synthwave & Dream Pop',
      host: 'Fernando Martinez',
      description: 'Lush analog synthesizer pads, gated reverb drums, and glowing highway night drives.',
      color: 'from-pink-500 to-rose-600',
      badge: 'STATION 01'
    },
    {
      id: 'wave-103',
      name: 'Wave 103 Retro',
      freq: '103.2 FM',
      genre: 'New Wave, Post-Punk & Dark Synth',
      host: 'Adam First',
      description: 'Aggressive basslines, electric guitar riffs, and the authentic sound of Vice City rebellion.',
      color: 'from-purple-500 to-indigo-600',
      badge: 'STATION 02'
    },
    {
      id: 'espantoso',
      name: 'Radio Espantoso',
      freq: '98.3 FM',
      genre: 'Latin Salsa, Reggaeton & Mambo',
      host: 'Pepe & The Cuban Cartel',
      description: 'Conga rhythms, vibrant brass horns, and the unmistakable beat of Little Haiti & Vice Beach.',
      color: 'from-amber-500 to-orange-600',
      badge: 'STATION 03'
    },
    {
      id: 'leonida-trap',
      name: 'Leonida Underground Bass',
      freq: '91.9 FM',
      genre: '808 Trap & Southern Hip Hop',
      host: 'DJ Swamp Thing',
      description: 'Rumbling 808 sub-bass, rapid hi-hat rolls, and the raw energy of Kelly County mud tracks.',
      color: 'from-cyan-500 to-blue-600',
      badge: 'STATION 04'
    }
  ];

  const current = stations.find(s => s.id === activeStation) || stations[0];

  const handleTogglePlay = (stationId) => {
    const target = stationId || activeStation;
    if (isPlaying && target === activeStation) {
      soundSystem.stop();
      setIsPlaying(false);
    } else {
      setActiveStation(target);
      soundSystem.playStation(target);
      setIsPlaying(true);
    }
  };

  const handleStationSelect = (station) => {
    setActiveStation(station.id);
    setFrequency(parseFloat(station.freq));
    if (isPlaying) {
      soundSystem.playStation(station.id);
    } else {
      soundSystem.playClickSfx();
    }
  };

  return (
    <section id="radio" className="py-24 px-4 md:px-8 relative bg-[#090812] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Radio className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span>AUTHENTIC SOUNDTRACK ENGINE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            VICE CITY <span className="text-[#FF5E7E]">RADIO TUNER</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
            Tune your in-game car stereo! Experience real-time synthesized 80s analog audio and beats directly in your browser.
          </p>
        </div>

        {/* 80s Car Stereo Deck Dashboard */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#141124] p-6 md:p-10 border-4 border-slate-800 shadow-2xl shadow-black/80 relative overflow-hidden">
          
          {/* Dashboard Metallic Screws */}
          <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-slate-700 border border-slate-600 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-0.5 bg-slate-900"></div>
          </div>
          <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-slate-700 border border-slate-600 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-0.5 bg-slate-900"></div>
          </div>
          <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-slate-700 border border-slate-600 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-0.5 bg-slate-900"></div>
          </div>
          <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-slate-700 border border-slate-600 shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-0.5 bg-slate-900"></div>
          </div>

          {/* Stereo Display LCD */}
          <div className="rounded-2xl bg-black border-2 border-slate-700 p-5 md:p-8 mb-8 relative shadow-inner overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              
              {/* Station Info */}
              <div className="text-center md:text-left space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                    TUNED: {frequency} MHz
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">R* SOUND ENGINE</span>
                </div>
                <div className="text-2xl md:text-4xl font-black font-mono tracking-tight text-white flex items-center justify-center md:justify-start gap-3">
                  <span className="text-pink-400">{current.freq}</span>
                  <span className="text-slate-400 text-lg md:text-xl">|</span>
                  <span className="truncate">{current.name}</span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  HOST: {current.host} • GENRE: {current.genre}
                </div>
              </div>

              {/* Animated Equalizer Visualizer Bars */}
              <div className="flex items-end gap-1.5 h-14 bg-black/60 p-3 rounded-xl border border-white/10 shrink-0">
                {[40, 75, 90, 60, 100, 85, 50, 95, 70, 80, 65, 90].map((h, i) => (
                  <div
                    key={i}
                    className={`w-2 rounded-t-sm transition-all duration-150 ${
                      isPlaying 
                        ? 'bg-[#FF5E7E] animate-pulse' 
                        : 'bg-white/10'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.max(15, (h * ((i % 3) + 1)) % 100)}%` : '15%',
                      animationDelay: `${i * 70}ms`
                    }}
                  ></div>
                ))}
              </div>

            </div>

            {/* Scrolling Track Marquee in LCD */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-400/80">
              <span className="flex items-center gap-1.5">
                <Disc className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
                {isPlaying ? `NOW STREAMING: LIVE RETRO SYNTH PULSE (105 BPM)` : `STATUS: TUNER STANDBY`}
              </span>
              <span className="hidden sm:inline">DOLBY SURROUND 7.1 COMPATIBLE</span>
            </div>

          </div>

          {/* Stereo Controls & Knobs Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Big Main Play/Pause Button */}
            <div className="md:col-span-4 flex items-center justify-center md:justify-start gap-4">
              <button
                onClick={() => handleTogglePlay(activeStation)}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all border-2 shadow-xl ${
                  isPlaying
                    ? 'bg-[#FF5E7E] text-white border-pink-300 shadow-[#FF5E7E]/40 scale-105'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-600 hover:border-pink-500'
                }`}
              >
                {isPlaying ? <Pause className="w-7 h-7 fill-white" /> : <Play className="w-7 h-7 fill-white ml-1" />}
              </button>
              <div>
                <div className="text-sm font-black text-white uppercase tracking-wider">
                  {isPlaying ? 'PAUSE RADIO' : 'START PLAYING'}
                </div>
                <div className="text-xs text-slate-400 font-mono">WEB AUDIO SYNTH</div>
              </div>
            </div>

            {/* Quick Station Select Buttons */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {stations.map((st) => (
                <button
                  key={st.id}
                  onClick={() => handleStationSelect(st)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeStation === st.id
                      ? 'bg-pink-950/60 border-pink-500 text-white shadow-md shadow-pink-500/20'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="text-[10px] font-mono text-pink-400 font-bold">{st.freq}</div>
                  <div className="text-xs font-bold truncate mt-0.5">{st.name}</div>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RadioTuner;
