'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box
} from '@mui/material';
import {
  Computer as ComputerIcon,
  Storage as StorageIcon,
  Security as SecurityIcon,
  Cloud as CloudIcon,
  Business as BusinessIcon,
  Code as CodeIcon
} from '@mui/icons-material';
import Image from 'next/image';
import './ITConsulting.css';

const ITConsulting = () => {
  const { t } = useTranslation();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Service data
  const services = [
    {
      id: 'it-strategy',
      title: 'IT Strategy & Planning',
      description: 'Develop comprehensive IT strategies aligned with your business goals.',
      icon: <BusinessIcon fontSize="large" color="primary" />
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Optimization',
      description: 'Modernize and optimize your IT infrastructure for better performance and cost efficiency.',
      icon: <StorageIcon fontSize="large" color="primary" />
    },
    {
      id: 'security',
      title: 'Cybersecurity Consulting',
      description: 'Protect your business with comprehensive security assessments and solutions.',
      icon: <SecurityIcon fontSize="large" color="primary" />
    },
    {
      id: 'cloud',
      title: 'Cloud Migration & Management',
      description: 'Seamlessly transition to cloud platforms and optimize your cloud environment.',
      icon: <CloudIcon fontSize="large" color="primary" />
    },
    {
      id: 'digital',
      title: 'Digital Transformation',
      description: 'Transform your business with innovative digital solutions and processes.',
      icon: <ComputerIcon fontSize="large" color="primary" />
    },
    {
      id: 'custom',
      title: 'Custom Software Development',
      description: 'Build tailored software solutions to address your unique business challenges.',
      icon: <CodeIcon fontSize="large" color="primary" />
    }
  ];

  return (
    <div className="it-consulting-container">
      {/* Hero Section */}
      <div className="it-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('itConsulting.title', 'IT Consulting Services')}
        </motion.h1>
      </div>

      <Container maxWidth="lg">
        {/* Introduction Section */}
        <motion.div 
          className="intro-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('itConsulting.intro.title', 'Technology Solutions for Business Success')}
          </Typography>
          
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                {t('itConsulting.intro.description1', 'Our IT consulting services help organizations leverage technology to achieve their business objectives. With a deep understanding of both business and technology, we bridge the gap between IT capabilities and business requirements.')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('itConsulting.intro.description2', 'Whether you need to optimize your IT infrastructure, enhance security, or drive digital transformation, our experienced consultants provide strategic guidance and practical implementation support.')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', height: '300px', width: '100%' }}>
                <Image
                  src="/assets/images/it-consulting-intro.jpg"
                  alt="IT Consulting"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        {/* Services Section */}
        <motion.div 
          className="services-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('itConsulting.services.title', 'Our IT Consulting Services')}
          </Typography>
          
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <Card className="service-card" id={service.id}>
                    <CardContent>
                      <div className="service-icon">{service.icon}</div>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" className="service-description">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            {t('itConsulting.cta.title', 'Ready to Transform Your IT Strategy?')}
          </Typography>
          <Typography variant="h6" component="p" align="center" gutterBottom>
            {t('itConsulting.cta.subtitle', 'Contact us today for a free consultation on how we can help your business leverage technology for growth.')}
          </Typography>
          <Box textAlign="center" mt={4}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              href="/contact-us"
              className="cta-button"
            >
              {t('itConsulting.cta.button', 'Schedule a Consultation')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
};

export default ITConsulting;
