import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './css/ApplyPage.css'; // Import custom CSS for additional styling

export default function ApplyPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileErrors, setFileErrors] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Check login status
  const [token, setToken] = useState(null); // Store login token

  // Simulate checking for a login token on component mount
  useEffect(() => {
    const userToken = localStorage.getItem('authToken');
    if (userToken) {
      setIsLoggedIn(true);
      setToken(userToken);
    }
  }, []);

  // Handle file selection and validation
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Get selected files as an array
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const newFiles = [];
    const errors = [];

    // Validate file count
    if (files.length > 3) {
      setFileErrors(['You can only upload up to 3 files.']);
      return;
    }

    // Validate each file
    files.forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        errors.push(`${file.name}: Invalid file type. Only JPG, PNG, and PDF allowed.`);
      } else if (file.size > 3 * 1024 * 1024) {
        errors.push(`${file.name}: File is larger than 3MB.`);
      } else {
        newFiles.push(file); // Only add valid files
      }
    });

    setFileErrors(errors); // Set errors if any
    setSelectedFiles(newFiles); // Set valid files
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert('Please log in first to submit the application.');
      return;
    }

    if (selectedFiles.length === 0) {
      alert('Please upload valid files.');
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    // Gather additional form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('email').value;
    const courseName = document.getElementById('courseName').value;
    const gender = document.getElementById('gender').value;
    const deadline = document.getElementById('deadline').value; // Add deadline input

    // Append additional form data to formData
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('mobileNumber', mobileNumber);
    formData.append('email', email);
    formData.append('courseName', courseName);
    formData.append('gender', gender);
    formData.append('deadline', deadline); // Include deadline in submission
    formData.append('status', 'pending'); // Set initial status

    try {
      const response = await axios.post('https://your-backend-api.com/applications', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Set Content-Type to multipart/form-data for file uploads
        },
      });

      if (response.status === 201) {
        alert('Application submitted successfully!');
        // Optionally clear form fields and files after successful submission
        setSelectedFiles([]);
        document.getElementById('applicationForm').reset();
      } else {
        alert('Failed to submit the application.');
      }
    } catch (error) {
      console.error('Error submitting the application:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="apply-page-container">
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Application Form</h1>
        <form id="applicationForm" className="row g-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>

          {/* Mobile Number */}
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="tel" className="form-control" id="mobileNumber" placeholder="Mobile Number" required />
              <label htmlFor="mobileNumber">Mobile Number</label>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="Email" required />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          {/* Course Name (Select Dropdown) */}
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <select id="courseName" className="form-select" required>
                <option value="" disabled selected>Choose a Course</option>
                <option value="btech">B.Tech</option>
                <option value="mtech">M.Tech</option>
                <option value="mba">MBA</option>
              </select>
              <label htmlFor="courseName">Course Name</label>
            </div>
          </div>

          {/* Gender */}
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <select id="gender" className="form-select" required>
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender">Gender</label>
            </div>
          </div>

          {/* Deadline */}
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="date" className="form-control" id="deadline" required />
              <label htmlFor="deadline">Application Deadline</label>
            </div>
          </div>

          {/* File Upload */}
          <div className="col-md-12">
            <label htmlFor="fileUpload" className="form-label">Upload Documents (Max 3 files)</label>
            <input type="file" className="form-control" id="fileUpload" multiple onChange={handleFileChange} />
            {fileErrors.length > 0 && (
              <div className="alert alert-danger mt-2">
                {fileErrors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
}
