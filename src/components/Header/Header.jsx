'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import './Header.css';

const Header = ({ className }) => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  
  // Get current language
  const currentLang = i18n.language;
  
  // Helper to create language-specific links
  const createLink = (path) => {
    return `/${currentLang}${path}`;
  };
  
  // Toggle language
  const toggleLanguage = () => {
    const newLang = currentLang === 'de' ? 'en' : 'de';
    
    // Get current path without language prefix
    const pathWithoutLang = pathname.replace(/^\/(de|en)/, '');
    
    // Redirect to the same page but with new language
    window.location.href = `/${newLang}${pathWithoutLang}`;
  };

  return (
    <header className={`site-header ${className || ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link href={createLink('')}>
            <span>Cyborg IT</span>
          </Link>
        </div>
        
        <nav className="main-nav">
          <ul>
            <li>
              <Link href={createLink('/about-us')}>
                {t('nav.aboutUs', 'About Us')}
              </Link>
            </li>
            <li>
              <Link href={createLink('/it-consulting')}>
                {t('nav.itConsulting', 'IT Consulting')}
              </Link>
            </li>
            <li>
              <Link href={createLink('/web-development')}>
                {t('nav.webDevelopment', 'Web Development')}
              </Link>
            </li>
            <li>
              <Link href={createLink('/zoho-consulting')}>
                {t('nav.zohoConsulting', 'Zoho Consulting')}
              </Link>
            </li>
            <li>
              <Link href={createLink('/contact-us')}>
                {t('nav.contactUs', 'Contact Us')}
              </Link>
            </li>
          </ul>
        </nav>
        
        <button className="language-toggle" onClick={toggleLanguage}>
          {currentLang === 'de' ? 'EN' : 'DE'}
        </button>
      </div>
    </header>
  );
};

export default Header; 