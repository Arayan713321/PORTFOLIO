import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

function ProjectStrip({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <div
      className="p-strip-wrapper reveal"
      style={{ '--stagger': `${index * 0.1}s` }}
    >
      <article
        className={`p-strip ${hovered ? 'p-strip--hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOverlayOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View ${project.name} project`}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOverlayOpen(true); }}
      >
        {/* Watermark number */}
        <span className="p-watermark" aria-hidden>{project.id}</span>

        {/* Project image preview */}
        {project.image && (
          <div className={`p-img-wrap ${hovered ? 'visible' : ''}`}>
            <img src={project.image} alt={project.name} />
          </div>
        )}

        {/* Main content */}
        <div className="p-strip-inner">
          <div className="p-left">
            <div className="p-tags">
              {project.tags.map(t => (
                <span key={t} className="p-tag">{t}</span>
              ))}
              {project.badge && (
                <span className="p-badge">{project.badge}</span>
              )}
            </div>

            <h2 className="p-name">
              <span className="p-name-default">{project.name}</span>
              <span className="p-name-hover" aria-hidden>{project.name}</span>
            </h2>

            <p className="p-subtitle">{project.subtitle}</p>
          </div>

          <div className="p-right">
            <span className="p-year">{project.year}</span>
            <div className="p-arrow-wrap">
              <span className="p-arrow">VIEW PROJECT →</span>
            </div>
          </div>
        </div>
      </article>

      {overlayOpen && (
        <ProjectOverlay project={project} onClose={() => setOverlayOpen(false)} />
      )}
    </div>
  );
}

function ProjectOverlay({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="p-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="p-overlay-panel" onClick={e => e.stopPropagation()}>
        <button className="p-overlay-close" onClick={onClose} aria-label="Close">
          ✕ CLOSE
        </button>

        <div className="p-overlay-header">
          <div className="p-overlay-num">{project.id}</div>
          <div>
            <h2 className="p-overlay-name">{project.name}</h2>
            <p className="p-overlay-sub">{project.subtitle}</p>
          </div>
        </div>

        {/* Project image */}
        {project.image && (
          <div className="p-overlay-img">
            <img src={project.image} alt={`${project.name} preview`} />
          </div>
        )}

        <div className="p-overlay-body">
          <div className="p-overlay-meta">
            <div>
              <span className="meta-label">Year</span>
              <span className="meta-value">{project.year}</span>
            </div>
            <div>
              <span className="meta-label">Category</span>
              <span className="meta-value">{project.tags.join(' · ')}</span>
            </div>
          </div>

          <div className="p-overlay-divider" />

          <p className="p-overlay-desc">{project.description}</p>

          <div className="p-overlay-stack">
            {project.stack.map(t => (
              <span key={t} className="stack-pill">{t}</span>
            ))}
          </div>

          <div className="p-overlay-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                onClick={e => e.stopPropagation()}
              >
                GitHub ↗
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid-cyan"
                onClick={e => e.stopPropagation()}
              >
                Live Site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="projects section-padding" ref={ref}>
      <div className="container">
        <div className="section-header-row section-scan">
          <div>
            <div className="section-label">Selected Work</div>
          </div>
          <div className="section-year">2023 — 2025</div>
        </div>
      </div>

      {/* Full-width strips — NO overflow:hidden */}
      <div className="p-strips">
        {PROJECTS.map((project, i) => (
          <ProjectStrip key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
