import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CollegeForm = () => {
  const [collegeData, setCollegeData] = useState({
    title: '',
    text: '',
    location: '',
    description: '',
    courses: '',
    fees: [],  // Initialize fees as an empty array
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollegeData({
      ...collegeData,
      [name]: value,
    });
  };

  const handleFeeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFees = [...collegeData.fees];
    updatedFees[index][name] = value;
    setCollegeData({
      ...collegeData,
      fees: updatedFees,
    });
  };

  const handleAddFee = () => {
    setCollegeData({
      ...collegeData,
      fees: [...collegeData.fees, { course: '', duration: '', fee: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken'); // Make sure the token is in localStorage
  
    try {
      const response = await axios.post(
        'http://localhost:5000/webmasterRoute/college',
        collegeData, // This is the data you're submitting
        {
          headers: {
            'authToken': token,  // Send token here in the 'authToken' header
          },
        }
      );
      console.log(response.data);
      alert('College data submitted successfully');
  
      // Reset form fields after successful submission
      setCollegeData({
        title: '',
        text: '',
        location: '',
        description: '',
        courses: '',
        fees: [],  // Reset fees array
        imageUrl: '',
      });
    } catch (error) {
      console.error('Error submitting college data', error);
      alert('An error occurred while submitting data');
    }
  };
  
  
  

  return (
    <div className="container mt-5">
      <h2 className="text-center">Add New College</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">College Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={collegeData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Text</label>
          <textarea
            className="form-control"
            id="text"
            name="text"
            rows="3"
            value={collegeData.text}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={collegeData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={collegeData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="courses" className="form-label">Courses (Comma Separated)</label>
          <input
            type="text"
            className="form-control"
            id="courses"
            name="courses"
            value={collegeData.courses}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Fees Section */}
        <div className="mb-3">
          <label className="form-label">Fees</label>
          {collegeData.fees.map((fee, index) => (
            <div className="mb-3" key={index}>
              <div className="d-flex gap-3">
                <input
                  type="text"
                  className="form-control"
                  name="course"
                  placeholder="Course"
                  value={fee.course}
                  onChange={(e) => handleFeeChange(index, e)}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  name="duration"
                  placeholder="Duration"
                  value={fee.duration}
                  onChange={(e) => handleFeeChange(index, e)}
                  required
                />
                <input
                  type="number"
                  className="form-control"
                  name="fee"
                  placeholder="Fee"
                  value={fee.fee}
                  onChange={(e) => handleFeeChange(index, e)}
                  required
                />
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={handleAddFee}>
            Add Fee
          </button>
        </div>

        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={collegeData.imageUrl}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default CollegeForm;
