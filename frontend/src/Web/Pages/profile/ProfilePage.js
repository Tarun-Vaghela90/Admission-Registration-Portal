import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
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
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <h2 className="text-center">User Profile</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {userData ? (
          <div className="profile-info">
            <p><strong>First Name:</strong> {userData.firstName}</p>
            <p><strong>Last Name:</strong> {userData.lastName}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Date of Birth:</strong> {userData.dob}</p>
          </div>
        ) : (
          <p className="text-center">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
