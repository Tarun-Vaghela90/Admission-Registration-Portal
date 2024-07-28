import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Assuming you have a CSS file for Register styles

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [pincode, setPincode] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    // Perform registration logic here (e.g., send data to server)
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Birthdate:', birthdate);
    console.log('Gender:', gender);
    console.log('Pincode:', pincode);
    console.log('Course:', course);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Mobile Number:', mobileNumber);
    navigate('/');
  };

  const courses = ['Engineering', 'Medicine', 'Business Administration', 'Computer Science', 'Art & Design'];

  return (
    <div className='register-container'>
      <div className='card-custom'>
        <div className='card-body'>
          <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" className="logo" alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">College Admission Portal</h4>
          </div>
          <h3 className="mb-5 text-uppercase fw-bold">Student Registration Form</h3>
          <form onSubmit={handleRegister}>
            <div className='row mb-3'>
              <div className='col'>
                <label htmlFor='firstName' className='form-label'>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='firstName'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className='col'>
                <label htmlFor='lastName' className='form-label'>Last Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='lastName'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='birthdate' className='form-label'>Birthdate</label>
              <input
                type='date'
                className='form-control'
                id='birthdate'
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Gender</label>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  id='female'
                  value='female'
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                <label className='form-check-label' htmlFor='female'>
                  Female
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  id='male'
                  value='male'
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                <label className='form-check-label' htmlFor='male'>
                  Male
                </label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  id='other'
                  value='other'
                  checked={gender === 'other'}
                  onChange={() => setGender('other')}
                />
                <label className='form-check-label' htmlFor='other'>
                  Other
                </label>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='pincode' className='form-label'>Pincode</label>
              <input
                type='text'
                className='form-control'
                id='pincode'
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='course' className='form-label'>Course</label>
              <select
                className='form-select'
                id='course'
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value=''>Select Course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email ID</label>
              <input
                type='email'
                className='form-control'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='mobileNumber' className='form-label'>Mobile Number</label>
              <input
                type='text'
                className='form-control'
                id='mobileNumber'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <div className="text-center pt-3">
              <button type='submit' className="btn mb-4 custom-btn">Submit form</button>
            </div>
          </form>
          <div className="d-flex justify-content-end pt-3">
            <button className='btn btn-outline-secondary me-2 button-outline' onClick={() => navigate('/')}>
              Login
            </button>
            <button className='btn btn-outline-secondary' onClick={() => { 
              setFirstName('');
              setLastName('');
              setBirthdate('');
              setGender('');
              setPincode('');
              setCourse('');
              setEmail('');
              setPassword('');
              setConfirmPassword('');
              setMobileNumber('');
            }}>
              Reset all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
