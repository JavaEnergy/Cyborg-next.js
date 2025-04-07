'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="home-container">
      <h1>{t('home.title', 'Cyborg IT Technology')}</h1>
      <p>{t('home.subtitle', 'High-quality IT solutions for your business')}</p>
      
      {/* Your home page content will go here */}
      {/* This is a placeholder - replace with your actual content */}
      <div className="home-content">
        <section className="intro-section">
          <h2>{t('home.intro.title', 'Welcome to Cyborg IT')}</h2>
          <p>{t('home.intro.description', 'We provide exceptional IT services tailored to your needs.')}</p>
        </section>
      </div>
    </div>
  );
} 