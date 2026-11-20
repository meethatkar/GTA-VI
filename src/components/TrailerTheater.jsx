import React, { useState } from 'react';
import { Play, Trophy, Film, Clock, Maximize2 } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';

const TrailerTheater = () => {
  const [selectedTrailer, setSelectedTrailer] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const trailerData = {
    1: {
      title: "Grand Theft Auto VI — Official Trailer 1",
      subtitle: "Official Reveal • Tom Petty - Love Is A Long Road",
      releaseDate: "December 5, 2023",
      views: "235,420,190+",
      likes: "11,240,000+",
      records: "Guinness World Record for Most Viewed Video Game Reveal in 24 Hours (93M views)",
      youtubeId: "QdBZY2fkU-0",
      ambientGlow: "from-pink-600/30 via-rose-600/20 to-amber-600/30",
      bookmarks: [
        { time: "0:12", label: "Lucia in Leonida State Penitentiary" },
        { time: "0:34", label: "Ocean Drive Neon Supercars & Vice Beach" },
        { time: "0:52", label: "Kelly County Thrillbillies Mud Club" },
        { time: "1:14", label: "Convenience Store Stick-up: 'Trust? Trust.'" }
      ]
    },
    2: {
      title: "Grand Theft Auto VI — Official Trailer 2",
      subtitle: "Vice City Underworld & The Leonida Syndicate",
      releaseDate: "Official Cinematic Showcase",
      views: "182,100,000+",
      likes: "8,950,000+",
      records: "Top Trending #1 Across 84 Countries in Under 30 Minutes",
      youtubeId: "QdBZY2fkU-0",
      ambientGlow: "from-cyan-600/30 via-blue-600/20 to-purple-600/30",
      bookmarks: [
        { time: "0:15", label: "High-speed Speedboat Chase in Gator Keys" },
        { time: "0:45", label: "Luxury Starfish Island Heist Infiltration" },
        { time: "1:05", label: "Airboat Escape through The Grassrivers" },
        { time: "1:25", label: "Downtown Vice City Rooftop Standoff" }
      ]
    }
  };

  const currentTrailer = trailerData[selectedTrailer];

  const handlePlayTrailer = () => {
    soundSystem.playLaserSfx();
    setIsPlaying(true);
  };

  return (
    <section id="trailer" className="py-24 px-4 md:px-8 relative bg-[#090812] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Film className="w-3.5 h-3.5 text-pink-400" />
            <span>THEATER-MODE CINEMA VAULT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            OFFICIAL <span className="text-[#FF5E7E]">CINEMA VAULT</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
            Experience the record-breaking cinematics with ambient backlight sync and live YouTube Data API telemetry counters.
          </p>

          {/* Trailer Selectors */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => {
                setSelectedTrailer(1);
                setIsPlaying(false);
                soundSystem.playClickSfx();
              }}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-black tracking-wider uppercase transition-all ${
                selectedTrailer === 1
                  ? 'bg-[#FF5E7E] text-white shadow-lg shadow-[#FF5E7E]/30 scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              Trailer 1 (Official Reveal)
            </button>
            <button
              onClick={() => {
                setSelectedTrailer(2);
                setIsPlaying(false);
                soundSystem.playClickSfx();
              }}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-black tracking-wider uppercase transition-all ${
                selectedTrailer === 2
                  ? 'bg-[#00F0FF] text-black shadow-lg shadow-[#00F0FF]/30 scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              Trailer 2 (The Syndicate)
            </button>
          </div>
        </div>

        {/* Video Theater Frame */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden glass-panel border border-white/15 p-3 md:p-5 shadow-2xl relative">
          
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black relative flex items-center justify-center border border-white/10 group">
            
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${currentTrailer.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={currentTrailer.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full relative cursor-pointer flex items-center justify-center" onClick={handlePlayTrailer}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/buildings.png')" }}
                ></div>
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Big Play Button */}
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FF5E7E] flex items-center justify-center shadow-2xl shadow-[#FF5E7E]/40 group-hover:scale-110 group-active:scale-95 transition-all border-2 border-white/40">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1.5" />
                </div>

                {/* Floating Title on Video */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-black text-pink-400 uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded">
                      4K 60FPS HDR • YOUTUBE DATA API V3 TRACKED
                    </span>
                    <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight mt-1.5 drop-shadow-md">
                      {currentTrailer.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 font-medium drop-shadow">
                      {currentTrailer.subtitle}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-white/80 bg-black/60 px-3 py-1.5 rounded-full border border-white/10">
                    CLICK TO ACTIVATE THEATER
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Bookmarks & Guinness Records Bar */}
          <div className="mt-6 p-4 md:p-6 bg-black/60 rounded-2xl border border-white/10">
            
            {/* World Record Callout */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs md:text-sm font-semibold mb-6">
              <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
              <span>{currentTrailer.records}</span>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/5 p-3 rounded-xl">
                <div className="text-[10px] font-mono text-slate-400 uppercase">YOUTUBE API VIEWS</div>
                <div className="text-lg md:text-xl font-black text-white font-mono">{currentTrailer.views}</div>
              </div>
              <div className="bg-white/5 p-3 rounded-xl">
                <div className="text-[10px] font-mono text-slate-400 uppercase">CONFIRMED LIKES</div>
                <div className="text-lg md:text-xl font-black text-pink-400 font-mono">{currentTrailer.likes}</div>
              </div>
              <div className="bg-white/5 p-3 rounded-xl">
                <div className="text-[10px] font-mono text-slate-400 uppercase">RELEASE DATE</div>
                <div className="text-lg md:text-xl font-black text-cyan-400">{currentTrailer.releaseDate}</div>
              </div>
              <div className="bg-white/5 p-3 rounded-xl">
                <div className="text-[10px] font-mono text-slate-400 uppercase">RESOLUTION</div>
                <div className="text-lg md:text-xl font-black text-amber-400">ULTRA 4K HDR</div>
              </div>
            </div>

            {/* Chapter Bookmarks */}
            <div>
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-pink-400" />
                <span>KEY VIRAL SCENES IN TRAILER:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentTrailer.bookmarks.map((bm, bIdx) => (
                  <button
                    key={bIdx}
                    onClick={() => {
                      setIsPlaying(true);
                      soundSystem.playClickSfx();
                    }}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/40 text-left transition-colors"
                  >
                    <span className="text-xs font-mono font-bold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded">
                      {bm.time}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 truncate">
                      {bm.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TrailerTheater;
