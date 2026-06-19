import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!item) return null;

  const handlePrev = () => {
    setActiveImgIndex((prev) => (prev === 0 ? item.gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImgIndex((prev) => (prev === item.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl h-[90vh] md:h-[85vh] bg-zinc-950/90 border border-zinc-900 rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-2xl shadow-purple-950/20"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 border border-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer hover:scale-115"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Leftside: Big Image Carousel */}
          <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[40vh] md:min-h-0">
            <img 
              src={item.gallery[activeImgIndex]} 
              alt={`${item.title} gallery image`}
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Visual gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Left and Right arrows */}
            {item.gallery.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 hover:text-white transition-all cursor-pointer hover:-translate-x-1"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 hover:text-white transition-all cursor-pointer hover:translate-x-1"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Carousel indicator dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {item.gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeImgIndex === idx ? 'bg-pink-500 w-6' : 'bg-zinc-600 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Rightside: Full Details and Story */}
          <div className="w-full md:w-[400px] bg-zinc-950 p-6 md:p-8 flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-zinc-900 select-text">
            <div>
              {/* Floral style metadata banner */}
              <div className="flex items-center gap-2 text-pink-500 text-xs font-semibold tracking-widest uppercase mb-3">
                <Sparkles className="w-3 h-3" />
                <span>{item.style}</span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-zinc-100 tracking-tight leading-tight mb-2">
                {item.title}
              </h3>

              <div className="flex items-center gap-1.5 text-zinc-400 text-sm mb-6">
                <MapPin className="w-4 h-4 text-purple-500 shrink-0" />
                <span>{item.location}</span>
              </div>

              <div className="w-12 h-[1px] bg-purple-500/50 mb-6" />

              <p className="text-zinc-300 text-base font-light leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Technical features / detail sheet */}
              <div className="border border-zinc-900 rounded-lg p-4 bg-zinc-900/20">
                <h4 className="text-xs font-semibold uppercase text-zinc-400 tracking-widest mb-2.5">Botanical Layout</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Bespoke layout curated personally by founder Andrea Harper. Focuses on moody, deep tones with high contrast accents.
                </p>
              </div>
            </div>

            {/* Gallery Thumbnail Strip */}
            <div className="mt-8 border-t border-zinc-900 pt-6">
              <span className="text-xs font-semibold text-zinc-500 tracking-wider block mb-3">SCENE SHOTS</span>
              <div className="grid grid-cols-4 gap-2">
                {item.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative aspect-square rounded-md overflow-hidden border cursor-pointer transition-all ${
                      activeImgIndex === idx ? 'border-pink-500 scale-95' : 'border-zinc-800 hover:border-zinc-600'
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt="" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default GalleryModal;
