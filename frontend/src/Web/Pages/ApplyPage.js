import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ApplyPage.css';

export default function ApplyPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { collegeName, courses } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    courseName: '',
    fileUpload: null,
    gender: '',
  });

  const authToken = localStorage.getItem('authToken');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      fileUpload: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate mobile number to be exactly 10 digits
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(formData.mobileNumber)) {
      alert('Mobile number must be exactly 10 digits.');
      return;
    }

    // Check if the user is authenticated
    if (!authToken) {
      alert('You must be logged in to submit the application.');
      return;
    }

    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('mobileNumber', formData.mobileNumber);
    data.append('email', formData.email);
    data.append('courseName', formData.courseName);
    data.append('gender', formData.gender);
    data.append('collegeName', collegeName);
    if (formData.fileUpload) {
      data.append('files', formData.fileUpload);
    }

    try {
      const response = await axios.post('http://localhost:5000/userApplication/apply', data, {
        headers: {
          'authToken': authToken, // Use correct token header
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Application submitted successfully!');
      console.log(response.data);

      // Redirect to MyCart with formData after successful submission
      navigate('/payment', { state: { formData } });
    } catch (error) {
      if (error.response) {
        console.error('Error submitting application:', error.response.data);
        alert(`Error: ${error.response.data.error || 'Error submitting application. Please try again.'}`);
      } else if (error.request) {
        console.error('Error submitting application: No response from server.');
        alert('Error submitting application: No response from server.');
      } else {
        console.error('Error submitting application:', error.message);
        alert('Error submitting application. Please try again.');
      }
    }
  };

  return (
    <div className="apply-page-container">
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Application Form for {collegeName}</h1>
        <form className="row g-4" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              <label htmlFor="mobileNumber">Mobile Number</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3">
              <select
                id="courseName"
                name="courseName"
                className="form-select"
                value={formData.courseName}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Choose a Course</option>
                {courses && courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
              <label htmlFor="courseName">Course Name</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input
                type="file"
                className="form-control"
                id="fileUpload"
                name="fileUpload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
              <label htmlFor="fileUpload">Upload Supporting Documents (PDF/DOC)</label>
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select
              id="gender"
              name="gender"
              className="form-select"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
