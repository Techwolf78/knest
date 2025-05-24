// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const sections = [
  'Hero',
  'Features',
  'Use Cases',
  'How It Works',
  'Testimonials',
  'CTA',
];

const Navbar = ({ setShowMenu, showMenu }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowVideo(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold tracking-wide cursor-pointer" onClick={() => navigate('/')}>
          {showVideo ? (
            <video
              ref={videoRef}
              src="/logotrim.mp4"
              className="h-16 w-auto"
              muted
              playsInline
              onEnded={() => videoRef.current.pause()}
            />
          ) : (
            <img src="/whitelogo-bg.png" alt="Knest" className="h-16 w-auto" />
          )}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {showMenu ? '✖' : '☰'}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 right-0 bg-black/80 w-3/4 p-4 space-y-4 transition-transform duration-300 ${
            showMenu ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                setShowMenu(false);
              }}
              className="block text-white text-lg font-medium"
            >
              {section}
            </button>
          ))}
          <button
            onClick={() => {
              navigate('/careers');
              setShowMenu(false);
            }}
            className="block text-white text-lg font-medium"
          >
            Careers
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => navigate('/careers')}
            className="text-white text-lg font-medium relative group transition duration-300"
          >
            Careers
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
