'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

// Import Material UI Components
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Modal,
} from '@mui/material';

import {
  Cloud,
  SmartToy,
  Web,
  PhoneIphone,
  Code,
  Email,
  Security,
} from '@mui/icons-material';

import { motion } from 'framer-motion';
import './ITConsulting.css';
import ContactForm from '@/components/ContactForm/ContactForm';
import HelmetManager from '@/components/HelmetManager/HelmetManager';

// Import images
import heroImage from '@/assets/images/consulting.webp';
import ideaToImplementationImage from '@/assets/images/idea.webp';
import itStrategyImage from '@/assets/images/b2.png';
import softwareDevelopmentImage from '@/assets/images/soft.png';
import webConsultingImage from '@/assets/images/bbb.png';
import mobileConsultingImage from '@/assets/images/mob.png';
import cloudConsultingImage from '@/assets/images/clod.png';
import aiConsultingImage from '@/assets/images/ai3k.png';
import itSecurityImage from '@/assets/images/secr.png';

const ITConsulting = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const currentLang = i18n.language;
  const contactRef = useRef(null);

  // Modal state and handlers
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setSelectedService(null);
    setOpenModal(false);
  };

  // CTA button click handler
  const handleCTAButtonClick = () => {
    router.push(`/${currentLang}/contact-us`);
  };

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.3, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Services data
  const services = [
    {
      id: 'software-development-consulting',
      title: t('it_consulting.software_development_consulting'),
      description: t('it_consulting.software_development_consulting_description'),
      image: softwareDevelopmentImage,
      icon: <Code fontSize="large" color="primary" />,
      moreInfo: t('it_consulting.software_development_consulting_more_info'),
    },
    {
      id: 'web-consulting',
      title: t('it_consulting.web_consulting'),
      description: t('it_consulting.web_consulting_description'),
      image: webConsultingImage,
      icon: <Web fontSize="large" color="primary" />,
      moreInfo: t('it_consulting.web_consulting_more_info'),
    },
    {
      id: 'mobile-consulting',
      title: t('it_consulting.mobile_consulting'),
      description: t('it_consulting.mobile_consulting_description'),
      image: mobileConsultingImage,
      icon: <PhoneIphone fontSize="large" color="primary" />,
      moreInfo: t('it_consulting.mobile_consulting_more_info'),
    },
    {
      id: 'ai-consulting',
      title: t('it_consulting.ai_consulting'),
      description: t('it_consulting.ai_consulting_description'),
      image: aiConsultingImage,
      icon: <SmartToy fontSize="large" color="primary" />,
      moreInfo: t('it_consulting.ai_consulting_more_info'),
    },
    {
      id: 'cloud-consulting',
      title: t('it_consulting.cloud_consulting'),
      description: t('it_consulting.cloud_consulting_description'),
      image: cloudConsultingImage,
      icon: <Cloud fontSize="large" color="primary" />,
      moreInfo: t('it_consulting.cloud_consulting_more_info'),
    },
  ];

  // Separate IT Security & Audits Service
  const itSecurityAuditsService = {
    id: 'it-security-audits',
    title: t('it_consulting.it_security'),
    moreInfo: t('it_consulting.it_security_audits_more_info'),
  };

  return (
    <>
      <HelmetManager
        title={t('it_consulting.page_title')}
        description={t('it_consulting.page_description')}
        canonical={`https://cyborg-it.de/${i18n.language}/it-consulting`}
        alternateLanguages={[
          { lang: 'de', url: 'https://cyborg-it.de/de/it-consulting' },
          { lang: 'en', url: 'https://cyborg-it.de/en/it-consulting' },
        ]}
        openGraph={{
          title: t('it_consulting.page_title'),
          description: t('it_consulting.page_description'),
          image: 'https://cyborg-it.de/assets/og-image.jpg',
          url: `https://cyborg-it.de/${i18n.language}/it-consulting`,
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

      <div className="it-consulting">
        {/* Hero Section */}
        <div
          className="it-consulting-hero"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        >
          <Typography variant="h2" component="h1" align="center" color="white">
            {t('it_consulting.it_consulting')}
          </Typography>
        </div>

        <Container maxWidth="lg">
          {/* From Idea to Implementation */}
          <motion.section
            id="from-idea-to-implementation"
            className="consulting-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h4" component="h2" gutterBottom>
                  {t('it_consulting.from_idea_to_implementation')}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t('it_consulting.content_for_from_idea_to_implementation')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={ideaToImplementationImage.src}
                  alt={t('it_consulting.from_idea_to_implementation_alt')}
                  className="section-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </Grid>
            </Grid>
          </motion.section>

          {/* IT Strategy & Digitalization */}
          <motion.section
            id="it-strategy"
            className="consulting-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Grid container spacing={4} alignItems="center" direction="row-reverse">
              <Grid item xs={12} md={6}>
                <Typography variant="h4" component="h2" gutterBottom>
                  {t('it_consulting.it_strategy')}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t('it_consulting.content_for_it_strategy')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src={itStrategyImage.src}
                  alt={t('it_consulting.it_strategy_alt')}
                  className="section-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </Grid>
            </Grid>
          </motion.section>

          {/* Consulting Services (5 Cards) */}
          <motion.section
            id="software-consulting"
            className="consulting-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <Typography variant="h4" component="h2" gutterBottom align="center">
              {t('it_consulting.software_consulting')}
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              {t('it_consulting.content_for_software_consulting')}
            </Typography>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Grid container spacing={4} justifyContent="center">
                {services.map((service) => (
                  <Grid item xs={12} sm={6} md={4} key={service.id}>
                    <motion.div variants={cardVariants}>
                      <Card
                        component={motion.div}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="service-card"
                        onClick={() => handleOpenModal(service)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') handleOpenModal(service);
                        }}
                      >
                        <div className="service-icon">{service.icon}</div>
                        <img
                          src={service.image.src}
                          alt={service.title}
                          loading="lazy"
                          width="300"
                          height="200"
                          style={{
                            objectFit:
                              service.image === cloudConsultingImage ? 'contain' : 'cover',
                            width: '300px',
                            height: '200px',
                          }}
                        />
                        <CardContent>
                          <Typography variant="h6" component="h3" gutterBottom>
                            {service.title}
                          </Typography>
                          <Typography variant="body2">{service.description}</Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            {/* Modal for Consulting Cards */}
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="service-modal-title"
              aria-describedby="service-modal-description"
            >
              <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedService && (
                  <>
                    <Typography id="service-modal-title" variant="h4" gutterBottom>
                      {selectedService.title}
                    </Typography>
                    <Typography id="service-modal-description" variant="body1" paragraph>
                      {selectedService.moreInfo}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleCloseModal}>
                      {t('it_consulting.close')}
                    </Button>
                  </>
                )}
              </motion.div>
            </Modal>
          </motion.section>

          {/* IT Security & Audits Section */}
          <motion.section
            id="it-security"
            className="consulting-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h4" component="h2" gutterBottom>
                  {t('it_consulting.it_security')}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t('it_consulting.content_for_it_security')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOpenModal(itSecurityAuditsService)}
                  style={{ cursor: 'pointer' }}
                  aria-label={t('it_consulting.it_security')}
                >
                  <Card component={motion.div} className="service-card">
                    <div className="service-icon">
                      <Security fontSize="large" color="primary" />
                    </div>
                    <img
                      src={itSecurityImage.src}
                      alt={t('it_consulting.it_security_alt')}
                      loading="lazy"
                      width="300"
                      height="200"
                      style={{
                        objectFit: 'contain',
                        width: '300px',
                        height: '200px',
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {t('it_consulting.it_security')}
                      </Typography>
                      <Typography variant="body2">
                        {t('it_consulting.content_for_it_security')}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            className="cta-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <Typography variant="h5" align="center" gutterBottom>
              {t('it_consulting.ready_to_transform')}
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              {t('it_consulting.take_next_step')}
            </Typography>
            <div className="cta-button">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<Email />}
                onClick={handleCTAButtonClick}
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={t('it_consulting.contact_us')}
              >
                {t('it_consulting.contact_us')}
              </Button>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.section
            className="contact-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            ref={contactRef}
          >
            <Typography variant="h2" component="h2" gutterBottom>
              {t('home.contact_title')}
            </Typography>
            <ContactForm />
          </motion.section>
        </Container>
      </div>
    </>
  );
};

export default ITConsulting;
