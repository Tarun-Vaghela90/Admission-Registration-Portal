import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h3 className={styles.title}>College Admission Portal</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className={`form-control ${styles.formControl}`} id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className={`form-control ${styles.formControl}`} id="password" placeholder="Enter your password" />
          </div>
          <div className="d-grid">
            <button type="submit" className={`btn ${styles.btnPrimary}`}>Login</button>
          </div>
          <div className={styles.formText}>
            <a href="#">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
