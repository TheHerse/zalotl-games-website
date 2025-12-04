export default function Navbar() {
  const currentPath = window.location.pathname;
  
  return (
    <div style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      background: 'var(--bg)',
      padding: '10px 20px 0 20px',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-end',
        minWidth: 'max-content'
      }}>
        <a href="/" className={`browser-tab ${currentPath === '/' ? 'active' : ''}`}>
          HOME
        </a>
        <a href="/About" className={`browser-tab ${currentPath === '/About' ? 'active' : ''}`}>
          ABOUT
        </a>
        <a href="/ComingSoon" className={`browser-tab ${currentPath === '/ComingSoon' ? 'active' : ''}`}>
          COMING_SOON
        </a>
      </div>
    </div>
  );
}