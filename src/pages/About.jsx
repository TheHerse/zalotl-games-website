export default function About() {
  return (
    <main style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto',
      background: 'var(--bg)',
      color: 'var(--text)'
    }}>
      <div className="window-frame retro-card">
        <div className="title-bar">
          <span>ABOUT.TXT</span>
          <div className="title-bar-buttons">
            <div className="title-bar-btn" title="Close"></div>
          </div>
        </div>
        
        <h1 style={{ 
          color: 'var(--text)', 
          margin: '1.5rem 0 1rem 0',
          fontSize: '2rem',
          animation: 'textFlash 4s infinite'
        }}>About Zalotl Games</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
          Founded in 2025, Zalotl Games is a solo studio collaborating with talented developers on developing.
        </p>        
        <section style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '2px dashed var(--border-dim)' }}>
          <h2 style={{ 
            color: 'var(--text)', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>PRESS_ACCESS.EXE</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            Press inquiries: <a href="mailto:contact@zalotlgames.com">contact@zalotlgames.com</a>
          </p>
        </section>

        <section style={{ marginTop: '3rem' }}>
          <h2 style={{ 
            color: 'var(--text)', 
            marginBottom: '1rem',
            fontSize: '1.5rem',
            animation: 'textFlash 5s infinite'
          }}>SOCIAL_LINKS.DAT</h2>
          <ul className="retro-list">
            <li><a href="https://instagram.com/zalotlgames" target="_blank" rel="noopener noreferrer">instagram.com/zalotlgames</a></li>
            <li><a href="https://tiktok.com/@zalotlgames" target="_blank" rel="noopener noreferrer">tiktok.com/@zalotlgames</a></li>
            <li><a href="https://twitter.com/zalotlgames" target="_blank" rel="noopener noreferrer">twitter.com/zalotlgames</a></li>
            <li><a href="https://reddit.com/u/zalotlgames" target="_blank" rel="noopener noreferrer">reddit.com/u/zalotlgames</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}