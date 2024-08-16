import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'user' && password === 'user') {
      navigate('/');
    } else if (username === 'admin' && password === 'admin') {
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h3 className={styles.title}>Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="text"
              className={`form-control ${styles.formControl}`}
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit" className={`btn ${styles.btnPrimary}`}>Login</button>
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
