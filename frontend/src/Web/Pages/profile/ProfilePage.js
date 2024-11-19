import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaUser, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'; // Import icons for styling
import '../css/ProfilePage.css'; // Add your custom CSS for additional styling

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const authToken = localStorage.getItem('authToken'); // Ensure you're retrieving the token from localStorage

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/auth/getuser', {}, {
          headers: {
            'authToken': authToken, // Use the new key name for the auth token
          },
        });
        setUserData(response.data); // Set the user data from the API response
      } catch (err) {
        console.error('Failed to fetch user data:', err);
        setError('Failed to fetch user data. Please try again later.');
      }
    };

    if (authToken) {
      fetchUserData();
    } else {
      setError('You must be logged in to view this page.');
    }
  }, [authToken]);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-title">User Profile</h2>
      </div>

      {error && <div className="alert alert-danger text-center">{error}</div>}
      {userData ? (
        <div className="profile-info">
          <div className="profile-row">
            <FaUser className="profile-icon" />
            <span className="profile-label">First Name:</span>
            <span className="profile-data">{userData.firstName}</span>
          </div>

          <div className="profile-row">
            <FaUser className="profile-icon" />
            <span className="profile-label">Last Name:</span>
            <span className="profile-data">{userData.lastName}</span>
          </div>

          <div className="profile-row">
            <FaEnvelope className="profile-icon" />
            <span className="profile-label">Email:</span>
            <span className="profile-data">{userData.email}</span>
          </div>

          <div className="profile-row">
            <FaCalendarAlt className="profile-icon" />
            <span className="profile-label">Date of Birth:</span>
            <span className="profile-data">{userData.dob}</span>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-muted">Loading user data...</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
