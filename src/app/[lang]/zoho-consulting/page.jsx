'use client';

import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  Modal, 
  Box, 
  TextField, 
  TextareaAutosize,
  Container,
  Grid
} from '@mui/material';
import { Email } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import HelmetManager from '@/components/HelmetManager/HelmetManager';
import Layout from '@/components/Layout/Layout';
import ContactForm from '@/components/ContactForm/ContactForm';
import './ZohoConsulting.css';

// Import images
import zohoCRMImage from '@/assets/images/crm.png';
import zohoMarketingImage from '@/assets/images/marketing.png';
import zohoFinanceImage from '@/assets/images/finance.png';
import zohoHRImage from '@/assets/images/people.png';
import zohoCustomDevImage from '@/assets/images/Zoho.png';

const ZohoConsulting = ({ params }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const contactRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    rest: {
      scale: 1,
      boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  // Construct the canonical URL without a trailing slash
  const canonicalUrl = `https://cyborg-it.de/${currentLang}/zoho-consulting`;

  // Hreflang array (without trailing slashes)
  const alternateLanguages = [
    { lang: 'de', url: 'https://cyborg-it.de/de/zoho-consulting' },
    { lang: 'en', url: 'https://cyborg-it.de/en/zoho-consulting' },
  ];

  // Services data
  const services = [
    {
      id: 'zoho-crm',
      title: t('zoho_consulting.zoho_crm'),
      description: t('zoho_consulting.zoho_crm_description'),
      image: zohoCRMImage,
      alt: 'Zoho CRM',
      moreInfo: t('zoho_consulting.zoho_crm_more_info'),
    },
    {
      id: 'zoho-marketing',
      title: t('zoho_consulting.zoho_marketing'),
      description: t('zoho_consulting.zoho_marketing_description'),
      image: zohoMarketingImage,
      alt: 'Zoho Marketing',
      moreInfo: t('zoho_consulting.zoho_marketing_more_info'),
    },
    {
      id: 'zoho-finance',
      title: t('zoho_consulting.finance'),
      description: t('zoho_consulting.finance_description'),
      image: zohoFinanceImage,
      alt: 'Finance',
      moreInfo: t('zoho_consulting.finance_more_info'),
    },
    {
      id: 'zoho-human-resources',
      title: t('zoho_consulting.human_resources'),
      description: t('zoho_consulting.human_resources_description'),
      image: zohoHRImage,
      alt: 'Human Resources',
      moreInfo: t('zoho_consulting.human_resources_more_info'),
    },
    {
      id: 'custom-development',
      title: t('zoho_consulting.custom_development'),
      description: t('zoho_consulting.custom_development_description'),
      image: zohoCustomDevImage,
      alt: 'Custom Development',
      moreInfo: t('zoho_consulting.custom_development_more_info'),
    },
  ];

  // Modal open/close handlers
  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  // CTA button click handler
  const handleCTAButtonClick = () => {
    router.push(`/${currentLang}/contact-us`);
  };

  return (
    <Layout>
      <HelmetManager
        title={t('zoho_consulting.page_title')}
        description={t('zoho_consulting.page_description')}
        canonical={canonicalUrl}
        alternateLanguages={alternateLanguages}
        openGraph={{
          title: t('zoho_consulting.page_title'),
          description: t('zoho_consulting.page_description'),
          image: 'https://cyborg-it.de/assets/og-image.jpg',
          url: canonicalUrl,
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

      <div className="zoho-consulting">
        {/* Hero Section */}
        <div className="zoho-hero">
          <Typography
            variant="h2"
            component={motion.h1}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            align="center"
            color="white"
          >
            {t('zoho_consulting.title')}
          </Typography>
        </div>

        <Container maxWidth="lg">
          {/* Introduction Section */}
          <motion.section
            id="introduction"
            className="zoho-intro-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <Typography variant="h4" component="h2" gutterBottom align="center">
              {t('zoho_consulting.intro_title')}
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              {t('zoho_consulting.intro_description')}
            </Typography>
          </motion.section>

          {/* Services Grid */}
          <motion.section
            className="zoho-services-grid"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Grid container spacing={4}>
              {services.map((service) => (
                <Grid
                  key={service.id}
                  item
                  xs={12}
                  md={
                    service.id === 'zoho-crm' || service.id === 'zoho-marketing'
                      ? 6
                      : 4
                  }
                >
                  <div id={service.id} className="service-section">
                    <motion.div
                      className="zoho-service-card"
                      variants={cardVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      onClick={() => handleOpenModal(service)}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') handleOpenModal(service);
                      }}
                    >
                      <Card className="card">
                        <img
                          src={service.image}
                          alt={service.alt}
                          loading="lazy"
                          width="300"
                          height="180"
                          style={{
                            objectFit: 'contain',
                            width: '300px',
                            height: '180px',
                          }}
                        />
                        <CardContent>
                          <Typography variant="h5" gutterBottom>
                            {service.title}
                          </Typography>
                          <Typography variant="body2" className="card-description">
                            {service.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </Grid>
              ))}
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
            <div className="cta-content">
              <Typography variant="h4" align="center" gutterBottom>
                {t('zoho_consulting.cta_title')}
              </Typography>
              <Typography variant="h6" align="center" paragraph>
                {t('zoho_consulting.cta_description')}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Email />}
                size="large"
                onClick={handleCTAButtonClick}
                className="cta-button"
                aria-label={t('zoho_consulting.contact_us')}
              >
                {t('zoho_consulting.contact_us')}
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
            <Typography variant="h2" gutterBottom align="center">
              {t('home.contact_title')}
            </Typography>
            <ContactForm />
          </motion.section>
        </Container>

        {/* Modal for More Information */}
        <Modal
          open={isModalOpen}
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseModal}
                >
                  {t('zoho_consulting.close')}
                </Button>
              </>
            )}
          </motion.div>
        </Modal>
      </div>
    </Layout>
  );
};

export default ZohoConsulting;
