import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigate('/admin/dashboard');
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
      ? 'http://localhost:5000/webmasterRoute/signup' // Adjusted to match the signup route
      : 'http://localhost:5000/webmasterRoute/login'; // Adjusted to match the login route

    try {
      const response = await axios.post(url, formData);
      const { authToken } = response.data;
      localStorage.setItem('authToken', authToken);
      setMessage('Success! You are now logged in.');
      navigate('/admin/dashboard');
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setMessage('You have successfully logged out.');
    navigate('/admin/login');
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center text-primary mb-4">{isSignup ? 'Admin Signup' : 'Admin Login'}</h2>

        {message && <div className="alert alert-info text-center mb-4">{message}</div>}

        {localStorage.getItem('authToken') ? (
          <div className="text-center">
            <h4>Welcome back!</h4>
            <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
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
            <button type="submit" className="btn btn-primary w-100 mt-3">
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
            <div className="mt-3 text-center">
              <button
                type="button"
                className="btn btn-link text-muted"
                onClick={() => setIsSignup(!isSignup)}
              >
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
