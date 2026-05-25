import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL } from '../../data/portfolioData';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Work',    href: '#projects' },
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [hidden,    setHidden]    = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('#home');
  const lastY = useRef(0);

  // Scroll behavior
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
        <div className="nav-inner container">
          {/* Monogram */}
          <a
            href="#home"
            className="nav-mono"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
          >
            AKS
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${active === item.href ? 'active' : ''}`}
                  onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-links">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.href}
              style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              className={menuOpen ? 'slide-in' : ''}
            >
              <a
                href={item.href}
                onClick={e => { e.preventDefault(); scrollTo(item.href); }}
              >
                <span className="m-num">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li
            className={menuOpen ? 'slide-in' : ''}
            style={{ animationDelay: '0.37s' }}
          >
            <a href={PERSONAL.resumeUrl} download className="m-resume">
              Resume ↓
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
