import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL } from '../../data/portfolioData';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXP', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CERTS', href: '#certifications' },
  { label: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a 
          className="nav-logo" 
          href="#hero"
          onClick={e => { e.preventDefault(); scrollTo('#hero'); }}
        >
          AKS<span>://dev</span>
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.href ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(item.href); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
          <a href={`mailto:${PERSONAL.email}`} className="btn btn-cyan">Hire Me</a>
        </div>
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mob-menu ${menuOpen ? 'open' : ''}`} id="mobMenu">
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            href={item.href}
            onClick={e => { e.preventDefault(); scrollTo(item.href); }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
