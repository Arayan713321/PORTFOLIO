import React, { useState, useEffect } from 'react';
import './MagicLine.css';

const SECTIONS = [
  { id: 'hero',           label: 'INTRO',       color: '#00E5FF' }, // Cyan
  { id: 'about',          label: 'ABOUT',       color: '#FF2D78' }, // Magenta
  { id: 'skills',         label: 'SKILLS',      color: '#FF9F2D' }, // Amber
  { id: 'experience',     label: 'EXP',         color: '#8B5CF6' }, // Violet
  { id: 'projects',       label: 'WORK',        color: '#00E5FF' }, // Cyan
  { id: 'github',         label: 'GITHUB',      color: '#39FF6E' }, // Green
  { id: 'certifications', label: 'CREDS',       color: '#8B5CF6' }, // Violet
  { id: 'contact',        label: 'CONTACT',     color: '#FF2D78' }, // Magenta
];

export function MagicLine() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.45; // Offset trigger at 45% viewport height
      
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && y >= el.offsetTop) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeIndex = SECTIONS.findIndex(sec => sec.id === activeSection);
  const fillPercent = (activeIndex / (SECTIONS.length - 1)) * 100;
  const activeColor = SECTIONS[activeIndex]?.color || '#00E5FF';

  return (
    <div 
      className="magic-line-spine" 
      aria-label="Magic Section Navigator"
      style={{ '--active-theme-color': activeColor }}
    >
      {/* Background guide line */}
      <div className="spine-track" />

      {/* Progress fill line connecting dots perfectly */}
      <div 
        className="spine-fill" 
        style={{ 
          height: `${fillPercent}%`,
          background: activeColor,
          boxShadow: `0 0 10px ${activeColor}, 0 0 22px ${activeColor}`
        }}
      />

      {/* Section link nodes */}
      <div className="spine-nodes">
        {SECTIONS.map((sec, idx) => {
          const isActive = activeSection === sec.id;
          const topPercent = (idx / (SECTIONS.length - 1)) * 100;

          return (
            <div 
              key={sec.id} 
              className={`spine-node-container ${isActive ? 'active' : ''}`}
              style={{ 
                top: `${topPercent}%`,
                '--node-color': sec.color 
              }}
              onClick={() => handleNavClick(sec.id)}
            >
              {/* Glowing anchor dot */}
              <div 
                className="spine-node-dot" 
                style={{ 
                  backgroundColor: isActive ? sec.color : 'rgba(255, 255, 255, 0.25)',
                  boxShadow: isActive ? `0 0 10px ${sec.color}, 0 0 18px ${sec.color}` : 'none'
                }}
              />

              {/* Hover/Active label */}
              <span 
                className="spine-node-label"
                style={{ 
                  color: isActive ? sec.color : 'rgba(255, 255, 255, 0.35)',
                  textShadow: isActive ? `0 0 8px ${sec.color}` : 'none'
                }}
              >
                {sec.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MagicLine;
