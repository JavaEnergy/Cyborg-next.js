'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = ({ className }) => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Helper to create language-specific links
  const createLink = (path) => {
    return `/${i18n.language}${path}`;
  };

  return (
    <footer className={`site-footer ${className || ''}`}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t('footer.company', 'Company')}</h3>
          <ul>
            <li>
              <Link href={createLink('/about-us')}>
                {t('footer.aboutUs', 'About Us')}
              </Link>
            </li>
            <li>
              <Link href={createLink('/contact-us')}>
                {t('footer.contactUs', 'Contact Us')}
              </Link>
            </li>
            <li>
              <Link href={createLink('/legal')}>
                {t('footer.legal', 'Legal')}
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>{t('footer.services', 'Services')}</h3>
          <ul>
            <li>
              <Link href={createLink('/it-consulting')}>
                {t('footer.itConsulting', 'IT Consulting')}
              </Link>
            </li>
            <li>
              <Link href={createLink('/web-development')}>
                {t('footer.webDevelopment', 'Web Development')}
              </Link>
            </li>
            <li>
              <Link href={createLink('/zoho-consulting')}>
                {t('footer.zohoConsulting', 'Zoho Consulting')}
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section contact-info">
          <h3>{t('footer.contactInfo', 'Contact Info')}</h3>
          <address>
            Cyborg IT Technology<br />
            Email: info@cyborg-it.de<br />
            Phone: +49 123 456789
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Cyborg IT Technology. {t('footer.rights', 'All rights reserved.')}</p>
      </div>
    </footer>
  );
};

export default Footer; 