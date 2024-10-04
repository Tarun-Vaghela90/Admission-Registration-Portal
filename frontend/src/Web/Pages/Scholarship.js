import React from 'react';
import './css/Scholarship.css'; // For the Scholarship component styles
import './css/ScholarshipTable.css'; // For the table styles


const Scholarship = () => {
  const scholarships = [
    {
      index: 1,
      name: "MYSY Scholarship",
      type: "Government",
      applyDate: "1st June 2024",
      lastDate: "30th November 2024",
      qualification: "80%+ in 12th Grade",
    },
    {
      index: 2,
      name: "Post Matric Scholarship",
      type: "private",
      applyDate: "1st July 2024",
      lastDate: "31st August 2024",
      qualification: "70% in 12th grade",
    },
    {
      index: 3,
      name: "Indira Gandhi scholarship",
      type: "government",
      applyDate: "1st January 2024",
      lastDate: "15th March 2024",
      qualification: "Female students only",
    },
    {
      index: 4,
      name: "Engineering Scholarship",
      type: "Private",
      applyDate: "15th April 2024",
      lastDate: "15th June 2024",
      qualification: "Admission in Engineering College",
    },
    {
      index: 5,
      name: "Medical Scholarship",
      type: "Government",
      applyDate: "1st March 2024",
      lastDate: "30th June 2024",
      qualification: "Admission in Medical College",
    },
  ];

  return (
    <div className="scholarship-container">
      <h1>Scholarship Opportunities</h1>
      <p>Here you can find information about available scholarships.</p>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Type of Scholarship</th>
              <th>Apply Date</th>
              <th>Last Date of Apply</th>
              <th>Basic Qualification</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship) => (
              <tr key={scholarship.index}>
                <td>{scholarship.index}</td>
                <td>{scholarship.name}</td>
                <td>{scholarship.type}</td>
                <td>{scholarship.applyDate}</td>
                <td>{scholarship.lastDate}</td>
                <td>{scholarship.qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scholarship;
