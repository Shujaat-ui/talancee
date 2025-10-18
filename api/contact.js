// api/contact.js

const mongoose = require('mongoose');
const Contact = require('../models/Contact'); // path adjust karo
const nodemailer = require('nodemailer');
require('dotenv').config();

// MongoDB connect (Vercel serverless me har request pe connect)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.log("MongoDB connection error:", err));

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Please fill all required fields' });
    }

    try {
      // MongoDB me save
      const newContact = new Contact({ name, email, phone, subject, message });
      await newContact.save();

      // Nodemailer SMTP
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.SMTP_USER, // aapka email
        subject: subject,
        text: `Message from ${name} (${email}): ${message}`
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Message saved & email sent successfully!' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  } else {
    // GET ya dusre method allowed nahi
    res.status(405).json({ error: 'Method not allowed' });
  }
};
