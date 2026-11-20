import React, { useState } from 'react';
import { Radio, Play, Pause, Compass, MapPin, Video, Sparkles, Film, History, ChevronUp, ChevronDown } from 'lucide-react';
import { soundSystem } from '../../utils/audioSynthesizer';

export const Dock = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRadioExpanded, setIsRadioExpanded] = useState(false);
  const [activeStation, setActiveStation] = useState('vice-synth');

  const navItems = [
    { icon: Sparkles, label: 'Story', href: '#story', color: '#FF5E7E' },
    { icon: MapPin, label: 'Map', href: '#leonida', color: '#00F0FF' },
    { icon: Compass, label: 'Telemetry', href: '#telemetry', color: '#FF9966' },
    { icon: Video, label: 'Viral', href: '#viral', color: '#9D4EDD' },
    { icon: Film, label: 'Cinema', href: '#trailer', color: '#FF5E7E' },
    { icon: History, label: 'Franchise', href: '#franchise', color: '#00F0FF' }
  ];

  const handleToggleRadio = () => {
    const nextState = soundSystem.toggle(activeStation);
    setIsPlaying(nextState);
  };

  const handleSelectStation = (id) => {
    setActiveStation(id);
    soundSystem.playStation(id);
    setIsPlaying(true);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 select-none flex flex-col items-center">
      
      {/* Mini Radio Deck Popover */}
      {isRadioExpanded && (
        <div className="mb-3 w-72 rounded-[20px] bg-[#090812]/95 backdrop-blur-xl border border-[#FF5E7E]/40 p-4 shadow-2xl shadow-[#FF5E7E]/20 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] mb-2.5">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF5E7E] flex items-center gap-1.5">
              <Radio className="w-3 h-3 animate-pulse" />
              VICE CITY RADIO SYNTH
            </span>
            <span className="text-[9px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-1.5 py-0.5 rounded">
              FM STEREO
            </span>
          </div>

          {/* Equalizer Visualizer */}
          <div className="flex items-end justify-between h-7 bg-black/60 px-2 py-1 rounded-lg border border-white/[0.08] mb-2.5">
            {[30, 80, 55, 95, 70, 85, 40, 100, 65, 90].map((h, i) => (
              <div
                key={i}
                className={`w-1 rounded-t-sm transition-all duration-150 ${
                  isPlaying ? 'bg-[#FF5E7E] animate-pulse' : 'bg-white/10'
                }`}
                style={{
                  height: isPlaying ? `${h}%` : '20%',
                  animationDelay: `${i * 90}ms`
                }}
              ></div>
            ))}
          </div>

          {/* Station Pills */}
          <div className="grid grid-cols-2 gap-1.5 mb-2.5">
            {[
              { id: 'vice-synth', name: 'Vice Synth', freq: '105.7' },
              { id: 'wave-103', name: 'Wave 103', freq: '103.2' },
              { id: 'espantoso', name: 'Espantoso', freq: '98.3' },
              { id: 'leonida-trap', name: 'Leonida Trap', freq: '91.9' }
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => handleSelectStation(st.id)}
                className={`p-1.5 rounded-lg text-left text-[10px] font-mono font-bold border transition-colors truncate ${
                  activeStation === st.id
                    ? 'bg-[#FF5E7E]/20 border-[#FF5E7E] text-white'
                    : 'bg-white/5 border-white/[0.08] text-[#9E9BB8] hover:text-white'
                }`}
              >
                <div className="text-[8px] text-[#FF5E7E]">{st.freq} FM</div>
                <div className="truncate">{st.name}</div>
              </button>
            ))}
          </div>

          <button
            onClick={handleToggleRadio}
            className={`w-full py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
              isPlaying
                ? 'bg-[#FF5E7E] text-white shadow-lg shadow-[#FF5E7E]/30'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
            <span>{isPlaying ? 'PAUSE STEREO' : 'PLAY STEREO'}</span>
          </button>
        </div>
      )}

      {/* Floating Frosted Glass Dock Bar */}
      <div className="flex items-center gap-1.5 p-2 rounded-[24px] bg-[rgba(20,17,36,0.75)] backdrop-blur-xl border border-white/[0.12] shadow-2xl shadow-black/80 hover:border-[#FF5E7E]/40 transition-colors">
        
        {/* Navigation Quick Anchors */}
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              title={item.label}
              className="p-2 sm:px-3 sm:py-2 rounded-[16px] text-[#9E9BB8] hover:text-[#F8F7FC] hover:bg-white/[0.08] transition-all flex items-center gap-1.5 group"
            >
              <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: item.color }} />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider hidden md:inline">
                {item.label}
              </span>
            </a>
          );
        })}

        <div className="w-[1px] h-6 bg-white/[0.12] mx-1"></div>

        {/* Vice City Radio Player Trigger in Dock */}
        <div className="flex items-center gap-1 bg-black/40 rounded-[18px] p-1 border border-white/[0.08]">
          <button
            onClick={handleToggleRadio}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[14px] text-xs font-mono font-bold tracking-wider transition-all ${
              isPlaying
                ? 'bg-[#FF5E7E] text-white shadow-lg shadow-[#FF5E7E]/40'
                : 'text-[#9E9BB8] hover:text-white'
            }`}
          >
            <Radio className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse text-white' : 'text-[#FF5E7E]'}`} />
            <span className="hidden sm:inline">{isPlaying ? 'ON' : 'RADIO'}</span>
          </button>

          <button
            onClick={() => setIsRadioExpanded(!isRadioExpanded)}
            className="p-1.5 text-[#9E9BB8] hover:text-white rounded-lg transition-colors"
          >
            {isRadioExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>

    </div>
  );
};

export default Dock;

