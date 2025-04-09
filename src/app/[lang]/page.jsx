'use client';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HomePage from '../page';

export default function LangHomePage({ params }) {
  const { i18n } = useTranslation();
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const routeLang = unwrappedParams?.lang;
  
  // Ensure language is set correctly - now using unwrapped params
  useEffect(() => {
    if (routeLang && i18n.language !== routeLang && (routeLang === 'en' || routeLang === 'de')) {
      i18n.changeLanguage(routeLang);
    }
  }, [routeLang, i18n]);

  // Render the HomePage component (which contains all the home page content)
  return <HomePage />;
}