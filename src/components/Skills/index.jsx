import React from 'react';
import {
  SKILLS_MARQUEE_ROW1,
  SKILLS_MARQUEE_ROW2
} from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MatrixText } from '../MatrixText';
import './Skills.css';

const row1 = [...SKILLS_MARQUEE_ROW1, ...SKILLS_MARQUEE_ROW1].map(t => `${t} ·`).join('  ');
const row2 = [...SKILLS_MARQUEE_ROW2, ...SKILLS_MARQUEE_ROW2].map(t => `${t} ·`).join('  ');

const NEW_SKILL_CATEGORIES = [
  {
    title: 'MOBILE',
    skills: ['React Native', 'Expo', 'Flutter', 'Dart', 'Android']
  },
  {
    title: 'FRONTEND',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    title: 'AI / GENAI',
    skills: ['OpenAI API', 'LangChain', 'ChromaDB', 'RAG Architecture', 'Prompt Engineering', 'Vector Embeddings']
  },
  {
    title: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'Socket.io', 'REST APIs', 'JWT', 'WebSockets']
  },
  {
    title: 'CMS & E-COMMERCE',
    skills: ['Shopify Liquid', 'Theme Development', 'Storefront API', 'WordPress', 'Core Web Vitals']
  },
  {
    title: 'CLOUD & TOOLS',
    skills: ['Firebase', 'MongoDB', 'Firestore', 'Vercel', 'Railway', 'Git', 'GitHub', 'Postman']
  }
];

export function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="skills section-padding" ref={ref}>
      <div className="container">
        <div className="section-header-row section-scan">
          <div className="section-label">
            <MatrixText text="SKILLS &amp; TECHNOLOGIES" />
          </div>
          <div className="section-year">TOOLS · EXPERT</div>
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
        <div className="sk-marquee-outer sk-marquee-reverse">
          <div className="sk-marquee-track">
            <span>{row2}</span>
            <span aria-hidden>{row2}</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Section Intro Line */}
        <div className="skills-intro reveal">
          [ 6 CATEGORIES · 40+ TECHNOLOGIES ]
        </div>

        {/* New Visual Redesigned Cards */}
        <div className="skills-grid">
          {NEW_SKILL_CATEGORIES.map((cat, i) => (
            <div
              className="skill-card reveal"
              key={cat.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Big watermark number top-left */}
              <div className="skill-card-number" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Category title */}
              <h3 className="skill-card-title">{cat.title}</h3>

              {/* Skill tags/pills */}
              <div className="skill-tags-container">
                {cat.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
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
