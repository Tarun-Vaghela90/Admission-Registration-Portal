// src/Pages/CounselingPage.js
import React from 'react';
import './css/CounselingPage.css';

const CounselingPage = () => {
  return (
    <div className="counseling-page-container">
      {/* Header Section */}
      <header className="counseling-header">
        <h1>Academic Counseling</h1>
        <p>Your gateway to expert academic advice, admissions guidance, and personalized counseling for a successful future.</p>
      </header>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="intro-text">
          <h2>Why Academic Counseling?</h2>
          <p>
            Making the right academic decisions can be daunting. Our academic counseling services are designed to help students like you
            make informed choices about courses, universities, and career paths. Let us guide you every step of the way!
          </p>
        </div>
        <div className="intro-image">
          <img src="/images/mit.jpg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="counseling-services">
        <h2>Our Counseling Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Admission Guidance</h3>
            <p>We assist you in choosing the right university, understanding admission requirements, and preparing your application.</p>
          </div>
          <div className="service-item">
            <h3>Course Selection</h3>
            <p>Get expert advice on selecting courses that align with your academic strengths and career ambitions.</p>
          </div>
          <div className="service-item">
            <h3>Career Path Planning</h3>
            <p>Our counselors help you identify your long-term career goals and outline the academic journey needed to achieve them.</p>
          </div>
          <div className="service-item">
            <h3>Interview Preparation</h3>
            <p>Prepare for university interviews with mock sessions, tips on answering questions, and boosting your confidence.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>
            Whether you're unsure about your academic path or need help with your admission process, we're here to help. 
            Book a session today to get personalized counseling and start your journey towards academic success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CounselingPage;
