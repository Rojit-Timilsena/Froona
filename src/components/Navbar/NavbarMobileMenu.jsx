import React from 'react';

const NavbarMobileMenu = ({ navLinks, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center z-50"
      >
        <div className={`w-5 h-px bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
        <div className={`w-5 h-px bg-white transition-all duration-300 ease-out my-1 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`w-5 h-px bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></div>
      </button>

      {/* Mobile Menu Overlay */}
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
    </>
  );
};

export default NavbarMobileMenu;
