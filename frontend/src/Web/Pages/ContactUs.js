import React from 'react';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './css/ContactUs.css'; // Custom CSS for styling

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-cards">
        {/* Technical HelpLine Card */}
        <div className="contact-card">
          <h4 className="contact-card-title">Technical Support</h4>
          <ul className="contact-list">
            <li>
              <FaPhone className="contact-icon" />
              <span>Tarun Vaghela: 1122334455</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>Jaykumar Amrutiya: 5566778899</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>Jishanraja Ansari: 5566778899</span>
            </li>
            <li>
              <FaClock className="contact-icon" />
              <span>10:30 AM - 6:30 PM (Mon - Fri)</span>
            </li>
          </ul>
        </div>

        {/* Non-Technical HelpLine Card */}
        <div className="contact-card">
          <h4 className="contact-card-title">Non-Technical Support</h4>
          <ul className="contact-list">
            <li>
              <FaEnvelope className="contact-icon" />
              <span>Email: registration@gmail.com</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>Jackson Obama: 00000000000</span>
            </li>
            <li>
              <FaClock className="contact-icon" />
              <span>11:00 AM - 5:00 PM (Mon - Fri)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
