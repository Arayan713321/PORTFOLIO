import React from 'react';
import './GitHub.css';

const TOP_REPOS = [
  { name: 'syntrix-ai', lang: 'TypeScript', stars: 14 },
  { name: 'tars-chat-app', lang: 'React · Socket.io', stars: 8 },
  { name: 'flutter-app-suite', lang: 'Dart · Flutter', stars: 12 }
];

export function GitHub() {
  // Generate programmatic contributions grid: 32 columns x 7 rows for visual excellence and mobile compactness
  const generateContribs = () => {
    const cells = [];
    const levels = ['', 'l1', 'l2', 'l3', 'l4'];
    for (let i = 0; i < 35; i++) { // 35 columns
      const col = [];
      for (let j = 0; j < 7; j++) {
        // Randomly assign contribution level to look realistic
        const rand = Math.random();
        let level = '';
        if (rand > 0.85) level = 'l4';
        else if (rand > 0.7) level = 'l3';
        else if (rand > 0.5) level = 'l2';
        else if (rand > 0.2) level = 'l1';
        col.push(level);
      }
      cells.push(col);
    }
    return cells;
  };

  const contribGrid = generateContribs();

  return (
    <section id="github">
      <div className="container">
        <div className="s-label">Active Coding</div>
        <h2 className="s-title">GitHub Profile</h2>
        
        <div className="gh-terminal">
          <div className="gh-bar">
            <div className="gh-bar-dot" style={{ background: '#FF5F57' }}></div>
            <div className="gh-bar-dot" style={{ background: '#FEBC2E' }}></div>
            <div className="gh-bar-dot" style={{ background: '#28C840' }}></div>
            <span className="gh-prompt">AKS:~/github-contributions$ git status --short</span>
          </div>
          
          <div className="gh-inner">
            {/* Sidebar Profile */}
            <div className="gh-sidebar">
              <div className="gh-profile">
                <div className="gh-avatar">
                  <img src="/assets/images/IMG_20251014_224734852_HDR.jpg" alt="Arayan Kumar Shaw" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <div className="gh-handle">@Arayan713321</div>
                <div className="gh-name">Arayan Kumar Shaw</div>
                <div className="gh-status">Active Pipeline</div>
              </div>
              <div className="gh-stats-mini">
                <div className="gh-stat-row">
                  <span className="gh-stat-key">Followers</span>
                  <span className="gh-stat-v">18</span>
                </div>
                <div className="gh-stat-row">
                  <span className="gh-stat-key">Public Repos</span>
                  <span className="gh-stat-v">27</span>
                </div>
                <div className="gh-stat-row">
                  <span className="gh-stat-key">Total Pull Requests</span>
                  <span className="gh-stat-v">142</span>
                </div>
              </div>
            </div>

            {/* Contributions Grid & Repos */}
            <div className="gh-main">
              <div className="gh-section-title contributions-title">Contributions Calendar</div>
              
              <div className="contrib-grid-wrapper">
                <div className="contrib-grid">
                  {contribGrid.map((col, cIdx) => (
                    <div key={cIdx} className="c-column">
                      {col.map((cellClass, rIdx) => (
                        <div key={rIdx} className={`c-cell ${cellClass}`}></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="contrib-legend">
                <span>Less</span>
                <div className="leg-cell" style={{ background: 'rgba(57,255,110,0.05)' }}></div>
                <div className="leg-cell" style={{ background: 'rgba(57,255,110,0.12)' }}></div>
                <div className="leg-cell" style={{ background: 'rgba(57,255,110,0.3)' }}></div>
                <div className="leg-cell" style={{ background: 'rgba(57,255,110,0.55)' }}></div>
                <div className="leg-cell" style={{ background: 'rgba(57,255,110,0.85)' }}></div>
                <span>More</span>
              </div>

              <div className="gh-section-title">Top Repositories</div>
              <div className="gh-repos">
                {TOP_REPOS.map((repo, idx) => (
                  <div key={idx} className="repo-row">
                    <span className="repo-name">{repo.name}</span>
                    <span className="repo-lang">{repo.lang}</span>
                    <span className="repo-stars">⭐ {repo.stars}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHub;
