import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarDesktop = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [unreadMessages, setUnreadMessages] = useState(2); // Added for messages
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Notifications', href: '/notifications' },
    { name: 'Profile', href: '/profile' },
  ];

  const recentNotifications = [
    {
      id: 1,
      type: 'like',
      username: 'sarah_chen',
      userAvatar: 'S',
      action: 'liked your post',
      timeAgo: '2m ago',
      read: false,
    },
    {
      id: 2,
      type: 'follow',
      username: 'marcus_void',
      userAvatar: 'M',
      action: 'started following you',
      timeAgo: '15m ago',
      read: false,
    },
    {
      id: 3,
      type: 'comment',
      username: 'julia_echo',
      userAvatar: 'J',
      action: 'commented: "beautiful"',
      timeAgo: '1h ago',
      read: true,
    },
  ];

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'like':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      case 'comment':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case 'follow':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
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
            href="/"
            className="text-2xl font-light tracking-[0.2em] text-white no-underline transition-all duration-300 group-hover:tracking-[0.3em]"
          >
            FRØØNA
          </a>
          <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
        </div>

        {/* Desktop Navigation Links */}
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
          {/* Messages Icon - NEW */}
          <button 
            onClick={() => navigate('/messages')}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-transparent text-white/80 hover:border-white hover:bg-white hover:text-black transition-all duration-300 relative"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {unreadMessages > 0 && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            )}
          </button>

          {/* Notification Bell with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-transparent text-white/80 hover:border-white hover:bg-white hover:text-black transition-all duration-300 relative"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {unreadNotifications > 0 && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              )}
            </button>

            {/* Dropdown Menu */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-3 w-96 bg-black/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <h3 className="text-sm font-medium text-white">Notifications</h3>
                  <button 
                    onClick={() => {
                      setIsNotificationsOpen(false);
                      navigate('/notifications');
                    }}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    See all
                  </button>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {recentNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer ${
                        !notification.read ? 'bg-white/5' : ''
                      }`}
                      onClick={() => {
                        setIsNotificationsOpen(false);
                        navigate('/notifications');
                      }}
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="text-xs font-light">{notification.userAvatar}</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-black border border-white/20 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 text-white/70">
                            {getNotificationIcon(notification.type)}
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-white/80">
                          <span className="font-medium text-white">{notification.username}</span>
                          {' '}{notification.action}
                        </p>
                        <p className="text-[10px] text-white/40 mt-1">{notification.timeAgo}</p>
                      </div>

                      {!notification.read && (
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 px-4 py-2">
                  <button 
                    onClick={() => {
                      setIsNotificationsOpen(false);
                      navigate('/notifications');
                    }}
                    className="w-full text-center text-xs text-white/40 hover:text-white/70 transition-colors py-2"
                  >
                    View all notifications →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Avatar */}
          <button 
            onClick={() => navigate('/profile')}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 bg-transparent hover:border-white transition-all duration-300"
          >
            <div className="w-6 h-6 rounded-full bg-white/20"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;