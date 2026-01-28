import { useState } from 'react';
import '../App.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    // Reset the submitted message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact-section">
      <h2>Stay Connected</h2>
      <p className="contact-intro">
        Join our exclusive mailing list to receive updates about our latest candle collections, 
        special offers, and the art of living luxuriously.
      </p>
      
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="email-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Subscribe to Updates
          </button>
        </form>
        
        {submitted && (
          <div className="success-message">
            Thank you! You've been added to our mailing list.
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
