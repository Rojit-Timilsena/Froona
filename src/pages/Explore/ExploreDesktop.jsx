import React, { useState } from 'react';

const ExploreDesktop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [gridView, setGridView] = useState('grid');
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden pt-30">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase mb-3">
            Explore
          </h1>
          <div className="w-12 h-px bg-white/30 mx-auto mb-4"></div>
          <p className="text-white/50 text-sm tracking-wider max-w-md mx-auto">
            discover // connect // create
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8">
        
        {/* Search Bar - Full width */}
        <div className="mb-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search creators..."
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

        {/* Categories & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-4 border-b border-white/10">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-white/30 tracking-wider">VIEW</span>
            <button
              onClick={() => setGridView('grid')}
              className={`p-2 rounded transition-all ${
                gridView === 'grid' ? 'text-white' : 'text-white/30 hover:text-white/60'
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              onClick={() => setGridView('rows')}
              className={`p-2 rounded transition-all ${
                gridView === 'rows' ? 'text-white' : 'text-white/30 hover:text-white/60'
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Results count */}
        {searchQuery && (
          <div className="mb-4 text-sm text-white/40">
            Found {filteredContent.length} results for "{searchQuery}"
          </div>
        )}

        {/* Content Grid */}
        {filteredContent.length > 0 ? (
          <div className={
            gridView === 'grid'
              ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5'
              : 'space-y-4'
          }>
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredPost(item.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div className={gridView === 'grid' ? 'aspect-square' : 'aspect-video'}>
                  <img
                    src={item.url}
                    alt={item.username}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 ${
                  hoveredPost === item.id ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-medium text-white mb-1">
                      @{item.username}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                          </svg>
                          <span className="text-xs">{item.likes}</span>
                        </button>
                        <button className="text-white/60 hover:text-white transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          </svg>
                        </button>
                      </div>
                      <button className="text-white/60 hover:text-white transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="18" cy="5" r="3"/>
                          <circle cx="6" cy="12" r="3"/>
                          <circle cx="18" cy="19" r="3"/>
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-white/70">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <p className="text-white/60 text-sm">no results found</p>
            <p className="text-white/30 text-xs mt-1">try searching for something else</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredContent.length > 0 && (
          <div className="text-center py-12">
            <button className="group relative px-8 py-3 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 overflow-hidden">
              <span className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white relative z-10">
                load more
              </span>
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreDesktop;