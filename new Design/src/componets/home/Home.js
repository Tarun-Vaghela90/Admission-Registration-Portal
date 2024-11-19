import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div>
      <header className="hero-section">
        <div className="hero-content">
          <h2>Apply for Your Future Today</h2>
          <p>Join the best institutions in the country</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </header>
      
      {/* Main Features Section */}
      <div class="main-feature-section">
  <div class="feature">
    <img src="/Assets/Icons/fast_benfit.svg" alt="Feature 1" class="feature-icon"/>
    <h3>Feature 1</h3>
  </div>
  <div class="feature">
    <img src="/Assets/Icons/clipboard_benfit.svg" alt="Feature 2" class="feature-icon"/>
    <h3>Feature 2</h3>
  </div>
  <div class="feature">
    <img src="/Assets/Icons/univeristy_benfit.svg" alt="Feature 3" class="feature-icon"/>
    <h3>Feature 3</h3>
  </div>
</div>
{/* testimonel  section */}
<div class="testimony-section">
  <h2 class="section-heading">Testimonials - Trusted by Students Nationwide</h2>
  
  <div class="testimonials-container">
    <div class="testimonial">
      <div class="testimonial-content">
        <img src="Assets/profile/male_profile_1.jpg" alt="Student 1" class="testimonial-img"/>
        <div class="testimonial-text">
          <h3 class="name">John Doe</h3>
          <p class="subheading">Student at XYZ College</p>
          <blockquote class="testimonial-quote">
            <p>"This platform has made the admission process so much easier for me. I am grateful for all the support!"</p>
          </blockquote>
        </div>
      </div>
    </div>
    
    <div class="testimonial">
      <div class="testimonial-content">
        <img src="Assets/profile/female_profile_1.jpg" alt="Student 2" class="testimonial-img"/>
        <div class="testimonial-text">
          <h3 class="name">Jane Smith</h3>
          <p class="subheading">Student at ABC University</p>
          <blockquote class="testimonial-quote">
            <p>"I found my dream college through this platform. The process was smooth and hassle-free!"</p>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="testimonial">
      <div class="testimonial-content">
        <img src="Assets/profile/male_profile_2.jpg" alt="Student 3" class="testimonial-img"/>
        <div class="testimonial-text">
          <h3 class="name">Alex Brown</h3>
          <p class="subheading">Student at DEF College</p>
          <blockquote class="testimonial-quote">
            <p>"The college options and resources provided were great! Highly recommended for future students."</p>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="testimonial">
      <div class="testimonial-content">
        <img src="Assets/profile/female_profile_2.jpg" alt="Student 4" class="testimonial-img"/>
        <div class="testimonial-text">
          <h3 class="name">Emily White</h3>
          <p class="subheading">Student at GHI University</p>
          <blockquote class="testimonial-quote">
            <p>"A seamless experience from application to admission. I had all the information I needed."</p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</div>
{/* CTA Section */}
<section class="cta-section">
  <div class="cta-container">
    <h2 class="cta-heading">Start Your Journey Today!</h2>
    <p class="cta-quote">Join thousands of successful applicants and take the first step toward your dream university.</p>
    <button class="cta-button">Get Started</button>
  </div>
