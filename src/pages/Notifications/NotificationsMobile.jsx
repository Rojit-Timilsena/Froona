import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationsMobile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      username: 'sarah_chen',
      userAvatar: 'S',
      action: 'liked your post',
      content: 'The void between thoughts is where creativity lives...',
      timeAgo: '2m',
      read: false,
    },
    {
      id: 2,
      type: 'follow',
      username: 'marcus_void',
      userAvatar: 'M',
      action: 'started following you',
      content: null,
      timeAgo: '15m',
      read: false,
    },
    {
      id: 3,
      type: 'comment',
      username: 'julia_echo',
      userAvatar: 'J',
      action: 'commented on your post',
      content: 'this is beautiful',
      timeAgo: '1h',
      read: true,
    },
    {
      id: 4,
      type: 'repost',
      username: 'noise.blank',
      userAvatar: 'N',
      action: 'reposted your post',
      content: 'Minimalism isn\'t about having less...',
      timeAgo: '3h',
      read: true,
    },
    {
      id: 5,
      type: 'like',
      username: 'silent.waves',
      userAvatar: 'S',
      action: 'liked your post',
      content: 'She wore darkness like a crown...',
      timeAgo: '5h',
      read: true,
    },
    {
      id: 6,
      type: 'follow',
      username: 'echo.chamber',
      userAvatar: 'E',
      action: 'started following you',
      content: null,
      timeAgo: '1d',
      read: true,
    },
  ]);

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'likes', label: 'Likes' },
    { id: 'comments', label: 'Comments' },
    { id: 'follows', label: 'Follows' },
  ];

  const getFilteredNotifications = () => {
    if (activeTab === 'all') return notifications;
    if (activeTab === 'likes') return notifications.filter(n => n.type === 'like');
    if (activeTab === 'comments') return notifications.filter(n => n.type === 'comment');
    if (activeTab === 'follows') return notifications.filter(n => n.type === 'follow');
    return notifications;
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case 'follow':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'repost':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        );
      default:
        return null;
    }
  };

  const filteredNotifications = getFilteredNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-black text-white pb-20 pt-15">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button 
            onClick={() => navigate(-1)} 
            className="text-white/60 hover:text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

{/* This header could or could not be being showin in mobile anyway. I am confused as to wheather I should keep it or not. */}
          {/* <h1 className="text-xl font-light tracking-[0.2em] uppercase">
            Notifications
          </h1> */}
          
          {unreadCount > 0 && (
            <button 
              onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
              className="text-xs text-white/40 hover:text-white/70"
            >
              Mark all
            </button>
          )}
        </div>
      </div>

      {/* Tabs - Horizontal Scroll */}
      <div className="border-b border-white/10 overflow-x-auto scrollbar-hide">
        <div className="flex px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm uppercase tracking-wider transition-all duration-300 relative whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-4 py-4 space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => markAsRead(notification.id)}
              className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                !notification.read
                  ? 'bg-white/5 border border-white/20'
                  : 'bg-transparent'
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-sm font-light">
                    {notification.userAvatar}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-black border border-white/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 text-white/70">
                    {getNotificationIcon(notification.type)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-1">
                  <span className="text-sm font-medium text-white/90">
                    {notification.username}
                  </span>
                  <span className="text-sm text-white/60">
                    {notification.action}
                  </span>
                </div>
                {notification.content && (
                  <p className="text-xs text-white/40 mt-0.5 line-clamp-1">
                    {notification.content}
                  </p>
                )}
                <p className="text-[10px] text-white/30 mt-1">
                  {notification.timeAgo}
                </p>
              </div>

              {/* Unread dot */}
              {!notification.read && (
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full"></div>
              )}
            </div>
          ))
        ) : (
          // Empty State
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <p className="text-white/60 text-sm">no notifications yet</p>
            <p className="text-white/30 text-xs mt-1">when someone interacts, it'll show here</p>
          </div>
        )}
      </div>

      {/* Load More */}
      {filteredNotifications.length > 0 && filteredNotifications.length >= 10 && (
        <div className="text-center py-4">
          <button className="text-xs text-white/40 hover:text-white/70 transition-colors uppercase tracking-wider">
            load more →
          </button>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default NotificationsMobile;