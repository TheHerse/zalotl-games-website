import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlitchManager from './components/GlitchManager';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ComingSoon from './pages/ComingSoon.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
      </Routes>
      <GlitchManager /> {/* ADD THIS - spawns interactive glitch tabs */}
    </BrowserRouter>
  );
}

export default App;