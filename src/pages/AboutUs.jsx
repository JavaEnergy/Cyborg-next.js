'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();
  
  return (
    <div className="about-us-container">
      <h1>{t('aboutUs.title', 'About Us')}</h1>
      
      {/* Your about us content will go here */}
      {/* This is a placeholder - replace with your actual content */}
      <div className="about-us-content">
        <section>
          <h2>{t('aboutUs.mission.title', 'Our Mission')}</h2>
          <p>{t('aboutUs.mission.description', 'Our mission is to provide high-quality IT solutions.')}</p>
        </section>
      </div>
    </div>
  );
} 