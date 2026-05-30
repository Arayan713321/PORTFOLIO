import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL } from '../../data/portfolioData';
import './About.css';

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
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
    <span ref={ref} className="stat-num">
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column: Dossier */}
          <div className="about-dossier">
            <div className="dossier-card">
              <div className="dossier-header">Subject Dossier</div>
              <div className="dossier-body">
                <div className="dossier-avatar">
                  <img src="/assets/images/arayan-profile.png" alt="Arayan Kumar Shaw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="dossier-field">
                  <span className="dossier-key">Full Name</span>
                  <span className="dossier-val">Arayan Kumar Shaw</span>
                </div>
                <div className="dossier-field">
                  <span className="dossier-key">Classification</span>
                  <span className="dossier-val">Full Stack · Mobile · AI Builder</span>
                </div>
                <div className="dossier-field">
                  <span className="dossier-key">Location</span>
                  <span className="dossier-val">India</span>
                </div>
                <div className="dossier-field">
                  <span className="dossier-key">Education</span>
                  <span className="dossier-val">B.Tech CSE · UEM Jaipur · 7.5 CGPA</span>
                </div>
                <div className="dossier-field">
                  <span className="dossier-key">Batch</span>
                  <span className="dossier-val">2022 – 2026</span>
                </div>
                <div className="dossier-field">
                  <span className="dossier-key">Status</span>
                  <span className="status-pill">Open to Work</span>
                </div>
              </div>
            </div>

            <div className="dossier-card">
              <div className="dossier-header">Quick Links</div>
              <div className="dossier-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="https://syntrix-ai-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-cyan" style={{ fontSize: '0.62rem', justifyContent: 'center' }}>⚡ Syntrix AI</a>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.62rem', justifyContent: 'center' }}>⌥ GitHub Profile</a>
                <a href="https://portfolio-two-eosin-49.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.62rem', justifyContent: 'center' }}>↗ Portfolio</a>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Stats */}
          <div className="about-copy">
            <div className="s-label">About Me</div>
            <h2 className="s-title">
              Engineer by Training.<br />
              <span style={{ color: 'var(--cyan)' }}>Founder</span> by Instinct.
            </h2>
            
            <div className="about-stats">
              <div className="stat-box">
                <AnimatedCounter target={3} suffix="" />
                <span className="stat-lbl">Internships</span>
              </div>
              <div className="stat-box">
                <AnimatedCounter target={6} suffix="+" />
                <span className="stat-lbl">Products Built</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">7.5</span>
                <span className="stat-lbl">CGPA</span>
              </div>
            </div>

            <p>
              I'm <strong>Arayan Kumar Shaw</strong>, a B.Tech CSE graduate who doesn't wait for permission to build things. While most graduates submit assignments, I was shipping <span className="accent-cyan">production-grade AI systems</span>. Syntrix AI — a full-stack career intelligence platform — was architected, built, and deployed by me alone.
            </p>
            <p>
              My technical identity spans three layers: <strong>the web</strong> (Next.js, React, TypeScript, Tailwind), <strong>mobile</strong> (React Native, Flutter, Dart — across internships at Celebal Technologies and Tamizhan Skills), and increasingly, <strong>AI</strong> — OpenAI APIs, LangChain, ChromaDB vector search, RAG pipelines, and conversational AI flows.
            </p>
            <p>
              I've reduced app startup times by 1.5 seconds through widget tree optimization, improved Shopify LCP scores on live e-commerce stores, and built real-time chat infrastructure with Socket.io from the ground up. I understand the full stack — not from tutorials, but from production debugging at 2am.
            </p>
            <p>
              Beyond code, I led a 10-member performance team as <strong>Lead Choreographer</strong> for university cultural events and managed logistics as Operations Coordinator for public speaking events. I lead from the front — in any context.
            </p>
            
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <a href="#projects" className="btn btn-cyan">See My Work →</a>
              <a href={`mailto:${PERSONAL.email}`} className="btn btn-ghost">{PERSONAL.email}</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
