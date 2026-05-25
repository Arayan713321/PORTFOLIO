import React from 'react';
import { EXPERIENCE } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Experience.css';

export function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="experience section-padding" ref={ref}>
      <div className="container">
        <div className="section-header-row section-scan">
          <div className="section-label">Experience</div>
        </div>

        {/* Timeline — work experience only */}
        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div
              className="tl-item reveal-left"
              key={i}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="tl-dot" />
              <div className="tl-body">
                <div className="tl-header">
                  <h3 className="tl-company">{exp.company}</h3>
                  <div className="tl-meta">
                    <span className="tl-period">{exp.period}</span>
                    <span className="tl-type">{exp.type}</span>
                  </div>
                </div>
                <p className="tl-role">{exp.role}</p>
                <ul className="tl-bullets">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi}>
                      <span className="tl-arrow">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
