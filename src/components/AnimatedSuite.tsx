import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin only once
gsap.registerPlugin(ScrollTrigger);

interface AnimatedSuiteProps {
  activePage: string;
}

export const AnimatedSuite: React.FC<AnimatedSuiteProps> = ({ activePage }) => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  // 1. DYNAMIC CURSOR PERFORMANCE POSITION TRACK & HOVER DELEGATION
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Clean GSAP tweening for absolute smooth dragging cursor responsiveness
      if (cursorInnerRef.current) {
        gsap.to(cursorInnerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.08,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }

      if (cursorOuterRef.current) {
        gsap.to(cursorOuterRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.28,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    };

    // Tracking hover overrides across the entire page layout
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('.tilt-card') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isInteractive) {
        setIsHovered(true);
        if (cursorOuterRef.current) {
          gsap.to(cursorOuterRef.current, {
            scale: 1.6,
            borderColor: '#ec4899', // pink-500 hover boundary accent
            rotate: 180,
            duration: 0.4,
            ease: 'back.out(1.5)',
            overwrite: 'auto',
          });
        }
        if (cursorInnerRef.current) {
          gsap.to(cursorInnerRef.current, {
            scale: 0.5,
            backgroundColor: '#a855f7', // purple-500 anchor point
            duration: 0.3,
            overwrite: 'auto',
          });
        }
      } else {
        setIsHovered(false);
        if (cursorOuterRef.current) {
          gsap.to(cursorOuterRef.current, {
            scale: 1,
            borderColor: 'rgba(236,72,153,0.35)',
            rotate: 0,
            duration: 0.4,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
        if (cursorInnerRef.current) {
          gsap.to(cursorInnerRef.current, {
            scale: 1,
            backgroundColor: '#ec4899',
            duration: 0.3,
            overwrite: 'auto',
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // 2. 3D CARD TILT ROTATION DELEGATION DETECTOR
  useEffect(() => {
    const handleCardMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest('.tilt-card') as HTMLElement;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Restrain the rotational tilt degree cleanly
      const rotateX = ((centerY - y) / centerY) * 12; // tilt max 12 deg
      const rotateY = ((x - centerX) / centerX) * 12;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1200,
        boxShadow: '0 25px 60px -15px rgba(168, 85, 247, 0.25)', // glowing purple hover shadow
        borderColor: 'rgba(236, 72, 153, 0.4)',
        y: -4,
        duration: 0.4,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    const handleCardLeave = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest('.tilt-card') as HTMLElement;
      if (!card) return;

      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        boxShadow: '0 10px 30px -15px rgba(0,0,0,0.7)',
        borderColor: 'rgba(63, 63, 70, 0.2)',
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    document.addEventListener('mousemove', handleCardMove);
    document.addEventListener('mouseout', (e) => {
      const toElement = e.relatedTarget as HTMLElement;
      if (!toElement || !toElement.closest('.tilt-card')) {
        handleCardLeave(e);
      }
    });

    return () => {
      document.removeEventListener('mousemove', handleCardMove);
    };
  }, [activePage]);

  // 3. GSAP SYSTEM ON EVERY PAGE LOAD OR NAVIGATION
  useEffect(() => {
    // Kill any existing ScrollTrigger configurations to bypass conflicts
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Fades top navbar nicely on boot
    gsap.fromTo('header', 
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    );

    // Dynamic Top Progress Bar Linked Scroll trigger
    gsap.fromTo('#scroll-progress-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.1,
        }
      }
    );

    // Multi-page layout structural scrolling and parallax scaling handlers
    setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        // Skip hero overlays on homepage
        if (section.classList.contains('no-trigger')) return;

        // Apply slide & scale staggered triggers to standard sections
        gsap.fromTo(section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              toggleActions: 'play none none none',
            }
          }
        );

        // Stagger visual text elements inside sections
        const animateItems = section.querySelectorAll('h1, h2, h3, .animate-text, p.font-light');
        if (animateItems.length > 0) {
          gsap.fromTo(animateItems,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none',
              }
            }
          );
        }

        // Animate images zoom in scales inside sections
        const imgs = section.querySelectorAll('img');
        imgs.forEach((img) => {
          // Add overflow-hidden and standard perspective bounds to parent
          if (img.parentElement) {
            img.parentElement.style.overflow = 'hidden';
          }
          gsap.fromTo(img,
            { scale: 1.2, filter: 'blur(3px)' },
            {
              scale: 1,
              filter: 'blur(0px)',
              duration: 1.35,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: img,
                start: 'top 92%',
                toggleActions: 'play none none none',
              }
            }
          );
        });

        // Background Parallax for gorgeous movement
        const parallaxContainers = section.querySelectorAll('.parallax-holder');
        parallaxContainers.forEach((holder) => {
          const innerImage = holder.querySelector('img');
          if (innerImage) {
            gsap.to(innerImage, {
              yPercent: 12,
              ease: 'none',
              scrollTrigger: {
                trigger: holder,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              }
            });
          }
        });
      });
    }, 150);

  }, [activePage]);

  return (
    <>
      {/* 🔟 TOP LEVEL SCROLL PROGRESS INDICATOR */}
      <div 
        id="scroll-progress-line" 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-rose-450 z-50 origin-left w-full pointer-events-none"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* 9️⃣ CUSTOM LUXURIOUS FLORAL-THEMED TRAILING CURSOR */}
      <div className="pointer-events-none cursor-custom-container">
        {/* Trailing Outer Ring Custom geometric single lines bloom template */}
        <div 
          ref={cursorOuterRef}
          className="fixed top-0 left-0 w-11 h-11 -mt-5.5 -ml-5.5 rounded-full border border-pink-500/35 flex items-center justify-center z-[9999] pointer-events-none"
          style={{ willChange: 'transform' }}
        >
          {/* Detailed subtle floral rotating geometry inside trailing shell */}
          <svg 
            className={`w-7 h-7 text-pink-500/80 ${isHovered ? 'animate-spin' : 'animate-spin-slow'}`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.2"
            style={{ animationDuration: isHovered ? '3s' : '9s' }}
          >
            {/* Elegant 4-leaf floral symmetrical vectors */}
            <path d="M12 2a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0V4a2 2 0 0 1 2-2z" />
            <path d="M12 14a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 2-2z" />
            <path d="M4 12a2 2 0 0 1 2-2h4a2 2 0 0 1 0 4H6a2 2 0 0 1-2-2z" />
            <path d="M14 12a2 2 0 0 1 2-2h4a2 2 0 0 1 0 4h-4a2 2 0 0 1-2-2z" />
            <circle cx="12" cy="12" r="1.5" className="fill-purple-500" />
          </svg>
        </div>

        {/* Small focused core Dot */}
        <div 
          ref={cursorInnerRef}
          className="fixed top-0 left-0 w-2.5 h-2.5 -mt-1.25 -ml-1.25 bg-pink-500 rounded-full z-[9999] pointer-events-none"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Global CSS Injecting to hide default mouse arrow exclusively on devices supporting hover */}
      <style>{`
        @media (hover: hover) {
          body, a, button, input, textarea, select, [role="button"], .tilt-card {
            cursor: none !important;
          }
          .cursor-custom-container {
            display: block !important;
          }
        }
        @media (hover: none) {
          .cursor-custom-container {
            display: none !important;
          }
        }
        .animate-spin-slow {
          animation: spin 9s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};
export default AnimatedSuite;
