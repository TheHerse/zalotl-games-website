import { useState, useRef, useEffect } from 'react';

export default function GlitchTab({ id, title, message, initialPosition, onClose }) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const tabRef = useRef(null);

  // Helper to handle both mouse and touch
  const getClientPos = (e) => {
    if (e.touches && e.touches.length > 0) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  };

  const handleStart = (e) => {
    // Prevent scrolling on touch
    if (e.type.includes('touch')) {
      e.preventDefault();
    }
    setIsDragging(true);
    const rect = tabRef.current.getBoundingClientRect();
    const clientPos = getClientPos(e);
    setDragOffset({
      x: clientPos.x - rect.left,
      y: clientPos.y - rect.top
    });
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const clientPos = getClientPos(e);
    setPosition({
      x: clientPos.x - dragOffset.x,
      y: clientPos.y - dragOffset.y
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose(id);
  };

  useEffect(() => {
    if (isDragging) {
      // Mouse events
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      // Touch events
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, dragOffset]);

  if (!isVisible) return null;

  return (
    <div
      ref={tabRef}
      className="glitch-tab"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
        position: 'fixed',
        zIndex: 1000,
        userSelect: 'none' // Prevent text selection while dragging
      }}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      <div className="glitch-tab-titlebar">
        <span>{title}</span>
        <button className="glitch-tab-close" onClick={handleClose}>✕</button>
      </div>
      <div className="glitch-tab-content">
        <div className="glitch-text">{message}</div>
        <div className="glitch-text" style={{ animationDelay: '0.1s' }}>{message}</div>
        <div className="glitch-text" style={{ animationDelay: '0.2s' }}>{message}</div>
      </div>
    </div>
  );
}