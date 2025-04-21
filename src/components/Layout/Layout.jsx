'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '@/components/Footer/Footer';
import CookieConsent from 'react-cookie-consent';
import '@/i18n';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="layout-container">
      <div className="content-wrapper" style={{ 
        minHeight: 'calc(100vh - 80px)',
        paddingTop: '20px'
      }}>
        {children}
      </div>
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
    </div>
  );
};

export default Layout; 