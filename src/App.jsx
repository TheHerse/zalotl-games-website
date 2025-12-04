import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GlitchManager from './components/GlitchManager';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ComingSoon from './pages/ComingSoon.jsx';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
      </Routes>
      {/* GLITCH TABS ONLY ON DESKTOP */}
      {!isMobile && <GlitchManager />}
    </BrowserRouter>
  );
}