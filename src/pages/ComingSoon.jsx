import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [showFeed, setShowFeed] = useState(true);

  useEffect(() => {
    // INSTANTLY hide on mobile (don't even try to load)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setShowFeed(false);
      return;
    }

    // Only attempt Twitter on desktop
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    
    script.onerror = () => setShowFeed(false);
    document.body.appendChild(script);

    // Fallback if it doesn't render in 2s
    const timeout = setTimeout(() => {
      if (!document.querySelector('.twitter-timeline-rendered')) {
        setShowFeed(false);
      }
    }, 2000);

    return () => clearTimeout(timeout);
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
          <h3 style={{ 
            color: 'var(--text)', 
            fontSize: '1.2rem',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            LIVE_FEEDS.LOG
          </h3>
          
          {showFeed ? (
            <div style={{ 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-dim)', 
              borderRadius: '0', 
              padding: '1rem', 
              minHeight: '500px',
              overflow: 'hidden',
              maxWidth: '100%'
            }}>
              <a
                className="x-timeline"
                href="https://x.com/zalotlgames"
                data-theme="dark"
                data-tweet-limit="6"
                data-chrome="noheader nofooter noborders transparent"
              >
                <div className="loading-blink">Loading posts from @zalotlgames...</div>
              </a>
            </div>
          ) : (
            // CLEAN mobile fallback (not an error message)
            <div style={{ 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-dim)', 
              borderRadius: '0', 
              padding: '3rem 2rem',
              textAlign: 'center',
              color: 'var(--text-secondary)',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1.5rem'
            }}>
              <div style={{ 
                fontSize: '1.5rem', 
                color: 'var(--text)', 
                fontWeight: 'bold',
                animation: 'textFlash 3s infinite'
              }}>
                <span style={{ whiteSpace: 'nowrap' }}>[ SOCIAL_FEED.ACCESS ]</span>
              </div>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Follow for dev updates & sneak peeks
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1rem', 
                flexWrap: 'wrap',
                margin: '1rem 0'
              }}>
                <a href="https://x.com/zalotlgames" target="_blank" rel="noreferrer" className="retro-btn">
                  X / TWITTER
                </a>
                <a href="https://instagram.com/zalotlgames" target="_blank" rel="noreferrer" className="retro-btn">
                  INSTAGRAM
                </a>
                <a href="https://tiktok.com/@zalotlgames" target="_blank" rel="noreferrer" className="retro-btn">
                  TIKTOK
                </a>
              </div>

              <div style={{ fontSize: '0.9rem', opacity: '0.7' }}>
                [ External links open in new tab ]
              </div>
            </div>
          )}
        </section>

        {/* TEAM SECTION */}
        <section style={{ marginTop: '3rem' }}>
          <h3 style={{ 
            color: 'var(--text)', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>TEAM_ROSTER.DAT</h3>

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
                <span style={{ color: 'var(--text-secondary)' }}>[Jermx2000],</span>
                <span style={{ color: 'var(--text-secondary)' }}>[RECRUITING...]</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}