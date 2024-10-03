import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contex/AuthProvider'; // Import the AuthContext

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const { login } = useContext(AuthContext); // Use the login function from context

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make an API call to the login endpoint
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      // Check if login is successful and the token is present
      if (response.data.success && response.data.authToken) {
        login(response.data.authToken); // Use authToken instead of token
        navigate('/'); // Redirect to home page
      } else {
        alert(response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      alert('An error occurred during login. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h3 className={styles.title}>Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${styles.formControl}`}
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${styles.formControl}`}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formText}>
            <Link to="#">Forgot your password?</Link>
          </div>
          <div className="d-grid">
            <button type="submit" className={`btn ${styles.btnPrimary}`} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          <div className={styles.formText}>
            <Link to="/signup">Don't have an Account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
