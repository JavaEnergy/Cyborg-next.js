'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { logEvent } from '@/firebase';
import { reportWebVitals } from '@/utils/web-vitals';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';
import './i18n';

// Metadata is now in metadata.js

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  
  // Update language from path
  useEffect(() => {
    const languageFromPath = pathname.startsWith('/en') ? 'en' : 'de';
    if (i18n.language !== languageFromPath) {
      i18n.changeLanguage(languageFromPath);
    }
  }, [pathname, i18n]);

  // Dynamically set the lang attribute
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Log web vitals and page view events
  useEffect(() => {
    // Report web vitals
    if (typeof window !== 'undefined') {
      reportWebVitals(metric => {
        const { name, value } = metric;
        logEvent('web_vitals', {
          metric_name: name,
          metric_value: value,
          url: window.location.href,
        });
      });

      // Log page view event
      logEvent('page_view', {
        page_path: pathname,
        page_title: document.title || 'No Title',
        language: i18n.language,
      });
    }
  }, [pathname, i18n.language]);

  return (
    <html lang={i18n.language}>
      <body>
        <Header ref={headerRef} />
        <main className="main-content">
          {children}
        </main>
        <Footer ref={footerRef} />
      </body>
    </html>
  );
} 