// ContactUsPage.js
import React from 'react';
import Navbar from './Navbar';
//import './ContactUsPage.css'; // Custom CSS for Contact Us page

function ContactUsPage() {
  return (
    <div className='container'>
      <Navbar />
      <div className='mt-4'>
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need assistance, please feel free to contact us.
        </p>
        <p>
          Email: jaypatel4399@gmail.com<br />
          Phone: +91 9998216186<br />
          Address: nana mova road, rajkot, gujarat, india
        </p>
      </div>
    </div>
  );
}

export default ContactUsPage;
