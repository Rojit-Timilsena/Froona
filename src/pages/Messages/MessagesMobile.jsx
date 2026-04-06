import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MessagesMobile = () => {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showChat, setShowChat] = useState(false);

  const conversations = [
    {
      id: 1,
      username: 'sarah_chen',
      avatar: 'S',
      lastMessage: 'hey, loved your last post about minimalism',
      timestamp: '2m ago',
      unread: 2,
      online: true,
      typing: false,
    },
    {
      id: 2,
      username: 'marcus_void',
      avatar: 'M',
      lastMessage: 'check out this track i found - right up your alley',
      timestamp: '1h ago',
      unread: 0,
      online: false,
      typing: false,
    },
    {
      id: 3,
      username: 'julia_echo',
      avatar: 'J',
      lastMessage: 'are you going to the meetup tomorrow?',
      timestamp: '3h ago',
      unread: 0,
      online: true,
      typing: false,
    },
    {
      id: 4,
      username: 'noise.blank',
      avatar: 'N',
      lastMessage: 'thanks for the follow! 🙌',
      timestamp: '1d ago',
      unread: 0,
      online: false,
      typing: false,
    },
    {
      id: 5,
      username: 'silent.waves',
      avatar: 'W',
      lastMessage: 'your photography is incredible',
      timestamp: '2d ago',
      unread: 0,
      online: false,
      typing: false,
    },
  ];

  const messagesData = {
    1: [
      { id: 1, text: 'hey! i saw your post about the book', sender: 'sarah_chen', timestamp: '10:42 AM', isOwn: false },
      { id: 2, text: 'oh hey! yeah, it was really good', sender: 'me', timestamp: '10:43 AM', isOwn: true },
      { id: 3, text: 'have you read anything else by the same author?', sender: 'sarah_chen', timestamp: '10:44 AM', isOwn: false },
      { id: 4, text: 'not yet, but i just ordered another one', sender: 'me', timestamp: '10:45 AM', isOwn: true },
      { id: 5, text: 'nice! let me know how it is', sender: 'sarah_chen', timestamp: '10:46 AM', isOwn: false },
      { id: 6, text: 'will do! thanks for the recommendation', sender: 'me', timestamp: '10:47 AM', isOwn: true },
      { id: 7, text: 'hey, loved your last post about minimalism', sender: 'sarah_chen', timestamp: '2m ago', isOwn: false },
    ],
    2: [
      { id: 1, text: 'yo! found this track for you', sender: 'marcus_void', timestamp: '1:30 PM', isOwn: false },
      { id: 2, text: 'oh sick, what genre?', sender: 'me', timestamp: '1:32 PM', isOwn: true },
      { id: 3, text: 'ambient/darkwave. right up your alley', sender: 'marcus_void', timestamp: '1:33 PM', isOwn: false },
      { id: 4, text: 'send it over!', sender: 'me', timestamp: '1:35 PM', isOwn: true },
      { id: 5, text: 'check out this track i found - right up your alley', sender: 'marcus_void', timestamp: '1h ago', isOwn: false },
    ],
  };

  const filteredConversations = conversations.filter(conv =>
    conv.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentMessages = selectedChat ? messagesData[selectedChat.id] || [] : [];

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    setMessageInput('');
  };

  // Conversation List View
  if (!showChat) {
    return (
      <div className="min-h-screen bg-black text-white pb-20">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => navigate(-1)}
                className="text-white/60 hover:text-white p-2 -ml-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <h1 className="text-xl font-light tracking-[0.2em] uppercase">Messages</h1>
              <button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <line x1="9" y1="10" x2="15" y2="10" />
                  <line x1="12" y1="7" x2="12" y2="13" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <input
              type="text"
              placeholder="search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-11 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all"
            />
            <svg className="absolute left-3 top-3 w-5 h-5 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => {
                setSelectedChat(conversation);
                setShowChat(true);
              }}
              className="w-full p-4 flex items-center gap-3 hover:bg-white/5 transition-all duration-300 border-b border-white/5"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-base font-light">{conversation.avatar}</span>
                </div>
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                )}
              </div>

              <div className="flex-1 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-white/90">
                    @{conversation.username}
                  </span>
                  <span className="text-[10px] text-white/30">
                    {conversation.timestamp}
                  </span>
                </div>
                <p className="text-xs text-white/50 truncate">
                  {conversation.lastMessage}
                </p>
              </div>

              {conversation.unread > 0 && (
                <div className="min-w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center">
                  <span className="text-[10px] font-medium text-black">
                    {conversation.unread}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Chat View - Fixed input box with bottom padding for mobile nav
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowChat(false)}
            className="text-white/60 hover:text-white p-2 -ml-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-sm font-light">{selectedChat?.avatar}</span>
            </div>
            {selectedChat?.online && (
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black"></div>
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium text-white/90">
              @{selectedChat?.username}
            </h3>
            <p className="text-[10px] text-white/40">
              {selectedChat?.online ? 'online' : 'offline'}
            </p>
          </div>
        </div>

        <button className="text-white/40 hover:text-white/70 transition-colors p-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>

      {/* Messages Container - Scrollable area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {currentMessages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            {!message.isOwn && (
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-[10px] font-light">{selectedChat?.avatar}</span>
              </div>
            )}
            <div className={`max-w-[75%] ${message.isOwn ? 'items-end' : 'items-start'} flex flex-col`}>
              <div className={`px-4 py-2.5 rounded-2xl ${
                message.isOwn 
                  ? 'bg-white text-black' 
                  : 'bg-white/10 text-white/90'
              }`}>
                <p className="text-sm break-words">{message.text}</p>
              </div>
              <span className="text-[10px] text-white/30 mt-1 px-2">
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input - Fixed at bottom with extra padding for mobile nav */}
      <div className="px-3 pb-16 pt-2 border-t border-white/10 bg-black/90">
        <div className="flex items-center gap-3">
          <button className="text-white/40 hover:text-white/70 transition-colors flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="2.18" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </button>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="type a message..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all"
          />
          <button
            onClick={handleSendMessage}
            className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all flex-shrink-0 mt-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesMobile;