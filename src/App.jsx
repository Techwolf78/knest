// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Careers from './components/Careers'; // New Careers Page
import './App.css';
import './index.css';

function AppContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative bg-black min-h-screen text-white">
      {isMobile && !showMenu && location.pathname === '/' && (
        <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
      )}
      {!isMobile && location.pathname === '/' && <Sidebar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
