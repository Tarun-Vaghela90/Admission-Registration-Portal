import React from 'react';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <h3 className={styles.title}>Sign Up</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className={`form-control ${styles.formControl}`} id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className={`form-control ${styles.formControl}`} id="password" placeholder="Enter your password" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Confirm Password</label>
            <input type="password" className={`form-control ${styles.formControl}`} id="confirmpassword" placeholder="Enter your password" />
          </div>
          <div className="d-grid">
            <button type="submit" className={`btn ${styles.btnPrimary}`}>Sign Up</button>
          </div>
          <div className={styles.formText}>
            <Link to="/signin">Already an User?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
