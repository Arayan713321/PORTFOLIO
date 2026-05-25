import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

export function Contact() {
  const ref = useScrollReveal();
  const [copied, setCopied] = useState(false);
  const emailRef = useRef(null);

  // Form states
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formFocused, setFormFocused] = useState({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(''); // success | error | ''

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFormFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, val) => {
    if (!val) {
      setFormFocused(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mimic API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFormFocused({ name: false, email: false, message: false });
      setTimeout(() => setFormStatus(''), 4000);
    }, 1200);
  };

  // Magnetic hover pull effect
  useEffect(() => {
    const el = emailRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = 'transform 0.08s ease';
    };

    const onLeave = () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="contact" className="contact section-padding" ref={ref}>
      <div className="container contact-inner">
        <div className="contact-label reveal">[ AVAILABLE FOR WORK ]</div>

        <h2 className="contact-headline reveal delay-1">
          <span className="ch-line">Let's build</span>
          <span className="ch-line ch-line-2">something.</span>
        </h2>

        <div className="contact-divider reveal delay-2" />

        {/* Email & copy button */}
        <div className="contact-email-container reveal delay-2">
          <div className="contact-magnetic-wrap">
            <a
              ref={emailRef}
              href={`mailto:${PERSONAL.email}`}
              className="contact-email"
            >
              {PERSONAL.email}
            </a>
          </div>
          <button
            className="copy-btn"
            onClick={copyEmail}
            aria-label="Copy email"
            title="Copy email"
          >
            {copied ? '✓ COPIED' : '⎘ COPY'}
          </button>
        </div>

        {/* Cheeky personality line */}
        <p className="contact-cheeky reveal delay-2">
          "I build things that ship. Drop a message and let's figure out the rest."
        </p>

        {/* Minimal line-style contact form */}
        <form className="contact-form reveal delay-3" onSubmit={handleSubmit}>
          <div className={`form-field ${formFocused.name || formData.name ? 'field-active' : ''}`}>
            <label htmlFor="name" className="field-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => handleFocus('name')}
              onBlur={(e) => handleBlur('name', e.target.value)}
              required
            />
            <div className="field-line" />
          </div>

          <div className={`form-field ${formFocused.email || formData.email ? 'field-active' : ''}`}>
            <label htmlFor="email" className="field-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => handleFocus('email')}
              onBlur={(e) => handleBlur('email', e.target.value)}
              required
            />
            <div className="field-line" />
          </div>

          <div className={`form-field ${formFocused.message || formData.message ? 'field-active' : ''}`}>
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="field-input field-textarea"
              rows="1"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => handleFocus('message')}
              onBlur={(e) => handleBlur('message', e.target.value)}
              required
            />
            <div className="field-line" />
          </div>

          <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'SENDING...' : '[ SEND MESSAGE → ]'}
          </button>

          {formStatus === 'success' && (
            <p className="form-success-msg">✓ Message transmitted successfully. Arayan will respond shortly.</p>
          )}
        </form>

        {/* Minimal Social Links */}
        <div className="contact-socials-row reveal delay-4">
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="minimal-social-link">[ GitHub ]</a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="minimal-social-link">[ LinkedIn ]</a>
          <a href={`mailto:${PERSONAL.email}`} className="minimal-social-link">[ Email ]</a>
          <a href="https://wa.me/919064508660" target="_blank" rel="noopener noreferrer" className="minimal-social-link">[ WhatsApp ]</a>
          <a href={PERSONAL.instagram} target="_blank" rel="noopener noreferrer" className="minimal-social-link">[ Instagram ]</a>
          <a href={PERSONAL.twitter} target="_blank" rel="noopener noreferrer" className="minimal-social-link">[ Twitter/X ]</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
