import React, { useState } from 'react';
import { TESTIMONIALS, TestimonialItem } from '../data';
import { RunningBorderCard } from './RunningBorderCard';
import { Quote, Sparkles, Star, MapPin } from 'lucide-react';

export const TestimonialsView: React.FC = () => {
  const [filterRole, setFilterRole] = useState<string>('all');

  // Dynamic filter lists
  const filteredReviews = filterRole === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(review => {
        if (filterRole === 'bride') return review.role.toLowerCase().includes('bride') || review.role.toLowerCase().includes('groom');
        if (filterRole === 'planner') return review.role.toLowerCase().includes('planner') || review.role.toLowerCase().includes('event');
        if (filterRole === 'curator') return review.role.toLowerCase().includes('director') || review.role.toLowerCase().includes('modern');
        return true;
      });

  return (
    <div className="pt-24 select-text">
      {/* HEADER SECTION */}
      <section className="bg-black py-16 px-6 border-b border-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 font-mono block mb-3">
            Client Words & Reverie
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-zinc-100 tracking-tight leading-none mb-6">
            Praise & Reviews
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Discover the stories and feedback of wedding planners, mothers, and couples who have partnered with us to transform standard venues into dramatic fine art atmospheres.
          </p>
        </div>
      </section>

      {/* REVIEWS GRID AND FILTERS */}
      <section className="bg-zinc-950 py-24 px-6 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {/* Filtering buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mr-2 block w-full text-center md:w-auto md:text-left">
              Filter feedback:
            </span>
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'bride', label: 'Couples & Parents' },
              { id: 'planner', label: 'Event Planners' },
              { id: 'curator', label: 'Museum Directors' }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setFilterRole(btn.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold border transition-all cursor-pointer ${
                  filterRole === btn.id 
                    ? 'border-pink-500 text-pink-500 bg-pink-500/5 font-bold' 
                    : 'border-zinc-850 hover:border-zinc-700 text-zinc-400 hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Praise grid (Masonry fallback) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredReviews.map((review) => (
              <RunningBorderCard key={review.id} className="min-h-[280px]">
                <div className="bg-zinc-950 p-8 flex flex-col justify-between h-full select-text">
                  <div>
                    {/* Top block */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1.5 text-pink-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-purple-600/15" />
                    </div>

                    <p className="font-serif text-sm sm:text-base text-zinc-300 italic font-light leading-relaxed mb-6">
                      “{review.quote}”
                    </p>
                  </div>

                  {/* Client card block */}
                  <div className="border-t border-zinc-900/60 pt-6 flex items-center gap-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full border border-zinc-800 object-cover grayscale-40"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-sm font-semibold text-zinc-100 block">{review.name}</span>
                      <span className="text-xs text-zinc-500 font-mono tracking-wide mt-0.5 block">{review.role}</span>
                      <div className="flex items-center gap-1 mt-1.5 text-[10px] font-mono uppercase tracking-widest text-pink-500">
                        <MapPin className="w-3 h-3 text-pink-500 shrink-0" />
                        <span>{review.location}</span>
                      </div>
                    </div>
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
export default TestimonialsView;
