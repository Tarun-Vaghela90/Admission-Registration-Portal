import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // To show loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading while request is processed

    try {
      // Make an API call to the login endpoint
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      // Check if login is successful based on API response
      if (response.data.success) {
        // Redirect to home page if successful
        console.log("Login SuccessFull")
        navigate('/');
      } else {
        alert(response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      alert('An error occurred during login. Please try again.');
      console.error(error);
    } finally {
      setLoading(false); // Stop loading when request is done
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
              onChange={(e) => setemail(e.target.value)}
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
