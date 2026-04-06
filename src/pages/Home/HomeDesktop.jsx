import React, { useState } from 'react';

const HomeDesktop = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [activeTab, setActiveTab] = useState('for-you');

  const stories = [
    { id: 1, username: 'Your Story', avatar: 'Y', isAdd: true },
    { id: 2, username: 'sarah_chen', avatar: 'S' },
    { id: 3, username: 'marcus_void', avatar: 'M' },
    { id: 4, username: 'julia_echo', avatar: 'J' },
    { id: 5, username: 'nova_arch', avatar: 'N' },
    { id: 6, username: 'echo_void', avatar: 'E' },
    { id: 7, username: 'static_noise', avatar: 'S' },
  ];

  const posts = [
    {
      id: 1,
      username: 'sarah_chen',
      userAvatar: 'S',
      timeAgo: '2 hours ago',
      content: 'The void between thoughts is where creativity lives. 🌑',
      image: null,
      likes: 1243,
      comments: 89,
      reposts: 34,
    },
    {
      id: 2,
      username: 'marcus_void',
      userAvatar: 'M',
      timeAgo: '4 hours ago',
      content: 'Minimalism isn\'t about having less. It\'s about making room for what matters.',
      image: 'https://picsum.photos/id/15/600/400',
      likes: 3421,
      comments: 234,
      reposts: 127,
    },
    {
      id: 3,
      username: 'julia_echo',
      userAvatar: 'J',
      timeAgo: '7 hours ago',
      content: 'She wore darkness like a crown, and silence like a melody.',
      image: null,
      likes: 892,
      comments: 45,
      reposts: 23,
    },
    {
      id: 4,
      username: 'nova.archive',
      userAvatar: 'N',
      timeAgo: '12 hours ago',
      content: 'Some frequencies are only heard in the quiet.',
      image: 'https://picsum.photos/id/16/600/400',
      likes: 2567,
      comments: 178,
      reposts: 92,
    },
  ];

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-6 mt-16">
        
        {/* Stories Row */}
        <div className="bg-white/5 rounded-2xl border border-white/10 mb-6 overflow-hidden">
          <div className="px-6 py-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6" style={{ minWidth: 'min-content' }}>
              {stories.map((story) => (
                <div key={story.id} className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    story.isAdd
                      ? 'bg-white/10 border-2 border-dashed border-white/30 group-hover:border-white/60'
                      : 'bg-gradient-to-br from-white/20 to-white/5 ring-2 ring-white/30 group-hover:ring-white/60'
                  }`}>
                    <span className="text-lg font-light">{story.avatar}</span>
                  </div>
                  <span className="text-xs text-white/60 group-hover:text-white transition-colors text-center w-16 break-words leading-tight">
                    {story.username}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Create Post - Wider */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-6">
          <textarea 
            placeholder="What's on your mind?"
            className="w-full bg-black/50 border border-white/20 rounded-xl p-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-all resize-none"
            rows="2"
          />
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-3">
              <button className="text-white/40 hover:text-white/70 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </button>
              <button className="text-white/40 hover:text-white/70 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </button>
            </div>
            <button className="px-4 py-1.5 bg-white text-black text-xs uppercase tracking-wider rounded-full hover:bg-white/90 transition-all">
              Post
            </button>
          </div>
        </div>

        {/* Feed Tabs - Wider */}
        <div className="flex border-b border-white/10 mb-6">
          {['For You', 'Following'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
              className={`flex-1 py-3 text-sm uppercase tracking-wider transition-all duration-300 relative ${
                activeTab === tab.toLowerCase().replace(' ', '-')
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {tab}
              {activeTab === tab.toLowerCase().replace(' ', '-') && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-white"></span>
              )}
            </button>
          ))}
        </div>

        {/* Posts Feed - Full width posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <article key={post.id} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
              {/* Post Header */}
              <div className="p-6 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-sm font-light">{post.userAvatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90">{post.username}</p>
                    <p className="text-xs text-white/40">{post.timeAgo}</p>
                  </div>
                </div>
                <button className="text-white/40 hover:text-white/70 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </button>
              </div>

              {/* Post Content */}
              <div className="px-6 pb-4">
                <p className="text-white/80 leading-relaxed text-base">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="relative group">
                  <img 
                    src={post.image} 
                    alt="Post content" 
                    className="w-full h-auto max-h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              )}

              {/* Post Actions */}
              <div className="px-6 py-4 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-8">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      likedPosts[post.id] ? 'text-white' : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={likedPosts[post.id] ? "white" : "none"} stroke="currentColor" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span className="text-sm">{likedPosts[post.id] ? post.likes + 1 : post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                    <span className="text-sm">{post.reposts}</span>
                  </button>
                </div>
                <button className="text-white/40 hover:text-white/70 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-10">
          <button className="text-sm text-white/40 hover:text-white/70 transition-colors uppercase tracking-wider">
            load more →
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default HomeDesktop;