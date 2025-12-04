import { useEffect } from 'react';

export default function ComingSoon() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main style={{ 
      padding: '2rem', 
      maxWidth: '900px', 
      margin: '0 auto',
      background: 'var(--bg)',
      color: 'var(--text)'
    }}>
      <div className="window-frame retro-card">
        <div className="title-bar">
          <span>GAME_UPDATES.EXE</span>
          <div className="title-bar-buttons">
            <div className="title-bar-btn" title="Help"></div>
            <div className="title-bar-btn" title="Close"></div>
          </div>
        </div>

        <header style={{ textAlign: 'center', margin: '2rem 0 3rem 0' }}>
          <h1 className="glitch-title" style={{ 
            color: 'var(--text)', 
            fontSize: '2.5rem', 
            marginBottom: '0.5rem',
            animation: 'rgb-split 4s infinite, textFlash 3s infinite'
          }}>PROJECT: MONSTER'S_KEEP</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>A tower defense game with a twist</p>
          <span style={{ 
            display: 'inline-block', 
            background: 'var(--card-bg)', 
            padding: '0.5rem 1.5rem', 
            borderRadius: '0', 
            fontSize: '0.9rem', 
            color: '#0088ff', 
            border: '1px solid #0088ff',
            marginTop: '1rem',
            fontWeight: '600',
            animation: 'rgb-split 4s infinite'
          }}>STATUS: IN_DEVELOPMENT</span>
        </header>

        <section>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '1.5rem',
            padding: '0 0.5rem'
          }}>
            <h3 style={{ color: 'var(--text)', fontSize: '1.2rem' }}>
              LIVE_FEEDS.LOG
            </h3>
            <a href="https://x.com/zalotlgames" target="_blank" rel="noreferrer" className="retro-btn" style={{ padding: '8px 16px' }}>
              FOLLOW @ZALOTLGAMES
            </a>
          </div>
          
          <div style={{ 
            background: 'var(--bg-secondary)', 
            border: '1px solid var(--border-dim)', 
            borderRadius: '0', 
            padding: '1rem', 
            minHeight: '500px',
            overflow: 'hidden'
          }}>
            <a className="x-timeline"
              href="https://x.com/zalotlgames"
              data-theme="dark"
              data-tweet-limit="6"
              data-chrome="noheader nofooter noborders transparent">
              <div className="loading-blink">Loading posts from @zalotlgames...</div>
            </a>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section style={{ marginTop: '3rem' }}>
          <h3 style={{ 
            color: 'var(--text)', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}> TEAM_ROSTER.DAT</h3>

          <div className="team-card">
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem'
            }}>
              <div style={{ borderBottom: '1px dashed var(--border-dim)', paddingBottom: '1rem' }}>
                <strong style={{ 
                  color: 'var(--accent)',
                  fontSize: '1.1rem'
                }}>Herson Hernandez</strong><br />
                <span style={{ color: 'var(--text)' }}>Lead Programmer • Game Designer • Sound Engineer • Game Artist</span>
              </div>

              <div style={{ borderBottom: '1px dashed var(--border-dim)', paddingBottom: '1rem' }}>
                <strong style={{ 
                  color: 'var(--accent)',
                  fontSize: '1.1rem'
                }}>Javier Rios</strong><br />
                <span style={{ color: 'var(--text)' }}>Programmer • Game Design Support</span>
              </div>

              <div>
                <strong style={{ 
                  color: 'var(--accent)',
                  fontSize: '1.1rem'
                }}>Playtesters</strong><br />
                <span style={{ color: 'var(--text-secondary)' }}>[E1000],</span>
                <span style={{ color: 'var(--text-secondary)' }}>[RECRUITING...]</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}