export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80vh',
      padding: '2rem',
      background: 'var(--bg)'
    }}>
      <div className="window-frame retro-card" style={{ 
        textAlign: 'center', 
        padding: '3rem', 
        maxWidth: '800px',
        position: 'relative'
      }}>
        {/* Window title bar */}
        <div className="title-bar">
          <span>ZALOTL.EXE</span>
          <div className="title-bar-buttons">
            <div className="title-bar-btn" title="Minimize"></div>
            <div className="title-bar-btn" title="Maximize"></div>
            <div className="title-bar-btn" title="Close"></div>
          </div>
        </div>
        
        <img 
          src="/logo2.png" 
          alt="Zalotl Games" 
          style={{ 
            maxWidth: '600px', 
            margin: '2rem 0 1rem 0',
            filter: 'drop-shadow(0 0 10px var(--accent-glow))'
          }} 
        />
        <p style={{ margin: '0 0 2rem 0', color: 'var(--text-secondary)' }}>
          Crafting games through collaboration
        </p>
        <a href="/ComingSoon" className="retro-btn">
          LAUNCH GAME_UPDATES.EXE
        </a>
        
        {/* Flashing indicator */}
        <div style={{ 
          position: 'absolute', 
          bottom: 10, 
          right: 10, 
          width: 8, 
          height: 8, 
          background: 'var(--accent)',
          animation: 'textFlash 1s infinite',
          borderRadius: '50%'
        }}></div>
      </div>
    </main>
  );
}