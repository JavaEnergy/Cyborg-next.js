'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();
  
  return (
    <div className="contact-us-container">
      <h1>{t('contactUs.title', 'Contact Us')}</h1>
      
      {/* Your contact form will go here */}
      {/* This is a placeholder - replace with your actual content */}
      <div className="contact-us-content">
        <section>
          <h2>{t('contactUs.form.title', 'Get in Touch')}</h2>
          <p>{t('contactUs.form.description', 'Fill out the form below and we will get back to you soon.')}</p>
          
          {/* Placeholder for your contact form */}
          <div className="contact-form">
            <p>Contact form placeholder</p>
          </div>
        </section>
      </div>
    </div>
  );
} 