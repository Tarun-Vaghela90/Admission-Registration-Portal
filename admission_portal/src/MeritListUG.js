import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './MeritListPage.css'; // Custom styles for Merit List Page

function MeritListPage() {
  // Example data for students and colleges
  const students = {
    categoryA: [
      { name: 'Student A', score: 95 },
      { name: 'Student B', score: 94 },
      { name: 'Student C', score: 93 },
      // Add more students as needed
    ],
    categoryB: [
      { name: 'Student D', score: 92 },
      { name: 'Student E', score: 91 },
      { name: 'Student F', score: 90 },
      // Add more students as needed
    ],
  };

  const colleges = [
    { name: 'College X', minScore: 90 },
    { name: 'College Y', minScore: 92 },
    { name: 'College Z', minScore: 94 },
    // Add more colleges as needed
  ];

  // Function to get eligible colleges based on score
  const getEligibleColleges = (score) => {
    return colleges.filter(college => score >= college.minScore);
  };

  return (
    <div className='container merit-list-container'>
      <Navbar />
      <div className='mt-4'>
        <h1 className='text-center'>Merit List for Undergraduate Programs</h1>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <div className='category-card'>
              <h2 className='category-title'>Category A</h2>
              <ul className='list-group list-group-flush'>
                {students.categoryA.map((student, index) => (
                  <li className='list-group-item' key={index}>
                    {student.name} - Score: {student.score}%
                    <ul className='mt-2'>
                      {getEligibleColleges(student.score).map((college, index) => (
                        <li key={index} className='text-muted'>Eligible for: {college.name}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='category-card'>
              <h2 className='category-title'>Category B</h2>
              <ul className='list-group list-group-flush'>
                {students.categoryB.map((student, index) => (
                  <li className='list-group-item' key={index}>
                    {student.name} - Score: {student.score}%
                    <ul className='mt-2'>
                      {getEligibleColleges(student.score).map((college, index) => (
                        <li key={index} className='text-muted'>Eligible for: {college.name}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeritListPage;
