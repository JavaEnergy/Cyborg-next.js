'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Button, Paper, IconButton, Box, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
import ChatIcon from '@mui/icons-material/Chat';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Layout from '@/components/Layout/Layout';
import HelmetManager from '@/components/HelmetManager/HelmetManager';
import './ContactUs.css';

const ContactUs = ({ params }) => {
  const { t, i18n } = useTranslation();
  const formRef = useRef(null);
  const router = useRouter();

  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Build the canonical URL explicitly using the current language
  const canonicalUrl = `https://cyborg-it.de/${params.lang}/contact-us`;

  // Animation variants for framer-motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Emit 'page-loaded' event after component mounts
  useEffect(() => {
    window.dispatchEvent(new Event('page-loaded'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setIsSuccess(false);

    console.time('EmailJS Submission Time');

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log('Email successfully sent!', result.text);
      setStatus(t('contact.success_message'));
      setIsSuccess(true);
      formRef.current.reset();

      // Trigger the conversion event if available
      if (window.gtagSendEvent) {
        window.gtagSendEvent();
      }
    } catch (error) {
      console.log('Email sending failed:', error.text);
      setStatus(t('contact.error_message'));
      setIsSuccess(false);
    } finally {
      setLoading(false);
      console.timeEnd('EmailJS Submission Time');
    }
  };

  return (
    <Layout>
      {/* HelmetManager for SEO */}
      <HelmetManager
        title={t('contact_us.page_title')}
        description={t('contact_us.page_description')}
        canonical={canonicalUrl}
        alternateLanguages={[
          { lang: 'de', url: 'https://cyborg-it.de/de/contact-us' },
          { lang: 'en', url: 'https://cyborg-it.de/en/contact-us' },
        ]}
        openGraph={{
          title: t('contact_us.page_title'),
          description: t('contact_us.page_description'),
          image: 'https://cyborg-it.de/assets/Cyborg-og-image.jpg',
          url: canonicalUrl,
          type: 'website',
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Cyborg IT",
          "url": "https://cyborg-it.de",
          "logo": "https://cyborg-it.de/assets/Cyborg-logo-9-09-DqmwUbnN.png",
          "sameAs": [
            "https://www.linkedin.com/company/cyborg-it-l%C3%B6sungen/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+995-598-70-79-79",
            "contactType": "Customer Service"
          }
        }}
      />

      {/* Hero Section */}
      <div className="contact-hero">
        <Image
          src="/assets/images/contact.png"
          alt="Contact Us"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Contact Form Section */}
      <Container maxWidth="md" className="contact-container">
        <motion.section
          className="contact-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography variant="h3" className="h3" align="center" paragraph>
            {t('contact_us.title')}
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            {t('contact_us.subtitle')}
          </Typography>

          <Paper elevation={6} className="modern-form-container">
            <form className="modern-contact-form" onSubmit={handleSubmit} ref={formRef}>
              {/* Name Field */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="input-wrapper"
              >
                <PersonOutlineIcon className="input-icon" aria-hidden="true" />
                <input
                  type="text"
                  name="user_name"
                  placeholder={t('contact_us.name')}
                  required
                  aria-label={t('contact_us.name')}
                />
              </Box>

              {/* Email Field */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="input-wrapper"
              >
                <EmailIcon className="input-icon" aria-hidden="true" />
                <input
                  type="email"
                  name="user_email"
                  placeholder={t('contact_us.email')}
                  required
                  aria-label={t('contact_us.email')}
                  title={t('contact_us.email_title')}
                />
              </Box>

              {/* Subject Field */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="input-wrapper"
              >
                <SubjectIcon className="input-icon" aria-hidden="true" />
                <input
                  type="text"
                  name="user_subject"
                  placeholder={t('contact_us.subject')}
                  aria-label={t('contact_us.subject')}
                />
              </Box>

              {/* Message Field */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="input-wrapper"
              >
                <ChatIcon className="input-icon" aria-hidden="true" />
                <textarea
                  rows="5"
                  name="user_message"
                  placeholder={t('contact_us.message')}
                  required
                  aria-label={t('contact_us.message')}
                />
              </Box>

              {/* Submit Button */}
              <Box textAlign="center" mt={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      {t('contact.sending')}{' '}
                      <CircularProgress size={20} style={{ marginLeft: '10px' }} />
                    </>
                  ) : (
                    t('contact_us.submit')
                  )}
                </Button>
              </Box>
            </form>

            {/* Social Icons */}
            <Box className="social-links-box" display="flex" justifyContent="center" mt={2}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/cyborg-it-l%C3%B6sungen/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="large" style={{ color: '#0A66C2' }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/995597011309"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon fontSize="large" style={{ color: '#25D366' }} />
              </IconButton>
            </Box>
          </Paper>

          {/* Status Message */}
          {status && (
            <Typography
              variant="body1"
              align="center"
              className={`status-message ${isSuccess ? 'success' : 'error'}`}
            >
              {status}
            </Typography>
          )}
        </motion.section>
      </Container>
    </Layout>
  );
};

export default ContactUs;
