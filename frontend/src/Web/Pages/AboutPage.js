import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mt-5 bg-light rounded p-5">
      <h1 className="text-center mb-4">About Us</h1>

      <section className="mb-5 ">
        <h2>Introduction</h2>
        <p>
          Welcome to the Admission Registration Portal of <strong>[Institution Name]</strong>. We are dedicated to providing a seamless and efficient platform for students to apply for admissions to various programs offered by our esteemed institution. Our portal is designed to simplify the application process, making it accessible and convenient for students across the globe.
        </p>
      </section>

      <section className="mb-5">
        <h2>Our Mission</h2>
        <p>
          Our mission is to ensure that every eligible student has the opportunity to apply for and gain access to quality education. We strive to eliminate barriers to higher education by providing a transparent and user-friendly admission process. We are committed to excellence, integrity, and fairness in all aspects of our operations.
        </p>
      </section>

      <section className="mb-5">
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Wide Range of Programs:</strong> We offer a variety of undergraduate, postgraduate, and diploma programs across multiple disciplines.</li>
          <li><strong>User-Friendly Interface:</strong> Our portal is designed with simplicity in mind, ensuring that even first-time users can navigate and complete their applications with ease.</li>
          <li><strong>Secure Payment Gateway:</strong> We provide a secure and reliable payment gateway for processing application fees.</li>
          <li><strong>Real-Time Updates:</strong> Stay informed with real-time updates on your application status, merit lists, and important deadlines.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Trusted Platform:</strong> Our portal is trusted by thousands of students for its reliability and accuracy.</li>
          <li><strong>24/7 Support:</strong> We offer round-the-clock support to assist with any queries or issues during the application process.</li>
          <li><strong>Fair Admission Process:</strong> We ensure a transparent and merit-based admission process to select the most deserving candidates.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Get in Touch</h2>
        <p>
          For any inquiries or support, please contact our helpdesk at email@gmail.com  or +917777677688.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;