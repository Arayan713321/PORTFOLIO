import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

export function Contact() {
  const ref = useScrollReveal();
  const [copied, setCopied] = useState(false);
  const emailRef = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  // UPGRADE 7: Magnetic hover pull effect
  useEffect(() => {
    const el = emailRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = 'transform 0.1s ease';
    };

    const onLeave = () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="contact" className="contact" ref={ref}>
      {/* Radial glow */}
      <div className="contact-glow" aria-hidden />

      <div className="container contact-inner">
        <div className="contact-label reveal section-scan">[ AVAILABLE FOR WORK ]</div>

        <h2 className="contact-headline reveal delay-1">
          <span className="ch-line">Let's build</span>
          <span className="ch-line ch-line-2">something.</span>
        </h2>

        {/* Email — magnetic */}
        <div className="contact-email-wrap reveal delay-2">
          <a
            ref={emailRef}
            href={`mailto:${PERSONAL.email}`}
            className="contact-email"
          >
            {PERSONAL.email}
          </a>
          <button
            className="copy-btn"
            onClick={copyEmail}
            aria-label="Copy email"
            title="Copy email"
          >
            {copied ? '✓' : '⎘'}
          </button>
        </div>

        {/* Social links */}
        <div className="contact-socials reveal delay-3">
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <span className="social-sep">·</span>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <span className="social-sep">·</span>
          <a href={`mailto:${PERSONAL.email}`} className="social-link">Email</a>
          <span className="social-sep">·</span>
          <a href={PERSONAL.twitter} target="_blank" rel="noopener noreferrer" className="social-link">Twitter/X</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
