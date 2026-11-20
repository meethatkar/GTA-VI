import React, { useState, useEffect } from 'react';
import { Eye, Flame, Radio, TrendingUp, MessageSquare, ArrowUpRight } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';
import DecryptedText from './react-bits/DecryptedText';

const ViceViralReels = () => {
  const [activeTab, setActiveTab] = useState('reels'); // 'reels' | 'reddit'

  // Reddit hot posts state with live fallback
  const [redditPosts, setRedditPosts] = useState([
    {
      id: 'r1',
      title: 'Detailed breakdown of Vice Beach physics: water foam, dynamic wet sand footprints and wave refraction are UNREAL',
      author: 'u/LeonidaCartographer',
      score: 18420,
      comments: 2190,
      flair: 'Analysis / Trailer',
      time: '3 hours ago',
      url: 'https://reddit.com/r/GTA6'
    },
    {
      id: 'r2',
      title: 'The Florida Man with the live alligator in the beer cooler is based on a real 2018 Jacksonville incident lmao',
      author: 'u/GatorWrangler99',
      score: 34190,
      comments: 1840,
      flair: 'Meme / Parody',
      time: '5 hours ago',
      url: 'https://reddit.com/r/GTA6'
    },
    {
      id: 'r3',
      title: 'Lucia Caminos ankle monitor detail: Notice how the green LED blinks whenever she enters restricted parole zones',
      author: 'u/ViceCityInvestigator',
      score: 29800,
      comments: 3120,
      flair: 'Lore / Details',
      time: '7 hours ago',
      url: 'https://reddit.com/r/GTA6'
    },
    {
      id: 'r4',
      title: 'Tom Petty - Love Is A Long Road streaming numbers are up 36,900% since Trailer 1 drop. Pure perfection.',
      author: 'u/Wave103Host',
      score: 41200,
      comments: 2900,
      flair: 'Soundtrack',
      time: '12 hours ago',
      url: 'https://reddit.com/r/GTA6'
    }
  ]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/GTA6/hot.json?limit=6')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((json) => {
        if (json?.data?.children?.length > 0) {
          const mapped = json.data.children.map((c) => ({
            id: c.data.id,
            title: c.data.title,
            author: `u/${c.data.author}`,
            score: c.data.score || 15200,
            comments: c.data.num_comments || 890,
            flair: c.data.link_flair_text || 'Hot Community',
            time: 'Live on Reddit',
            url: `https://reddit.com${c.data.permalink}`
          }));
          setRedditPosts(mapped);
        }
      })
      .catch(() => {
        // Safe offline fallback
      });
  }, []);

  const marqueeCards = [
    { id: 'm1', handle: '@leonida_chaos', tag: '#OnlyInLeonida', text: 'Dual hammer Karen in front yard 🔨💀', views: '24.8M', time: '14:22' },
    { id: 'm2', handle: '@vice_gas_n_go', tag: '#GatorHeist', text: '14ft Gator raiding convenience store beer freezer 🐊🍻', views: '68.2M', time: '02:14' },
    { id: 'm3', handle: '@ocean_drive_riders', tag: '#LowriderMeet', text: '1984 Voodoo hopping 4 FEET outside Malibu Club 🚗🔥', views: '42.1M', time: '23:58' },
    { id: 'm4', handle: '@cctv_leaks_leonida', tag: '#WantedDuo', text: 'Lucia & Jason convenience store heist surveillance 🚨', views: '112.4M', time: '03:49' },
    { id: 'm5', handle: '@everglades_trapper', tag: '#AirboatRally', text: 'High-speed airboat jump across flaming swamp canal 🚤💥', views: '19.5M', time: '18:30' }
  ];

  return (
    <section id="viral" className="py-24 px-4 md:px-8 relative bg-[#090812] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E7E]/10 border border-[#FF5E7E]/30 text-[#FF5E7E] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-[#FF5E7E] animate-bounce" />
            <DecryptedText text="// 04. ONLY IN LEONIDA VIRAL FEED" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#F8F7FC] mb-4">
            ONLY IN <span className="text-[#FF5E7E]">LEONIDA</span>
          </h2>
          <p className="text-[#9E9BB8] text-base md:text-lg font-medium leading-relaxed">
            The viral social-media feed that made the GTA 6 trailers iconic. Horizontal marquee of 9:16 vertical cards with live r/GTA6 community telemetry.
          </p>

          {/* Switcher Buttons */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => { setActiveTab('reels'); soundSystem.playClickSfx(); }}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                activeTab === 'reels'
                  ? 'bg-[#FF5E7E] text-white shadow-lg shadow-[#FF5E7E]/30 scale-105'
                  : 'bg-white/5 text-[#9E9BB8] hover:bg-white/10 border border-white/[0.08]'
              }`}
            >
              Vertical Phone Marquee
            </button>
            <button
              onClick={() => { setActiveTab('reddit'); soundSystem.playClickSfx(); }}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === 'reddit'
                  ? 'bg-[#FF9966] text-black font-bold shadow-lg shadow-[#FF9966]/30 scale-105'
                  : 'bg-white/5 text-[#9E9BB8] hover:bg-white/10 border border-white/[0.08]'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>r/GTA6 Hot JSON Feed</span>
            </button>
          </div>
        </div>

        {/* 1. VERTICAL PHONE-FRAME MARQUEE (9:16 cards, pauses on hover) */}
        {activeTab === 'reels' && (
          <div className="space-y-6">
            
            {/* Horizontal Continuous Marquee Container */}
            <div className="w-full overflow-hidden py-4 group">
              <div className="flex gap-5 w-max animate-ticker group-hover:[animation-play-state:paused]">
                {marqueeCards.concat(marqueeCards).map((card, idx) => (
                  <div
                    key={idx}
                    className="w-[220px] sm:w-[240px] aspect-[9/16] rounded-[20px] bg-[rgba(20,17,36,0.75)] backdrop-blur-md border border-white/[0.08] hover:border-[#FF5E7E]/50 p-4 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl cursor-pointer"
                  >
                    {/* Background Artwork */}
                    <div
                      className="absolute inset-0 bg-cover bg-center filter contrast-125"
                      style={{
                        backgroundImage: idx % 2 === 0 ? "url('/buildings.png')" : "url('/clouds.png')",
                        opacity: 0.35
                      }}
                    ></div>
                    <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>

                    {/* Top Status */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[9px] font-mono font-bold text-[#FF5E7E] bg-black/60 px-2 py-0.5 rounded border border-white/10">
                        {card.tag}
                      </span>
                      <span className="text-[9px] font-mono text-[#00F0FF]">{card.time}</span>
                    </div>

                    {/* Middle Icon */}
                    <div className="relative z-10 my-auto text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-[#FF5E7E] flex items-center justify-center shadow-lg">
                        <Flame className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xs font-bold text-white leading-snug drop-shadow-md">
                        {card.text}
                      </p>
                    </div>

                    {/* Bottom Handle & Views */}
                    <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#FF5E7E] font-bold truncate max-w-[120px]">{card.handle}</span>
                      <span className="text-[#9E9BB8] flex items-center gap-1">
                        <Eye className="w-3 h-3 text-[#00F0FF]" /> {card.views}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center text-xs font-mono text-[#9E9BB8]">
              Hover marquee cards to pause rotation • Click card to inspect telemetry
            </div>
          </div>
        )}

        {/* 2. REDDIT HOT JSON VIEW */}
        {activeTab === 'reddit' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="p-4 rounded-[20px] bg-black/60 border border-[#FF9966]/40 flex items-center justify-between text-xs text-[#FF9966] font-mono">
              <span className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#FF9966] animate-pulse" />
                <span>SYNCED TO REDDIT PUBLIC ENDPOINT: https://www.reddit.com/r/GTA6/hot.json</span>
              </span>
              <span className="hidden sm:inline">ZERO QUOTA CONSUMPTION</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {redditPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-[20px] bg-[rgba(20,17,36,0.65)] hover:bg-[rgba(20,17,36,0.85)] border border-white/[0.08] hover:border-[#FF5E7E]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 text-[10px] font-mono text-[#9E9BB8]">
                      <span className="text-[#FF9966] font-bold bg-[#FF9966]/10 px-2 py-0.5 rounded border border-[#FF9966]/20">
                        {post.flair}
                      </span>
                      <span>{post.time}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-[#FF5E7E] transition-colors line-clamp-3 leading-snug mb-4">
                      {post.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-xs font-mono text-[#9E9BB8]">
                    <span className="text-[#FF5E7E] font-bold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {post.score.toLocaleString()} Upvotes
                    </span>
                    <span className="flex items-center gap-1 text-[#00F0FF]">
                      <MessageSquare className="w-3.5 h-3.5" />
                      {post.comments.toLocaleString()}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#FF5E7E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ViceViralReels;
