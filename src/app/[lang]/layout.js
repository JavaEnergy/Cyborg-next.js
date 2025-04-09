'use client';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';
import CookieConsent from 'react-cookie-consent';
import { logEvent } from '../../firebase';
import { reportWebVitals } from '../../firebase/reportWebVitals';
import '../../i18n';

export default function LangLayout({ children, params }) {
  const { t, i18n } = useTranslation();
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const routeLang = unwrappedParams?.lang;

  // Update language from path - now using unwrapped params
  useEffect(() => {
    const currentLang = i18n.language;
    
    // Only change language if routeLang is valid and different from current
    if (routeLang && currentLang !== routeLang && (routeLang === 'en' || routeLang === 'de')) {
      console.log(`Changing language from ${currentLang} to ${routeLang}`);
      i18n.changeLanguage(routeLang);
    }
  }, [routeLang, i18n]);

  // Dynamically set the lang attribute
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Log web vitals and page view events
  useEffect(() => {
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
      page_path: window.location.pathname,
      page_title: document.title || 'No Title',
      language: i18n.language,
    });
  }, [i18n.language]);

  return (
    <>
      <main>
        {children}
      </main>
      
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
