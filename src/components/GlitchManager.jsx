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

export default function GlitchManager() {
  const [tabs, setTabs] = useState([]);

  const spawnTab = () => {
    const id = Date.now() + Math.random();
    setTabs(prev => [...prev, {
      id,
      title: `GLITCH_${Math.floor(Math.random() * 999)}.ERR`,
      message: MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
      initialPosition: {
        x: Math.random() * (window.innerWidth - 250),
        y: Math.random() * (window.innerHeight - 100)
      }
    }]);
  };

  const removeTab = (id) => {
    setTabs(prev => prev.filter(tab => tab.id !== id));
    // Respawn after 3 seconds
    setTimeout(() => spawnTab(), 3000);
  };

  // Spawn initial tabs
  useEffect(() => {
    // Spawn 3 tabs on load
    const timers = [];
    for (let i = 0; i < 3; i++) {
      timers.push(setTimeout(() => spawnTab(), i * 500));
    }
    
    // Spawn random tabs periodically
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
        />
      ))}
    </>
  );
}