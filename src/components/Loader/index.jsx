import React, { useState, useEffect, useRef } from 'react';
import './Loader.css';

const MARQUEE_TEXT = 'ARAYAN KUMAR SHAW — FULL STACK · MOBILE · AI ENGINEER — ';
const REPEATED = MARQUEE_TEXT.repeat(8); // duplicate for seamless loop

export function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading | marquee | wiping
  const tickRef = useRef(null);

  // Progress bar fills over 2.5s
  useEffect(() => {
    const start = performance.now();
    const duration = 2500;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        tickRef.current = requestAnimationFrame(tick);
      } else {
        // Show marquee briefly then wipe
        setTimeout(() => setPhase('wiping'), 600);
        setTimeout(() => onComplete?.(), 1000);
      }
    };

    tickRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(tickRef.current);
  }, [onComplete]);

  return (
    <div className={`loader ${phase === 'wiping' ? 'wiping' : ''}`}>
      <div className="loader-inner">
        {/* Top label */}
        <div className="loader-label">
          <span className="loader-init">I N I T I A L I Z I N G . . .</span>
          <span className="loader-version">v2025</span>
        </div>

        {/* Progress bar */}
        <div className="loader-bar-track">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter */}
        <div className="loader-counter">
          {String(Math.floor(progress)).padStart(3, '0')}
          <span className="loader-pct">%</span>
        </div>
      </div>

      {/* Full-width marquee at bottom */}
      <div className="loader-marquee-wrapper">
        <div className="loader-marquee-track">
          <span>{REPEATED}</span>
          <span aria-hidden="true">{REPEATED}</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
