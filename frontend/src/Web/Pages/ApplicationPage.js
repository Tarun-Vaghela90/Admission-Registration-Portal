import React, { useState, useEffect } from 'react';
import './css/ApplicationPage.css';  // Custom CSS for styling
import './css/ApplicationPageTable.css';
import axios from 'axios';

const ApplicationPage = () => {
  const [appliedColleges, setAppliedColleges] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle errors
  const [approvedApplications, setApprovedApplications] = useState([]); // To store approved applications

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

  // Filter applications based on the deadline and status
  const currentDate = new Date();
  const filteredColleges = appliedColleges.filter(college => {
    const submissionDate = new Date(college.submissionDate);
    const deadlineDate = new Date(college.deadline); // Assuming each college object has a deadline field

    // Include only applications that are still valid
    return submissionDate <= currentDate && deadlineDate >= currentDate;
  });

  // Find approved applications to display alerts
  useEffect(() => {
    const approved = filteredColleges.filter(college => college.status === 'approved');
    setApprovedApplications(approved);
  }, [filteredColleges]);

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
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college, index) => (
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

      {/* Display a confirmation message for approved applications */}
      {approvedApplications.length > 0 && (
        <div className="alert alert-success mt-4">
          You have been approved for admission for the following applications:
          <ul>
            {approvedApplications.map((application, index) => (
              <li key={index}>
                <strong>First Name:</strong> {application.firstName} - <strong>Application:</strong> {application.courseName} at <strong>College:</strong> {application.collegeName} - <strong>Deadline:</strong> {new Date(application.deadline).toLocaleDateString()}
              </li>
            ))}
          </ul>
          Please confirm your admission by visiting the respective college.
        </div>
      )}
    </div>
  );
};

export default ApplicationPage;
