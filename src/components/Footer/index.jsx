import React from 'react';
import { PERSONAL } from '../../data/portfolioData';
import './Footer.css';

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Left: Metadata */}
        <div className="footer-left">
          <p className="footer-copy">
            © 2025 — Arayan Kumar Shaw · All rights reserved.
          </p>
          <a href={`mailto:${PERSONAL.email}`} className="footer-email">
            {PERSONAL.email}
          </a>
          <div className="footer-socials">
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="footer-social-link">GitHub</a>
            <span className="footer-sep">/</span>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
          </div>
        </div>

        {/* Right: Circular Rotating Text Ornament + Back to Top */}
        <div className="footer-right">
          <div className="footer-rotating-text-wrap" onClick={scrollTop} role="button" aria-label="Back to top">
            <div className="footer-rotating-text">
              <svg viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text>
                  <textPath href="#circlePath" startOffset="0%">
                    AVAILABLE FOR WORK · AVAILABLE FOR WORK · 
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <button className="back-top" onClick={scrollTop} aria-label="Back to top">
            [ BACK TO TOP ↑ ]
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
