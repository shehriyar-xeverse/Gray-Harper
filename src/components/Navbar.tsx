import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ASSETS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50 select-text">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO SECTION */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-zinc-850 flex items-center justify-center bg-black">
            <img 
              src={ASSETS.monogram} 
              alt="Gray Harper Logo Monogram" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-lg tracking-wider text-zinc-100 font-semibold group-hover:text-pink-500 transition-colors duration-300">
              GRAY HARPER
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-zinc-400">
              FLORAL STUDIO
            </span>
          </div>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1 text-xs xl:text-sm tracking-widest uppercase font-medium transition-colors duration-300 cursor-pointer ${
                activePage === item.id 
                  ? 'text-pink-500 font-semibold' 
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <motion.span 
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"
                />
              )}
            </button>
          ))}
        </nav>

        {/* INQUIRY CTA BUTTON (DESKTOP) */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold border border-purple-500/30 text-zinc-100 bg-purple-950/20 hover:bg-purple-900/30 hover:border-pink-500/50 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Consultation</span>
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-400 hover:text-zinc-100 cursor-pointer focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-pink-500" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN SCREEN - slides from top */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-0 right-0 z-30 bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-900 flex flex-col p-8 lg:hidden shadow-2xl shadow-purple-950/50 select-text"
          >
            <div className="flex flex-col gap-6 items-left">
              {menuItems.map((item, index) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg tracking-widest uppercase font-serif py-1 flex items-center justify-between cursor-pointer ${
                    activePage === item.id ? 'text-pink-500 font-semibold' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {activePage === item.id && <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />}
                </motion.button>
              ))}

              <div className="w-full h-[1px] bg-zinc-900 my-2" />

              {/* Inquiry Direct Link on mobile */}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm uppercase tracking-widest font-semibold bg-gradient-to-r from-purple-900 to-pink-900 text-white cursor-pointer hover:from-purple-800 hover:to-pink-800 transition-all font-display"
              >
                <Sparkles className="w-4 h-4 text-pink-300" />
                <span>Submit Inquiry</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
