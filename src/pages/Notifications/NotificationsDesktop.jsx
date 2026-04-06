import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationsDesktop = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'like',
      username: 'sarah_chen',
      userAvatar: 'S',
      action: 'liked your post',
      content: 'The void between thoughts is where creativity lives...',
      timeAgo: '2 minutes ago',
      read: false,
    },
    {
      id: 2,
      type: 'follow',
      username: 'marcus_void',
      userAvatar: 'M',
      action: 'started following you',
      content: null,
      timeAgo: '15 minutes ago',
      read: false,
    },
    {
      id: 3,
      type: 'comment',
      username: 'julia_echo',
      userAvatar: 'J',
      action: 'commented on your post',
      content: 'this is beautiful, really resonates with me',
      timeAgo: '1 hour ago',
      read: true,
    },
    {
      id: 4,
      type: 'repost',
      username: 'noise.blank',
      userAvatar: 'N',
      action: 'reposted your post',
      content: 'Minimalism isn\'t about having less...',
      timeAgo: '3 hours ago',
      read: true,
    },
    {
      id: 5,
      type: 'like',
      username: 'silent.waves',
      userAvatar: 'S',
      action: 'liked your post',
      content: 'She wore darkness like a crown...',
      timeAgo: '5 hours ago',
      read: true,
    },
    {
      id: 6,
      type: 'follow',
      username: 'echo.chamber',
      userAvatar: 'E',
      action: 'started following you',
      content: null,
      timeAgo: '1 day ago',
      read: true,
    },
    {
      id: 7,
      type: 'comment',
      username: 'static.void',
      userAvatar: 'S',
      action: 'commented on your post',
      content: 'absolutely love this aesthetic',
      timeAgo: '2 days ago',
      read: true,
    },
  ]);

  const filters = ['all', 'likes', 'comments', 'follows', 'reposts'];

  const getFilteredNotifications = () => {
    if (activeFilter === 'all') return notifications;
    if (activeFilter === 'likes') return notifications.filter(n => n.type === 'like');
    if (activeFilter === 'comments') return notifications.filter(n => n.type === 'comment');
    if (activeFilter === 'follows') return notifications.filter(n => n.type === 'follow');
    if (activeFilter === 'reposts') return notifications.filter(n => n.type === 'repost');
    return notifications;
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'like':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      case 'comment':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case 'follow':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'repost':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-8 mt-16">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light tracking-[0.2em] uppercase">
              Notifications
            </h1>
            {unreadCount > 0 && (
              <p className="text-sm text-white/40 mt-1">
                {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
              </p>
            )}
          </div>
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
              className="px-5 py-2 text-xs uppercase tracking-wider border border-white/30 rounded-full hover:border-white/70 hover:bg-white/5 transition-all"
            >
              mark all as read
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex gap-2 border-b border-white/10 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 text-sm uppercase tracking-wider transition-all duration-300 relative ${
                activeFilter === filter
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
              )}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={`group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                  !notification.read
                    ? 'bg-white/5 border border-white/20'
                    : 'bg-transparent hover:bg-white/5'
                }`}
              >
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-base font-light">
                      {notification.userAvatar}
                    </span>
                  </div>
                  {/* Icon badge */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black border border-white/20 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 text-white/70">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-1">
                    <span className="text-base font-medium text-white/90">
                      {notification.username}
                    </span>
                    <span className="text-base text-white/60">
                      {notification.action}
                    </span>
                  </div>
                  {notification.content && (
                    <p className="text-sm text-white/40 mt-1 line-clamp-2">
                      "{notification.content}"
                    </p>
                  )}
                  <p className="text-xs text-white/30 mt-2">
                    {notification.timeAgo}
                  </p>
                </div>

                {/* Unread dot */}
                {!notification.read && (
                  <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            ))
          ) : (
            // Empty State
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <p className="text-white/60 text-base">no {activeFilter !== 'all' ? activeFilter : ''} notifications yet</p>
              <p className="text-white/30 text-sm mt-1">
                when someone interacts with you, it'll show up here
              </p>
            </div>
          )}
        </div>

        {/* Load More */}
        {filteredNotifications.length > 0 && filteredNotifications.length >= 10 && (
          <div className="text-center py-8">
            <button className="text-sm text-white/40 hover:text-white/70 transition-colors uppercase tracking-wider">
              load more →
            </button>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default NotificationsDesktop;