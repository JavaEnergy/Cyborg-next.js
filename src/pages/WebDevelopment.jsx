'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function WebDevelopment() {
  const { t } = useTranslation();
  
  return (
    <div className="web-development-container">
      <h1>{t('webDevelopment.title', 'Web Development')}</h1>
      
      {/* Your web development content will go here */}
      {/* This is a placeholder - replace with your actual content */}
      <div className="web-development-content">
        <section>
          <h2>{t('webDevelopment.services.title', 'Our Web Development Services')}</h2>
          <p>{t('webDevelopment.services.description', 'We create modern, responsive websites and web applications.')}</p>
        </section>
      </div>
    </div>
  );
} 