import { useState, useEffect } from 'react';
import GlitchTab from './GlitchTab';

const MESSAGES = [
  "ERROR: MainLoop.deinit detected",
  "SYSTEM: Memory leak in sector 7G",
  "WARNING: Render pipeline stalled",
  "GLITCH: Sprite buffer overflow",
  "CRITICAL: Collision detection failed",
  "404: Asset not found in cache",
  "HEISENBUG: Race condition detected",
  "STACK_OVERFLOW: Call depth exceeded",
  "FATAL: Audio buffer underflow",
  "SEGFAULT: Null pointer dereference",
  "CORRUPTION: Save file integrity lost",
  "TIMEOUT: Network tick expired",
  "ASSERTION: Animation state invalid",
  "DEPRECATED: Using legacy shader path",
  "OVERFLOW: Input queue saturated"
];

const MAX_TABS = 5;
const MOBILE_BREAKPOINT = 768; // px

export default function GlitchManager() {
  const [tabs, setTabs] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render ANYTHING on mobile
  if (isMobile) {
    return null;
  }

  const spawnTab = () => {
    setTabs(prev => {
      if (prev.length >= MAX_TABS) return prev;
      
      const id = Date.now() + Math.random();
      return [...prev, {
        id,
        title: `GLITCH_${Math.floor(Math.random() * 999)}.ERR`,
        message: MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
        initialPosition: {
          x: Math.random() * (window.innerWidth - 250),
          y: Math.random() * (window.innerHeight - 100)
        }
      }];
    });
  };

  const removeTab = (id) => {
    setTabs(prev => prev.filter(tab => tab.id !== id));
    setTimeout(() => spawnTab(), 3000);
  };

  // Spawn initial tabs
  useEffect(() => {
    const timers = [];
    for (let i = 0; i < Math.min(3, MAX_TABS); i++) {
      timers.push(setTimeout(() => spawnTab(), i * 500));
    }
    
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        spawnTab();
      }
    }, 8000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {tabs.map(tab => (
        <GlitchTab
          key={tab.id}
          id={tab.id}
          title={tab.title}
          message={tab.message}
          initialPosition={tab.initialPosition}
          onClose={removeTab}
        />
      ))}
    </>
  );
}