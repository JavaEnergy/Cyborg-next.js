'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import './globals.css';
import './i18n';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, params }) {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const headerRef = useRef(null);

  useEffect(() => {
    // Get language from URL path
    const lang = pathname.split('/')[1] || 'en';
    i18n.changeLanguage(lang);
  }, [pathname, i18n]);

  return (
    <html lang={params.lang || 'en'}>
      <body className={inter.className}>
        <Header ref={headerRef} />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
} 