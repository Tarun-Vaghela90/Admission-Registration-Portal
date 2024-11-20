// import { useLocation, Link } from 'react-router-dom';
// import './css/CollageInfo.css'
// export default function CollageInfo() {
//   const location = useLocation();
//   const { state } = location;

//   // Fake data for demonstration
//   const card = state?.card || {
//     title: "Sample University",
//     location: "City, Country",
//     description: "A leading university with a focus on research and innovation. Explore various programs and courses available.",
//     imageUrl: "https://via.placeholder.com/800x300?text=Campus+Life", // Sample image
//     courses: ["Computer Science", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Biotechnology"],
//     fees: [
//       { course: "Computer Science", duration: "4 years", fee: "$10,000/year" },
//       { course: "Mechanical Engineering", duration: "4 years", fee: "$9,500/year" },
//       { course: "Civil Engineering", duration: "4 years", fee: "$8,000/year" },
//       { course: "Electrical Engineering", duration: "4 years", fee: "$10,500/year" },
//       { course: "Biotechnology", duration: "4 years", fee: "$9,200/year" }
//     ]
//   };

//   if (!card) {
//     return <p>No college information available.</p>;
//   }

//   return (
//     <section className="collageinfo-body border border-3 p-4 rounded-3 bg-light shadow-lg">
//       {/* Carousel and College Info */}
//       <div className="d-flex flex-column flex-md-row align-items-start mt-2 p-3">
//         <div className="image-container rounded-3 overflow-hidden me-md-4 mb-3 mb-md-0" style={{ width: '100%', maxWidth: '800px', height: '300px' }}>
//           <div id="collageCarousel" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner" style={{ width: '100%', height: '100%' }}>
//               <div className="carousel-item active">
//                 <img
//                   src={card.imageUrl}
//                   className="d-block w-100 h-100"
//                   alt="Campus Life"
//                   style={{ objectFit: 'cover' }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="body-text">
//           <h2 className="university-name mb-3">{card.title}</h2>
//           <p><strong>Location:</strong> {card.location}</p>
//           <p><strong>Description:</strong> {card.description}</p>
//           <Link to="/apply" state={{ collegeName: card.title, courses: card.courses }} className="btn btn-primary mt-3">Apply Now</Link>
//         </div>
//       </div>

//       {/* Available Courses Section */}
//       <div className="course-name-body mt-4">
//         <div className="fs-3 border border-2 bg-secondary-subtle p-2 rounded-2 mb-3">
//           Available Courses
//         </div>
//         <div className="d-flex flex-wrap gap-2 mt-3">
//           {card.courses.map((course, index) => (
//             <div key={index} className="course-pill bg-primary text-white p-2 rounded-2 shadow-sm">{course}</div>
//           ))}
//         </div>
//       </div>

//       {/* Course Fees Section */}
//       <div className="course-fee-body mt-4">
//         <div className="fs-3 border border-2 bg-secondary-subtle p-2 rounded-2 mb-3">
//           Course Fees
//         </div>
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th>Course</th>
//               <th>Duration</th>
//               <th>Fee</th>
//             </tr>
//           </thead>
//           <tbody>
//             {card.fees.map((fee, index) => (
//               <tr key={index} className="hoverable-row">
//                 <td>{fee.course}</td>
//                 <td>{fee.duration}</td>
//                 <td>{fee.fee}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }


import { useLocation, Link } from "react-router-dom";
import "../css/CollageInfo.css";

export default function CollageInfo() {
  const location = useLocation();
  const { state } = location;

  const card = state?.card || {
    title: "Sample University",
    location: "City, Country",
    description:
      "A leading university with a focus on research and innovation.",
    imageUrl: "https://via.placeholder.com/800x300?text=Campus+Life",
    courses: [],
    fees: [],
  };

  if (!card) {
    return <p>No college information available.</p>;
  }

  return (
    <section className="collageinfo-body border border-3 p-4 rounded-3 bg-light shadow-lg">
      <div className="d-flex flex-column flex-md-row align-items-start mt-2 p-3">
        <div
          className="image-container rounded-3 overflow-hidden me-md-4 mb-3 mb-md-0"
          style={{ width: "100%", maxWidth: "800px", height: "300px" }}
        >
          <img
            src={card.imageUrl || "https://via.placeholder.com/800x300"}
            className="d-block w-100 h-100"
            alt="Campus Life"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="body-text">
          <h2 className="university-name mb-3">{card.name}</h2>
          <p>
            <strong>Location:</strong> {card.location}
          </p>
          <p>
            <strong>Description:</strong> {card.description}
          </p>
          <Link
            to="/apply"
            state={{ collegeName: card.name, courses: card.courses }}
            className="btn btn-primary mt-3"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {card.courses?.length > 0 ? (
        <div className="course-name-body mt-4">
          <div className="fs-3 border border-2 bg-secondary-subtle p-2 rounded-2 mb-3">
            Available Courses
          </div>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {card.courses.map((course, index) => (
              <div
                key={index}
                className="course-pill bg-primary text-white p-2 rounded-2 shadow-sm"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-4">No courses available.</p>
      )}

      {card.fees?.length > 0 ? (
        <div className="course-fee-body mt-4">
          <div className="fs-3 border border-2 bg-secondary-subtle p-2 rounded-2 mb-3">
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
                <tr key={index} className="hoverable-row">
                  <td>{fee.course}</td>
                  <td>{fee.duration}</td>
                  <td>{fee.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4">No fee details available.</p>
      )}
    </section>
  );
}
