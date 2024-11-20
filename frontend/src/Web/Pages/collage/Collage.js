import React from 'react';
import './Collage.css';

const Collage = () => {
  return (
    <div className="collage-container">
      <header className="header">
        <h1>Find Your College</h1>
      </header>

      <div className="main-content">
        <aside className="filter-section">
          <h3>Filter</h3>
          <div className="filter-option">
            <label>Location</label>
            <input type="text" placeholder="Enter location" />
          </div>
          <div className="filter-option">
            <label>Course/Program</label>
            <input type="text" placeholder="Enter course/program" />
          </div>
          
          <button className="apply-btn">Apply Filter</button>
        </aside>

        <div className="college-list">
          <div className="search-section">
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Search by College Name" 
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="college-cards">
            {/* First card */}
            <div className="college-card">
              <img src="images/parul.jpg" alt="Parul University" />
              <div className="college-details">
                <h2>Parul University</h2>
                <p><strong>Vadodara, Gujarat</strong></p>
                <p className="description">
                  A multidisciplinary university that fosters academic excellence and global exposure. Parul University is recognized for its diverse courses in medical, technical, and management fields.
                </p>
                <p className="rank-info">
                  Rank <strong>1/10</strong> <span className="admission-status">Admission Process <span className="online">Online</span></span>
                </p>
                <button className="learn-btn">Learn More</button>
              </div>
            </div>

            {/* Fake College 1 */}
            <div className="college-card">
              <img src="images/Harvard.webp" alt="Harvard University" />
              <div className="college-details">
                <h2>Harvard University</h2>
                <p><strong>Cambridge, Massachusetts</strong></p>
                <p className="description">
                  Harvard is one of the world's most prestigious universities, known for its top-tier programs in law, medicine, business, and technology.
                </p>
                <p className="rank-info">
                  Rank <strong>2/10</strong> <span className="admission-status">Admission Process <span className="online">Offline</span></span>
                </p>
                <button className="learn-btn">Learn More</button>
              </div>
            </div>

            {/* Fake College 2 */}
            <div className="college-card">
              <img src="images/mit.jpg" alt="MIT" />
              <div className="college-details">
                <h2>MIT (Massachusetts Institute of Technology)</h2>
                <p><strong>Cambridge, Massachusetts</strong></p>
                <p className="description">
                  MIT is renowned for its cutting-edge research in science and technology, offering world-class programs in engineering, computer science, and artificial intelligence.
                </p>
                <p className="rank-info">
                  Rank <strong>3/10</strong> <span className="admission-status">Admission Process <span className="online">Online</span></span>
                </p>
                <button className="learn-btn">Learn More</button>
              </div>
            </div>

            {/* Fake College 3 */}
            <div className="college-card">
              <img src="Assets/cta_background.jpg" alt="Stanford University" />
              <div className="college-details">
                <h2>Stanford University</h2>
                <p><strong>Stanford, California</strong></p>
                <p className="description">
                  Stanford is a leading research university, famous for its entrepreneurial spirit and strong programs in business, technology, and the sciences.
                </p>
                <p className="rank-info">
                  Rank <strong>4/10</strong> <span className="admission-status">Admission Process <span className="online">Offline</span></span>
                </p>
                <button className="learn-btn">Learn More</button>
              </div>
            </div>

            {/* Fake College 4 */}
            <div className="college-card">
              <img src="Assets/cta_background.jpg" alt="Oxford University" />
              <div className="college-details">
                <h2>Oxford University</h2>
                <p><strong>Oxford, England</strong></p>
                <p className="description">
                  Oxford is the oldest university in the English-speaking world, offering a wide range of programs in humanities, science, and law.
                </p>
                <p className="rank-info">
                  Rank <strong>5/10</strong> <span className="admission-status">Admission Process <span className="online">Online</span></span>
                </p>
                <button className="learn-btn">Learn More</button>
              </div>
            </div>

            {/* Fake College 5 */}
            <div className="college-card">
              <img src="Assets/cta_background.jpg" alt="Cambridge University" />
              <div className="college-details">
                <h2>Cambridge University</h2>
                <p><strong>Cambridge, England</strong></p>
                <p className="description">
                  Cambridge University is a top-tier institution, known for its rigorous academics in science, engineering, and arts.
                </p>
                <p className="rank-info">
                  Rank <strong>6/10</strong> <span className="admission-status">Admission Process <span className="online">Offline</span></span>
                </p>
                <button className="learn-btn">Learn More</button>
              </div>
            </div>

            {/* Fake College 6 */}
            <div className="college-card">
              <img src="Assets/cta_background.jpg" alt="ETH Zurich" />
              <div className="college-details">
                <h2>ETH Zurich</h2>
                <p><strong>Zurich, Switzerland</strong></p>
                <p className="description">
                  ETH Zurich is known for its excellence in science, technology, and engineering, consistently ranking among the world's best universities.
                </p>
                <p className="rank-info">
                  Rank <strong>7/10</strong> <span className="admission-status">Admission Process <span className="online">Online</span></span>
                </p>
                <button className="learn-btn">Learn More</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
