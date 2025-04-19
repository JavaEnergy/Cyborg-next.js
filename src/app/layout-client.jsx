'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CookieConsent from 'react-cookie-consent';
import '@/i18n';

export default function RootLayoutClient({ children, params }) {
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
    <HelmetProvider>
      <Header ref={headerRef} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
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
    </HelmetProvider>
  );
} 