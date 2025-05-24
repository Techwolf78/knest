import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'Hero', label: 'Home' },
  { id: 'Features', label: 'Features' },
  { id: 'Use Cases', label: 'Who It’s For' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'Testimonials', label: 'Testimonials' },
  { id: 'CTA', label: 'Join Us' },
];

const Sidebar = () => {
  const [active, setActive] = useState('Hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3; // Adjusted scroll position

      for (let { id } of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="hidden md:block fixed top-1/2 left-4 transform -translate-y-1/2 space-y-3 z-50">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`block px-4 py-1.5 text-xs rounded-full backdrop-blur-md transition-all duration-300 ${
            active === id
              ? 'bg-white/10 text-white font-bold ring-1 ring-white'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
