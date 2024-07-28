import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './DistrictWiseCollege.css'; // Custom styles for DistrictWiseCollege

function DistrictWiseCollege() {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [colleges, setColleges] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({}); // Store selected courses for each college

  // Define states, districts, and college data
  const states = ['Gujarat', 'Maharashtra', 'Rajasthan']; // Example states
  const districts = {
    'Gujarat': ['Ahmedabad', 'Surat'],
    'Maharashtra': ['Mumbai', 'Pune'],
    'Rajasthan': ['Jaipur', 'Udaipur'],
  }; // Example districts

  const initialCollegesData = {
    'Ahmedabad': [
      { id: 1, name: 'Gujarat University', image: 'https://via.placeholder.com/150', totalSeats: 120, courses: { 'B.Tech': 80, 'B.Sc': 40 } },
      { id: 2, name: 'Nirma University', image: 'https://via.placeholder.com/150', totalSeats: 100, courses: { 'B.Tech': 60, 'MBA': 40 } }
    ],
    'Surat': [
      { id: 3, name: 'SVNIT', image: 'https://via.placeholder.com/150', totalSeats: 150, courses: { 'B.Tech': 100, 'M.Tech': 50 } },
      { id: 4, name: 'Veer Narmad South Gujarat University', image: 'https://via.placeholder.com/150', totalSeats: 80, courses: { 'B.Com': 50, 'MBA': 30 } }
    ],
    'Mumbai': [
      { id: 5, name: 'University of Mumbai', image: 'https://via.placeholder.com/150', totalSeats: 200, courses: { 'B.A': 120, 'B.Sc': 80 } },
      { id: 6, name: 'IIT Bombay', image: 'https://via.placeholder.com/150', totalSeats: 180, courses: { 'B.Tech': 100, 'PhD': 80 } }
    ],
    'Pune': [
      { id: 7, name: 'Savitribai Phule Pune University', image: 'https://via.placeholder.com/150', totalSeats: 170, courses: { 'B.Sc': 100, 'M.Sc': 70 } },
      { id: 8, name: 'Fergusson College', image: 'https://via.placeholder.com/150', totalSeats: 90, courses: { 'B.A': 60, 'B.Sc': 30 } }
    ],
    'Jaipur': [
      { id: 9, name: 'University of Rajasthan', image: 'https://via.placeholder.com/150', totalSeats: 140, courses: { 'B.A': 80, 'B.Sc': 60 } },
      { id: 10, name: 'Malaviya National Institute of Technology', image: 'https://via.placeholder.com/150', totalSeats: 160, courses: { 'B.Tech': 120, 'M.Tech': 40 } }
    ],
    'Udaipur': [
      { id: 11, name: 'Mohanlal Sukhadia University', image: 'https://via.placeholder.com/150', totalSeats: 110, courses: { 'B.Sc': 70, 'M.Sc': 40 } },
      { id: 12, name: 'College of Technology and Engineering', image: 'https://via.placeholder.com/150', totalSeats: 130, courses: { 'B.Tech': 100, 'M.Tech': 30 } }
    ],
  };

  const [collegesData, setCollegesData] = useState(initialCollegesData);

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    setDistrict('');
    setColleges([]);
    setSelectedCourses({});
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setDistrict(selectedDistrict);
    fetchColleges(selectedDistrict);
  };

  const fetchColleges = (selectedDistrict) => {
    const colleges = collegesData[selectedDistrict] || [];
    setColleges(colleges);
  };

  const handleCourseChange = (collegeId, course) => {
    setSelectedCourses((prevSelectedCourses) => ({
      ...prevSelectedCourses,
      [collegeId]: course
    }));
  };

  const handleAdmissionSubmit = (college) => {
    const selectedCourse = selectedCourses[college.id];
    if (selectedCourse) {
      const updatedCollegesData = { ...collegesData };
      updatedCollegesData[district] = updatedCollegesData[district].map((col) => {
        if (col.id === college.id && col.courses[selectedCourse] > 0) {
          return {
            ...col,
            courses: {
              ...col.courses,
              [selectedCourse]: col.courses[selectedCourse] - 1
            }
          };
        }
        return col;
      });
      setCollegesData(updatedCollegesData);
      setSelectedCourses((prevSelectedCourses) => ({
        ...prevSelectedCourses,
        [college.id]: ''
      }));
      alert(`Admission submitted for ${college.name} in ${selectedCourse} course.`);
    } else {
      alert('Please select a course.');
    }
  };

  return (
    <div className='container'>
      <Navbar />
      <div className='mt-4'>
        <h1 className='display-4 text-center mb-4 main-heading'>District Wise College</h1>

        <div className='form-section'>
          <div className='form-group'>
            <label htmlFor="stateSelect">Select State:</label>
            <select id="stateSelect" className='form-control custom-select' value={state} onChange={handleStateChange}>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor="districtSelect">Select District:</label>
            <select id="districtSelect" className='form-control custom-select' value={district} onChange={handleDistrictChange} disabled={!state}>
              <option value="">Select District</option>
              {state && districts[state]?.map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>

        <h2 className='text-center'>Colleges:</h2>
        <div className='row'>
          {colleges.length > 0 ? (
            colleges.map((college) => (
              <div key={college.id} className='col-md-4 mb-3'>
                <div className='card college-card'>
                  <img src={college.image} className='card-img-top' alt={college.name} />
                  <div className='card-body'>
                    <h5 className='card-title'>{college.name}</h5>
                    <p className='card-text'>Total Seats Available: {college.totalSeats}</p>
                    <div className='form-group'>
                      <label htmlFor={`courseSelect-${college.id}`}>Select Course:</label>
                      <select
                        id={`courseSelect-${college.id}`}
                        className='form-control custom-select'
                        value={selectedCourses[college.id] || ''}
                        onChange={(e) => handleCourseChange(college.id, e.target.value)}
                      >
                        <option value="">Select Course</option>
                        {Object.entries(college.courses).map(([course, seats]) => (
                          <option key={course} value={course} disabled={seats === 0}>
                            {course} ({seats} seats available)
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      className='btn btn-success mt-3'
                      onClick={() => handleAdmissionSubmit(college)}
                      disabled={!selectedCourses[college.id]}
                    >
                      Submit Admission
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='col-12'>
              <p className='text-center'>No colleges found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DistrictWiseCollege;
