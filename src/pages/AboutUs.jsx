'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import HelmetManager from '../components/HelmetManager';
import { useLocation } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const location = useLocation();
  const contactRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const currentLang = i18n.language;
  const isGerman = currentLang === 'de';

  // Animation variants for framer-motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  useEffect(() => {
    window.dispatchEvent(new Event('page-loaded'));
  }, []);

  return (
    <Layout>
      <HelmetManager
        title={t('about_us.page_title')}
        description={t('about_us.page_description')}
        canonical={`https://cyborg-it.de/${i18n.language}/about-us`}
        alternateLanguages={[
          { lang: 'de', url: 'https://cyborg-it.de/de/about-us' },
          { lang: 'en', url: 'https://cyborg-it.de/en/about-us' },
        ]}
        openGraph={{
          title: t('about_us.page_title'),
          description: t('about_us.page_description'),
          image: 'https://cyborg-it.de/assets/Cyborg-og-image.jpg',
          url: `https://cyborg-it.de/${i18n.language}/about-us`,
          type: 'website',
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Cyborg IT",
          "url": "https://cyborg-it.de",
          "logo": "https://cyborg-it.de/assets/Cyborg-logo-9-09-DqmwUbnN.png",
          "sameAs": ["https://www.linkedin.com/company/cyborg-it-l%C3%B6sungen/"],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+995-598-70-79-79",
            "contactType": "Customer Service"
          }
        }}
      />

      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content-wrapper">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={isGerman ? 'de' : ''}>{t('about_us.hero_title')}</h1>
          </motion.div>
        </div>
      </div>

      {/* First Content Section */}
      <motion.section
        className="about-content-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <div className="about-content-container">
          <div className="about-image-content">
            <img
              src="/images/laptop.jpg"
              alt={t('about_us.image1_alt')}
              id="firstimg"
              loading="lazy"
              width="500"
              height="333"
            />
          </div>
          <div className="about-text-content">
            <h2>{t('about_us.about_title')}</h2>
            <p>{t('about_us.about_text')}</p>
            <p>{t('about_us.about_text2')}</p>
            <p>{t('about_us.about_text3')}</p>
          </div>
        </div>
      </motion.section>

      {/* Mission Title */}
      <motion.h2
        className="mission-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {t('about_us.mission_title')}
      </motion.h2>

      {/* Second Content Section */}
      <motion.section
        className="about-content-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <div className="about-content-container reverse">
          <div className="about-text-content">
            <p>{t('about_us.mission_text')}</p>
            <p>{t('about_us.mission_text2')}</p>
            <p>{t('about_us.mission_text3')}</p>
          </div>
          <div className="about-image-content">
            <img
              src="/images/hand.png"
              alt={t('about_us.image2_alt')}
              className="circle-image"
              loading="lazy"
              width="250"
              height="250"
            />
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="about-faq-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <h2>{t('about_us.faq_title')}</h2>
        <div className="about-faq-list">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div
              className={`about-faq-item ${openFaqIndex === index ? 'open' : ''}`}
              key={index}
            >
              <h3
                onClick={() => toggleFaq(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') toggleFaq(index);
                }}
              >
                <span>{t(`about_us.faq_question_${item}`)}</span>
                <span className="faq-icon">
                  {openFaqIndex === index ? '−' : '+'}
                </span>
              </h3>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openFaqIndex === index
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="faq-answer"
              >
                {t(`about_us.faq_answer_${item}`)}
              </motion.p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="contact-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        ref={contactRef}
      >
        <h2>{t('home.contact_title')}</h2>
        <ContactForm />
      </motion.section>
    </Layout>
  );
};

export default AboutUs; 