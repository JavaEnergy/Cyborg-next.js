'use client';

import React from 'react';
import useEnhancedScrollSpy from '@/hooks/useEnhancedScrollSpy';
import './ScrollSpyExample.css';

/**
 * ScrollSpyExample component
 * 
 * @returns {JSX.Element} ScrollSpyExample component
 */
const ScrollSpyExample = () => {
  // Define section IDs to track
  const sectionIds = ['section1', 'section2', 'section3', 'section4'];
  
  // Use the enhanced scroll spy hook with custom options
  const activeSection = useEnhancedScrollSpy(sectionIds, {
    threshold: 0.5,
    rootMargin: '-10% 0px -50% 0px',
    smoothScroll: true
  });
  
  /**
   * Format section ID for display
   * 
   * @param {string} id - Section ID
   * @returns {string} Formatted section title
   */
  const formatSectionTitle = (id) => {
    return id
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .replace(/(\d+)/, ' $1');
  };
  
  return (
    <div className="scroll-spy-example">
      {/* Navigation based on scroll position */}
      <nav className="scroll-nav">
        <ul>
          {sectionIds.map((id) => (
            <li key={id}>
              <a 
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {formatSectionTitle(id)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Content sections */}
      <div className="scroll-content">
        {sectionIds.map((id) => (
          <section 
            key={id} 
            id={id} 
            className="content-section"
            aria-labelledby={`${id}-title`}
          >
            <h2 id={`${id}-title`}>{formatSectionTitle(id)}</h2>
            <p>This is the content for {formatSectionTitle(id).toLowerCase()}.</p>
            <div className="spacer"></div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ScrollSpyExample; 