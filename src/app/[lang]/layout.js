'use client';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { logEvent } from '@/firebase';
import { reportWebVitals } from '@/utils/web-vitals';
import Layout from '@/components/Layout/Layout';
import '../../i18n';
import { use } from 'react';

export default function LangLayout({ children, params }) {
  const { i18n } = useTranslation();
  const resolvedParams = use(params);
  const routeLang = resolvedParams?.lang;

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

  return <Layout>{children}</Layout>;
}
