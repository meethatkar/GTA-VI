import React from 'react';

export const GlitchText = ({ children, className = '' }) => {
  return (
    <span className={`relative inline-block select-none group ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 -translate-x-[2px] translate-y-[1px] text-[#00F0FF] opacity-0 group-hover:opacity-80 transition-opacity duration-150 pointer-events-none mix-blend-screen"
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 translate-x-[2px] -translate-y-[1px] text-[#FF5E7E] opacity-0 group-hover:opacity-80 transition-opacity duration-150 pointer-events-none mix-blend-screen"
      >
        {children}
      </span>
    </span>
  );
};

export default GlitchText;
