import React from 'react';
import { EDUCATION } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Education.css';

export function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="education section-padding" ref={ref}>
      <div className="container">
        <div className="section-header-row section-scan">
          <div className="section-label">Education</div>
        </div>

        <div className="edu-grid">
          {/* Left — degree info */}
          <div className="edu-left reveal-left">
            {/* Large faded background text */}
            <div className="edu-bg-text" aria-hidden>B.TECH CSE</div>

            <div className="edu-card glass-card">
              <div className="edu-degree">{EDUCATION.degree}</div>
              <div className="edu-institution">{EDUCATION.institution}</div>

              <div className="edu-meta-row">
                <div className="edu-period">
                  <span className="edu-meta-label">Period</span>
                  {EDUCATION.period}
                </div>
                <div className="edu-location">
                  <span className="edu-meta-label">Location</span>
                  {EDUCATION.location}
                </div>
              </div>

              <div className="edu-cgpa-badge">
                CGPA &nbsp;<span>{EDUCATION.cgpa}</span>&nbsp;/ 10
              </div>
            </div>
          </div>

          {/* Right — certifications */}
          <div className="edu-right">
            <div className="section-label edu-cert-label reveal">Certifications</div>
            <div className="edu-certs">
              {EDUCATION.certifications.map((cert, i) => (
                <div
                  key={cert}
                  className="edu-cert-card glass-card reveal"
                  style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
                >
                  <span className="edu-cert-check">✓</span>
                  <span className="edu-cert-name">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
