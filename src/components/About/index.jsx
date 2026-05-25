import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL, STATS, ABOUT_TICKER } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MatrixText } from '../MatrixText';
import './About.css';

const TICKER_DISPLAY = [...ABOUT_TICKER, ...ABOUT_TICKER].join('  ·  ') + '  ·  ';

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1200;
        const start = performance.now();
        const tick = (now) => {
          const pct = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - pct, 3);
          setCount(Math.round(eased * target));
          if (pct < 1) {
            requestAnimationFrame(tick);
          } else {
            setDone(true);
          }
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-value">
      {count}
      {suffix && (
        <span className={`stat-plus ${done ? 'pulse' : ''}`}>{suffix}</span>
      )}
    </span>
  );
}

export function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="about section-padding" ref={ref}>
      <div className="container">
        <div className="section-header-row section-scan">
          <div className="section-label">
            <MatrixText text="ABOUT" />
          </div>
          <div className="section-year">©® AKS · v2025</div>
        </div>

        <div className="about-grid">
          {/* Left: Photo with desaturation */}
          <div className="about-photo reveal-left">
            <img
              src="/assets/images/file_000000002bb4720987f47e5467a140ca.png"
              alt="Arayan Kumar Shaw"
              loading="lazy"
            />
          </div>

          {/* Right: Rich text block */}
          <div className="about-text">
            {/* Mixed-scale typography heading */}
            <h3 className="about-statement-mixed reveal">
              <span className="statement-serif">(Full-Stack / Mobile</span>
              <span className="statement-bold">AI Engineer)</span>
            </h3>

            <p className="about-bio reveal delay-1">
              B.Tech CSE graduate from University of Engineering and Management, Jaipur (Class of 2026, CGPA 7.5).
              I specialize in high-performance cross-platform mobile ecosystems, scalable full-stack web architectures, and advanced GenAI workflows. Shipped various production experiences including RAG career companions and live Shopify e-commerce engines.
            </p>

            {/* Stats block */}
            <div className="about-stats reveal delay-2">
              {STATS.map(s => (
                <div className="stat-item" key={s.label}>
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <a
              href={PERSONAL.resumeUrl}
              download="Arayan_Kumar_Shaw_Resume.pdf"
              className="btn-outline reveal delay-3"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>

      {/* Infinite scrolling ticker below */}
      <div className="about-ticker-wrap">
        <div className="about-ticker-track">
          <span>{TICKER_DISPLAY}</span>
          <span aria-hidden>{TICKER_DISPLAY}</span>
        </div>
      </div>
    </section>
  );
}

export default About;
