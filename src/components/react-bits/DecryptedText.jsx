import React, { useState, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?/';

export const DecryptedText = ({
  text,
  speed = 35,
  className = '',
  parentClassName = ''
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n') return char;
            if (index < iteration) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isHovering]);

  return (
    <span
      className={parentClassName}
      onMouseEnter={() => setIsHovering((prev) => !prev)}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
};

export default DecryptedText;
