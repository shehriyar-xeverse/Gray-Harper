import React from 'react';
import { PORTFOLIO, PortfolioItem } from '../data';
import { RunningBorderCard } from './RunningBorderCard';
import { MapPin, Eye, Sparkles } from 'lucide-react';

interface PortfolioViewProps {
  onOpenProject: (item: PortfolioItem) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onOpenProject }) => {
  return (
    <div className="pt-24 select-text">
      {/* HEADER HERO */}
      <section className="bg-black py-16 px-6 border-b border-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 font-mono block mb-3">
            Bespoke Event Showcases
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-zinc-100 tracking-tight leading-none mb-6">
            Featured Projects
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            A curated record of breathtaking weddings, luxury seasonal installations, and custom botanical tablescapes designed across Georgia's historic sea-island resorts and heritage venues.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Aesthetic stats header */}
          <div className="flex items-center gap-2 mb-10 text-xs font-mono text-zinc-500 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>EXHIBITION LOG: {PORTFOLIO.length} COMPLETED MASTERWORKS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((project) => (
              <RunningBorderCard key={project.id} className="min-h-[460px] flex flex-col">
                <div className="h-full flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-950 select-text">
                  {/* Image wrap with zoom hover */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 group">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-15 group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Style Tag info */}
                    <div className="absolute top-3 left-3 bg-zinc-950/90 border border-zinc-900 rounded px-2.5 py-1 text-[9px] uppercase tracking-widest text-purple-400 font-bold font-mono">
                      {project.style}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono tracking-wide mb-2.5">
                        <MapPin className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif text-xl text-zinc-100 tracking-tight leading-snug mb-3">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* View CTA Button */}
                    <button
                      onClick={() => onOpenProject(project)}
                      className="w-full py-3 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white transition-all text-xs font-semibold uppercase tracking-widest cursor-pointer flex items-center justify-center gap-2 group/btn"
                    >
                      <Eye className="w-3.5 h-3.5 text-pink-400 group-hover/btn:scale-110 transition-transform" />
                      <span>View Gallery</span>
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
export default PortfolioView;
