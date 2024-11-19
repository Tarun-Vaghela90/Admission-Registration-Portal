import React, { useState, useEffect } from 'react';
import './CollegeDetailPage.css'
const CollegeDetailPage = () => {
  const [collegeData, setCollegeData] = useState(null);

  // Simulated college data fetching
  useEffect(() => {
    // Fetch college data from an API or mock data
    const fetchCollegeData = async () => {
      // Replace this mock data with a real API call to fetch college details
      const data = {
        name: 'Marwadi University',
        image: 'Assets/Man_with_Book_Hero_Section.jpg',
        description: 'Marwadi University offers a wide range of courses in Engineering, Management, and more.',
        courses: [
          {
            name: 'Computer Science Engineering',
            fee: 'INR 1,00,000',
            semesters: [
              {
                semester: '1st Semester',
                subjects: [
                  { name: 'Mathematics I', code: 'CSE101', description: 'Basic Math for Engineers' },
                  { name: 'Programming in C', code: 'CSE102', description: 'Learn C Programming' },
                ],
              },
              {
                semester: '2nd Semester',
                subjects: [
                  { name: 'Data Structures', code: 'CSE201', description: 'Learn data structures' },
                  { name: 'Operating Systems', code: 'CSE202', description: 'Intro to OS concepts' },
                ],
              },
            ],
          },
          {
            name: 'Mechanical Engineering',
            fee: 'INR 1,20,000',
            semesters: [
              {
                semester: '1st Semester',
                subjects: [
                  { name: 'Engineering Mechanics', code: 'ME101', description: 'Study of Mechanics' },
                  { name: 'Strength of Materials', code: 'ME102', description: 'Materials Science' },
                ],
              },
              {
                semester: '2nd Semester',
                subjects: [
                  { name: 'Fluid Mechanics', code: 'ME201', description: 'Study of fluids' },
                  { name: 'Thermodynamics', code: 'ME202', description: 'Principles of Thermodynamics' },
                ],
              },
            ],
          },
        ],
      };
      setCollegeData(data);
    };
    fetchCollegeData();
  }, []);

  if (!collegeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="college-detail-container">
      <div className="college-detail-header">
        <img src={collegeData.image} alt={collegeData.name} />
        <h1>{collegeData.name}</h1>
      </div>
      <div className="college-description">
        <p>{collegeData.description}</p>
      </div>
      <div className="courses-section">
        <h2>Courses Offered</h2>
        <div className="courses-list">
          {collegeData.courses.map((course, index) => (
            <div key={index} className="course-card">
              <h3>{course.name}</h3>
              <p>Fee: {course.fee}</p>
              <button
                onClick={() => {
                  const courseDetails = document.getElementById(`course-${index}`);
                  courseDetails.classList.toggle('show');
                }}
              >
                View Semesters
              </button>
              <div id={`course-${index}`} className="course-semesters">
                {course.semesters.map((semester, semIndex) => (
                  <div key={semIndex} className="semester-card">
                    <h4>{semester.semester}</h4>
                    <ul>
                      {semester.subjects.map((subject, subIndex) => (
                        <li key={subIndex}>
                          <strong>{subject.name} ({subject.code})</strong> - {subject.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailPage;
