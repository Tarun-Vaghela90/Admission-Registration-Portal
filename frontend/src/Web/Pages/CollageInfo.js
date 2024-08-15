/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/CollageInfo.css';
import Collage_3 from './image/collage_3.jpg'
import Collage_4 from './image/collage_4.jpg'
export default function CollageInfo() {
  return (
    <section className="collageinfo-body border border-3 p-3 rounded-3 bg-light">
      
      {/* Carousel and College Info */}
      <div className="d-flex flex-row align-items-start mt-2 p-2">
        <div className="image-container rounded-3 overflow-hidden me-4">
          <div id="collageCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" style={{ width: '800px', height: '300px' }}>
              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1638036380894-a444823e88d3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="d-block custom-carousel-img"
                  alt="Campus Life"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Collage_3}
                  className="d-block custom-carousel-img"
                  alt="University Building"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Collage_4}
                  className="d-block custom-carousel-img"
                  alt="Lecture Hall"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#collageCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#collageCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="body-text">
          <h2 className="university-name mb-3">Marwadi University</h2>
          <p><strong>Location:</strong> Rajkot, Gujarat</p>
          <p><strong>Description:</strong> Marwadi University is a leading educational institution offering a variety of undergraduate and postgraduate programs. It is known for its state-of-the-art infrastructure and experienced faculty, providing students with an environment conducive to learning and innovation.</p>
          <a href="#apply" className="btn btn-primary mt-2">Apply Now</a>
        </div>
      </div>

      
      {/* Map */}
      <div className="map-container mt-4">
        <h4 className="map-title">Location Map</h4>
        <div className="map-embed border rounded-3 overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6281139564594!2d70.7946176747512!3d22.367666640451322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c972761ce515%3A0x3651e3fe1e9df4f8!2sMarwadi%20University!5e0!3m2!1sen!2sin!4v1723747412335!5m2!1sen!2sin"
            width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title="collagemap">
          </iframe>
        </div>
      </div>
      
      {/* Available Courses */}
      <div className="course-name-body mt-4">
        <div className="fs-3 border border-2 bg-secondary-subtle p-2 rounded-2">
          Available Courses
        </div>
        <div className="d-flex flex-wrap gap-2 mt-3">
          <div className="course-pill bg-primary text-white p-2 rounded-2">M.Tech</div>
          <div className="course-pill bg-primary text-white p-2 rounded-2">B.Tech</div>
          <div className="course-pill bg-primary text-white p-2 rounded-2">M.Com</div>
          <div className="course-pill bg-primary text-white p-2 rounded-2">Diploma</div>
        </div>
      </div>

      {/* Course Fees */}
      <div className="course-fee-body mt-4">
        <div className="fs-3 border border-2 bg-secondary-subtle p-2 rounded-2">
          Course Fees
        </div>
        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Course</th>
                <th>Duration</th>
                <th>Fees (per annum)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M.Tech</td>
                <td>2 Years</td>
                <td>₹1,50,000</td>
              </tr>
              <tr>
                <td>B.Tech</td>
                <td>4 Years</td>
                <td>₹2,00,000</td>
              </tr>
              <tr>
                <td>M.Com</td>
                <td>2 Years</td>
                <td>₹50,000</td>
              </tr>
              <tr>
                <td>Diploma</td>
                <td>3 Years</td>
                <td>₹40,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
