import React, { useState } from 'react';

const HomeMobile = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [activeTab, setActiveTab] = useState('for-you');

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
    },
  ];

  const stories = [
    { id: 1, username: 'Your Story', avatar: 'Y', isAdd: true },
    { id: 2, username: 'sarah_chen', avatar: 'S' },
    { id: 3, username: 'marcus_void', avatar: 'M' },
    { id: 4, username: 'julia_echo', avatar: 'J' },
    { id: 5, username: 'nova_arch', avatar: 'N' },
  ];

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Stories Row - Horizontal Scroll */}
      <div className="px-4 py-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center gap-1 cursor-pointer group flex-shrink-0">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                story.isAdd 
                  ? 'bg-white/10 border-2 border-dashed border-white/30 group-hover:border-white/60' 
                  : 'bg-gradient-to-br from-white/20 to-white/5 ring-2 ring-white/30 group-hover:ring-white/60'
              }`}>
                <span className="text-lg font-light">{story.avatar}</span>
              </div>
              <span className="text-xs text-white/60 group-hover:text-white transition-colors truncate max-w-[64px]">
                {story.username}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feed Tabs */}
      <div className="flex border-b border-white/10 px-4">
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

      {/* Posts Feed */}
      <div className="space-y-4 px-4 py-4">
        {posts.map((post) => (
          <article key={post.id} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-4 pb-3 flex items-center justify-between">
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

            <div className="px-4 pb-3">
              <p className="text-white/80 leading-relaxed text-sm">{post.content}</p>
            </div>

            {post.image && (
              <img src={post.image} alt="Post" className="w-full h-64 object-cover" />
            )}

            <div className="px-4 py-3 flex items-center justify-between border-t border-white/5">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-1.5 transition-all ${
                    likedPosts[post.id] ? 'text-white' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={likedPosts[post.id] ? "white" : "none"} stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span className="text-xs">{likedPosts[post.id] ? post.likes + 1 : post.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="text-xs">{post.comments}</span>
                </button>
                <button className="text-white/40 hover:text-white/70 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                  </svg>
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
      <div className="text-center py-4">
        <button className="text-xs text-white/40 hover:text-white/70 transition-colors uppercase tracking-wider">
          Load more →
        </button>
      </div>

      {/* Bottom Navigation - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 py-2 px-4">
        <div className="flex justify-around">
          {[
            { name: 'Home', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-5v-8H7v8H5a2 2 0 0 1-2-2z', active: true },
            { name: 'Search', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', active: false },
            { name: 'Post', icon: 'M12 4v16m8-8H4', active: false },
            { name: 'Activity', icon: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0', active: false },
            { name: 'Profile', icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', active: false },
          ].map((item) => (
            <button key={item.name} className="flex flex-col items-center gap-1">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={item.active ? 'text-white' : 'text-white/40'}>
                <path d={item.icon} />
              </svg>
              <span className={`text-[10px] ${item.active ? 'text-white' : 'text-white/40'}`}>
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HomeMobile;