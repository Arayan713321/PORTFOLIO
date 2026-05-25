import React, { useState } from 'react';
import { Loader }     from './components/Loader';
import { Cursor }     from './components/Cursor';
import { Navbar }     from './components/Navbar';
import { Hero }       from './components/Hero';
import { Projects }   from './components/Projects';
import { About }      from './components/About';
import { Skills }     from './components/Skills';
import { Experience } from './components/Experience';
import { Education }  from './components/Education';
import { Contact }    from './components/Contact';
import { Footer }     from './components/Footer';
import './styles/global.css';

function App() {
  const [appReady, setAppReady] = useState(false);

  return (
    <>
      {!appReady && <Loader onComplete={() => setAppReady(true)} />}
      <Cursor />
      <div className={`app ${appReady ? 'ready' : ''}`}>
        <Navbar />
        <main>
          <Hero ready={appReady} />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
