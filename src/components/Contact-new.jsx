import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  DevicePhoneMobileIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '1eda9ba9-2c08-4abf-8464-3a1c0406f7d5',
          ...formData
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          company: '',
          message: ''
        });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modern-contact-section">
      <div className="section-header">
        <motion.div 
          className="section-icon-container"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <EnvelopeIcon className="section-icon" />
        </motion.div>
        <div>
          <h3 className="section-title">Get In Touch</h3>
          <p className="section-subtitle">Let's discuss opportunities and innovative projects</p>
        </div>
      </div>

      <div className="contact-content-grid">
        {/* Contact Info Cards */}
        <motion.div 
          className="contact-info-section"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="contact-info-title">Connect With Me</h4>
          
          <div className="contact-cards">
            <motion.a 
              href="mailto:yameenmunir05@gmail.com" 
              className="modern-contact-card"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="contact-card-icon">
                <EnvelopeIcon />
              </div>
              <div className="contact-card-info">
                <h5>Email</h5>
                <span>yameenmunir05@gmail.com</span>
              </div>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/yameen-munir/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modern-contact-card"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
                </svg>
              </div>
              <div className="contact-card-info">
                <h5>LinkedIn</h5>
                <span>Professional Network</span>
              </div>
            </motion.a>

            <motion.a 
              href="https://github.com/YameenMunir" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modern-contact-card"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <div className="contact-card-info">
                <h5>GitHub</h5>
                <span>Code Repository</span>
              </div>
            </motion.a>

            <motion.div 
              className="modern-contact-card location-card"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="contact-card-icon">
                <MapPinIcon />
              </div>
              <div className="contact-card-info">
                <h5>Location</h5>
                <span>London, UK</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form-section"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="contact-form-title">Send a Message</h4>
          
          <form onSubmit={handleSubmit} className="modern-contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 123 456 7890"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, opportunity, or collaboration idea..."
              />
            </div>

            <motion.button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="submit-icon" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {showSuccess && (
              <motion.div 
                className="form-message success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <CheckCircleIcon className="message-icon" />
                <div>
                  <h5>Message Sent Successfully!</h5>
                  <p>Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {showError && (
              <motion.div 
                className="form-message error-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <ExclamationTriangleIcon className="message-icon" />
                <div>
                  <h5>Message Failed to Send</h5>
                  <p>Please try again or contact me directly via email.</p>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
