import React from 'react';
import './Footer.css';

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="container footer-inner">
        <p className="footer-copy">
          © 2025 Arayan Kumar Shaw — Built with React &amp; Vite
        </p>
        <button className="back-top" onClick={scrollTop} aria-label="Back to top">
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
