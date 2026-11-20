import React, { useRef, useState } from 'react';

export const TiltedCard = ({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02
}) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, isHovered: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xTilt = ((y / rect.height) - 0.5) * -maxTilt;
    const yTilt = ((x / rect.width) - 0.5) * maxTilt;

    setTilt({ x: xTilt, y: yTilt, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, isHovered: false });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        perspective: `${perspective}px`,
        transform: tilt.isHovered
          ? `perspective(${perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale}, ${scale}, ${scale})`
          : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      }}
    >
      {children}
    </div>
  );
};

export default TiltedCard;

