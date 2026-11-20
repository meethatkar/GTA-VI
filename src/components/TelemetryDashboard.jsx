import React, { useState, useEffect } from 'react';
import { Activity, Video, TrendingUp, Radio, ExternalLink, Zap } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';
import SpotlightCard from './react-bits/SpotlightCard';
import CountUp from './react-bits/CountUp';
import ShinyText from './react-bits/ShinyText';
import DecryptedText from './react-bits/DecryptedText';

const TelemetryDashboard = () => {
  const [liveCount, setLiveCount] = useState(3842109);

  // Micro fluctuation to simulate live traffic telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 240 - 110));
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const topStreamers = [
    { name: 'Kai Cenat', platform: 'Twitch', viewers: '312,400', title: 'GTA 6 VICE CITY 24H MARATHON 🔥 WITH JASON', link: 'https://twitch.tv/kaicenat' },
    { name: 'iShowSpeed', platform: 'YouTube', viewers: '385,200', title: 'SPEED PLAYS GTA 6 (FIRST MISSION & GATOR CHASE)', link: 'https://youtube.com/@ishowspeed' },
    { name: 'xQc', platform: 'Kick', viewers: '148,900', title: 'GTA VI VICE CITY SPEEDRUN ANALYSIS // 100% ROUTE', link: 'https://kick.com/xqc' },
    { name: 'Rubius', platform: 'Twitch', viewers: '215,600', title: 'GTA 6 EN DIRECTO // HISTÓRICO EN ESPAÑOL', link: 'https://twitch.tv/rubius' }
  ];

  return (
    <section id="telemetry" className="py-24 px-4 md:px-8 relative bg-[#090812] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with DecryptedText tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Activity className="w-3.5 h-3.5 text-[#00F0FF] animate-pulse" />
            <DecryptedText text="// 03. LIVE LAUNCH TELEMETRY HUB" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#F8F7FC] mb-4">
            STREAMING <span className="text-[#00F0FF]">RADAR HUB</span>
          </h2>
          <p className="text-[#9E9BB8] text-base md:text-lg font-medium leading-relaxed">
            Live telemetry tracking aggregated Twitch Helix, YouTube Data API v3, and Kick streams as Grand Theft Auto VI peaks across global broadcast networks.
          </p>
        </div>

        {/* Asymmetric Bento Grid (12-column CSS Grid with mixed spans) */}
        <div className="grid grid-cols-12 gap-5 mb-6">
          
          {/* Card 1: Large col-span-12 lg:col-span-6 lg:row-span-2 Live Concurrent Viewer Counter */}
          <div className="col-span-12 lg:col-span-6 lg:row-span-2">
            <SpotlightCard
              spotlightColor="rgba(255, 94, 126, 0.22)"
              className="p-6 md:p-8 flex flex-col justify-between h-full bg-[rgba(20,17,36,0.65)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 bg-[#FF5E7E]/15 border border-[#FF5E7E]/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#FF5E7E]">
                    <span className="w-2 h-2 rounded-full bg-[#FF5E7E] animate-ping"></span>
                    <span>LIVE CONCURRENT BROADCASTS</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded">
                    HELIX TELEMETRY
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#9E9BB8] uppercase tracking-wider mb-1">
                  AGGREGATED CONCURRENT VIEWERS
                </div>

                {/* Animated CountUp Counter */}
                <div className="text-4xl sm:text-6xl font-black font-mono text-[#F8F7FC] tracking-tight mb-4 flex items-center gap-2">
                  <CountUp to={liveCount} duration={2.5} />
                  <span className="text-xl font-normal text-[#FF5E7E] animate-pulse">●</span>
                </div>

                <p className="text-xs text-[#9E9BB8] leading-relaxed mb-6">
                  Highest recorded single-game viewership concurrency in internet history. Live updates refreshed every 2.8 seconds.
                </p>

                {/* Mini SVG Sparkline Chart */}
                <div className="bg-black/50 p-4 rounded-xl border border-white/[0.08] mb-6">
                  <div className="flex justify-between text-[10px] font-mono text-[#9E9BB8] mb-2">
                    <span>HOURLY TRAFFIC ACCELERATION</span>
                    <span className="text-[#00F0FF] font-bold">▲ +148% VELOCITY</span>
                  </div>
                  <svg viewBox="0 0 400 60" className="w-full h-14 overflow-visible">
                    <path
                      d="M 0,45 Q 40,42 80,38 T 160,28 T 240,24 T 320,12 T 400,4 L 400,60 L 0,60 Z"
                      fill="rgba(255, 94, 126, 0.15)"
                    />
                    <path
                      d="M 0,45 Q 40,42 80,38 T 160,28 T 240,24 T 320,12 T 400,4"
                      fill="none"
                      stroke="#FF5E7E"
                      strokeWidth="3"
                    />
                    <circle cx="400" cy="4" r="4" fill="#00F0FF" className="animate-ping" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#9E9BB8] pt-3 border-t border-white/[0.08]">
                <span>STATUS: STABLE 60FPS</span>
                <span className="text-[#00F0FF] font-bold">SOURCE: HELIX / YOUTUBE V3</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: Stacked col-span-12 sm:col-span-6 lg:col-span-3 Top Live Creator */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <SpotlightCard
              spotlightColor="rgba(0, 240, 255, 0.18)"
              className="p-6 flex flex-col justify-between h-full bg-[rgba(20,17,36,0.65)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded">
                    #1 CREATOR
                  </span>
                  <span className="text-[10px] font-mono text-[#FF5E7E]">385K VIEWERS</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-sm mb-3 shadow-lg">
                  S
                </div>

                <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                  iShowSpeed
                </h4>
                <p className="text-xs text-[#9E9BB8] leading-snug line-clamp-2">
                  "SPEED PLAYS GTA 6 (FIRST MISSION & GATOR CHASE)"
                </p>
              </div>

              <a
                href="https://youtube.com/@ishowspeed"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundSystem.playClickSfx()}
                className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono font-bold text-[#00F0FF] hover:text-white transition-colors"
              >
                <span>WATCH LIVESTREAM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </SpotlightCard>
          </div>

          {/* Card 3: Stacked col-span-12 sm:col-span-6 lg:col-span-3 Peak Launch Record (7.91M) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <SpotlightCard
              spotlightColor="rgba(255, 153, 102, 0.22)"
              className="p-6 flex flex-col justify-between h-full bg-[rgba(20,17,36,0.65)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#FF9966] bg-[#FF9966]/10 px-2 py-0.5 rounded">
                    ALL-TIME PEAK
                  </span>
                  <span className="text-[10px] font-mono text-[#00F0FF]">WORLD RECORD</span>
                </div>

                <div className="text-[10px] font-mono text-[#9E9BB8] uppercase tracking-wider mb-1">
                  LAUNCH DAY PEAK
                </div>

                {/* ShinyText component */}
                <div className="text-3xl sm:text-4xl font-black font-mono text-white mb-2">
                  <ShinyText text="7.91M" />
                </div>

                <p className="text-xs text-[#9E9BB8] leading-snug">
                  Surpassed Valorant (1.73M) and Cyberpunk (1.14M) combined within 45 minutes of live broadcast opening.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#FF9966]">
                <span>GLOBAL RECORD</span>
                <Zap className="w-3.5 h-3.5 text-[#FF9966]" />
              </div>
            </SpotlightCard>
          </div>

          {/* Card 4: Wide Card for Twitch / YouTube / Kick platform breakdown (col-span-12 lg:col-span-6) */}
          <div className="col-span-12 lg:col-span-6">
            <SpotlightCard
              spotlightColor="rgba(157, 78, 221, 0.2)"
              className="p-6 flex flex-col justify-between h-full bg-[rgba(20,17,36,0.65)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-[#9D4EDD]" />
                    <span>PLATFORM DISTRIBUTION</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#00F0FF]">LIVE BROADCASTS</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1">
                      <span className="text-purple-400">TWITCH HELIX</span>
                      <span className="text-white">2.28M (59%)</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: '59%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1">
                      <span className="text-red-400">YOUTUBE GAMING</span>
                      <span className="text-white">1.19M (31%)</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full rounded-full" style={{ width: '31%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1">
                      <span className="text-emerald-400">KICK LIVE</span>
                      <span className="text-white">372K (10%)</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#9E9BB8] mt-4">
                <span>CONCURRENT BITRATE: 1080P60 / 4K</span>
                <span className="text-[#00F0FF]">ZERO LATENCY PROXY</span>
              </div>
            </SpotlightCard>
          </div>

        </div>

        {/* Top Streamers Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topStreamers.map((st, i) => (
            <a
              key={i}
              href={st.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundSystem.playClickSfx()}
              className="p-4 rounded-[20px] bg-[rgba(20,17,36,0.65)] hover:bg-[rgba(20,17,36,0.85)] border border-white/[0.08] hover:border-[#FF5E7E]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-black text-white group-hover:text-[#FF5E7E] transition-colors">{st.name}</span>
                  <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded">
                    {st.viewers}
                  </span>
                </div>
                <p className="text-xs text-[#9E9BB8] line-clamp-2 leading-relaxed mb-3">
                  {st.title}
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#9E9BB8] group-hover:text-white">
                <span>{st.platform} Partner</span>
                <ExternalLink className="w-3 h-3 text-[#FF5E7E]" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TelemetryDashboard;
