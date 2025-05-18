import React from 'react';

const sections = [
  'Hero',
  'Features',
  'Use Cases',
  'How It Works',
  'Testimonials',
  'CTA',
];

const Navbar = ({ setShowMenu, showMenu }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white text-xl font-bold tracking-wide">
          YourLogo
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {showMenu ? '✖' : '☰'} {/* Hamburger icon */}
        </button>

        {/* Menu for small screens */}
        <div
          className={`md:hidden absolute top-16 right-0 bg-black/80 w-3/4 p-4 space-y-4 transition-transform duration-300 ${showMenu ? 'transform translate-x-0' : 'transform translate-x-full'}`}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                setShowMenu(false); // Close the menu after clicking
              }}
              className="block text-white text-lg font-medium"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white text-lg font-medium"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
