import React from 'react';
import './Experience.css';

const EXPERIENCES = [
  {
    role: 'Shopify Developer',
    company: 'Pure Cosmeceuticals Pvt. Ltd. · Remote · Full Stack E-Commerce',
    date: 'OCT 2025 – MAY 2026',
    points: [
      'Built and maintained a production Shopify storefront — custom Liquid sections, metafield-driven product pages, from the ground up.',
      'Integrated third-party review, marketing, and analytics apps without breaking layout coherence across the theme.',
      'Refactored Liquid templates and implemented lazy loading, measurably improving Largest Contentful Paint (LCP) scores on mobile.'
    ],
    tags: ['Shopify Liquid', 'CSS', 'Core Web Vitals', 'Metafields', 'Theme Dev']
  },
  {
    role: 'Mobile App Developer Intern',
    company: 'Celebal Technologies (CSI) · Remote · Cross-Platform Mobile',
    date: 'MAY 2025 – JUL 2025',
    points: [
      'Developed reusable UI components in Flutter and React Native across 4 feature screens, reducing code duplication significantly.',
      'Set up Firebase Authentication, Firestore, and Cloud Messaging for push notifications within a focused 2-week sprint cycle.'
    ],
    tags: ['Flutter', 'React Native', 'Firebase', 'Firestore', 'Cloud Messaging']
  },
  {
    role: 'Flutter Developer Intern',
    company: 'Tamizhan Skills · Remote · Performance Optimization',
    date: 'JUN 2025',
    points: [
      'Reduced app startup time by ~1.5 seconds — reorganized widget tree, compressed assets, and migrated to async FutureBuilder patterns.',
      'Restructured codebase into clean architecture (UI / logic / data layers) — improved maintainability and testability across the project.'
    ],
    tags: ['Flutter', 'Dart', 'Clean Architecture', 'Performance', 'FutureBuilder']
  },
  {
    role: 'Freelance Developer',
    company: 'Independent · Remote · Web · Mobile · AI',
    date: 'ONGOING',
    points: [
      'Full-stack development projects for clients across legal, healthcare, and e-commerce verticals.',
      'End-to-end ownership: discovery → architecture → build → deploy → handoff.'
    ],
    tags: ['Full Stack', 'React Native', 'Node.js', 'AI Integration']
  }
];

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="s-label">Work History</div>
        <h2 className="s-title">Where I've Shipped</h2>
        <p className="s-sub">Real codebases. Real users. Real deadlines. Three internships across mobile, web, and e-commerce — plus freelance engagements.</p>
        
        <div className="exp-timeline">
          {EXPERIENCES.map((exp, idx) => {
            let borderStyle = {};
            if (exp.role.includes('Mobile')) {
              borderStyle = { borderColor: 'var(--cyan)', boxShadow: '0 0 8px rgba(0,229,255,0.3)' };
            } else if (exp.role.includes('Flutter')) {
              borderStyle = { borderColor: 'var(--violet)', boxShadow: '0 0 8px rgba(139,92,246,0.3)' };
            } else if (exp.role.includes('Freelance')) {
              borderStyle = { borderColor: 'var(--magenta)', boxShadow: '0 0 8px rgba(255,45,120,0.3)' };
            }

            return (
              <div key={idx} className="exp-item">
                <div className="exp-node" style={borderStyle}></div>
                <div className="exp-card">
                  <div className="exp-top">
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-date">{exp.date}</div>
                  </div>
                  <div className="exp-company">{exp.company}</div>
                  <ul className="exp-points">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                  <div className="exp-tags">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
