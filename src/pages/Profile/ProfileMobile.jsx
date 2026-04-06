import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileMobile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState('capturing the void between moments. minimalism // monochrome // silence.');
  
  const user = {
    username: 'nova.archive',
    displayName: 'Nova',
    avatar: 'N',
    joinedDate: 'Jan 2024',
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

  return (
    <div className="min-h-screen bg-black text-white pb-10">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 pt-6 pb-8">
        <div className="px-5">
          {/* Back button only - Edit button moved below */}
          <div className="mb-6">
            <button 
        
            //   onClick={() => navigate(-1)} //Since the button is not being shown

              className="text-white/60 hover:text-white p-2 -ml-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </div>

          {/* Avatar - Centered for mobile */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-white/10 border-4 border-black flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-light">{user.avatar}</span>
              </div>
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
            </div>

            <h1 className="text-2xl font-light tracking-wide mt-4">
              {user.displayName}
            </h1>
            <p className="text-white/40 text-sm mt-1">@{user.username}</p>
            
            {isEditing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-4 w-full bg-white/5 border border-white/20 rounded-xl p-4 text-sm text-white/80 focus:outline-none focus:border-white/40 transition-all resize-none text-center"
                rows="3"
              />
            ) : (
              <p className="text-white/70 text-sm mt-4 text-center max-w-xs leading-relaxed px-2">
                {user.bio}
              </p>
            )}
            
            <div className="flex flex-wrap gap-4 justify-center mt-4 text-xs text-white/40">
              <div className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{user.joinedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <a href="#" className="hover:text-white/70 transition-colors">{user.website}</a>
              </div>
            </div>

            {/* Edit Profile Button - Below metadata, before stats */}
            <div className="w-full mt-6">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="w-full py-2.5 rounded-full text-sm uppercase tracking-wider border border-white/30 hover:border-white/70 hover:bg-white/5 transition-all"
              >
                {isEditing ? 'save profile' : 'edit profile'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="px-5">
        <div className="flex justify-around py-6 border-b border-white/10">
          <div className="text-center">
            <p className="text-2xl font-light">{user.posts}</p>
            <p className="text-[11px] uppercase tracking-wider text-white/40 mt-1">posts</p>
          </div>
          <button className="text-center hover:opacity-70 transition-opacity">
            <p className="text-2xl font-light">{user.followers.toLocaleString()}</p>
            <p className="text-[11px] uppercase tracking-wider text-white/40 mt-1">followers</p>
          </button>
          <button className="text-center hover:opacity-70 transition-opacity">
            <p className="text-2xl font-light">{user.following.toLocaleString()}</p>
            <p className="text-[11px] uppercase tracking-wider text-white/40 mt-1">following</p>
          </button>
        </div>

        {/* Follow Button */}
        <div className="py-5">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`w-full py-3 rounded-full text-sm uppercase tracking-wider transition-all ${
              isFollowing
                ? 'bg-white/10 border border-white/30 text-white/80 hover:bg-white/20'
                : 'bg-white text-black hover:bg-white/90'
            }`}
          >
            {isFollowing ? 'following' : 'follow'}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10">
          {['posts', 'reposts', 'likes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-sm uppercase tracking-wider transition-all duration-300 relative ${
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
      <div className="px-5 py-6">
        {activeTab === 'posts' && (
          <>
            <div className="grid grid-cols-3 gap-2">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="relative aspect-square overflow-hidden rounded-xl bg-white/5 border border-white/10"
                >
                  <img
                    src={post.url}
                    alt={`Post ${post.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center py-10">
              <button className="text-sm text-white/40 hover:text-white/70 transition-colors uppercase tracking-wider">
                Load more →
              </button>
            </div>
          </>
        )}

        {activeTab === 'reposts' && (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </div>
            <p className="text-white/60 text-base">no reposts yet</p>
            <p className="text-white/30 text-xs mt-2">when you repost something, it'll appear here</p>
          </div>
        )}

        {activeTab === 'likes' && (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <p className="text-white/60 text-base">No liked posts yet</p>
            <p className="text-white/30 text-xs mt-2">Posts you like will show up here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMobile;   