import React, { useEffect, useState, useRef } from 'react';

export const CountUp = ({
  to,
  from = 0,
  delay = 0,
  duration = 2,
  className = '',
  separator = ',',
  decimalPlaces = 0
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = from;
    const end = to;
    const startTime = performance.now() + delay * 1000;
    const totalDuration = duration * 1000;

    let animationFrame;

    const updateCounter = (currentTime) => {
      if (currentTime < startTime) {
        animationFrame = requestAnimationFrame(updateCounter);
        return;
      }

      const progress = Math.min((currentTime - startTime) / totalDuration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeProgress;

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, to, from, delay, duration]);

  const formatted = decimalPlaces > 0
    ? count.toFixed(decimalPlaces)
    : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {separator ? formatted : formatted.replace(/,/g, '')}
    </span>
  );
};

export default CountUp;
