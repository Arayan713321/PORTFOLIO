import React from 'react';
import './Projects.css';

const PROJECTS_LIST = [
  {
    id: '01',
    name: 'Syntrix AI',
    badge: 'Live · Production',
    icon: '🤖',
    iconBg: 'rgba(0,229,255,0.1)',
    iconBorder: 'rgba(0,229,255,0.2)',
    topBar: 'linear-gradient(90deg,var(--cyan),var(--violet),var(--magenta))',
    spanClass: 'span7',
    desc: 'My most ambitious solo build. Syntrix AI is a production-grade AI career copilot featuring ATS resume analysis, semantic job matching, automated mock interview generation, and conversational guidance. Powered by custom RAG pipelines, ChromaDB vector search, OpenAI embeddings, and Google OAuth security.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'OpenAI', 'LangChain', 'ChromaDB'],
    github: 'https://github.com/Arayan713321',
    live: 'https://syntrix-ai-nu.vercel.app/'
  },
  {
    id: '02',
    name: 'TARS Chat',
    badge: 'Active Build',
    icon: '💬',
    iconBg: 'rgba(139,92,246,0.1)',
    iconBorder: 'rgba(139,92,246,0.2)',
    topBar: 'linear-gradient(90deg,var(--violet),var(--magenta))',
    spanClass: 'span5',
    desc: 'A full-stack real-time messaging hub designed from the ground up for high concurrency. Features secure stateful WebSockets, JWT + Clerk credentials management, custom rich text sharing, active presence states, and low-latency MongoDB document persistence.',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Clerk Auth'],
    github: 'https://github.com/Arayan713321',
    live: null
  },
  {
    id: '03',
    name: 'Truth & Beauty US',
    badge: 'Live Client',
    icon: '🛍️',
    iconBg: 'rgba(255,159,45,0.08)',
    iconBorder: 'rgba(255,159,45,0.2)',
    topBar: 'linear-gradient(90deg,var(--cyan),var(--amber))',
    spanClass: 'span6',
    desc: 'Custom engineered Shopify storefront tailored for an active US-based skincare brand. Authored modular and dynamic Liquid templates, managed complex metafield-driven sections, and achieved significant LCP score reductions through responsive srcset image lazy loading.',
    stack: ['Shopify Liquid', 'Theme Dev', 'Core Web Vitals', 'CSS Clamp'],
    github: null,
    live: 'https://us.trytruthandbeauty.com/'
  },
  {
    id: '04',
    name: 'Flutter App Suite',
    badge: 'Production Apps',
    icon: '📱',
    iconBg: 'rgba(255,45,120,0.08)',
    iconBorder: 'rgba(255,45,120,0.2)',
    topBar: 'linear-gradient(90deg,var(--amber),var(--magenta))',
    spanClass: 'span6',
    desc: 'Multiple production-grade Flutter and React Native cross-platform applications shipped to clients and stores. Implementing clean multi-layered architectures (UI/logic/data), biometric local authentication, local SQLite persistence layer, and push notification sync.',
    stack: ['Flutter', 'React Native', 'Dart', 'Firebase Auth', 'Local SQLite'],
    github: 'https://github.com/Arayan713321/Flutter-Projects',
    live: null
  }
];

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="s-label">Featured Work</div>
        <h2 className="s-title">Products, Not Projects</h2>
        <p className="s-sub">Every card below represents a real problem I cared enough about to solve properly — from AI career platforms to live e-commerce infrastructure.</p>

        <div className="projects-mosaic">
          {PROJECTS_LIST.map((proj, idx) => (
            <div key={idx} className={`proj-card ${proj.spanClass}`}>
              <div className="proj-top-bar" style={{ background: proj.topBar }}></div>
              <div className="proj-glow"></div>
              <div className="proj-id">{proj.id} · FEATURED PRODUCT</div>
              <div className="proj-icon-row">
                <div className="proj-icon" style={{ background: proj.iconBg, border: `1px solid ${proj.iconBorder}` }}>
                  {proj.icon}
                </div>
                <span className="proj-badge">{proj.badge}</span>
              </div>
              <div className="proj-name">{proj.name}</div>
              <p className="proj-desc">{proj.desc}</p>
              <div className="proj-stack">
                {proj.stack.map((tag, tIdx) => (
                  <span key={tIdx} className="proj-tag">{tag}</span>
                ))}
              </div>
              <div className="proj-footer">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                    GitHub ⌥
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="proj-link" style={{ color: 'var(--violet)' }}>
                    Live Site ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
