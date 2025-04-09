'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import deTranslations from './locales/de.json';

// Language resources
const resources = {
  en: {
    translation: enTranslations,
  },
  de: {
    translation: deTranslations,
  },
};

// Configure i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources,
    fallbackLng: 'de', // Default language
    defaultNS: 'translation',
    
    // Common i18next options
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // React i18next special options
    react: {
      useSuspense: false,
    },
  });

export default i18n;

// Example for a dynamic page
export async function generateMetadata({ params }) {
  // Fetch data based on params
  const data = await fetchData(params.id);
  
  return {
    title: data.title,
    description: data.description,
    // ... other metadata
  };
}

// In your component
import useEnhancedScrollSpy from '@/hooks/useEnhancedScrollSpy';

function MyPage() {
  // Define sections to track
  const sections = ['about', 'services', 'portfolio', 'contact'];
  
  // Get the active section
  const activeSection = useEnhancedScrollSpy(sections);
  
  return (
    <div>
      <nav>
        {sections.map(section => (
          <a 
            key={section} 
            href={`#${section}`}
            className={activeSection === section ? 'active' : ''}
          >
            {section}
          </a>
        ))}
      </nav>
      
      {/* Your sections with matching IDs */}
      <section id="about">...</section>
      <section id="services">...</section>
      {/* etc. */}
    </div>
  );
}
