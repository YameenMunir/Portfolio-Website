import React, { useState } from 'react';

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
    <section className="contact-form-section">
      <div className="container">
        <h3>Get In Touch</h3>
        <p className="lead">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
          Feel free to reach out!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="1eda9ba9-2c08-4abf-8464-3a1c0406f7d5" />
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number (Optional)"
                pattern="[+0-9\-() ]{7,20}"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject <span className="required">*</span></label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
                <option value="">Select a subject...</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Project Inquiry">Project Inquiry</option>
                <option value="General Question">General Question</option>
                <option value="Other">Other</option>
              </select>
            </div>

          <div className="form-group">
            <label htmlFor="company">Company/Organization</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name (Optional)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or inquiry..."
              required
            ></textarea>
          </div>

          <div className="h-captcha" data-captcha="true"></div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {showSuccess && (
            <div className="success-message show">
              Thank you for your message! I'll get back to you shortly.
            </div>
          )}

          {showError && (
            <div className="error-message">
              Something went wrong. Please try again or contact me directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
