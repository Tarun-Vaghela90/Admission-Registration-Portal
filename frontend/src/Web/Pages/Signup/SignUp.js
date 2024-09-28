import React, { useState } from 'react';
import axios from 'axios';
import styles from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/auth/createuser', {
        firstName,
        lastName,
        email,
        dob,
        mobileNum,
        password,
      });

      if (response.data.authToken) {
        alert('Signup successful!');
        navigate('/signin'); // Redirect to the login page
      }
    } catch (error) {
      console.error('There was an error during signup:', error);
      alert(error.response?.data?.errors?.map(err => err.msg).join(', ') || 'Signup failed! Please try again.');
    }
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <h3 className={styles.title}>Sign Up</h3>
        <form className={styles.form} onSubmit={handleSignUp}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className={`form-control ${styles.formControl}`}
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className={`form-control ${styles.formControl}`}
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-control ${styles.formControl}`}
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input
              type="date"
              className={`form-control ${styles.formControl}`}
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mobileNum" className="form-label">Mobile Number</label>
            <input
              type="text"
              className={`form-control ${styles.formControl}`}
              id="mobileNum"
              placeholder="Enter your mobile number"
              value={mobileNum}
              onChange={(e) => setMobileNum(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${styles.formControl}`}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${styles.formControl}`}
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" className={`btn ${styles.btnPrimary}`}>
              Sign Up
            </button>
          </div>
          <div className={styles.formText}>
            <p className={styles.alreadyUser}>
              Already a User? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
