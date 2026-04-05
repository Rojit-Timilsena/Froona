import React from 'react';

const NavbarDesktopMenu = ({ navLinks }) => {
  return (
    <>
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

      {/* Desktop Right Actions */}
      <div className="hidden md:flex items-center gap-6">
        {/* Notification bell */}
        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-transparent text-white/80 hover:border-white hover:bg-white hover:text-black transition-all duration-300 relative">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></span>
        </button>

        {/* Avatar placeholder */}
        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 bg-transparent hover:border-white transition-all duration-300">
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
        </button>
      </div>
    </>
  );
};

export default NavbarDesktopMenu;
