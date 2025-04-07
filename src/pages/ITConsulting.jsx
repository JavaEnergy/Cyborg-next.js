'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ITConsulting() {
  const { t } = useTranslation();
  
  return (
    <div className="it-consulting-container">
      <h1>{t('itConsulting.title', 'IT Consulting')}</h1>
      
      {/* Your IT consulting content will go here */}
      {/* This is a placeholder - replace with your actual content */}
      <div className="it-consulting-content">
        <section>
          <h2>{t('itConsulting.services.title', 'Our IT Consulting Services')}</h2>
          <p>{t('itConsulting.services.description', 'We offer comprehensive IT consulting services.')}</p>
        </section>
      </div>
    </div>
  );
} 