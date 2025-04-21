'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AccordionComponent from '@/components/AccordionComponent/AccordionComponent';
import ContactForm from '@/components/ContactForm/ContactForm';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import i18n from '@/i18n';
import OptimizedNextImage from '@/components/optimized/OptimizedNextImage';
import Layout from '@/components/Layout/Layout';

// Images - Using paths from public directory instead of imports
const BG_IMAGE = '/assets/images/bg.webp';
const IT_CONSULTING_ICON = '/assets/images/it-consulting.png';
const WEB_DEV_ICON = '/assets/images/web-development.png';
const ZOHO_ICON = '/assets/images/zoho-hm.png';

// Project images
const ACC_IMAGE_1 = '/assets/images/project/1.png';
const ACC_IMAGE_2 = '/assets/images/project/2.png';
const ACC_IMAGE_3 = '/assets/images/project/3.png';
const ACC_IMAGE_4 = '/assets/images/project/4.png';

// Project 2 modal images
const PROJECT2_IMG1 = '/assets/images/project/1.png';
const PROJECT2_IMG2 = '/assets/images/project/2.png';
const PROJECT2_IMG3 = '/assets/images/project/3.png';
const PROJECT2_IMG4 = '/assets/images/project/4.png';
const PROJECT2_IMG5 = '/assets/images/project/5.png';
const PROJECT2_IMG6 = '/assets/images/project/6.png';

import './Home.css';

