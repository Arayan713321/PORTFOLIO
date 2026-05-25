import React, { useState } from 'react';

const CHARS = '©®█§§¦#░░▀▄█01X/V*';

export function MatrixText({ text, className = '' }) {
  const [displayText, setDisplayText] = useState(text);
  const [shuffling, setShuffling] = useState(false);

  const handleMouseEnter = () => {
    if (shuffling) return;
    setShuffling(true);
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
        setShuffling(false);
        setDisplayText(text);
      }
      iteration += 1 / 3;
    }, 25);
  };

  return (
    <span 
      className={className} 
      onMouseEnter={handleMouseEnter}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      {displayText}
    </span>
  );
}

export default MatrixText;
