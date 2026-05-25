import React, { useState, useEffect, useRef } from 'react';
import { ROLES, HERO_MARQUEE, PERSONAL } from '../../data/portfolioData';
import './Hero.css';

const MARQUEE_ITEMS = [...HERO_MARQUEE, ...HERO_MARQUEE];
const MARQUEE_DISPLAY = MARQUEE_ITEMS.map(t => `${t} ·`).join('  ');

export function Hero({ ready = false }) {
  const [roleIndex, setRoleIndex]     = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting]   = useState(false);
  const [cursorBlink, setCursorBlink] = useState(true);
  const glitchRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? 40 : 75);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setCursorBlink(b => !b), 550);
    return () => clearInterval(t);
  }, []);

  // UPGRADE 2: Random glitch effect on hero name
  useEffect(() => {
    if (!ready) return;

    const el = glitchRef.current;
    if (!el) return;

    const triggerGlitch = () => {
      el.classList.add('glitching');
      setTimeout(() => el.classList.remove('glitching'), 400);
      // Schedule next glitch randomly between 8-12s
      setTimeout(triggerGlitch, 8000 + Math.random() * 4000);
    };

    // First glitch 3.5s after reveal
    const initialTimer = setTimeout(triggerGlitch, 3500);
    return () => clearTimeout(initialTimer);
  }, [ready]);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className={`hero ${ready ? 'hero--ready' : ''}`}>
      {/* Subtle geometric BG shapes */}
      <div className="hero-shapes" aria-hidden>
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
      </div>

      <div className="hero-content container">
        {/* Left / Text */}
        <div className="hero-text">
          {/* Label */}
          <div className="hero-label animate-fade-in delay-0">
            [ DEVELOPER · 2025 ]
          </div>

          {/* Giant name — word clip reveal + glitch on first word */}
          <h1 className="hero-name" aria-label="Arayan Kumar Shaw">
            <span className="word-mask">
              <span
                className="word-inner word-1 hero-name-glitch"
                data-text="ARAYAN"
                ref={glitchRef}
              >
                ARAYAN
              </span>
            </span>
            <span className="word-mask">
              <span className="word-inner word-2">KUMAR SHAW</span>
            </span>
          </h1>

          {/* Divider */}
          <div className="hero-divider animate-fade-in delay-4" />

          {/* Typewriter */}
          <div className="hero-typewriter animate-fade-in delay-4">
            <span className="tw-text">{displayText}</span>
            <span className={`tw-cursor ${cursorBlink ? 'visible' : ''}`}>|</span>
          </div>

          {/* CTAs */}
          <div className="hero-ctas animate-fade-in delay-5">
            <button
              className="btn-outline"
              onClick={() => scrollTo('#projects')}
            >
              [ View Work ]
            </button>
            <a
              href={PERSONAL.resumeUrl}
              download="Arayan_Kumar_Shaw_Resume.pdf"
              className="btn-solid-cyan"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right / Photo */}
        <div className="hero-photo animate-fade-in delay-3">
          <div className="photo-ring-outer" />
          <div className="photo-ring-inner" />
          <img
            src="/assets/images/arayan-profile.png"
            alt="Arayan Kumar Shaw"
            className="photo-img"
            loading="eager"
          />
        </div>
      </div>

      {/* Full-width tech marquee */}
      <div className="hero-marquee-wrap">
        <div className="hero-marquee-track">
          <span>{MARQUEE_DISPLAY}&nbsp;&nbsp;</span>
          <span aria-hidden>{MARQUEE_DISPLAY}&nbsp;&nbsp;</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
