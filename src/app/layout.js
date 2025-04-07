'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import { logEvent } from '@/firebase';
import { reportWebVitals } from '@/utils/web-vitals';
import './globals.css';
import './i18n';

export const metadata = {
  title: 'Cyborg IT Technology',
  description: 'High-quality IT solutions, consulting, and web development services.',
  openGraph: {
    title: 'Cyborg IT Technology',
    description: 'High-quality IT solutions, consulting, and web development services.',
    url: 'https://cyborg-it.de/de',
    siteName: 'Cyborg IT Technology',
    images: [
      {
        url: 'https://cyborg-it.de/assets/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cyborg-it.de/de',
  }
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/assets/images/logo/Cyborg-logo 11-11.png" type="image/x-icon" />
      </head>
      <body>
        <Header className="exclude-spider" />
        <main>{children}</main>
        <Footer className="exclude-spider" />
        
        {/* Cookie Consent Banner */}
        <CookieConsent
          location="bottom"
          buttonText={t('cookieConsent.button')}
          cookieName="cyborgCookieConsent"
          className="cookie-consent"
          buttonClasses="cookie-consent-button"
          expires={150}
        >
          <span className="cookie-message">
            {t('cookieConsent.message')}{' '}
            <a href={`/${i18n.language}/legal`} className="cookie-learn-more">
              {t('cookieConsent.learnMore')}
            </a>
          </span>
        </CookieConsent>
      </body>
    </html>
  );
} 