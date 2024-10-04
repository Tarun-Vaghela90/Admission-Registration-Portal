import React, { useState, useEffect } from 'react';
import './css/ApplicationPage.css';  // Custom CSS for styling
import './css/ApplicationPageTable.css';
import axios from 'axios';

const ApplicationPage = () => {
  const [appliedColleges, setAppliedColleges] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchAppliedColleges = async () => {
      try {
        const authToken = localStorage.getItem('authToken'); // Get token from local storage
        const response = await axios.get('http://localhost:5000/userApplication/my-applications', {
          headers: {
            'AuthToken': authToken // Send the token in headers
          },
        });

        setAppliedColleges(response.data); // Assuming response data is an array of college applications
      } catch (error) {
        setError('Failed to fetch applied colleges. Please try again later.');
        console.error('Error fetching data:', error); // Log the error for debugging
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchAppliedColleges(); // Call the function to fetch data
  }, []);

  return (
    <div className="application-container">
      <h2>Colleges You Have Applied To</h2>
      {loading ? ( // Display loading indicator while fetching data
        <p>Loading...</p>
      ) : error ? ( // Display error message if fetching fails
        <p className="text-danger">{error}</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Course Name</th>
              <th>College Name</th>
              <th>Status</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody>
            {appliedColleges.length > 0 ? (
              appliedColleges.map((college, index) => (
                <tr key={college._id}> {/* Use the unique ID for the key */}
                  <td>{index + 1}</td>
                  <td>{college.firstName}</td>
                  <td>{college.lastName}</td>
                  <td>{college.courseName}</td>
                  <td>{college.collegeName}</td>
                  <td>{college.status}</td>
                  <td>{new Date(college.submissionDate).toLocaleDateString()}</td> {/* Format submission date */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">You have not applied to any colleges yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApplicationPage;
