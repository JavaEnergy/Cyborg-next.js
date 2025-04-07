'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
} from '@mui/material';

import {
  Email,
  Web as WebIcon,
  Code as CodeIcon,
  ShoppingCart as ECommerceIcon,
  Build as BuildIcon,
} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

import './WebDevelopment.css';
import ContactForm from '@/components/ContactForm/ContactForm';

// Define image paths directly
const wordpressImage = '/assets/images/wordpress.jpg';
const reactImage = '/assets/images/react.png';
const angularImage = '/assets/images/angular.png';
const ecommerceImage = '/assets/images/conf.png';
const customSoftwareImage = '/assets/images/custom.png';

const WebDevelopment = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const pathname = usePathname();

  // State for card modals
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
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

  // Handler to open/close modal
  const handleOpenModal = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setSelectedService(null);
    setOpenModal(false);
  };

  // CTA button click
  const handleCTAButtonClick = () => {
    window.location.href = `/${currentLang}/contact-us`;
  };

  // Services data
  const services = [
    {
      title: t('web_development.wordpress'),
      description: t('web_development.content_for_wordpress'),
      image: wordpressImage,
      icon: <WebIcon fontSize="large" color="primary" />,
      id: 'wordpress',
      moreInfo: t('web_development.wordpress_more_info'),
    },
    {
      title: t('web_development.react_applications'),
      description: t('web_development.content_for_react_applications'),
      image: reactImage,
      icon: <CodeIcon fontSize="large" color="primary" />,
      id: 'react-applications',
      moreInfo: t('web_development.react_more_info'),
    },
    {
      title: t('web_development.angular_development'),
      description: t('web_development.content_for_angular_development'),
      image: angularImage,
      icon: <CodeIcon fontSize="large" color="primary" />,
      id: 'angular-development',
      moreInfo: t('web_development.angular_more_info'),
    },
    {
      title: t('web_development.e_commerce'),
      description: t('web_development.content_for_e_commerce'),
      image: ecommerceImage,
      icon: <ECommerceIcon fontSize="large" color="primary" />,
      id: 'e-commerce',
      moreInfo: t('web_development.ecommerce_more_info'),
    },
    {
      title: t('web_development.custom_software'),
      description: t('web_development.content_for_custom_software'),
      image: customSoftwareImage,
      icon: <BuildIcon fontSize="large" color="primary" />,
      id: 'custom-software',
      moreInfo: t('web_development.custom_software_more_info'),
    },
  ];

  return (
    <div className="web-development">
      {/* Hero Section */}
      <div className="web-development-hero">
        <Typography variant="h2" component="h1" align="center" color="white">
          {t('web_development.web_development')}
        </Typography>
      </div>

      <Container maxWidth="lg">
        {/* Services Section */}
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
            {t('web_development.services_title')}
          </Typography>

          <motion.div initial="hidden" animate="visible">
            <Grid container spacing={4} justifyContent="center">
              {services.map((service) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={service.id}
                  id={service.id}
                  style={{ display: 'flex' }}
                >
                  <motion.div
                    variants={cardVariants}
                    style={{ flex: 1 }}
                    onClick={() => handleOpenModal(service)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleOpenModal(service);
                    }}
                  >
                    <Card
                      component={motion.div}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="service-card"
                    >
                      <div className="service-icon">{service.icon}</div>
                      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="card-media"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <CardContent>
                        <Typography variant="h5" component="h3" gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography variant="body2" className="card-description">
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Modal for More Information */}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="service-modal-title"
            aria-describedby="service-modal-description"
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {selectedService && (
                <>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {selectedService.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedService.moreInfo}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCloseModal}
                    sx={{ mt: 2 }}
                  >
                    {t('common.close')}
                  </Button>
                </>
              )}
            </motion.div>
          </Modal>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="cta-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            {t('web_development.cta_title')}
          </Typography>
          <Typography variant="h6" component="h3" align="center" gutterBottom>
            {t('web_development.cta_subtitle')}
          </Typography>
          <div className="cta-button">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleCTAButtonClick}
            >
              {t('web_development.cta_button')}
            </Button>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          className="contact-section"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
        >
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            {t('web_development.contact_title')}
          </Typography>
          <ContactForm />
        </motion.section>
      </Container>
    </div>
  );
};

export default WebDevelopment;
