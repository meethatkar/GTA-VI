import React, { useState, useRef } from 'react';
import { Camera, Download, Sparkles, ShieldAlert, Star, RefreshCw, Upload } from 'lucide-react';
import { soundSystem } from '../utils/audioSynthesizer';

const MugshotGenerator = ({ onCardGenerated }) => {
  const [handle, setHandle] = useState('VICE_KING_99');
  const [district, setDistrict] = useState('Vice Beach');
  const [crime, setCrime] = useState('Grand Theft Auto & 185 MPH Evading');
  const [stars, setStars] = useState(5);
  const [bounty, setBounty] = useState('$500,000');
  const [customImage, setCustomImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const districts = ['Vice Beach', 'Downtown Vice City', 'The Grassrivers', 'Gator Keys', 'Port Gellhorn', 'Kelly County'];
  const sampleCrimes = [
    'Grand Theft Auto & 185 MPH Evading',
    'Armed Superyacht Infiltration',
    'Illegal Gator Transport & Drive-Thru Assault',
    'Malibu Club Rooftop Robbery',
    'Airboat Canal Smuggling & SWAT Resistance'
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateMugshot = () => {
    setIsGenerating(true);
    soundSystem.playLaserSfx();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 1000;

    // Draw Dark Background
    ctx.fillStyle = '#0a0614';
    ctx.fillRect(0, 0, 800, 1000);

    // Grid lines / mugshot height backdrop lines
    ctx.strokeStyle = 'rgba(255, 42, 133, 0.15)';
    ctx.lineWidth = 1;
    for (let y = 180; y < 700; y += 30) {
      ctx.beginPath();
      ctx.moveTo(80, y);
      ctx.lineTo(720, y);
      ctx.stroke();

      // Height text on left
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.font = '12px monospace';
      ctx.fillText(`${Math.floor((700 - y) / 10 + 50)}"`, 50, y + 4);
    }

    // Outer Neon Border
    ctx.strokeStyle = '#ff2a85';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, 740, 940);

    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, 720, 920);

    // Header: Leonida Dept of Corrections
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px Impact, "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('STATE OF LEONIDA DEPARTMENT OF CORRECTIONS', 400, 80);

    ctx.fillStyle = '#ff2a85';
    ctx.font = '700 14px monospace';
    ctx.fillText('METRO VICE CITY POLICE DIVISION // FELONY DIVISION', 400, 105);

    // Wanted Stars Banner
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 32px monospace';
    ctx.fillText('★'.repeat(stars) + '☆'.repeat(5 - stars), 400, 145);

    // Mugshot Image Box
    const imgX = 150;
    const imgY = 170;
    const imgW = 500;
    const imgH = 500;

    const renderCardDetails = () => {
      // Bottom Placard Box
      ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
      ctx.fillRect(80, 690, 640, 230);
      ctx.strokeStyle = '#ff2a85';
      ctx.lineWidth = 2;
      ctx.strokeRect(80, 690, 640, 230);

      // Suspect Handle
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.font = '900 36px Impact, "Bebas Neue", sans-serif';
      ctx.fillText(handle.toUpperCase(), 400, 740);

      // District
      ctx.fillStyle = '#00f0ff';
      ctx.font = '700 16px monospace';
      ctx.fillText(`DISTRICT: ${district.toUpperCase()} // STATUS: ARMED & DANGEROUS`, 400, 775);

      // Charges
      ctx.fillStyle = '#f43f5e';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(`CHARGES: ${crime}`, 400, 810);

      // Bounty
      ctx.fillStyle = '#fbbf24';
      ctx.font = '900 28px Impact, sans-serif';
      ctx.fillText(`BOUNTY: ${bounty} REWARD`, 400, 860);

      // Barcode & Footer code
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px monospace';
      ctx.fillText(`DOC-ID: #8492-${Math.floor(100000 + Math.random() * 900000)} | GTA VI ONLINE`, 400, 895);

      setIsGenerating(false);
      if (onCardGenerated) onCardGenerated();
    };

    if (customImage) {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.rect(imgX, imgY, imgW, imgH);
        ctx.clip();
        ctx.drawImage(img, imgX, imgY, imgW, imgH);
        ctx.restore();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.strokeRect(imgX, imgY, imgW, imgH);
        renderCardDetails();
      };
      img.src = customImage;
    } else {
      // Use default silhouette character
      const defaultImg = new Image();
      defaultImg.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.rect(imgX, imgY, imgW, imgH);
        ctx.clip();
        ctx.drawImage(defaultImg, imgX, imgY, imgW, imgH);
        ctx.restore();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.strokeRect(imgX, imgY, imgW, imgH);
        renderCardDetails();
      };
      defaultImg.src = '/main-char.png';
    }
  };

  const handleDownload = () => {
    soundSystem.playLaserSfx();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `GTA6-Wanted-${handle.replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section id="mugshot" className="py-24 px-4 md:px-8 relative bg-[#090812] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-pink-400" />
            <span>VIRAL COMMUNITY CARD STUDIO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
            CREATE YOUR <span className="text-[#FF5E7E]">WANTED CARD</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
            Generate your personalized GTA 6 Leonida mugshot card! Pick your crimes, district, and Wanted stars, then download and flex on social media.
          </p>
        </div>

        {/* Generator Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Controls Form (Left Column) */}
          <div className="lg:col-span-6 glass-panel border border-pink-500/30 p-6 md:p-8 rounded-3xl space-y-5">
            
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                SUSPECT HANDLE / ALIAS:
              </label>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                maxLength={24}
                className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-white font-bold text-sm focus:outline-none focus:border-pink-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                  LEONIDA DISTRICT:
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-3 py-2.5 text-white text-xs font-bold focus:outline-none focus:border-pink-500"
                >
                  {districts.map((d) => (
                    <option key={d} value={d} className="bg-slate-900">{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                  WANTED STARS (1-5):
                </label>
                <div className="flex gap-2 items-center bg-black/60 border border-white/20 rounded-xl p-2 justify-center">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStars(s)}
                      className="focus:outline-none hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          s <= stars ? 'fill-amber-400 text-amber-400' : 'text-white/20'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                PRIMARY FELONY CHARGE:
              </label>
              <select
                value={crime}
                onChange={(e) => setCrime(e.target.value)}
                className="w-full bg-black/60 border border-white/20 rounded-xl px-3 py-2.5 text-white text-xs font-bold focus:outline-none focus:border-pink-500"
              >
                {sampleCrimes.map((c) => (
                  <option key={c} value={c} className="bg-slate-900">{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                BOUNTY REWARD:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['$100,000', '$250,000', '$500,000', '$1,000,000'].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBounty(b)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold border transition-colors ${
                      bounty === b
                        ? 'bg-pink-600 text-white border-pink-400'
                        : 'bg-black/50 text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Photo Upload */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-1.5">
                OPTIONAL: UPLOAD YOUR PHOTO / AVATAR
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-dashed border-white/20 text-xs font-bold text-slate-300 flex items-center justify-center gap-2 transition-colors"
              >
                <Upload className="w-4 h-4 text-pink-400" />
                <span>{customImage ? 'CHANGE UPLOADED PHOTO' : 'CHOOSE PHOTO / TAKE SELFIE'}</span>
              </button>
            </div>

            {/* Generate & Download Actions */}
            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={generateMugshot}
                disabled={isGenerating}
                className="flex-1 py-3.5 rounded-2xl bg-[#FF5E7E] hover:bg-[#FF4568] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-[#FF5E7E]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isGenerating ? 'GENERATING...' : 'GENERATE CARD'}</span>
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD</span>
              </button>
            </div>

          </div>

          {/* Interactive Card Canvas Preview (Right Column) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="rounded-3xl p-3 bg-black/80 border-2 border-pink-500/50 shadow-2xl shadow-pink-950/80 max-w-sm sm:max-w-md w-full relative">
              <canvas
                ref={canvasRef}
                className="w-full aspect-[4/5] rounded-2xl shadow-inner bg-slate-950"
              ></canvas>
              
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
                <span>CANVAS: 800x1000 PNG</span>
                <span className="text-pink-400 font-bold">READY TO SHARE ON X / INSTA</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MugshotGenerator;
