import React from 'react';
import { EDUCATION } from '../../data/portfolioData';
import './Education.css';

const CERTS_LIST = [
  { title: 'AI Fluency for Students', issuer: 'GOOGLE DEEPMIND / ALIEN' },
  { title: 'Introduction to Agent Skills', issuer: 'GOOGLE DEEPMIND / ALIEN' },
  { title: 'AI Fluency: Framework & Foundations', issuer: 'GOOGLE DEEPMIND / ALIEN' }
];

export function Education() {
  return (
    <section id="certifications">
      <div className="container">
        {/* Education Details */}
        <div className="s-label">Education</div>
        <h2 className="s-title">Academic Background</h2>
        
        <div className="edu-card glass-card">
          <div className="edu-top">
            <div className="edu-role">{EDUCATION.degree}</div>
            <div className="edu-date">{EDUCATION.period}</div>
          </div>
          <div className="edu-company">{EDUCATION.institution}</div>
          <div className="edu-meta-row" style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem', color: 'var(--text2)', fontSize: '0.82rem' }}>
            <span>Location: <strong>{EDUCATION.location}</strong></span>
            <span>CGPA: <strong style={{ color: 'var(--cyan)' }}>{EDUCATION.cgpa} / 10</strong></span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="s-label" style={{ marginTop: '4rem' }}>Credentials</div>
        <h2 className="s-title">Certifications</h2>
        
        <div className="certs-grid">
          {CERTS_LIST.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-ico">🎖️</div>
              <div>
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
