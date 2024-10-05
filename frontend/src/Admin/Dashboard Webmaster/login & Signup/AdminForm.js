import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminForm = () => {
  const [isSignup, setIsSignup] = useState(false); // Set default to false for login
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    collegeName: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook for redirection

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigate('/admin/dashboard'); // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup
      ? 'http://localhost:5000/collageAdminuser/signup'
      : 'http://localhost:5000/collageAdminuser/login';

    try {
      const response = await axios.post(url, formData);
      const { authToken } = response.data;
      localStorage.setItem('authToken', authToken); // Store token for later use
      setMessage('Success! You are now logged in.');
      navigate('/admin/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    setMessage('You have successfully logged out.');
    navigate('/admin/login'); // Redirect to login page after logout
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <h2 className="text-center">{isSignup ? 'Admin Signup' : 'Admin Login'}</h2>
        {message && <div className="alert alert-info">{message}</div>}

        {localStorage.getItem('authToken') ? (
          <div className="text-center">
            <h3>Welcome back!</h3>
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="mb-3">
                <label htmlFor="collegeName" className="form-label">College Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">{isSignup ? 'Sign Up' : 'Login'}</button>
            <div className="mt-3">
              <button type="button" className="btn btn-link" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? 'Already have an account? Login' : 'Create a new account'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminForm;
