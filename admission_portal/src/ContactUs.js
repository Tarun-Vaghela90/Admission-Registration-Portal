import React from 'react';
import './ContactUs.css';


const ContactUs = () => {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Community Name: College Admission Portal</h5>
          <p className="card-text"><strong>Address:</strong> 123 Main Street, City, State, ZIP</p>
          <p className="card-text"><strong>Email:</strong> contact@admissionportal.com</p>
          <p className="card-text"><strong>Mobile No:</strong> +1 234 567 890</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
