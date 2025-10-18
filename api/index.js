require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const serverless = require('serverless-http');  // 👈 Vercel ke liye required
const Contact = require('../models/Contact');   // 👈 Path sahi hona chahiye

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// ✅ Routes
app.get('/', (req, res) => {
  res.send('Backend is running ✅');
});

app.post('/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill all required fields' });
  }

  try {
    // Save in DB
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    // Send Mail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `New Contact: ${subject}`,
      text: message,
    });

    res.status(200).json({ message: 'Message saved & email sent!' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ Important: Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
