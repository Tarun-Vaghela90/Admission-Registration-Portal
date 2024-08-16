import { useLocation } from 'react-router-dom';

export default function CollageInfo() {
  const location = useLocation();
  const { state } = location;
  const card = state?.card;

  if (!card) {
    return <p>No college information available.</p>;
  }

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
            </div>
          </div>
        </div>

        <div className="body-text">
          <h2 className="university-name mb-3">{card.title}</h2>
          <p><strong>Location:</strong> {card.location}</p>
          <p><strong>Description:</strong> {card.description}</p>
          <a href="#apply" className="btn btn-primary mt-2">Apply Now</a>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="course-name-body mt-4">
        <div className="fs-3 border border-2 bg-secondary-subtle p-2 rounded-2">
          Available Courses
        </div>
        <div className="d-flex flex-wrap gap-2 mt-3">
          {card.courses.map((course, index) => (
            <div key={index} className="course-pill bg-primary text-white p-2 rounded-2">{course}</div>
          ))}
        </div>
      </div>

      <div className="course-fee-body mt-4">
        <div className="fs-3 border border-2 bg-secondary-subtle p-2 rounded-2">
          Course Fees
        </div>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Course</th>
              <th>Duration</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {card.fees.map((fee, index) => (
              <tr key={index}>
                <td>{fee.course}</td>
                <td>{fee.duration}</td>
                <td>{fee.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
