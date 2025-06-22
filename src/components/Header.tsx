import React from 'react';
import { Stars } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/15 backdrop-blur-md border border-white/30 rounded-full mx-4 mt-4 shadow-2xl">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-800 rounded-full flex items-center justify-center shadow-lg">
            <Stars className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-semibold text-lg drop-shadow-lg">Cosmic</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg">Home</a>
          <a href="#about" className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg">About</a>
          <a href="#readings" className="text-white/90 hover:text-white transition-colors duration-300 drop-shadow-lg">Readings</a>
        </nav>
        
        <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 shadow-lg">
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;