import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <header className="hero-section_1">
        <div className="hero-content">
          <h2>Apply for Your Future Today</h2>
          <p>Join the best institutions in the country</p>
          <Link className='apply-btn_1 btn btn-primary' to='/findcollages'>Apply Now</Link>
        </div>
      </header>

      {/* Main Features Section */}
      <div class="main-feature-section">
        <div class="feature">
          <img src="Assets/Icons/fast_benfit.svg" alt="Feature 1" class="feature-icon" />
          <h3 className='feature_h3'>Top Universitys</h3>
        </div>
        <div class="feature">
          <img src="Assets/Icons/clipboard_benfit.svg" alt="Feature 2" class="feature-icon" />
          <h3 className='feature_h3'>Seamless Application</h3>
        </div>
        <div class="feature">
          <img src="Assets/Icons/univeristy_benfit.svg" alt="Feature 3" class="feature-icon" />
          <h3 className='feature_h3'>24/7 Support</h3>
        </div>
      </div>
      {/* testimonel  section */}
      <div class="testimony-section">
        <h2 class="section-heading">Testimonials - Trusted by Students Nationwide</h2>

        <div class="testimonials-container">
          <div class="testimonial">
            <div class="testimonial-content">
              <img src="Assets/profile/male_profile_1.jpg" alt="Student 1" class="testimonial-img" />
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
              <img src="Assets/profile/female_profile_1.jpg" alt="Student 2" class="testimonial-img" />
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
              <img src="Assets/profile/male_profile_2.jpg" alt="Student 3" class="testimonial-img" />
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
              <img src="Assets/profile/female_profile_2.jpg" alt="Student 4" class="testimonial-img" />
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
      <section class="cta-section_1">
        <div class="cta-container_1">
          <h2 class="cta-heading_1">Start Your Journey Today!</h2>
          <p class="cta-quote_1">Join thousands of successful applicants and take the first step toward your dream university.</p>
          <button class="cta-button_1">Get Started</button>
        </div>
      </section>
      {/* benifit  section */}
      <section className="benefits-section_1">
        <div className="p-5">
          <h2 className="main-heading">Why Choose Our Admission Portal?</h2>
          <div className="features_1">
            <div className="feature_1">
              {/* SVG Icon for Easy Registration */}
              <div className="icon_1">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
              </div>
              <h3 className="feature-heading_1">Easy Registration</h3>
              <p className="feature-subheading_1">
                Simple and hassle-free sign-up process
              </p>
            </div>
            <div className="feature_1">
              {/* SVG Icon for Secure Data */}
              <div className="icon_1">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="feature-heading_1">Secure Data</h3>
              <p className="feature-subheading_1">Your personal data is safe with us</p>
            </div>
            <div className="feature_1">
              {/* SVG Icon for Real-Time Updates */}
              <div className="icon_1">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </div>
              <h3 className="feature-heading_1">Real-Time Updates</h3>
              <p className="feature-subheading_1">
                Stay informed with instant notifications
              </p>
            </div>
            <div className="feature_1">
              {/* SVG Icon for Advanced Search */}
              <div className="icon_1">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3 className="feature-heading_1">Advanced Search</h3>
              <p className="feature-subheading_1">Find the right colleges with ease</p>
            </div>
            <div className="feature_1">
              {/* SVG Icon for Student Support */}
              <div className="icon_1">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-headphones"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                {/* <img src='Assets/icons/headset_benfit.svg'className='a' /> */}
              </div>
              <h3 className="feature-heading_1">Student Support</h3>
              <p className="feature-subheading_1">
                Dedicated support for all your queries
              </p>
            </div>
            <div className="feature_1">
              {/* SVG Icon for Application Tracking */}
              <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>

              </div>
              <h3 className="feature-heading_1">Application Tracking</h3>
              <p className="feature-subheading_1">
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
