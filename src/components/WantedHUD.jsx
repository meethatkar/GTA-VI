import React, { useEffect, useState } from 'react';
import { Star, ShieldAlert } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';

const WantedHUD = ({ wantedLevel, setWantedLevel, setTriggerSiren }) => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    if (wantedLevel >= 5) {
      setTriggerSiren(true);
      setIsFlashing(true);
      soundSystem.playSirenSfx();
      const timer = setTimeout(() => {
        setIsFlashing(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setIsFlashing(false);
    }
  }, [wantedLevel, setTriggerSiren]);

  const handleStarClick = (starIndex) => {
    soundSystem.playLaserSfx();
    const newLevel = starIndex === wantedLevel ? Math.max(0, starIndex - 1) : starIndex;
    setWantedLevel(newLevel);
  };

  return (
    <>
      {/* 5-Star Wanted HUD Fixed in Top Right */}
      <div className="fixed top-16 right-4 sm:right-8 z-40 flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-2xl select-none transition-all hover:scale-105">
        <span className="text-[10px] font-mono font-bold text-slate-300 mr-1 hidden sm:inline">
          WANTED:
        </span>
        {[1, 2, 3, 4, 5].map((star) => {
          const isLit = star <= wantedLevel;
          return (
            <button
              key={star}
              onClick={() => handleStarClick(star)}
              title={`Wanted Level: ${star} Stars (Click to toggle)`}
              className="focus:outline-none transition-transform hover:scale-125"
            >
              <Star
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                  isLit
                    ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse'
                    : 'text-white/20 fill-transparent hover:text-white/40'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Police Siren Edge Glow on Viewport (5 Stars Activated) */}
      {isFlashing && (
        <div className="fixed inset-0 pointer-events-none z-50 animate-siren-border">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-600/90 text-white text-xs sm:text-sm font-black font-mono px-6 py-2 rounded-full border-2 border-white shadow-2xl animate-bounce flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-white animate-spin" />
            <span>MAXIMUM 5-STAR WANTED LEVEL ACTIVATED // VCPD DISPATCHED</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes sirenBorder {
          0%, 100% {
            box-shadow: inset 0 0 60px 25px rgba(239, 68, 68, 0.75), inset 0 0 120px 40px rgba(59, 130, 246, 0.35);
          }
          50% {
            box-shadow: inset 0 0 60px 25px rgba(59, 130, 246, 0.75), inset 0 0 120px 40px rgba(239, 68, 68, 0.35);
          }
        }
        .animate-siren-border {
          animation: sirenBorder 0.6s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default WantedHUD;
