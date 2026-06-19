import React from 'react';
import { ASSETS, PORTFOLIO, SERVICES, BLOG_POSTS } from '../data';
import { RunningBorderCard } from './RunningBorderCard';
import { ArrowRight, Sparkles, MapPin, Play, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onOpenProject: (projId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenProject }) => {
  // Get latest 3 blog posts
  const latestBlogs = BLOG_POSTS.slice(0, 3);
  // Get top 2 projects for Home highlight
  const highlightProjects = PORTFOLIO.slice(0, 2);

  return (
    <div className="select-text">
      {/* 1. HERO SECTION WITH VIDEO LOOP & FALLBACK */}
      <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Ambient Dark Video Loop - Fully visible overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.75] contrast-[1.05] scale-102"
          poster={ASSETS.heroBg}
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-blooming-flowers-in-time-lapse-40912-large.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Ambient glowing vignette rather than a dark mask */}
        <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent z-1 pointer-events-none" />

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center select-text">
          {/* Floral design mark sign */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-6 w-14 h-14 rounded-full border border-pink-500/40 flex items-center justify-center bg-black/70 shadow-2xl backdrop-blur-md"
          >
            <Sparkles className="w-5 h-5 text-pink-400" />
          </motion.div>

          {/* Premium clear text with rich text shadow for crystal absolute readability over complex flowers */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.95)" }}
          >
            Crafting Beauty <span className="italic font-normal font-serif text-pink-500 block sm:inline drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">With Flowers</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="text-white text-sm sm:text-base md:text-lg max-w-xl font-medium tracking-wide leading-relaxed mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] bg-black/35 py-2.5 px-6 rounded-full backdrop-blur-sm border border-white/5"
          >
            We curate beautiful, bespoke floral architecture, custom tabletop designs, and dramatic botanical installations for discerning clients across Georgia and global destinations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-purple-900 to-pink-900 text-white hover:from-purple-800 hover:to-pink-800 transition-all cursor-pointer shadow-lg shadow-purple-950/40 relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>View Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900/30 transition-all cursor-pointer"
            >
              Consult Andrea
            </button>
          </motion.div>
        </div>

        {/* Scroll helper */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-15 flex flex-col items-center gap-2 opacity-55 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-pink-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. BRAND METRIC MESSAGE STATEMENT */}
      <section className="relative bg-zinc-950 py-24 sm:py-32 px-6 border-b border-zinc-900/60 flex justify-center">
        <div className="max-w-4xl text-center select-text">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono block mb-4">
            Our Pure Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-zinc-100 tracking-tight leading-tight mb-8">
            “Nature’s Luxury, Tailored To Your Unique Style.”
          </h2>
          <div className="w-16 h-[1px] bg-pink-500/50 mx-auto mb-8" />
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            We believe that flowers are not simply decorations, they are theatrical medium of atmosphere and scale. Our designs draw directly from classical Renaissance paintings, focusing heavily on depth, dramatic shadow play, and custom compositions that reinforce the unique venue layout and style.
          </p>
        </div>
      </section>

      {/* 3. MEET ANDREA - FOUNDER BRIEF CARD */}
      <section className="bg-black py-24 sm:py-32 px-6 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Column for Founder Portrait image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-1 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
              <img
                src={ASSETS.andrea}
                alt="Andrea Harper, Founder & Creative Director"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Image Border Tag */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-zinc-950/90 border border-zinc-900 rounded-lg p-3 backdrop-blur-sm">
                <span className="font-serif text-white text-sm block">Andrea Harper</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-pink-400 block font-semibold mt-0.5">Founder & SCAD Graduate</span>
              </div>
            </div>
          </div>

          {/* Column for Autobiography summary text */}
          <div className="lg:col-span-7 flex flex-col items-start select-text">
            <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 font-mono mb-4">
              Behind the Artistry
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-zinc-100 tracking-tight leading-tight mb-6">
              Meet Andrea Harper
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-4">
              A graduate of the Savannah College of Art & Design (SCAD), Andrea Harper holds a Master of Fine Arts that infuses her floristry with rich spatial architecture, three-dimensional form, and classical color theory. 
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Andrea’s transition from childhood artist playing in private gardens to professional floral designer was driven by her love for monumental botanic architecture. Rather than relying on rigid commercial floristry formulas, she crafts organic flowing sculptures that highlight the natural, raw character of each stem.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-500 hover:text-white transition-colors cursor-pointer group hover-color-shimmer border border-zinc-900 px-6 py-3 rounded-full"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-pink-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES PREVIEW */}
      <section className="bg-zinc-950 py-24 sm:py-32 px-6 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16 select-text">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono block mb-4">
                What We Offer
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-zinc-100 tracking-tight">
                Our Fine Art Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-400 hover:text-white transition-all cursor-pointer group"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Quick grid card display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((svc) => (
              <RunningBorderCard key={svc.id}>
                <div className="h-full p-6 sm:p-8 flex flex-col justify-between select-text min-h-[320px]">
                  <div>
                    <h3 className="font-serif text-lg text-zinc-100 tracking-tight leading-snug mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                      {svc.description}
                    </p>
                  </div>
                  <div className="border-t border-zinc-900 pt-4 flex justify-between items-center text-[11px] font-semibold tracking-wider font-mono">
                    <span className="text-pink-500 uppercase">
                      {svc.price ? 'Editorial' : 'Luxury Scope'}
                    </span>
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-zinc-500 hover:text-zinc-100 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3 text-pink-500" />
                    </button>
                  </div>
                </div>
              </RunningBorderCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GUEST OF HONOR - TESTIMONIAL QUOTE HIGHLIGHT */}
      <section className="bg-black py-24 sm:py-32 px-6 border-b border-zinc-900/60 text-center flex justify-center">
        <div className="max-w-4xl select-text">
          <Quote className="w-10 h-10 text-purple-600/30 mx-auto mb-6" />
          <p className="font-serif text-xl sm:text-2xl text-zinc-300 italic leading-relaxed mb-8 max-w-3xl mx-auto">
            “Andrea is one of the most creative floral designers I have ever seen. She took our loose, vague colors and shaped it into a dark romantic canvas of orchids, sweet peas, and deep plum velvet that literally stopped our 200 guests in their tracks.”
          </p>
          <div className="w-12 h-[1px] bg-pink-500/40 mx-auto mb-6" />
          <span className="text-sm font-semibold text-zinc-100 block">Eleanor Vance</span>
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest mt-1 block">Mother of the Bride, Crane Cottage Wedding</span>
        </div>
      </section>

      {/* 6. ON THE BLOG PREVIEW */}
      <section className="bg-zinc-950 py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16 select-text">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 font-mono block mb-4">
                Sourcing Diary
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-zinc-100 tracking-tight">
                On the Blog
              </h2>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-400 hover:text-white transition-all cursor-pointer group"
            >
              <span>See all articles</span>
              <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post) => (
              <article 
                key={post.id} 
                className="bg-zinc-900/15 border border-zinc-900 rounded-xl overflow-hidden flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 hover:translate-y-[-4px] select-text"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-800 relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700 hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-zinc-950/90 border border-zinc-900 rounded px-2.5 py-1 text-[9px] uppercase tracking-widest text-pink-400 font-bold font-mono">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-mono text-zinc-500 tracking-widest block mb-2">{post.date}</span>
                    <h3 className="font-serif text-lg text-zinc-100 tracking-tight leading-snug mb-3 hover:text-pink-500 transition-colors pointer-events-auto">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button 
                    onClick={() => {
                      // Navigate to blog detail by propagating id or taking active post
                      onNavigate(`blog-detail-${post.id}`);
                    }}
                    className="text-xs font-semibold text-pink-500 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-pink-400 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeView;
