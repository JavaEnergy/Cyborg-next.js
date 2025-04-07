'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setStatus(t('contact.success_message'));
          setStatusType('success');
          formRef.current.reset();
          setLoading(false);

          // Trigger the conversion event
          if (window.gtagSendEvent) {
            window.gtagSendEvent();
          }
        },
        (error) => {
          console.log('Email sending failed:', error.text);
          setStatus(t('contact.error_message'));
          setStatusType('error');
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          name="user_name"
          placeholder={t('contact.name_placeholder')}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder={t('contact.email_placeholder')}
          required
        />
        <textarea
          name="user_message"
          placeholder={t('contact.message_placeholder')}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? t('contact.sending') : t('contact.send_button')}
        </button>
        {status && (
          <p className={`status-message ${statusType}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 