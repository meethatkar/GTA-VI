import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';

const CheatCodeListener = ({ setWantedLevel }) => {
  const bufferRef = useRef('');
  const [activeToast, setActiveToast] = useState(null);

  useEffect(() => {
    const cheats = {
      HESOYAM: {
        name: 'Full Health, Armor & +$250,000',
        action: () => soundSystem.playCheatSfx()
      },
      AEZAKMI: {
        name: 'Never Wanted (Police Clearance)',
        action: () => {
          setWantedLevel(0);
          soundSystem.playCheatSfx();
        }
      },
      PANZER: {
        name: 'Rhino Tank Air-Dropped in Vice Beach',
        action: () => soundSystem.playCheatSfx()
      },
      LEAVEMEALONE: {
        name: 'Wanted Level Reduced to Zero',
        action: () => {
          setWantedLevel(0);
          soundSystem.playCheatSfx();
        }
      },
      NUTTERTOOLS: {
        name: 'Heavy Arsenal & Micro SMG Unlocked',
        action: () => soundSystem.playCheatSfx()
      },
      SEAWAYS: {
        name: 'Amphibious Supercars Enabled',
        action: () => soundSystem.playCheatSfx()
      }
    };

    const handleKeyDown = (e) => {
      // Ignore inputs from form fields
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const char = e.key.toUpperCase();
      if (!/^[A-Z]$/.test(char)) return;

      bufferRef.current = (bufferRef.current + char).slice(-15);
      for (const [code, meta] of Object.entries(cheats)) {
        if (bufferRef.current.endsWith(code)) {
          meta.action();
          setActiveToast({ code, name: meta.name });
          setTimeout(() => setActiveToast(null), 4000);
          bufferRef.current = '';
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setWantedLevel]);

  if (!activeToast) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="p-[2px] rounded-2xl border-2 border-amber-400 bg-black/95 shadow-2xl shadow-amber-500/30">
        <div className="bg-black/90 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/20">
          <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-black font-black text-xs shrink-0">
            <Sparkles className="w-4 h-4 fill-black" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest">
              CHEAT ACTIVATED // {activeToast.code}
            </div>
            <div className="text-sm font-bold text-white tracking-wide">
              {activeToast.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatCodeListener;