const Home = ({ language }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(true);

  // If language prop is provided, use it to set language
  useEffect(() => {
    if (language && (language === 'en' || language === 'de')) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  // Redirect to language-specific page
  useEffect(() => {
    const userLanguage = i18n.language;
    // Determine preferred language - default to 'en' if not found
    const preferredLanguage = userLanguage?.startsWith('de') ? 'de' : 'en';
    
    // Check if we're already on a language path
    const path = window.location.pathname;
    if (path === '/' || path === '') {
      // Redirect to language specific page
      router.replace(`/${preferredLanguage}`);
    } else {
      setIsRedirecting(false);
    }
  }, [router, i18n.language]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const anyModalOpen = document.querySelector('[role="dialog"][aria-modal="true"]') !== null;
      if (isMobile || openProjectModal || anyModalOpen) {
        setHovered(false);
        return;
      }
      const isOverExcluded = event.target.closest('.exclude-spider');
      setHovered(!isOverExcluded);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, openProjectModal]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const currentLang = i18n.language;
  const isGerman = currentLang.startsWith('de');

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

  const accordionItems = [
    { id: 1, img: ACC_IMAGE_1, alt: t('home.accordion_image_alt_1') },
    { id: 2, img: ACC_IMAGE_2, alt: t('home.accordion_image_alt_2') },
    { id: 3, img: ACC_IMAGE_3, alt: t('home.accordion_image_alt_3') },
    { id: 4, img: ACC_IMAGE_4, alt: t('home.accordion_image_alt_4') },
  ];

  const handleOpenProjectModal = () => {
    setOpenProjectModal(true);
  };

  const handleCloseProjectModal = () => {
    setOpenProjectModal(false);
  };

  const project2MoreInfo = {
    title: t('home.project_2_title'),
    description: t('home.project_2_more_info'),
    images: [PROJECT2_IMG6, PROJECT2_IMG2, PROJECT2_IMG1, PROJECT2_IMG5, PROJECT2_IMG3, PROJECT2_IMG4],
  };

  // Show loading state while redirecting
  if (isRedirecting) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.5rem',
        fontFamily: 'system-ui, sans-serif',
        opacity: 0.7
      }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      <main className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={isGerman ? 'de' : ''}>{t('home.title')}</h1>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="home-main-content">
          <motion.div
            className="image-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            custom={1}
          >
            <OptimizedNextImage
              src={BG_IMAGE}
              alt={t('home.image_alt')}
              width={1200}
              height={800}
              priority
            />
          </motion.div>

          <motion.div
            className="text-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            custom={2}
          >
            <h2>{t('home.subtitle')}</h2>
            <section className="vision-section">
              <p>{t('home.vision_content')}</p>
              <p>{t('home.vision_content2')}</p>
              <p>{t('home.wish_content')}</p>
            </section>
          </motion.div>
        </section>

        {/* Services Overview Section */}
        <motion.section
          className="services-overview"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          custom={3}
          id="services"
        >
          <h2>{t('home.services_title')}</h2>
          <div className="services-list">
            <Link href={`/${currentLang}/it-consulting`} className="service-item">
              <OptimizedNextImage
                src={IT_CONSULTING_ICON}
                alt={t('home.service_it_consulting_alt')}
                width={80}
                height={80}
              />
              <h3>{t('home.service_it_consulting_title')}</h3>
              <p>{t('home.service_it_consulting_description')}</p>
            </Link>

            <Link href={`/${currentLang}/web-development`} className="service-item">
              <OptimizedNextImage
                src={WEB_DEV_ICON}
                alt={t('home.service_web_development_alt')}
                width={80}
                height={80}
              />
              <h3>{t('home.service_web_development_title')}</h3>
              <p>{t('home.service_web_development_description')}</p>
            </Link>

            <Link href={`/${currentLang}/zoho-consulting`} className="service-item">
              <OptimizedNextImage
                id="zoho"
                src={ZOHO_ICON}
                alt={t('home.service_it_services_alt')}
                width={100}
                height={100}
              />
              <h3>{t('home.service_it_services_title')}</h3>
              <p>{t('home.service_it_services_description')}</p>
            </Link>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="projects-section exclude-spider"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          custom={3}
        >
          <h2>{t('home.projects_title')}</h2>
          <div className="projects-list">
            {/* First Project - Single Column */}
            <article className="project-item project-1">
              <div className="project-content">
                <h3>{t('home.project_1_title')}</h3>
                <p>{t('home.project_1_description')}</p>

                <div className="project-iframe-container">
                  <iframe
                    src="https://product-card-plum-mu.vercel.app"
                    width="100%"
                    height="700"
                    style={{ border: 'none' }}
                    title="Product Card Preview"
                  ></iframe>
                </div>

                <a
                  href="https://product-card-plum-mu.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="contained" color="primary">
                    {t('home.project_view_more')}
                  </Button>
                </a>
              </div>
            </article>

            {/* Second Project - Project 2 */}
            <article className="project-item project-2 exclude-spider">
              <div className="project-content">
                <h3>{t('home.project_2_title')}</h3>
                <p>{t('home.project_2_description')}</p>

                <AccordionComponent items={accordionItems} />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenProjectModal}
                  style={{ marginTop: '16px' }}
                >
                  {t('home.project_view_more')}
                </Button>
              </div>
            </article>

            {/* Third Project - Two Columns */}
            <article className="project-item project-3">
              <div className="project-content">
                <h3>{t('home.project_3_title')}</h3>
                <p>{t('home.project_3_description')}</p>

                <div className="project-iframe-container">
                  <iframe
                    src="https://clock-teal-tau.vercel.app/"
                    width="100%"
                    height="400"
                    style={{ border: 'none' }}
                    title="Quiz App Preview"
                  ></iframe>
                </div>

                <a
                  href="https://clock-teal-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="contained" color="primary">
                    {t('home.project_view_more')}
                  </Button>
                </a>
              </div>
            </article>
          </div>
        </motion.section>

        {/* Project 2 Modal */}
        <Modal
          open={openProjectModal}
          onClose={handleCloseProjectModal}
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
        >
          <Box className="project-modal-box exclude-spider">
            <Typography id="project-modal-title" variant="h4" gutterBottom>
              {project2MoreInfo.title}
            </Typography>
            <Typography id="project-modal-description" variant="body1" paragraph>
              {project2MoreInfo.description}
            </Typography>

            {project2MoreInfo.images && project2MoreInfo.images.length > 0 && (
              <Box className="project-modal-images">
                {project2MoreInfo.images.map((img, idx) => (
                  <OptimizedNextImage
                    key={idx}
                    src={img}
                    alt={`${project2MoreInfo.title} detail ${idx + 1}`}
                    width={600}
                    height={400}
                    className="project-modal-image exclude-spider"
                  />
                ))}
              </Box>
            )}

            <Button
              variant="contained"
              color="secondary"
              onClick={handleCloseProjectModal}
              style={{ marginTop: '16px' }}
            >
              {t('home.close')}
            </Button>
          </Box>
        </Modal>

        {/* FAQ Section */}
        <motion.section
          className="faq-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          custom={4}
        >
          <h2>{t('about_us.faq_title')}</h2>
          <div className="faq-list">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
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
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openFaqIndex === index
                      ? { height: 'auto', opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="faq-answer"
                >
                  <p>{t(`about_us.faq_answer_${item}`)}</p>
                  {item === 7 && (
                    <Link href={`/${currentLang}/contact`}>
                      <Button variant="contained" color="primary" className="faq-contact-btn">
                        {t('about_us.faq_contact_btn')}
                      </Button>
                    </Link>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="contact-section exclude-spider"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h2>{t('home.contact_title')}</h2>
          <ContactForm />
        </motion.section>
      </main>
    </>
  );
};

export default Home; 