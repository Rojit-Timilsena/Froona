// src/components/MobileBottomNav.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-5v-8H7v8H5a2 2 0 0 1-2-2z', path: '/' },
    { name: 'Explore', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', path: '/explore' },
    { name: 'Activity', icon: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0', path: '/notifications' },
    { name: 'Profile', icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 py-2 px-4 z-40 md:hidden">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <button 
            key={item.name}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-1 group"
          >
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              className={location.pathname === item.path ? 'text-white' : 'text-white/40 group-hover:text-white/70 transition-colors'}
            >
              <path d={item.icon} />
            </svg>
            <span className={`text-[10px] ${location.pathname === item.path ? 'text-white' : 'text-white/40 group-hover:text-white/70 transition-colors'}`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;