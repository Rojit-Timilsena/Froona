import React, { useState, useEffect } from 'react';
import NavbarDesktopMenu from './NavbarDesktopMenu';
import NavbarMobileMenu from './NavbarMobileMenu';

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

          {/* Desktop Menu and Actions */}
          <NavbarDesktopMenu navLinks={navLinks} />

          {/* Mobile Menu Button and Overlay */}
          <NavbarMobileMenu 
            navLinks={navLinks} 
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </nav>

      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Navbar;
