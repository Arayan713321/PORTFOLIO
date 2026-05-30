import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Loader }     from './components/Loader';
import { Cursor }     from './components/Cursor';
import { Navbar }     from './components/Navbar';
import { MagicLine }  from './components/MagicLine';
import { Hero }       from './components/Hero';
import { About }      from './components/About';
import { Skills }     from './components/Skills';
import { Experience } from './components/Experience';
import { Projects }   from './components/Projects';
import { GitHub }     from './components/GitHub';
import { Education }  from './components/Education';
import { Contact }    from './components/Contact';
import { Footer }     from './components/Footer';
import './styles/global.css';

function App() {
  const [appReady, setAppReady] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [showEgg, setShowEgg] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Keyboard Easter Egg ('K' key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'k') {
        setShowEgg(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll Percentage tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const pct = Math.round((window.scrollY / totalHeight) * 100);
        setScrollPct(pct);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {!appReady && <Loader onComplete={() => setAppReady(true)} />}
      <Cursor />
      {appReady && <MagicLine />}

      <div className={`app ${appReady ? 'ready' : ''}`}>
        <Navbar />
        <main>
          <Hero ready={appReady} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <GitHub />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Floating scroll counter */}
      <div className="scroll-percentage-counter" aria-hidden="true">
        {scrollPct}%
      </div>

      {/* Hidden Easter Egg Overlay */}
      {showEgg && (
        <div className="easter-egg-overlay" onClick={() => setShowEgg(false)}>
          <div className="easter-egg-card" onClick={e => e.stopPropagation()}>
            <button className="egg-close" onClick={() => setShowEgg(false)}>✕</button>
            <h4 className="egg-title">[ EASTER EGG REVEALED ]</h4>
            <div className="egg-divider" />
            <pre className="egg-code">
{`You found the hidden section.

stack:       react · vite · lenis · pure css
built:       may 2026
inspired by: premium cyberpunk aesthetics
developer:   arayan713321@gmail.com`}
            </pre>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
