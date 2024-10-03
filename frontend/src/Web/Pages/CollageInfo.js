import { useLocation, Link } from 'react-router-dom';

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
        <div className="image-container rounded-3 overflow-hidden me-4" style={{ width: '800px', height: '300px' }}>
          <div id="collageCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" style={{ width: '100%', height: '100%' }}>
              <div className="carousel-item active">
                <img
                  src={card.imageUrl}
                  className="d-block w-100 h-100"
                  alt="Campus Life"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {/* Add more images if needed */}
            </div>
          </div>
        </div>

        <div className="body-text">
          <h2 className="university-name mb-3">{card.title}</h2>
          <p><strong>Location:</strong> {card.location}</p>
          <p><strong>Description:</strong> {card.description}</p>
          <Link to={{ pathname: "/apply", state: { card } }} className="btn btn-primary mt-2">Apply Now</Link>
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
