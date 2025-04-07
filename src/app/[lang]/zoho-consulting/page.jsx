'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  Box, 
  Modal, 
  TextField
} from '@mui/material';
import './ZohoConsulting.css';

// ZohoConsulting component
export default function ZohoConsulting() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Service data
  const services = [
    {
      id: 1,
      title: 'Zoho CRM Implementation',
      description: 'Complete setup and implementation of Zoho CRM tailored to your business needs. We help you migrate data, customize fields, and configure workflows.',
      image: '/assets/images/zoho-crm.jpg',
      details: 'Our Zoho CRM implementation service includes:\n\n- Initial business process analysis\n- CRM configuration and setup\n- Data migration from legacy systems\n- Custom field creation\n- Workflow automation\n- Integration with other business systems\n- User training and documentation\n\nWe follow a proven methodology to ensure your CRM implementation is successful and delivers immediate value to your organization.'
    },
    {
      id: 2,
      title: 'Zoho Analytics',
      description: 'Transform your business data into actionable insights with Zoho Analytics. Custom reports and dashboards to monitor KPIs and performance metrics.',
      image: '/assets/images/zoho-analytics.jpg',
      details: 'Our Zoho Analytics service helps you:\n\n- Create custom reports and dashboards\n- Set up automated reporting\n- Visualize business data in meaningful ways\n- Track KPIs and performance metrics in real-time\n- Implement data-driven decision making\n- Connect multiple data sources\n- Schedule and share reports with stakeholders\n\nWe focus on creating analytics solutions that provide clear business insights and help drive strategic decision making.'
    },
    {
      id: 3,
      title: 'Zoho Campaigns',
      description: 'Optimize your email marketing with Zoho Campaigns. We help set up targeted campaigns, automate follow-ups, and analyze performance metrics.',
      image: '/assets/images/zoho-campaigns.jpg',
      details: 'Our Zoho Campaigns service includes:\n\n- Email template design and creation\n- Campaign automation setup\n- Segmentation and targeting strategies\n- A/B testing implementation\n- Integration with Zoho CRM\n- Performance analytics and optimization\n- Email deliverability best practices\n- Compliance with email regulations\n\nWe help you leverage the full power of Zoho Campaigns to increase engagement and conversion rates.'
    },
    {
      id: 4,
      title: 'Zoho One Implementation',
      description: 'Comprehensive implementation of the entire Zoho One suite. Integrate all your business processes from sales and marketing to finance and HR.',
      image: '/assets/images/zoho-one.jpg',
      details: 'Our Zoho One implementation service covers:\n\n- Assessment of your business needs across departments\n- Strategic implementation planning\n- Phased rollout of applications\n- Cross-application integration\n- Custom development for specific needs\n- Workflow automation across the organization\n- Comprehensive user training\n- Ongoing support and optimization\n\nWith Zoho One, we help you create a unified operational system that eliminates silos and improves efficiency across your entire organization.'
    },
    {
      id: 5,
      title: 'Zoho Customization',
      description: 'Custom development and integrations for Zoho applications. We build custom functions, modules, and integrations with third-party systems.',
      image: '/assets/images/zoho-custom.jpg',
      details: 'Our Zoho customization services include:\n\n- Custom module development\n- Function and widget creation\n- Deluge script development\n- API integration with third-party systems\n- Custom UI/UX enhancements\n- Automated workflow creation\n- Custom report generation\n- Mobile application customization\n\nWe have deep technical expertise in the Zoho ecosystem and can customize your applications to match your exact business requirements.'
    },
    {
      id: 6,
      title: 'Zoho Training',
      description: 'Comprehensive training programs for your team. We ensure your staff can fully utilize Zoho tools to maximize productivity and ROI.',
      image: '/assets/images/zoho-training.jpg',
      details: 'Our Zoho training programs include:\n\n- Role-based training sessions\n- Admin-specific advanced training\n- Custom training materials and documentation\n- Hands-on workshops\n- Video tutorials for future reference\n- Remote and on-site training options\n- Refresher courses for updates\n- Power user certification\n\nWe believe that effective training is essential for maximizing the value of your Zoho investment. Our training programs are designed to ensure high adoption rates and proficiency.'
    }
  ];

  // Open modal with service details
  const handleOpenModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Contact form handling
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Contact form submitted');
    // Usually would send data to backend/API
  };

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
    <>
      {/* Hero Section */}
      <div className="zoho-hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('Zoho Consulting Services')}
        </motion.h1>
      </div>

      {/* Introduction Section */}
      <Container maxWidth="lg">
        <motion.div 
          className="zoho-intro-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2">
            {t('Optimize Your Business with Zoho')}
          </Typography>
          <Typography variant="body1">
            {t('As certified Zoho partners, we provide expert consulting services to help you leverage the full power of Zoho applications. From implementation and customization to training and support, we ensure your Zoho solutions are optimized for your unique business needs.')}
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="zoho-services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('Our Zoho Services')}
          </Typography>
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id} className="zoho-service-card">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    onClick={() => handleOpenModal(service)}
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': {
                        boxShadow: 6,
                      },
                    }}
                    className="card"
                  >
                    <div style={{ position: 'relative', height: '200px' }}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3">
                        {t(service.title)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className="card-description">
                        {t(service.description)}
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
          <div className="cta-content">
            <Typography variant="h3" component="h3" gutterBottom>
              {t('Ready to Optimize Your Business with Zoho?')}
            </Typography>
            <Typography variant="h6" component="h4" gutterBottom>
              {t('Schedule a free consultation with our Zoho experts')}
            </Typography>
            <div className="cta-button">
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                onClick={() => {
                  const contactSection = document.querySelector('.contact-section');
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('Contact Us Today')}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="contact-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            {t('Get in Touch')}
          </Typography>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <TextField
              label={t('Your Name')}
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label={t('Email Address')}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="email"
            />
            <TextField
              label={t('Company')}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              label={t('Message')}
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              {t('Send Message')}
            </Button>
          </form>
        </motion.div>
      </Container>

      {/* Service Detail Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="service-modal-title"
        aria-describedby="service-modal-description"
      >
        <Box className="modal-content">
          {selectedService && (
            <>
              <Typography variant="h4" component="h2" gutterBottom>
                {t(selectedService.title)}
              </Typography>
              <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
                {t(selectedService.details)}
              </Typography>
              <Button
                onClick={handleCloseModal}
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                {t('Close')}
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