</section>
{/* benifit  section */}
<section className="benefits-section">
  <div className="container">
    <h2 className="main-heading">Why Choose Our Admission Portal?</h2>
    <div className="features">
      <div className="feature">
        {/* SVG Icon for Easy Registration */}
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={50}
            height={50}
            fill="#A8D083"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-7c-2.67 0-4-2.5-4-4s1.33-4 4-4 4 2.5 4 4-1.33 4-4 4z" />
          </svg>
        </div>
        <h3 className="feature-heading">Easy Registration</h3>
        <p className="feature-subheading">
          Simple and hassle-free sign-up process
        </p>
      </div>
      <div className="feature">
        {/* SVG Icon for Secure Data */}
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={50}
            height={50}
            fill="#A8D083"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-7c-2.67 0-4-2.5-4-4s1.33-4 4-4 4 2.5 4 4-1.33 4-4 4z" />
          </svg>
        </div>
        <h3 className="feature-heading">Secure Data</h3>
        <p className="feature-subheading">Your personal data is safe with us</p>
      </div>
      <div className="feature">
        {/* SVG Icon for Real-Time Updates */}
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={50}
            height={50}
            fill="#A8D083"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-7c-2.67 0-4-2.5-4-4s1.33-4 4-4 4 2.5 4 4-1.33 4-4 4z" />
          </svg>
        </div>
        <h3 className="feature-heading">Real-Time Updates</h3>
        <p className="feature-subheading">
          Stay informed with instant notifications
        </p>
      </div>
      <div className="feature">
        {/* SVG Icon for Advanced Search */}
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={50}
            height={50}
            fill="#A8D083"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-7c-2.67 0-4-2.5-4-4s1.33-4 4-4 4 2.5 4 4-1.33 4-4 4z" />
          </svg>
        </div>
        <h3 className="feature-heading">Advanced Search</h3>
        <p className="feature-subheading">Find the right colleges with ease</p>
      </div>
      <div className="feature">
        {/* SVG Icon for Student Support */}
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={50}
            height={50}
            fill="#A8D083"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-7c-2.67 0-4-2.5-4-4s1.33-4 4-4 4 2.5 4 4-1.33 4-4 4z" />
          </svg>
        </div>
        <h3 className="feature-heading">Student Support</h3>
        <p className="feature-subheading">
          Dedicated support for all your queries
        </p>
      </div>
      <div className="feature">
        {/* SVG Icon for Application Tracking */}
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={50}
            height={50}
            fill="#A8D083"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-7c-2.67 0-4-2.5-4-4s1.33-4 4-4 4 2.5 4 4-1.33 4-4 4z" />
          </svg>
        </div>
        <h3 className="feature-heading">Application Tracking</h3>
        <p className="feature-subheading">
          Track your application status in real-time
        </p>
      </div>
    </div>
  </div>
</section>
{/* join event  section */}
<section className="events-section">
  <h2>Join Our Upcoming Events</h2>
  <p className="subtitle">
    Stay informed and enhance your admission experience with our informative
    webinars and workshops
  </p>
  <div className="event-card">
    <div className="event-image">
      <img src="Assets/profile/female_profile_1.jpg" alt="Event image" />
    </div>
    <div className="event-details">
      <h3>College Admissions Webinar</h3>
      <p>October 25, 2024</p>
      <p>3:00 PM - 4:00 PM IST</p>
      <p>
        Join our experts for a detailed overview of the college admissions
        process.
      </p>
      <button className="register-btn">Register Now</button>
    </div>
  </div>
</section>
<footer className="footer">
  <div className="footer-links">
    <a href="#" className="footer-link">
      Home
    </a>
    <a href="#" className="footer-link">
      About Us
    </a>
    <a href="#" className="footer-link">
      Admission
    </a>
    <a href="#" className="footer-link">
      Contact Us
    </a>
    <a href="#" className="footer-link">
      Privacy Policy
    </a>
    <a href="#" className="footer-link">
      Terms Of Service
    </a>
  </div>
  <div className="footer-social">
    <a href="#">
      <img
        src="https://img.icons8.com/ios-filled/30/ffffff/instagram-new.png"
        alt="Instagram"
      />
    </a>
    <a href="#">
      <img
        src="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png"
        alt="LinkedIn"
      />
    </a>
    <a href="#">
      <img
        src="https://img.icons8.com/ios-filled/30/ffffff/facebook-f.png"
        alt="Facebook"
      />
    </a>
    <a href="#">
      <img
        src="https://img.icons8.com/ios-filled/30/ffffff/twitter-squared.png"
        alt="Twitter"
      />
    </a>
  </div>
</footer>

    </div>
  );
}
