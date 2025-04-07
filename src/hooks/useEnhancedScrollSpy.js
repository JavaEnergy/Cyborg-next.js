'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Enhanced scroll spy hook for Next.js
 * 
 * @typedef {Object} ScrollSpyOptions
 * @property {number} [threshold=0.6] - Intersection threshold (0-1)
 * @property {string} [rootMargin='0px'] - Root margin for the observer
 * @property {boolean} [smoothScroll=true] - Whether to use smooth scrolling
 */

/**
 * Enhanced scroll spy hook for Next.js
 * 
 * This hook observes sections with the provided IDs and updates the URL hash
 * when a section comes into view. It also provides the active section ID.
 * 
 * @param {string[]} sectionIds - Array of section IDs to observe
 * @param {ScrollSpyOptions} [options] - Configuration options
 * @returns {string} - The ID of the currently active section
 */
const useEnhancedScrollSpy = (
  sectionIds, 
  options = { threshold: 0.6, rootMargin: '0px', smoothScroll: true }
) => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Skip during SSR
    if (typeof window === 'undefined') return;
    
    const { threshold, rootMargin, smoothScroll } = options;
    
    const observerOptions = {
      root: null,
      rootMargin,
      threshold,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newActiveId = entry.target.id;
          setActiveId(newActiveId);
          
          const newHash = `#${newActiveId}`;
          if (window.location.hash !== newHash) {
            // Update the URL hash without triggering navigation
            window.history.replaceState(
              null, 
              '', 
              `${pathname}${newHash}`
            );
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Check if there's a hash in the URL on initial load
    // and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ 
          behavior: smoothScroll ? 'smooth' : 'auto'
        });
        setActiveId(id);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, pathname, options]);

  return activeId;
};

export default useEnhancedScrollSpy; 