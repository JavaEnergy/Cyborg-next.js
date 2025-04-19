'use client';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CookieConsent from 'react-cookie-consent';
import { logEvent } from '@/firebase';
import { reportWebVitals } from '@/utils/web-vitals';
import '../../i18n';

export default function LangLayout({ children, params }) {
  const { t, i18n } = useTranslation();
  const routeLang = params?.lang;

  // Update language from path
  useEffect(() => {
    if (routeLang && (routeLang === 'en' || routeLang === 'de')) {
      i18n.changeLanguage(routeLang);
      document.documentElement.lang = routeLang;
    }
  }, [routeLang, i18n]);

  // Log web vitals and page view events
  useEffect(() => {
    if (typeof window !== 'undefined') {
      reportWebVitals(metric => {
        const { name, value } = metric;
        logEvent('web_vitals', {
          metric_name: name,
          metric_value: value,
          url: window.location.href,
        });
      });

      logEvent('page_view', {
        page_path: window.location.pathname,
        page_title: document.title || 'No Title',
        language: i18n.language,
      });
    }
  }, [i18n.language]);

  return (
    <>
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
    </>
  );
}
