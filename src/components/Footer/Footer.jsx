'use client';

import React, { useEffect, useState } from 'react';
import './Footer.css';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

const Footer = ({ className = '' }) => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('en');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  // Don't render anything until after hydration
  if (!hasMounted) {
    return null;
  }

  return (
    <footer className={`footer ${className} exclude-spider`}>
      <div className="footer-container">
        {/* Contact Information */}
        <div className="footer-section contact-info">
          <h3>{t('footer.contact_info')}</h3>
          <p>+995 597 01 13 09</p>
          <p>(+ WhatsApp, iMessage)</p>
          <br />
          <p>{t('footer.contactable_24_7')}</p>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3>{t('footer.company')}</h3>
          <ul>
            <li>
              <Link href={`/${currentLang}#services`}>
                {t('footer.company_services')}
              </Link>
            </li>
            <li>
              <Link href={`/${currentLang}/contact-us`}>
                {t('footer.company_contact_us')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h3>{t('footer.useful_links')}</h3>
          <ul>
            <li>
              <Link href={`/${currentLang}/about-us`}>
                {t('footer.useful_about_us')}
              </Link>
            </li>
            <li>
              <Link href={`/${currentLang}/legal`}>
                {t('footer.useful_legal')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social-links">
          <h3>{t('footer.social')}</h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/cyborg-it-l%C3%B6sungen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://wa.me/995597011309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="mailto:info@cyborg-it.de"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Cyborg Automation. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 