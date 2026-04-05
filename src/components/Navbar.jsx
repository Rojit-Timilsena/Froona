import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Feed', href: '/' },
    { name: 'Explore', href: 'explore' },
    { name: 'Messages', href: 'messages' },
    { name: 'Profile', href: 'profile' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out px-6 md:px-12 lg:px-24 ${
          isScrolled
            ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10'
            : 'py-6 bg-black'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <a
              href="#"
              className="text-2xl font-light tracking-[0.2em] text-white no-underline transition-all duration-300 group-hover:tracking-[0.3em]"
            >
              FRØØNA
            </a>
            <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="relative text-sm font-normal uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-6">
            {/* Notification bell */}
            <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-transparent text-white/80 hover:border-white hover:bg-white hover:text-black transition-all duration-300 relative">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {/* Notification dot */}
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></span>
            </button>

            {/* Avatar placeholder */}
            <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-white/30 bg-transparent hover:border-white transition-all duration-300">
              <div className="w-6 h-6 rounded-full bg-white/20"></div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center z-50"
            >
              <div className={`w-5 h-px bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
              <div className={`w-5 h-px bg-white transition-all duration-300 ease-out my-1 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-5 h-px bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Dark theme */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <div className="absolute top-24 left-6 w-12 h-px bg-white/20"></div>
          <div className="absolute bottom-24 right-6 w-24 h-px bg-white/20"></div>
          
          <div className="space-y-10 text-center">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-3xl font-light tracking-wider text-white hover:text-white/60 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8 flex justify-center gap-6">
              <button className="text-sm uppercase tracking-wider text-white/60">Settings</button>
              <button className="text-sm uppercase tracking-wider text-white/60">Logout</button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center text-[10px] tracking-[0.3em] text-white/30">
            DARK // MODE
          </div>
        </div>
      </div>

      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Navbar;