import React, { useState } from 'react';
import './ThemeContact.css';

function ThemeContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccess('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSuccess('Failed to send message. Try again.');
      }
    } catch (err) {
      console.error(err);
      setSuccess('Error sending message. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-top">
        <h1 className="contact-heading">We’ve been<br /> waiting for you!</h1>
        <p className="contact-paragraph">
          Add the best talent on the market, an <br />  agile skilled management & seamless <br />  involvement
        </p>
      </div>

      <div className="contact-bottom">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>We want to hear from you. Let’s us <br /> know how we can help!</h2>
          <p>+91 99990 08008<br />+91 95605 48638<br />hello@talencee.com</p>
          <p>Ground, 1st Floor, SupremeWork Co-working Space, Plot No. 84, Institutional Area, Prem Puri, Sector 32, Gurugram, Haryana 122001</p>
        </div>

        {/* RIGHT FORM */}
      <div className="contact-form">
  <form onSubmit={handleSubmit}>
    {/* First row: Name + Email */}
    <div className="form-row">
      <input
        type="text"
        name="name"
        placeholder="Name *"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    {/* Second row: Phone + Subject */}
    <div className="form-row">
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject *"
        value={formData.subject}
        onChange={handleChange}
        required
      />
    </div>

    {/* Third row: Message */}
    <textarea
      name="message"
      placeholder="Message"
      rows="5"
      value={formData.message}
      onChange={handleChange}
      required
    ></textarea>

    <button type="submit" disabled={loading}>
      {loading ? 'Sending...' : 'Send Message'}
    </button>

    {success && <p className="form-success">{success}</p>}
  </form>
</div>



      </div>
    </section>
  );
}

export default ThemeContact;
