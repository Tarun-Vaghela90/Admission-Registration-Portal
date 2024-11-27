import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Collage.css";

const Collage = () => {
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [colleges] = useState([
    {
      id: 1,
      name: "Parul University",
      location: "Vadodara, Gujarat",
      description:
        "A multidisciplinary university that fosters academic excellence and global exposure.",
      rank: 1,
      admission: "Online",
      courses: ["Computer Science", "MBA", "B.tech", "Mechanical"],
      fees: [
        { course: "Computer Science", duration: "4 years", fee: "$8,000/year" },
        { course: "MBA", duration: "2 years", fee: "$10,000/year" },
      ],
      imageUrl: "images/parul.jpg",
    },
    {
      id: 2,
      name: "Harvard University",
      location: "Cambridge, Massachusetts",
      description:
        "Harvard is one of the world's most prestigious universities, known for its top-tier programs.",
      rank: 2,
      admission: "Offline",
      courses: ["Law", "Business Administration", "B.tech", "BCA"],
      fees: [],
      imageUrl: "images/Harvard.webp",
    },
    {
      id: 3,
      name: "MIT",
      location: "Cambridge, Massachusetts",
      description:
        "MIT is renowned for its cutting-edge research in science and technology.",
      rank: 3,
      admission: "Online",
      courses: ["Law", "Business Administration", "B.tech", "BCA"],
      fees: [
        { course: "Law", duration: "3 years", fee: "$50,000/year" },
        { course: "Business Administration", duration: "2 years", fee: "$60,000/year" },
      ],
      imageUrl: "images/mit.jpg",
    },
    // More colleges as needed
  ]);

  const [filteredColleges, setFilteredColleges] = useState(colleges);

  const handleSearchInput = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredColleges(colleges);
    }
  };

  const handleSearch = () => {
    const results = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredColleges(results);
  };

  const handleApplyFilter = () => {
    const results = colleges.filter((college) => {
      const matchesLocation = location
        ? college.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesCourse = course
        ? college.description.toLowerCase().includes(course.toLowerCase())
        : true;
      return matchesLocation && matchesCourse;
    });
    setFilteredColleges(results);
  };

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
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="filter-option">
            <label>Course/Program</label>
            <input
              type="text"
              placeholder="Enter course/program"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <button className="apply-btn" onClick={handleApplyFilter}>
            Apply Filter
          </button>
        </aside>

        <div className="college-list">
          <div className="search-section">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by College Name"
              value={searchQuery}
              onChange={handleSearchInput}
            />
            <button className="search-btn " onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="college-cards">
            {filteredColleges.map((college) => (
              <div key={college.id} className="college-card">
                <img src={college.imageUrl} alt={college.name} />
                <div className="college-details">
                  <h2>{college.name}</h2>
                  <p>
                    <strong>{college.location}</strong>
                  </p>
                  <p className="description">{college.description}</p>
                  <p className="rank-info">
                    Rank <strong>{college.rank}/10</strong>{" "}
                    <span className="admission-status">
                      Admission Process{" "}
                      <span className={college.admission.toLowerCase()}>
                        {college.admission}
                      </span>
                    </span>
                  </p>
                  <Link
                    to="/CollageInfo"
                    state={{ card: college }}
                    className="learn-btn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
