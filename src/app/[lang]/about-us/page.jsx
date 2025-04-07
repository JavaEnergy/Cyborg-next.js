'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import Image from 'next/image';

const AboutUs = () => {
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

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="about-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('aboutUs.title', 'About Us')}
        </motion.h1>
      </div>

      <Container maxWidth="lg">
        {/* Company Overview */}
        <motion.div 
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('aboutUs.overview.title', 'Our Company')}
          </Typography>
          
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                {t('aboutUs.overview.description1', 'Cyborg IT has been at the forefront of technology innovation since our founding. We combine expertise with a passion for helping businesses transform through technology.')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('aboutUs.overview.description2', 'Our team of experienced professionals is dedicated to delivering high-quality solutions tailored to meet the unique needs of each client.')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', height: '300px', width: '100%' }}>
                <Image
                  src="/assets/images/about-company.jpg"
                  alt="Our Company"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div 
          className="mission-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('aboutUs.mission.title', 'Our Mission & Vision')}
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h4" component="h3" gutterBottom>
                  {t('aboutUs.mission.missionTitle', 'Mission')}
                </Typography>
                <Typography variant="body1">
                  {t('aboutUs.mission.missionDescription', 'Our mission is to empower businesses through innovative technology solutions, enabling them to thrive in the digital age and reach their full potential.')}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h4" component="h3" gutterBottom>
                  {t('aboutUs.mission.visionTitle', 'Vision')}
                </Typography>
                <Typography variant="body1">
                  {t('aboutUs.mission.visionDescription', 'To be the leading technology partner for businesses of all sizes, recognized for our expertise, integrity, and commitment to delivering exceptional value and results.')}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="team-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('aboutUs.team.title', 'Our Team')}
          </Typography>
          
          <Typography variant="body1" paragraph align="center">
            {t('aboutUs.team.description', 'Our diverse team of experts is passionate about technology and committed to your success.')}
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {[1, 2, 3, 4].map((member) => (
              <Grid item xs={12} sm={6} md={3} key={member}>
                <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ position: 'relative', height: '200px', width: '100%', mb: 2 }}>
                    <Image
                      src={`/assets/images/team-member-${member}.jpg`}
                      alt={`Team Member ${member}`}
                      fill
                      style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t(`aboutUs.team.member${member}.name`, `Team Member ${member}`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(`aboutUs.team.member${member}.position`, `Position ${member}`)}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutUs;
