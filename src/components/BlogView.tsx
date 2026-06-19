import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, BlogPost } from '../data';
import { RunningBorderCard } from './RunningBorderCard';
import { ArrowLeft, ArrowRight, User, Calendar, Clock, Tag, Sparkles } from 'lucide-react';

interface BlogViewProps {
  initialPostId?: string | null;
  onClearInitialPost?: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ initialPostId, onClearInitialPost }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // If redirected from home, catch the initial blog ID; otherwise, back to directory lists
  useEffect(() => {
    if (initialPostId) {
      const matched = BLOG_POSTS.find(p => p.id === initialPostId);
      if (matched) {
        setSelectedPost(matched);
      }
    } else {
      setSelectedPost(null);
    }
  }, [initialPostId]);

  const handleBackToGrid = () => {
    setSelectedPost(null);
    if (onClearInitialPost) onClearInitialPost();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedPost) {
    // 1. RENDER BLOG ARTICLE DETAIL SCREEN
    return (
      <div className="pt-24 select-text">
        {/* Editorial banner back block */}
        <section className="bg-black border-b border-zinc-900 py-6 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button
              onClick={handleBackToGrid}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-400 hover:text-white cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-pink-500 group-hover:-translate-x-1.5 transition-transform" />
              <span>Back to Sourcing Diary</span>
            </button>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">ARTICLE LOG // COSC-300</span>
          </div>
        </section>

        {/* Big Editorial Content Canvas */}
        <section className="bg-zinc-950 py-16 px-6 min-h-[70vh]">
          <article className="max-w-4xl mx-auto">
            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs text-zinc-500 font-mono">
              <span className="bg-pink-500/10 border border-pink-500/20 text-pink-500 px-3 py-1 rounded-sm uppercase tracking-widest font-bold">
                {selectedPost.category}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>{selectedPost.date}</span>
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>{selectedPost.readTime}</span>
              </span>
            </div>

            {/* Title display */}
            <h1 className="font-serif text-3xl sm:text-5xl text-zinc-100 tracking-tight leading-tight mb-8">
              {selectedPost.title}
            </h1>

            {/* Large cover image with parallax zoom effect */}
            <div className="aspect-[21/9] w-full rounded-xl overflow-hidden mb-12 bg-zinc-900 border border-zinc-900/40">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Article central grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Author and tagging Column */}
              <div className="lg:col-span-3 flex flex-col gap-8 border-r border-zinc-900/40 pr-4">
                {/* Author profile */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-zinc-805 bg-zinc-900 flex items-center justify-center text-pink-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 block">AUTHOR</span>
                    <span className="text-xs font-semibold text-zinc-200 block">{selectedPost.author}</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-zinc-900" />

                {/* Tag pill boards */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">FLOW TAGS</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPost.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-1 text-[10px] font-mono uppercase bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded">
                        <Tag className="w-2.5 h-2.5 text-purple-500" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main reading text column with styled typography */}
              <div className="lg:col-span-9">
                <div className="font-sans text-zinc-300 text-base sm:text-lg font-light leading-relaxed space-y-6 max-w-2xl select-text">
                  <p className="text-zinc-100 font-normal leading-relaxed text-lg sm:text-xl border-l border-pink-500/40 pl-4 py-1">
                    {selectedPost.excerpt}
                  </p>
                  <div className="w-full h-[1px] bg-zinc-90 w-12 my-6" />
                  {/* Detailed paragraph blocks */}
                  <div className="text-zinc-300 font-light leading-relaxed prose prose-invert font-sans space-y-6">
                    <p>{selectedPost.content}</p>
                    <p>
                      At our Savannah boutique workshop, we believe executing these compositions requires total logistical clarity. Rather than viewing floristry as the placement of arbitrary decorations, we configure each flower block to communicate directly with the site's organic lighting. We pay exceptional attention to details—the curvature of a stem, the dramatic shadows it casts, and the spatial gaps between blooms that allow them to speak.
                    </p>
                    <p>
                      This meticulous curation model ensures your event is not simply dressed in florals, but entirely transformed into a temporal fine art gallery. Our team coordinates directly with luxury fabric mills and candle creators to design tablesscapes that function as cohesive creative environments.
                    </p>
                  </div>
                </div>

                {/* Back button bottom of the page */}
                <div className="mt-16 pt-8 border-t border-zinc-900 flex justify-between items-center">
                  <button
                    onClick={handleBackToGrid}
                    className="flex items-center gap-2 py-2.5 px-5 rounded-lg border border-zinc-900 hover:border-zinc-800 text-xs uppercase tracking-widest font-mono text-zinc-300 hover:text-white cursor-pointer"
                  >
                    <span>Back to Sourcing Diary</span>
                  </button>
                  <span className="font-serif text-sm italic text-zinc-500">Andrea Harper Portfolio Studio</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }

  // 2. RENDER THE PRIMARY BLOG DIRECTORY GRID (MINIMUM 8 CARDS)
  return (
    <div className="pt-24 select-text">
      {/* HEADER SECTION */}
      <section className="bg-black py-16 px-6 border-b border-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 font-mono block mb-3">
            Botanical Insights
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-zinc-100 tracking-tight leading-none mb-6">
            The Sourcing Diary
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Discover our thoughts on moody floral palettes, event architectural planning, tabletop styling guidelines, and stories behind our bespoke event designs.
          </p>
        </div>
      </section>

      {/* CORE BLOG DIRECTORY */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Aesthetic sub-header */}
          <div className="flex items-center gap-2 mb-12 text-xs font-mono text-zinc-500 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>DIARY LOG // {BLOG_POSTS.length} PUBLISHED ESSAYS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <RunningBorderCard key={post.id} className="min-h-[460px] flex flex-col justify-between">
                <div className="bg-zinc-950 h-full rounded-xl overflow-hidden flex flex-col justify-between select-text">
                  <div>
                    {/* Cover Wrap */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-90">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale-15"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Event tag */}
                      <div className="absolute bottom-3 left-3 bg-zinc-950/90 border border-zinc-900 rounded px-2.5 py-1 text-[9px] uppercase tracking-widest text-pink-400 font-bold font-mono">
                        {post.category}
                      </div>
                    </div>

                    {/* Text Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-purple-400" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-purple-400" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-lg text-zinc-100 tracking-tight leading-snug mb-3 hover:text-pink-500 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read CTA Button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleSelectPost(post)}
                      className="w-full py-3 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white transition-all text-xs font-semibold uppercase tracking-widest cursor-pointer flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-pink-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </RunningBorderCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogView;
