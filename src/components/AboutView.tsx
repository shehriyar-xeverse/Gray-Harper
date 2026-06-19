import React from 'react';
import { ASSETS } from '../data';
import { Sparkles, GraduationCap, Compass, BookOpen, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutViewProps {
  onNavigate: (page: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 select-text">
      {/* 1. WELCOME HERO SECTION */}
      <section className="bg-black py-20 px-6 border-b border-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-500 font-mono block mb-3">
            Our Vision & Core Artistry
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-zinc-100 tracking-tight leading-none mb-6">
            Bespoke Botanical <span className="italic font-normal font-serif text-pink-500">Sculptures</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            We operate at the intersections of floral design, environmental styling, and event scale. Based in historic Savannah, Georgia, our atelier curates temporal gallery-quality visual events designed for discerning eyes.
          </p>
        </div>
      </section>

      {/* 2. THE PORTRAIT & MONOGRAM DOUBLE FINE ART GRID */}
      <section className="bg-zinc-950 py-24 px-6 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side: Andrea founder image */}
            <div className="flex flex-col items-center">
              <div className="relative group w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-900 shadow-xl shadow-purple-950/10">
                <img 
                  src={ASSETS.andrea} 
                  alt="Andrea Harper, Creative Director" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-10 font-serif text-xs text-zinc-400">
                  <span className="text-white text-base block font-serif">Andrea Harper</span>
                  <span>Photographed in our Savannah botanical studio context.</span>
                </div>
              </div>
              <span className="text-xs text-zinc-500 font-mono italic mt-4">Andrea Harper | DSS-April-2023-Faves-5 Reference</span>
            </div>

            {/* Right side: Monogram image and bio start */}
            <div className="flex flex-col items-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-800 bg-black flex items-center justify-center p-1">
                  <img 
                    src={ASSETS.monogram} 
                    alt="Gray Harper Luxury Monogram Emblem" 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-widest text-zinc-100 font-mono">GH MONOGRAM</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">Studio Emblem Reference</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 tracking-tight leading-tight mb-6">
                Redefining Contemporary Flora
              </h2>
              <p className="text-zinc-300 text-sm font-light leading-relaxed mb-4">
                Andrea Harper holds an MFA (Master of Fine Arts) from the prestigious Savannah College of Art & Design (SCAD). This graduate training didn’t teach her standard florist equations—it taught her how to perceive empty environments, manage heavy physical loads, analyze shadow play, and formulate custom, atmospheric color systems.
              </p>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Her design ethos respects the structural autonomy of organic stems. She avoids rigid Styrofoam bounds, choosing to curate flowing botanical sculptures using live copper wires, custom timber bases, and fresh water tubes to let blooms breathe in their natural, unbent profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE AUTOBIOGRAPHY SECTION */}
      <section className="bg-black py-24 px-6 border-b border-zinc-900/60">
        <div className="max-w-4xl mx-auto select-text">
          <div className="flex items-center gap-2 text-pink-500 uppercase text-xs tracking-widest font-semibold font-mono mb-4">
            <BookOpen className="w-4 h-4 text-pink-400" />
            <span>The Biographical Story</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 mb-8 tracking-tight">
            From Wild Private Gardens to Grand Gala Arches
          </h2>

          <div className="space-y-6 text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
            <p>
              Andrea’s relationship with flora began during childhood afternoons playing quietly in grandmother’s gardens under Georgia’s sweeping live oak canopies. She became fascinated early by botanical structures, learning how wild jasmine vines gripped old brick walls and how heavy hydrangeas bent gracefully after late summer rainstorms.
            </p>
            <p>
              This childhood fascination led her to study fine arts at SCAD, where she focused on three-dimensional sculpture. Following graduation, Andrea recognized that her true medium was floral. She founded <span className="text-pink-500 font-semibold font-serif">Gray Harper</span> to unify fine-art architectural aesthetics with high-fashion event botanical design.
            </p>

            <blockquote className="border-l-2 border-purple-500 pl-6 my-8 py-2 bg-zinc-900/20 italic text-zinc-100 font-serif">
              “I wanted to build an atelier that rejects standard commercial recipes. Every single client is a distinct creative canvas. We custom sketch and engineer our columns, ceiling hangers, and centerpieces to trace individual venue layouts and personal style.”
            </blockquote>

            <p>
              Today, Andrea and her team of senior designers operate as event artisans. We intentionally restrict our seasonal inquiries to ensure undivided meticulous focus on each bespoke experience. From romantic oceanfront estates in Sea Island to classical ballrooms, our work is defined by depth, fine textures, and dramatic theatricality.
            </p>
          </div>

          {/* Credentials board */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-zinc-900">
            <div className="p-5 border border-zinc-900 rounded-xl bg-zinc-950/40 text-left">
              <GraduationCap className="w-6 h-6 text-pink-500 mb-3" />
              <h4 className="text-zinc-200 font-serif text-sm font-semibold mb-1">MFA degree SCAD</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">Graduate visual arts training in spatial forms, color theory, and classical sculpture mechanics.</p>
            </div>
            <div className="p-5 border border-zinc-900 rounded-xl bg-zinc-950/40 text-left">
              <Compass className="w-6 h-6 text-purple-400 mb-3" />
              <h4 className="text-zinc-200 font-serif text-sm font-semibold mb-1">10+ Studio Years</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">Managing intricate high-budget event logistics and historic architecture requirements.</p>
            </div>
            <div className="p-5 border border-zinc-900 rounded-xl bg-zinc-950/40 text-left">
              <Quote className="w-6 h-6 text-zinc-400 mb-3" />
              <h4 className="text-zinc-200 font-serif text-sm font-semibold mb-1">Featured Editorial</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">Published in premium bridal showcases, style logs, and botanical fine-art journals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA GET IN TOUCH SECTION */}
      <section className="bg-zinc-950 py-24 px-6 text-center flex justify-center">
        <div className="max-w-2xl select-text">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono block mb-4">
            Curate your setting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 tracking-tight leading-tight mb-6">
            Feeling Inspired? Let’s Co-Create.
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8 max-w-lg mx-auto">
            Our bookings for late 2025 and 2026 are highly limited to guarantee premium masterly focus on each event. Submit an inquiry now to reserve your exclusive private consultation.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-purple-900 to-pink-900 text-white hover:from-purple-800 hover:to-pink-800 transition-all cursor-pointer shadow-lg shadow-purple-950/40 inline-flex items-center gap-2 group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
export default AboutView;
