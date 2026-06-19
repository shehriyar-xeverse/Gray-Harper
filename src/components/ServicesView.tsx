import React from 'react';
import { SERVICES, ServiceItem } from '../data';
import { RunningBorderCard } from './RunningBorderCard';
import { Sparkles, Check, DollarSign, Calendar, ArrowRight } from 'lucide-react';

interface ServicesViewProps {
  onHireNow: (serviceTitle: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onHireNow }) => {
  // Separate full service from additional
  const fullService = SERVICES[0];
  const additionalFilters = SERVICES.slice(1);

  return (
    <div className="pt-24 select-text">
      {/* HEADER SECTION */}
      <section className="bg-black py-16 px-6 border-b border-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 font-mono block mb-3">
            Tailored Experiences
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-zinc-100 tracking-tight leading-none mb-6">
            Bespoke Services
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            From complete atmospheric wedding planning to standalone architectural installations, our processes are custom designed to elevate the standard of temporary events.
          </p>
        </div>
      </section>

      {/* 2. FULL SERVICE WEDDING DESIGN HIGHLIGHT (LARGE LAYOUT) */}
      <section className="bg-zinc-950 py-24 px-6 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono block mb-3">
            Our Flagship Offer
          </span>
          
          <RunningBorderCard className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-zinc-950 select-text">
              {/* Image side */}
              <div className="lg:col-span-5 h-[300px] lg:h-auto min-h-[300px] relative bg-zinc-900">
                <img 
                  src={fullService.image} 
                  alt={fullService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-transparent to-transparent pointer-events-none" />
                
                {/* Budget badge */}
                <div className="absolute top-4 left-4 bg-zinc-950/90 border border-zinc-850 rounded-lg p-3 backdrop-blur-sm flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-pink-500" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-200 font-semibold">{fullService.price}</span>
                </div>
              </div>

              {/* Text details side */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-pink-500 text-xs font-semibold uppercase tracking-widest mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Complete Creative Direction</span>
                  </div>
                  
                  <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 tracking-tight leading-tight mb-4">
                    {fullService.title}
                  </h2>
                  
                  <p className="text-zinc-300 text-sm font-light leading-relaxed mb-8">
                    {fullService.description}
                  </p>

                  <div className="w-12 h-[1px] bg-zinc-800 mb-8" />

                  {/* Bullet features */}
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block font-semibold">Included deliverables:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {fullService.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="text-xs text-zinc-400 font-light max-w-sm">
                    Pricing includes personalized moodboards, scaled architectural mockups, and on-site setup.
                  </div>
                  <button
                    onClick={() => onHireNow(fullService.title)}
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-purple-900 to-pink-905 text-white hover:from-purple-800 hover:to-pink-850 transition-all cursor-pointer group shadow-lg shadow-purple-950/20"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </RunningBorderCard>
        </div>
      </section>

      {/* 3. ADDITIONAL PREMIUM SERVICES (GRID) */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto select-text">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono block mb-3">
              Specialist Retainers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 tracking-tight">
              Bespoke Studio Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFilters.map((svc) => (
              <RunningBorderCard key={svc.id}>
                <div className="bg-zinc-950 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[380px] select-text">
                  <div>
                    <div className="aspect-[16/9] w-full rounded-lg overflow-hidden mb-6 bg-zinc-900">
                      <img 
                        src={svc.image} 
                        alt={svc.title}
                        className="w-full h-full object-cover grayscale-20"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <h3 className="font-serif text-xl text-zinc-100 tracking-tight leading-snug mb-3">
                      {svc.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    <div className="w-10 h-[1px] bg-zinc-900 mb-6" />

                    <ul className="space-y-2 mb-8">
                      {svc.details.map((dt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                          <Check className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                          <span>{dt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-4">
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-pink-500 uppercase">
                      {svc.price}
                    </span>
                    <button
                      onClick={() => onHireNow(svc.title)}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest hover-color-shimmer border border-zinc-800 text-zinc-200 hover:text-white transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 group/hire"
                    >
                      <span>Hire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-pink-400 group-hover/hire:translate-x-1 transition-transform" />
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
export default ServicesView;
