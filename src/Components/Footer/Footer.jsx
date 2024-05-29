import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your brand's mission and story here.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
            {/* Add more links */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
            {/* Add more links */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: arjunsharma6622@gmail.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 ECOMMERCE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
