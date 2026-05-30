import React, { useEffect, useRef } from 'react';
import './Hero.css';

const ROLES = [
  'Full Stack Dev',
  'React Native',
  'Flutter',
  'AI Builder',
  'Node.js',
  'OpenAI · RAG · LangChain'
];

export function Hero({ ready = true }) {
  const canvasRef = useRef(null);

  // Background Canvas particles system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const handleResize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Create particles
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 229, 255, 0.25)';
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.05)';
      ctx.lineWidth = 0.5;

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <canvas id="heroCanvas" ref={canvasRef}></canvas>
      <div className="hero-scan"></div>
      <div className="hero-vignette"></div>
      <div className="hero-inner container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="hero-dot"></span>System Online · India · Available for Opportunities
            </div>
            <h1 className="hero-h1">
              <span className="line1">Building Intelligent</span>
              <span className="line2">Systems For The</span>
              <span className="line1">Next Generation</span>
            </h1>
            <div className="hero-roles">
              {ROLES.map((role, idx) => (
                <span key={idx} className="hero-role">{role}</span>
              ))}
            </div>
            <p className="hero-sub">
              I don't just write code — I architect systems. From AI-powered career platforms with RAG pipelines, to real-time mobile apps and Shopify storefronts. Every line ships toward a product.
            </p>
            <div className="hero-ctas">
              <a href="#projects" onClick={e => { e.preventDefault(); scrollTo('#projects'); }} className="btn btn-cyan">View Projects →</a>
              <a href="#about" onClick={e => { e.preventDefault(); scrollTo('#about'); }} className="btn btn-violet">Read My Story</a>
              <a href="mailto:arayan713321@gmail.com" className="btn btn-ghost">Get in Touch</a>
            </div>
            <div className="hero-metrics">
              <div><span className="metric-val">6+</span><span className="metric-label">Live Projects</span></div>
              <div><span className="metric-val">3</span><span className="metric-label">Internships</span></div>
              <div><span className="metric-val">12+</span><span className="metric-label">Technologies</span></div>
              <div><span className="metric-val">1</span><span className="metric-label">AI Startup</span></div>
            </div>
          </div>

          {/* Terminal panel */}
          <div className="hero-terminal">
            <div className="term-bar">
              <div className="term-dot" style={{ background: '#FF5F57' }}></div>
              <div className="term-dot" style={{ background: '#FEBC2E' }}></div>
              <div className="term-dot" style={{ background: '#28C840' }}></div>
              <span className="term-title">syntrix-ai / rag-pipeline.ts</span>
            </div>
            <div className="term-body">
              <div><span className="t-comment">// Syntrix AI — Production RAG Architecture</span></div>
              <div><span className="t-dim">import</span> <span className="t-cyan">{"{ OpenAI }"}</span> <span className="t-dim">from</span> <span className="t-string">'openai'</span></div>
              <div><span className="t-dim">import</span> <span className="t-cyan">{"{ ChromaClient }"}</span> <span className="t-dim">from</span> <span className="t-string">'chromadb'</span></div>
              <div><span className="t-dim">import</span> <span className="t-cyan">{"{ LangChain }"}</span> <span className="t-dim">from</span> <span className="t-string">'langchain'</span></div>
              <div>&nbsp;</div>
              <div><span className="t-dim">export async function</span> <span className="t-violet">analyzeATS</span><span className="t-dim">(</span></div>
              <div>&nbsp;&nbsp;<span className="t-amber">resume</span><span className="t-dim">: string,</span></div>
              <div>&nbsp;&nbsp;<span className="t-amber">jobDesc</span><span className="t-dim">: string</span></div>
              <div><span className="t-dim">) {'{'}</span></div>
              <div>&nbsp;&nbsp;<span className="t-dim">const</span> <span className="t-cyan">vectors</span> <span className="t-dim">=</span> <span className="t-dim">await</span> <span className="t-violet">embedText</span><span className="t-dim">(resume)</span></div>
              <div>&nbsp;&nbsp;<span className="t-dim">const</span> <span className="t-cyan">match</span> <span className="t-dim">=</span> <span className="t-dim">await</span> <span className="t-violet">semanticSearch</span><span className="t-dim">(vectors)</span></div>
              <div>&nbsp;&nbsp;<span className="t-dim">const</span> <span className="t-cyan">score</span> <span className="t-dim">=</span> <span className="t-dim">await</span> <span className="t-violet">scoreATS</span><span className="t-dim">(match, jobDesc)</span></div>
              <div>&nbsp;&nbsp;<span className="t-dim">return {"{ score, gaps, suggestions }"}</span></div>
              <div><span className="t-dim">{'}'}</span></div>
              <div>&nbsp;</div>
              <div><span className="t-comment">// Output → ATS Score:</span> <span className="t-green">94%</span> <span className="t-comment">✓ Matched</span></div>
              <div><span className="t-cyan">&gt;</span> <span className="t-dim">deploy --env production</span> <span className="cursor-blink"></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
