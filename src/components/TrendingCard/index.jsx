import React from 'react'

export const TrendingCard = () => {

    const trendingTopics = [
        { topic: '#monochromeaesthetic', posts: '12.4K' },
        { topic: '#blackandwhite', posts: '8.2K' },
        { topic: '#minimalism', posts: '6.9K' },
        { topic: '#voidcore', posts: '4.1K' },
    ];
    
    return (
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="text-xs uppercase tracking-wider text-white/50 mb-4">Trending</h3>
            <div className="space-y-4">
                {trendingTopics.map((topic, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <p className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                        {topic.topic}
                        </p>
                        <p className="text-xs text-white/40 mt-0.5">{topic.posts} posts</p>
                    </div>
                ))}
            </div>
            <button className="mt-4 text-xs text-white/50 hover:text-white transition-colors">
            Show more →
            </button>
        </div>
    )
}
