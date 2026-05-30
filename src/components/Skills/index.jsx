import React from 'react';
import './Skills.css';

const SKILLS_LIST = [
  {
    title: 'Frontend',
    icon: '⚡',
    accent: 'linear-gradient(90deg, var(--cyan), var(--violet))',
    iconBg: 'rgba(0, 229, 255, 0.08)',
    iconBorder: 'rgba(0, 229, 255, 0.15)',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Mobile',
    icon: '📱',
    accent: 'linear-gradient(90deg, #39FF6E, var(--cyan))',
    iconBg: 'rgba(57, 255, 110, 0.06)',
    iconBorder: 'rgba(57, 255, 110, 0.15)',
    skills: ['React Native', 'Flutter', 'Expo', 'Dart', 'Clean Architecture', 'Android', 'Firebase Auth', 'Push Notifications']
  },
  {
    title: 'AI / GenAI',
    icon: '🤖',
    accent: 'linear-gradient(90deg, var(--violet), var(--magenta))',
    iconBg: 'rgba(139, 92, 246, 0.08)',
    iconBorder: 'rgba(139, 92, 246, 0.15)',
    skills: ['OpenAI API', 'LangChain', 'RAG Architecture', 'ChromaDB', 'Vector Embeddings', 'Semantic Search', 'Prompt Engineering', 'Conversational AI']
  },
  {
    title: 'Backend',
    icon: '⚙️',
    accent: 'linear-gradient(90deg, var(--amber), var(--magenta))',
    iconBg: 'rgba(255, 159, 45, 0.08)',
    iconBorder: 'rgba(255, 159, 45, 0.15)',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'JWT Auth', 'WebSockets']
  },
  {
    title: 'Databases & Cloud',
    icon: '🗄️',
    accent: 'linear-gradient(90deg, var(--cyan), #39FF6E)',
    iconBg: 'rgba(0, 229, 255, 0.06)',
    iconBorder: 'rgba(0, 229, 255, 0.12)',
    skills: ['MongoDB', 'Firebase', 'Firestore', 'Vercel', 'Railway', 'Render']
  },
  {
    title: 'CMS & E-Commerce',
    icon: '🛍️',
    accent: 'linear-gradient(90deg, var(--magenta), var(--violet))',
    iconBg: 'rgba(255, 45, 120, 0.06)',
    iconBorder: 'rgba(255, 45, 120, 0.12)',
    skills: ['Shopify Liquid', 'Storefront API', 'Theme Dev', 'Metafields', 'Core Web Vitals', 'WordPress', 'Git', 'GitHub Copilot']
  }
];

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <canvas id="skillsCanvas" style={{ position: 'absolute', inset: 0, opacity: 0.4 }}></canvas>
      <div className="container skills-inner">
        <div className="s-label">Technical Arsenal</div>
        <h2 class="s-title">The Stack That Ships</h2>
        <p className="s-sub">Every technology below was used in a real project — not a tutorial. From RAG pipelines to Shopify Liquid, this is a working skill set.</p>
        
        <div className="skills-grid">
          {SKILLS_LIST.map((category, idx) => (
            <div key={idx} className="skill-card">
              <div className="sk-accent" style={{ background: category.accent }}></div>
              <div className="sk-head">
                <div className="sk-icon" style={{ background: category.iconBg, border: `1px solid ${category.iconBorder}` }}>
                  {category.icon}
                </div>
                <span className="sk-name">{category.title}</span>
              </div>
              <div className="sk-pills">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="sk-pill">{skill}</span>
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
