'use client';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HomePage from '../page';

export default function LangHomePage({ params }) {
  const { i18n } = useTranslation();
  
  // Ensure language is set correctly - handle params safely in useEffect
  useEffect(() => {
    const routeLang = params?.lang;
    if (routeLang && i18n.language !== routeLang && (routeLang === 'en' || routeLang === 'de')) {
      i18n.changeLanguage(routeLang);
    }
  }, [params, i18n]);

  // Render the HomePage component (which contains all the home page content)
  return <HomePage />;
}