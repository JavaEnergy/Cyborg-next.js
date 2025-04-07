'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ZohoConsulting() {
  const { t } = useTranslation();
  
  return (
    <div className="zoho-consulting-container">
      <h1>{t('zohoConsulting.title', 'Zoho Consulting')}</h1>
      
      {/* Your Zoho consulting content will go here */}
      {/* This is a placeholder - replace with your actual content */}
      <div className="zoho-consulting-content">
        <section>
          <h2>{t('zohoConsulting.services.title', 'Our Zoho Consulting Services')}</h2>
          <p>{t('zohoConsulting.services.description', 'We provide expert Zoho CRM implementation and customization.')}</p>
        </section>
      </div>
    </div>
  );
} 