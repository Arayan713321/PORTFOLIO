import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL } from '../../data/portfolioData';
import './Hero.css';

const ROLES = [
  'Full-Stack Engineer',
  'Mobile Developer',
  'AI / GenAI Builder',
  'Shopify Developer',
  'React Native Dev',
];

const MARQUEE_ITEMS = [
  'REACT NATIVE', 'FLUTTER', 'NEXT.JS', 'NODE.JS', 'OPENAI API',
  'CHROMADB', 'FIREBASE', 'MONGODB', 'TAILWIND', 'SHOPIFY', 'TYPESCRIPT',
  'LANGCHAIN', 'SOCKET.IO', 'VERCEL', 'LENIS'
];

const REPEATED_MARQUEE = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export function Hero({ ready = false }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const glitchRef = useRef(null);

  // Typewriter logic cycling through 5 roles
  useEffect(() => {
    if (!ready) return;

    let timeout;
    const current = ROLES[roleIndex];

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % ROLES.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? 35 : 75);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, ready]);

  // Glitch effect on name
  useEffect(() => {
    if (!ready) return;
    const el = glitchRef.current;
    if (!el) return;

    const triggerGlitch = () => {
      el.classList.add('glitching');
      setTimeout(() => el.classList.remove('glitching'), 400);
      setTimeout(triggerGlitch, 8000 + Math.random() * 4000);
    };

    const initialTimer = setTimeout(triggerGlitch, 3500);
    return () => clearTimeout(initialTimer);
  }, [ready]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`hero ${ready ? 'hero-ready' : ''}`}>
      {/* LAYER 1 — ANIMATED BACKGROUND */}
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow-orb" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-content container">
        {/* LAYER 3 — LEFT CONTENT */}
        <div className="hero-left">
          {/* A. Role tag */}
          <div className="role-tag">
            <span className="role-dot"></span>
            [ FULL-STACK · MOBILE · AI ]
          </div>

          {/* B. Hero name — WORD CLIP REVEAL */}
          <div className="hero-name">
            <div className="hero-line hero-line-1">
              <span className="hero-word-wrap">
                <span
                  ref={glitchRef}
                  className="hero-word hero-name-glitch"
                  data-text="ARAYAN"
                >
                  ARAYAN
                </span>
              </span>
            </div>
            <div className="hero-line hero-line-2">
              <span className="hero-word-wrap">
                <span className="hero-word">KUMAR</span>
              </span>
              {' '}
              <span className="hero-word-wrap">
                <span className="hero-word">SHAW</span>
              </span>
            </div>
          </div>

          {/* C. Self-drawing divider line */}
          <div className="hero-divider" />

          {/* D. ASCII decoration */}
          <div className="ascii-deco">©® AKS · v2025 ░░▀ #</div>

          {/* E. Typewriter with terminal prefix */}
          <div className="typewriter-row">
            <span className="tw-prefix">~/role</span>
            <span className="tw-text">{displayText}</span>
            <span className="tw-cursor"></span>
          </div>

          {/* F. Social icon row */}
          <div className="social-row">
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
            </a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href={`mailto:${PERSONAL.email}`} className="social-icon-btn" title="Email">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <a href="https://wa.me/919064508660" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="WhatsApp">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.993L2 22l5.177-1.357a9.95 9.95 0 0 0 4.832 1.248h.004c5.502 0 9.981-4.479 9.982-9.985a9.94 9.94 0 0 0-2.923-7.062A9.92 9.92 0 0 0 12.012 2zm5.728 13.916c-.244.686-1.22 1.263-1.68 1.321-.46.059-.922.091-2.955-.724-2.597-1.041-4.225-3.69-4.354-3.864-.13-.174-1.047-1.397-1.047-2.665 0-1.268.647-1.892.875-2.154.228-.262.5-.327.666-.327.167 0 .334.001.48.009.155.008.362-.058.567.45.21.52.716 1.758.78 1.89.063.13.105.283.018.455-.087.174-.13.283-.26.436-.13.152-.272.34-.39.457-.13.13-.267.272-.115.534.152.262.678 1.123 1.455 1.817.997.893 1.838 1.17 2.099 1.301.262.13.414.109.567-.066.152-.174.654-.763.827-1.024.174-.262.348-.218.587-.13.24.088 1.52.72 1.78.85.26.13.435.196.49.294.054.098.054.567-.19 1.253z"/></svg>
            </a>
            <a href={PERSONAL.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href={PERSONAL.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Twitter/X">
              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          {/* G. CTA buttons */}
          <div className="cta-row">
            <button className="btn-primary" onClick={() => scrollTo('#projects')}>
              View Work
            </button>
            <a href={PERSONAL.resumeUrl} download className="btn-outline">
              ↓ Resume
            </a>
          </div>
        </div>

        {/* LAYER 2 — PHOTO RING */}
        <div className="hero-right">
          <div className="hero-photo-container">
            <div className="ring-dashed" />
            <div className="ring-solid" />
            <div className="ring-orbit-dot" />
            
            <div className="photo-circle">
              <img
                src="/assets/images/arayan-profile.png"
                alt="Arayan Kumar Shaw"
                className="photo-img"
                loading="eager"
              />
            </div>

            {/* "Available for work" badge */}
            <div className="availability-badge">
              <span className="badge-dot"></span>
              AVAILABLE FOR WORK
            </div>
          </div>
        </div>

        {/* LAYER 4 — SCROLL INDICATOR */}
        <div className="scroll-indicator" onClick={() => scrollTo('#projects')}>
          <span className="scroll-label">SCROLL</span>
          <div className="scroll-lines">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      {/* LAYER 5 — BOTTOM MARQUEE */}
      <div className="hero-marquee-bar">
        <div className="marquee-track">
          {REPEATED_MARQUEE.map((tech, idx) => (
            <span key={idx} className="marquee-item">
              <span className="marquee-dot">·</span>
              {tech}
            </span>
          ))}
          {REPEATED_MARQUEE.map((tech, idx) => (
            <span key={`dup-${idx}`} className="marquee-item">
              <span className="marquee-dot">·</span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
