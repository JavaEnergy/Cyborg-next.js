'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Legal() {
  const { t } = useTranslation();
  
  return (
    <div className="legal-container">
      <h1>{t('legal.title', 'Legal Information')}</h1>
      
      {/* Your legal content will go here */}
      {/* This is a placeholder - replace with your actual content */}
      <div className="legal-content">
        <section>
          <h2>{t('legal.privacy.title', 'Privacy Policy')}</h2>
          <p>{t('legal.privacy.description', 'Our privacy policy details how we collect and process your data.')}</p>
        </section>
        
        <section>
          <h2>{t('legal.terms.title', 'Terms of Service')}</h2>
          <p>{t('legal.terms.description', 'Our terms of service outline your rights and responsibilities.')}</p>
        </section>
      </div>
    </div>
  );
} 