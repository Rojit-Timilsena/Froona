import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarMobile = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out px-6 ${
        isScrolled
          ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'py-6 bg-black'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative group">
          <a
            href="/"
            className="text-2xl font-light tracking-[0.2em] text-white no-underline transition-all duration-300 group-hover:tracking-[0.3em]"
          >
            FRØØNA
          </a>
          <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
        </div>

        {/* Messages Icon Only */}
        <button 
          onClick={() => navigate('/messages')}
          className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-transparent text-white/80 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {unreadMessages > 0 && (
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavbarMobile;