import { useEffect, useState } from 'react';

export default function ComingSoon() {
  const [twitterError, setTwitterError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Load Twitter script
    const loadTwitter = () => {
      if (document.getElementById('twitter-wjs')) return;
      
      const script = document.createElement('script');
      script.id = 'twitter-wjs';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      
      script.onload = () => {
        // Mobile: Force widget to render after load
        if (window.twttr?.widgets && isMobile) {
          setTimeout(() => {
            window.twttr.widgets.load();
          }, 1000);
        }
      };
      
      script.onerror = () => setTwitterError(true);
      document.body.appendChild(script);
    };

    loadTwitter();

    // Timeout: If widget doesn't render in 3s, show fallback
    const timeout = setTimeout(() => {
      if (!document.querySelector('.twitter-timeline-rendered')) {
        setTwitterError(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

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
          
          {!twitterError ? (
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
                style={{ display: 'block', minHeight: '100%' }}
              >
                <div className="loading-blink">Loading posts from @zalotlgames...</div>
              </a>
            </div>
          ) : (
            // Fallback for mobile/ad-blocker
            <div style={{ 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-dim)', 
              borderRadius: '0', 
              padding: '2rem',
              textAlign: 'center',
              color: 'var(--text-secondary)',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text)' }}>
                [ FEED_BLOCKED.MOBILE ]
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                Content blocked by browser/privacy settings
              </div>
              <div style={{ marginBottom: '1rem' }}>
                Visit directly: <a href="https://x.com/zalotlgames" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>x.com/zalotlgames</a>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                [ Or check other social links in ABOUT.TXT ]
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
                <span style={{ color: 'var(--text-secondary)' }}>[RECRUITING...]</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}