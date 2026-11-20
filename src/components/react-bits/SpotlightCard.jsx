import React, { useRef, useState } from 'react';

export const SpotlightCard = ({
  children,
  className = ''
}) => {
  const divRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-[20px] border border-white/[0.08] bg-[rgba(20,17,36,0.65)] backdrop-blur-md overflow-hidden transition-colors duration-300 hover:border-[rgba(255,94,126,0.45)] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 bg-white/[0.03]"
        style={{
          opacity
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
