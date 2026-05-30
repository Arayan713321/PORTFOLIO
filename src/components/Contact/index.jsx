import React, { useState } from 'react';
import { PERSONAL } from '../../data/portfolioData';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // success | loading | ''

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <section id="contact">
      <canvas id="contactCanvas" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}></canvas>
      <div className="container contact-inner">
        <div className="s-label">Transmission</div>
        <h2 className="s-title">Get In Touch</h2>
        
        <div className="contact-grid">
          
          {/* Left Column: Info & Links */}
          <div className="contact-left">
            <p>I build things that ship. Have a project you want to collaborate on or an open opportunity? Drop a secure transmission or send a message to my direct email link.</p>
            
            <div className="contact-links">
              <a href={`mailto:${PERSONAL.email}`} className="contact-link">
                <div className="contact-link-icon">📧</div>
                <div>
                  <span className="cl-label">Secure Email</span>
                  <span className="cl-val">{PERSONAL.email}</span>
                </div>
              </a>

              <a href="https://wa.me/919064508660" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-link-icon">💬</div>
                <div>
                  <span className="cl-label">WhatsApp</span>
                  <span className="cl-val">{PERSONAL.phone}</span>
                </div>
              </a>

              <div className="contact-link">
                <div className="contact-link-icon">📍</div>
                <div>
                  <span className="cl-label">Location</span>
                  <span className="cl-val">Jaipur · India · Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Form */}
          <div className="contact-form-panel">
            <div className="avail-badge">Available for Opportunities</div>
            <div className="form-title">[ INITIALIZE SECURE TRANSMISSION ]</div>
            
            <form onSubmit={handleSubmit}>
              <div className="fg">
                <label className="fl" htmlFor="name">Agent Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="e.g. John Doe"
                  className="fi" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="fg">
                <label className="fl" htmlFor="email">Return Signal Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="e.g. agent@domain.com"
                  className="fi" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="fg">
                <label className="fl" htmlFor="message">Message Data payload</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Transmit your query details..."
                  className="fi" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-cyan" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }} disabled={status === 'loading'}>
                {status === 'loading' ? 'TRANSMITTING...' : 'SEND SIGNAL ↗'}
              </button>

              {status === 'success' && (
                <p style={{ color: '#39FF6E', fontSize: '0.72rem', marginTop: '1rem', fontFamily: 'var(--font-mono)' }}>
                  ✓ SIGNAL TRANSMITTED SUCCESSFULLY. Arayan will respond shortly.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
