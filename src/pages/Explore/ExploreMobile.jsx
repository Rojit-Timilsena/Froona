import React, { useState } from 'react';

const ExploreMobile = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredPost, setHoveredPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'photography', 'writing', 'art', 'music', 'vibes'];
  
  const exploreContent = [
    { id: 1, type: 'image', url: 'https://picsum.photos/id/11/600/600', username: 'dark.matter', likes: '12.4K', category: 'photography' },
    { id: 2, type: 'image', url: 'https://picsum.photos/id/12/600/600', username: 'void.whisper', likes: '8.2K', category: 'art' },
    { id: 3, type: 'image', url: 'https://picsum.photos/id/13/600/600', username: 'static.noise', likes: '23.1K', category: 'photography' },
    { id: 4, type: 'image', url: 'https://picsum.photos/id/14/600/600', username: 'echo.chamber', likes: '5.7K', category: 'art' },
    { id: 5, type: 'image', url: 'https://picsum.photos/id/15/600/600', username: 'silent.waves', likes: '9.3K', category: 'music' },
    { id: 6, type: 'image', url: 'https://picsum.photos/id/16/600/600', username: 'blackout.poetry', likes: '15.8K', category: 'writing' },
    { id: 7, type: 'image', url: 'https://picsum.photos/id/17/600/600', username: 'mono.chrome', likes: '4.2K', category: 'photography' },
    { id: 8, type: 'image', url: 'https://picsum.photos/id/18/600/600', username: 'zero.cool', likes: '11.6K', category: 'music' },
    { id: 9, type: 'image', url: 'https://picsum.photos/id/19/600/600', username: 'ghost.signal', likes: '7.9K', category: 'art' },
    { id: 10, type: 'image', url: 'https://picsum.photos/id/20/600/600', username: 'nocturnal', likes: '19.2K', category: 'photography' },
    { id: 11, type: 'image', url: 'https://picsum.photos/id/21/600/600', username: 'static.void', likes: '6.4K', category: 'vibes' },
    { id: 12, type: 'image', url: 'https://picsum.photos/id/22/600/600', username: 'dark.core', likes: '14.7K', category: 'art' },
  ];

  const filteredByCategory = activeCategory === 'all' 
    ? exploreContent 
    : exploreContent.filter(item => item.category === activeCategory);
  
  const filteredContent = filteredByCategory.filter(item =>
    item.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white pb-20 pt-15">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-light tracking-[0.2em] uppercase text-center">
            Explore
          </h1>
        </div>
      </div>

      {/* Search Bar - Mobile */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="search creators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 pl-11 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-all"
          />
          <svg className="absolute left-3 top-3 w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>

      {/* Categories - Horizontal Scroll */}
      <div className="px-4 py-3 overflow-x-auto scrollbar-hide border-b border-white/10">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {searchQuery && (
        <div className="px-4 pt-3 text-xs text-white/40">
          Found {filteredContent.length} results
        </div>
      )}

      {/* Content Grid - Mobile (2 columns) */}
      <div className="px-4 py-4">
        {filteredContent.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 active:border-white/30 transition-all duration-300 cursor-pointer"
                onTouchStart={() => setHoveredPost(item.id)}
                onTouchEnd={() => setHoveredPost(null)}
              >
                <div className="aspect-square">
                  <img
                    src={item.url}
                    alt={item.username}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Simple overlay for mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-xs font-medium text-white truncate">
                      @{item.username}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button className="flex items-center gap-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        <span className="text-[10px] text-white">{item.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className="text-[8px] uppercase tracking-wider bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full text-white/70">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <p className="text-white/60 text-sm">no results found</p>
          </div>
        )}
      </div>

      {/* Load More */}
      {filteredContent.length > 0 && (
        <div className="text-center py-6">
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
      `}</style>
    </div>
  );
};

export default ExploreMobile;