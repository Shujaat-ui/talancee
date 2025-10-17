import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <p>🖐️ HELLO</p>
        <h1>LET'S TALK<br />WITH US</h1>
        <p>hello@example.com</p>
      </div>

  {/* Bottom row */}
<div className="footer-bottom">
  {/* Left */}
  <div className="footer-left">© 2025-26 Talencee Agency</div>

  {/* Middle */}
  <div className="footer-middle">
    <a href="#">Agency</a>
    <a href="#">Career</a>
    <a href="#">Privacy</a>
    <a href="#">Terms & Condition</a>
  </div>

  {/* Right */}
  <div className="footer-right">
    <a href="#"><FaFacebookF /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaInstagram /></a>
    <a href="#"><FaYoutube /></a>
  </div>
</div>
    </footer>
  );
}

export default Footer;
