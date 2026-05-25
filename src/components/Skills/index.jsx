import React from 'react';
import {
  SKILLS_MARQUEE_ROW1,
  SKILLS_MARQUEE_ROW2,
  SKILL_CATEGORIES
} from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

const row1 = [...SKILLS_MARQUEE_ROW1, ...SKILLS_MARQUEE_ROW1].map(t => `${t} ·`).join('  ');
const row2 = [...SKILLS_MARQUEE_ROW2, ...SKILLS_MARQUEE_ROW2].map(t => `${t} ·`).join('  ');

export function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="skills section-padding" ref={ref}>
      <div className="container">
        <div className="section-label skills-title reveal">
          Tools &amp; Technologies
        </div>
      </div>

      {/* Marquee rows */}
      <div className="skills-marquees">
        <div className="sk-marquee-outer">
          <div className="sk-marquee-track">
            <span>{row1}</span>
            <span aria-hidden>{row1}</span>
          </div>
        </div>
        <div className="sk-marquee-outer">
          <div className="sk-marquee-track sk-marquee-right">
            <span>{row2}</span>
            <span aria-hidden>{row2}</span>
          </div>
        </div>
      </div>

      {/* Category cards */}
      <div className="container">
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              className="sk-card glass-card reveal"
              key={cat.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="sk-card-header">
                <span className="sk-icon">{cat.icon}</span>
                <h3 className="sk-title">{cat.title}</h3>
              </div>
              <div className="sk-chips">
                {cat.skills.map(s => (
                  <span key={s} className="sk-chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
