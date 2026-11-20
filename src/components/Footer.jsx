import React from 'react';
import { ArrowUp, Star, ShieldAlert, Radio, ExternalLink, Gamepad2 } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';

const Footer = ({ wantedLevel, setWantedLevel }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStarHover = (starIndex) => {
    soundSystem.playClickSfx();
    if (setWantedLevel) {
      setWantedLevel(starIndex);
    }
  };

  const quickNav = [
    { label: 'Protagonists (Lucia & Jason)', href: '#story' },
    { label: 'State of Leonida Map', href: '#leonida' },
    { label: 'Live Telemetry Hub', href: '#telemetry' },
    { label: 'Viral Snapmatic Reels', href: '#viral' },
    { label: 'Wanted Card Studio', href: '#mugshot' },
    { label: 'Official Cinema Vault', href: '#trailer' },
    { label: 'Franchise History', href: '#franchise' },
    { label: 'RAGE 9 Engine Tech', href: '#features' }
  ];

  const socialLinks = [
    { name: 'YouTube', href: 'https://youtube.com/@rockstargames' },
    { name: 'Twitch', href: 'https://twitch.tv' },
    { name: 'X / Twitter', href: 'https://x.com/RockstarGames' },
    { name: 'Instagram', href: 'https://instagram.com/rockstargames' },
    { name: 'Discord', href: 'https://discord.gg' }
  ];

  return (
    <footer className="w-full bg-[#070510] text-slate-400 border-t border-pink-500/20 pt-20 pb-12 px-4 md:px-10 relative z-20">
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Main Footer Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Studio Information (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shadow-xl shadow-amber-500/20 border border-amber-300 transform hover:scale-105 transition-transform">
                <span className="font-black text-black text-2xl tracking-tighter">R<span className="text-white">*</span></span>
              </div>
              <div>
                <h4 className="text-white font-black tracking-widest text-base uppercase">ROCKSTAR GAMES</h4>
                <p className="text-[10px] font-mono tracking-widest text-pink-400 uppercase font-bold">STATE OF LEONIDA • VICE CITY</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Grand Theft Auto VI evolves the open-world medium, transporting players to the neon-soaked streets of Vice City and the untamed bayous of Leonida.
            </p>

            {/* Social Network Links */}
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/40 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-mono font-bold tracking-widest text-slate-200 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
              <span>INDEX NAVIGATION</span>
            </h5>
            <ul className="space-y-2 text-xs">
              {quickNav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-pink-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-600 group-hover:text-pink-400 transition-colors">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms & Hardware Support (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-mono font-bold tracking-widest text-slate-200 uppercase flex items-center gap-2">
              <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>PLATFORMS</span>
            </h5>
            <div className="space-y-2.5 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-bold">PlayStation® 5</div>
                <div className="text-[10px] text-slate-400">DualSense™ Haptics</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-bold">Xbox Series X|S</div>
                <div className="text-[10px] text-slate-400">4K HDR 60 FPS</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-bold">Rockstar Launcher</div>
                <div className="text-[10px] text-slate-400">PC Wishlist Active</div>
              </div>
            </div>
          </div>

          {/* VCPD Dispatch Threat Terminal / Wanted Easter Egg (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="p-5 rounded-2xl bg-black/60 border border-pink-500/30 shadow-xl space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="font-bold text-pink-400 flex items-center gap-1.5">
                  <Radio className="w-3 h-3 animate-pulse" />
                  VCPD DISPATCH HUD
                </span>
                <span className="text-slate-400">RADAR ACTIVE</span>
              </div>

              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  THREAT LEVEL INTERFACE:
                </div>
                
                {/* 5-Star Interactive Rating */}
                <div className="flex items-center gap-2 bg-black/70 p-2.5 rounded-xl border border-white/10 justify-between">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => handleStarHover(star)}
                      onClick={() => handleStarHover(star)}
                      className="focus:outline-none hover:scale-125 transition-transform"
                      title={`Set Wanted Level: ${star} Stars`}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= (wantedLevel || 0)
                            ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse'
                            : 'text-white/20 hover:text-white/40'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between pt-1">
                <span>STATUS:</span>
                <span className="text-amber-400 font-bold uppercase">
                  {(wantedLevel || 0) >= 5 ? 'CODE 5: MAXIMUM SWAT' : `LEVEL ${(wantedLevel || 0)} WANTED`}
                </span>
              </div>
            </div>

            {/* Back to Top Pill Button */}
            <button
              onClick={scrollToTop}
              className="w-full py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/40 text-xs font-bold font-mono text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-4 h-4 text-pink-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* ESRB Rating & Industry Compliance Strip */}
        <div className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-14 bg-black border-2 border-white flex flex-col items-center justify-center font-black text-white shrink-0 shadow-md">
              <span className="text-xl leading-none">M</span>
              <span className="text-[8px] tracking-tighter">17+</span>
            </div>
            <div className="text-xs space-y-0.5">
              <div className="font-bold text-white uppercase tracking-wider">ESRB RATING PENDING // MATURE 17+</div>
              <div className="text-[11px] text-slate-400 leading-snug">
                May contain Intense Violence, Blood and Gore, Sexual Content, Strong Language, and Use of Drugs and Alcohol.
              </div>
            </div>
          </div>

          <div className="text-right text-xs font-mono text-slate-400 shrink-0">
            <div>DEVELOPED BY ROCKSTAR STUDIOS</div>
            <div className="text-pink-400">RAGE 9 PROPRIETARY ENGINE</div>
          </div>
        </div>

        {/* Legal Disclaimers & Copyright */}
        <div className="pt-2 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Rockstar Games, Inc. Rockstar Games, Grand Theft Auto, GTA VI, Vice City, and the R* logo are trademarks of Take-Two Interactive Software, Inc.
          </div>
          <div className="flex gap-5">
            <a href="#landing" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
            <a href="#landing" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            <a href="#landing" className="hover:text-pink-400 transition-colors">Legal Notices</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
