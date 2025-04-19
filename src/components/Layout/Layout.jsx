'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/app/globals.css';
import '@/app/i18n';
import './Layout.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const headerRef = useRef(null);
  // Get language from URL path
  const currentLang = pathname.split('/')[1] || 'en';

  useEffect(() => {
    // Get language from URL path
    const lang = pathname.split('/')[1] || 'en';
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [pathname, i18n]);

  return (
    <div className={inter.className}>
      <Header ref={headerRef} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
} 