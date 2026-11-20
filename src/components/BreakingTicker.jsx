import React from 'react';
import { AlertTriangle, Radio } from 'lucide-react';

const BreakingTicker = () => {
  const newsItems = [
    "WEAZEL NEWS: LEONIDA MAN IN G-STRING CHASED BY POLICE ON JET SKI THROUGH VICE CITY CANALS",
    "BREAKING: CORRECTIONAL OFFICIALS CONFIRM INMATE LUCIA CAMINOS SPOTTED ON OCEAN DRIVE",
    "RECORD 105°F HEATWAVE: RECORD NUMBER OF ALLIGATORS FOUND IN SUBURBAN SWIMMING POOLS",
    "VICE CITY POLICE WARN CITIZENS: SUSPECT VEHICLE CLOCKED AT 180 MPH ON OVERSEAS HIGHWAY",
    "SPRING BREAK CHAOS: 50,000 TOURISTS DESCEND ON VICE BEACH AS STRIP CLUBS REPORT RECORD DEMAND",
    "BAWSAQ STOCK ALERT: LIFEINVADER CRASHES WHILE E-COLA AND PIßWASSER SURGE TO RECORD HIGHS",
    "KELLY COUNTY MUD BOG: 4X4 MONSTER TRUCKS BLOCK ROUTE 9 FOR SPONTANEOUS SWAMP TWERK CONTEST",
    "PORT GELLHORN DISPATCH: UNMARKED CARGO CRANE REPORTED HEISTED IN BROAD DAYLIGHT"
  ];

  return (
    <div className="w-full bg-[#12051e] border-y border-pink-500/30 overflow-hidden relative z-30 shadow-lg shadow-black/40">
      <div className="flex items-center">
        {/* News Badge */}
        <div className="bg-red-600 px-4 py-2 flex items-center gap-2 font-black tracking-widest text-white text-xs md:text-sm uppercase shrink-0 shadow-md z-10 border-r border-red-400/40">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
          <Radio className="w-4 h-4 text-white animate-pulse" />
          <span>WEAZEL NEWS LIVE</span>
        </div>

        {/* Scrolling Ticker Line */}
        <div className="overflow-hidden py-2 bg-black/60 w-full relative">
          <div className="animate-ticker flex items-center whitespace-nowrap">
            {newsItems.concat(newsItems).map((item, idx) => (
              <div key={idx} className="flex items-center mx-6 text-xs md:text-sm font-semibold tracking-wide text-slate-200">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0 inline" />
                <span className="hover:text-pink-400 transition-colors cursor-pointer">{item}</span>
                <span className="mx-6 text-pink-500/50">///</span>
              </div>
            ))}
          </div>
        </div>

        {/* Local Station Indicator */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-2 bg-pink-950/60 border-l border-pink-500/30 text-[10px] font-mono tracking-widest text-pink-300 uppercase shrink-0">
          <span>FREQ: 103.7 WZEL</span>
        </div>
      </div>
    </div>
  );
};

export default BreakingTicker;

