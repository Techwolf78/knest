import React, { useState, useEffect } from 'react'; 
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import './index.css';

function App() {
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile or not
  const [showMenu, setShowMenu] = useState(false); // State for toggling menu visibility

  useEffect(() => {
    // Detect screen size and update the `isMobile` state accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update the mobile state based on screen width
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative bg-navy min-h-screen text-white">
      {/* Only show Navbar on mobile, and not if Sidebar is shown */}
      {isMobile && !showMenu && <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />}

      {/* Show Sidebar only on large screens and hide Navbar */}
      {!isMobile && <Sidebar />}

      {/* Main content */}
      <Home />
    </div>
  );
}

export default App;
