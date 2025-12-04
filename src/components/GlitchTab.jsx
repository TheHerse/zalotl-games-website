import { useState, useRef, useEffect } from 'react';

export default function GlitchTab({ id, title, message, initialPosition }) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const tabRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = tabRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    // Tab will respawn via parent component
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
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
        cursor: isDragging ? 'grabbing' : 'grabbing',
        position: 'fixed',
        zIndex: 1000
      }}
    >
      <div className="glitch-tab-titlebar" onMouseDown={handleMouseDown}>
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