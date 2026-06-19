import React from 'react';
import { Instagram, Facebook, Compass, Heart, ArrowUp, Star } from 'lucide-react';
import { ASSETS } from '../data';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const handleNavClick = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6 select-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand/Monogram column */}
          <div className="md:col-span-1 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={ASSETS.monogram} 
                alt="Gray Harper Monogram Logo" 
                className="w-12 h-12 rounded-full border border-zinc-800 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider text-zinc-100 font-semibold">
                  GRAY HARPER
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400">
                  FLORAL STUDIO
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-xs font-light leading-relaxed mt-2 max-w-sm">
              An award-winning editorial floral studio based in beautiful Savannah, Georgia. We curate atmospheric romantic flora installations and custom-tailored wedding designs worldwide.
            </p>
          </div>

          {/* Quick links Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 font-mono">
              The Studio
            </span>
            <div className="flex flex-col gap-2.5 text-sm">
              <button onClick={() => handleNavClick('home')} className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer luxury-link w-fit">
                Home Portfolio
              </button>
              <button onClick={() => handleNavClick('about')} className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer luxury-link w-fit">
                About our Story
              </button>
              <button onClick={() => handleNavClick('services')} className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer luxury-link w-fit">
                Aesthetic Services
              </button>
              <button onClick={() => handleNavClick('portfolio')} className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer luxury-link w-fit">
                Featured Galleries
              </button>
            </div>
          </div>

          {/* Curated Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono">
              Inspiration
            </span>
            <div className="flex flex-col gap-2.5 text-sm">
              <button onClick={() => handleNavClick('testimonials')} className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer luxury-link w-fit">
                Client Testimonials
              </button>
              <button onClick={() => handleNavClick('blog')} className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer luxury-link w-fit">
                Sourcing Diary & Blog
              </button>
              <button onClick={() => handleNavClick('contact')} className="text-zinc-400 hover:text-white transition-colors text-left cursor-pointer luxury-link w-fit">
                Inquire & Consultation
              </button>
            </div>
          </div>

          {/* Contacts info with map reference */}
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 font-mono">
              Studio Location
            </span>
            <p className="text-zinc-300 font-light leading-relaxed">
              Savannah, Georgia, US<br />
              <span className="text-xs text-zinc-500 font-mono">Serving Sea Island, St. Simons, & Destinations</span>
            </p>
            <p className="text-zinc-400 font-light text-xs mt-1">
              info@grayharper.com<br />
              +1 (912) 441-2098
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-3">
              <a href="#" aria-label="Instagram" className="p-2-rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 rounded-full transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2-rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 rounded-full transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Pinterest" className="p-2-rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 rounded-full transition-colors cursor-pointer flex items-center justify-center p-2">
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 items-center md:items-start text-xs text-zinc-500 font-light">
            <p>© {new Date().getFullYear()} Gray Harper LLC. Inspired by Savannah Luxury.</p>
            <p className="flex items-center gap-1.5 justify-center md:justify-start">
              <span>Made with dedication</span>
              <Heart className="w-3 h-3 text-pink-600 fill-pink-600" />
              <span>for fine-art event design.</span>
            </p>
          </div>

          {/* Scroll to Top button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-zinc-400 hover:text-white p-2.5 rounded-lg border border-zinc-900 hover:border-zinc-800 bg-zinc-950 transition-all cursor-pointer hover:scale-105"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5 text-pink-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
