import React from 'react';

export const ShinyText = ({ text, className = '' }) => {
  return (
    <span className={`inline-block text-[#F8F7FC] font-bold tracking-wide ${className}`}>
      {text}
    </span>
  );
};

export default ShinyText;

