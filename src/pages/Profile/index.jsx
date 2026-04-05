import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState('capturing the void between moments. minimalism // monochrome // silence.');
  
  const user = {
    username: 'nova.archive',
    displayName: 'Nova',
    avatar: 'N',
    joinedDate: 'January 2024',
    location: 'brooklyn, ny',
    website: 'novaarchive.dark',
    posts: 47,
    followers: 1234,
    following: 892,
    bio: bio,
  };

  const posts = [
    { id: 1, url: 'https://picsum.photos/id/11/600/600', likes: 1243, comments: 89 },
    { id: 2, url: 'https://picsum.photos/id/12/600/600', likes: 892, comments: 45 },
    { id: 3, url: 'https://picsum.photos/id/13/600/600', likes: 2341, comments: 156 },
    { id: 4, url: 'https://picsum.photos/id/14/600/600', likes: 567, comments: 23 },
    { id: 5, url: 'https://picsum.photos/id/15/600/600', likes: 1876, comments: 92 },
    { id: 6, url: 'https://picsum.photos/id/16/600/600', likes: 432, comments: 18 },
    { id: 7, url: 'https://picsum.photos/id/17/600/600', likes: 987, comments: 54 },
    { id: 8, url: 'https://picsum.photos/id/18/600/600', likes: 765, comments: 32 },
    { id: 9, url: 'https://picsum.photos/id/19/600/600', likes: 1543, comments: 78 },
  ];

  const [hoveredPost, setHoveredPost] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 pt-8 pb-20 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Edit Button */}
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm uppercase tracking-wider border border-white/30 rounded-full hover:border-white/70 hover:bg-white/5 transition-all"
            >
              {isEditing ? 'save' : 'edit profile'}
            </button>
          </div>

          {/* Avatar Section - Side by side with user info */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8">
            {/* Avatar - Large and prominent */}
            <div className="relative">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/10 border-4 border-black flex items-center justify-center shadow-2xl">
                <span className="text-4xl md:text-5xl font-light">{user.avatar}</span>
              </div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
            </div>

            {/* User Info - Next to avatar */}
            <div className="flex-1 pb-2">
              <h1 className="text-3xl md:text-4xl font-light tracking-wide">
                {user.displayName}
              </h1>
              <p className="text-white/40 text-sm mt-1">@{user.username}</p>
              
              {isEditing ? (
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="mt-3 w-full max-w-md bg-white/5 border border-white/20 rounded-lg p-3 text-sm text-white/80 focus:outline-none focus:border-white/40 transition-all resize-none"
                  rows="2"
                />
              ) : (
                <p className="text-white/70 text-sm mt-3 max-w-md leading-relaxed">
                  {user.bio}
                </p>
              )}
              
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-white/40">
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>joined {user.joinedDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <a href="#" className="hover:text-white/70 transition-colors">{user.website}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Stats Row */}
        <div className="flex gap-6 md:gap-8 py-4 border-b border-white/10 mt-4 mb-6">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-light">{user.posts}</p>
            <p className="text-[10px] uppercase tracking-wider text-white/40 mt-1">posts</p>
          </div>
          <button className="text-center hover:opacity-70 transition-opacity">
            <p className="text-xl md:text-2xl font-light">{user.followers.toLocaleString()}</p>
            <p className="text-[10px] uppercase tracking-wider text-white/40 mt-1">followers</p>
          </button>
          <button className="text-center hover:opacity-70 transition-opacity">
            <p className="text-xl md:text-2xl font-light">{user.following.toLocaleString()}</p>
            <p className="text-[10px] uppercase tracking-wider text-white/40 mt-1">following</p>
          </button>
        </div>

        {/* Follow Button */}
        <div className="mb-6">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-8 py-2.5 rounded-full text-sm uppercase tracking-wider transition-all ${
              isFollowing
                ? 'bg-white/10 border border-white/30 text-white/80 hover:bg-white/20'
                : 'bg-white text-black hover:bg-white/90'
            }`}
          >
            {isFollowing ? 'following' : 'follow'}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-white/10">
          {['posts', 'reposts', 'likes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 text-sm uppercase tracking-wider transition-all duration-300 relative ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8">
        {activeTab === 'posts' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-xs text-white/40 uppercase tracking-wider">
                {posts.length} posts
              </p>
              <button className="text-xs text-white/40 hover:text-white/70 transition-colors">
                view all →
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <img
                    src={post.url}
                    alt={`Post ${post.id}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-500 flex items-center justify-center gap-6 ${
                    hoveredPost === post.id ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                      <span className="text-sm text-white">{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                      <span className="text-sm text-white">{post.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center py-12">
              <button className="group relative px-8 py-3 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 overflow-hidden">
                <span className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white relative z-10">
                  load more
                </span>
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </>
        )}

        {activeTab === 'reposts' && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </div>
            <p className="text-white/60 text-sm">no reposts yet</p>
            <p className="text-white/30 text-xs mt-1">when you repost something, it'll appear here</p>
          </div>
        )}

        {activeTab === 'likes' && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <p className="text-white/60 text-sm">no liked posts yet</p>
            <p className="text-white/30 text-xs mt-1">posts you like will show up here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export {Profile};