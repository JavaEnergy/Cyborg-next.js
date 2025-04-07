'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Box, 
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import './ContactUs.css';

const ContactUs = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would typically send the form data to your backend
    
    // Show success message
    setSnackbar({
      open: true,
      message: t('contactUs.form.successMessage', 'Your message has been sent successfully!'),
      severity: 'success'
    });
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('contactUs.title', 'Contact Us')}
        </motion.h1>
      </div>

      <Container maxWidth="lg">
        {/* Contact Information */}
        <motion.div 
          className="contact-info-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('contactUs.info.title', 'Get in Touch')}
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} className="info-card">
                <PhoneIcon className="info-icon" />
                <Typography variant="h6" component="h3">
                  {t('contactUs.info.phone', 'Phone')}
                </Typography>
                <Typography variant="body1">
                  +49 123 456 7890
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} className="info-card">
                <EmailIcon className="info-icon" />
                <Typography variant="h6" component="h3">
                  {t('contactUs.info.email', 'Email')}
                </Typography>
                <Typography variant="body1">
                  info@cyborg-it.de
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} className="info-card">
                <LocationIcon className="info-icon" />
                <Typography variant="h6" component="h3">
                  {t('contactUs.info.address', 'Address')}
                </Typography>
                <Typography variant="body1">
                  123 Tech Street, 10115 Berlin, Germany
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('contactUs.form.title', 'Send Us a Message')}
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} className="contact-form">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label={t('contactUs.form.name', 'Your Name')}
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label={t('contactUs.form.email', 'Your Email')}
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t('contactUs.form.subject', 'Subject')}
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label={t('contactUs.form.message', 'Your Message')}
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  className="submit-button"
                >
                  {t('contactUs.form.submit', 'Send Message')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* Map Section - Placeholder */}
        <motion.div 
          className="map-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('contactUs.map.title', 'Find Us')}
          </Typography>
          
          <div className="map-container">
            {/* This would be replaced with an actual map component */}
            <Box
              sx={{
                width: '100%',
                height: '400px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px'
              }}
            >
              <Typography variant="body1">
                {t('contactUs.map.placeholder', 'Map will be displayed here')}
              </Typography>
            </Box>
          </div>
        </motion.div>
      </Container>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactUs;
