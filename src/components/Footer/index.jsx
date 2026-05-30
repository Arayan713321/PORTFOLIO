import React from 'react';
import { PERSONAL } from '../../data/portfolioData';
import './Footer.css';

export function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container footer-inner">
        <a href="#hero" onClick={scrollToTop} className="footer-logo">AKS<span>://dev</span></a>
        <div className="footer-copy">© 2026 Arayan Kumar Shaw. All Rights Reserved.</div>
        <div className="footer-links">
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${PERSONAL.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
