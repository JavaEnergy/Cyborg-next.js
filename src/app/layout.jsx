'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header/Header';
import CookieConsent from 'react-cookie-consent';
import './globals.css';
import '@/i18n';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, params }) {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const headerRef = useRef(null);

  useEffect(() => {
    const lang = pathname.split('/')[1] || 'en';
    if (lang === 'en' || lang === 'de') {
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
    }
  }, [pathname, i18n]);

  return (
    <html lang={params.lang || 'en'}>
      <head>
        <link rel="icon" href="/Cyborg-logo 11-11.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <HelmetProvider>
          <div className="app-container">
            <Header ref={headerRef} />
            <main className="main-content" style={{ marginTop: '80px' }}>
              {children}
            </main>
            <CookieConsent
              location="bottom"
              buttonText={t('cookieConsent.button')}
              cookieName="cyborgCookieConsent"
              style={{ background: '#2B373B' }}
              buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
              expires={150}
            >
              {t('cookieConsent.message')}
            </CookieConsent>
          </div>
        </HelmetProvider>
      </body>
    </html>
  );
} 