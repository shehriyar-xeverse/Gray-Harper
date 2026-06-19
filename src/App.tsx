import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { PortfolioView } from './components/PortfolioView';
import { ServicesView } from './components/ServicesView';
import { TestimonialsView } from './components/TestimonialsView';
import { BlogView } from './components/BlogView';
import { ContactView } from './components/ContactView';
import { GalleryModal } from './components/GalleryModal';
import { AnimatedSuite } from './components/AnimatedSuite';
import { ASSETS, PortfolioItem } from './data';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('');
  const [initialBlogPostId, setInitialBlogPostId] = useState<string | null>(null);

  // Dynamic Page Tab updates (Add logo + site title dynamically)
  useEffect(() => {
    // 1. Update tab title dynamically based on active page
    const pageTitles: Record<string, string> = {
      home: 'Savannah Luxury Floral Studio & Event Design',
      about: 'About Andrea | Our Story & MFA Artistry',
      portfolio: 'Featured Event Galleries & Botanical Portfolios',
      services: 'Artistic Services & Bespoke Curation budgets',
      testimonials: 'Praise & Client Testimonials from Weddings',
      blog: 'The Sourcing Diary | Fine-Art Flower Logs',
      contact: 'Book a Consultation | Editorial Studio Inquiry',
    };

    const suffix = 'Gray Harper';
    const mainTitle = pageTitles[activePage] || 'Fine Art Floristry';
    document.title = `${suffix} — ${mainTitle}`;

    // 2. Set favicon shortcut elements dynamically pointing to our monogram
    const updateFavicon = () => {
      let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'shortcut icon';
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = ASSETS.monogram;
    };
    updateFavicon();

    // Prevent side scroll anomalies and force reset scroll instantly to top on page switches
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activePage]);

  // Intercepting blog direct navs
  const handlePageNavigation = (page: string) => {
    if (page.startsWith('blog-detail-')) {
      const postId = page.replace('blog-detail-', '');
      setInitialBlogPostId(postId);
      setActivePage('blog');
    } else {
      setActivePage(page);
      // Clear secondary selected states on direct page clicks
      setInitialBlogPostId(null);
    }
    // Clean prefilled contact queries unless going specifically there
    if (page !== 'contact') {
      setContactSubject('');
    }
  };

  // Navigating and prefilling custom consultation context from Services
  const handleHireNow = (serviceTitle: string) => {
    setContactSubject(`Inquiry: ${serviceTitle}`);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Opens gallery modal from card
  const handleOpenProject = (project: PortfolioItem) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 flex flex-col justify-between overflow-x-hidden relative">
      {/* Dynamic Background subtle grid overlays */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0c0c0e_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* Global GSAP Animation, progress bar, & cursor suite */}
      <AnimatedSuite activePage={activePage} />

      {/* PERSISTENT HEADER NAVBAR */}
      <Navbar activePage={activePage} setActivePage={handlePageNavigation} />

      {/* CORE VIEW WITH GSAP OR MOTION TRANSITION */}
      <main className="flex-1 w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {activePage === 'home' && (
              <HomeView 
                onNavigate={handlePageNavigation} 
                onOpenProject={(projId) => {
                  setActivePage('portfolio');
                  window.scrollTo({ top: 0 });
                }} 
              />
            )}
            {activePage === 'about' && (
              <AboutView onNavigate={handlePageNavigation} />
            )}
            {activePage === 'portfolio' && (
              <PortfolioView onOpenProject={handleOpenProject} />
            )}
            {activePage === 'services' && (
              <ServicesView onHireNow={handleHireNow} />
            )}
            {activePage === 'testimonials' && (
              <TestimonialsView />
            )}
            {activePage === 'blog' && (
              <BlogView 
                initialPostId={initialBlogPostId} 
                onClearInitialPost={() => setInitialBlogPostId(null)} 
              />
            )}
            {activePage === 'contact' && (
              <ContactView prefilledSubject={contactSubject} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* PERSISTENT LUXURY FOOTER */}
      <Footer setActivePage={handlePageNavigation} />

      {/* INTERACTIVE GALLERY LIGHTBOX DIALOG */}
      <GalleryModal 
        item={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
