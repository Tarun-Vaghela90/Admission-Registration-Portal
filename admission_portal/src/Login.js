import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Custom styles for Login

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform authentication logic here (e.g., check credentials)
    console.log('Email:', email);
    console.log('Password:', password);
    // Redirect to dashboard or appropriate page on successful login
    navigate('/dashboard');
  };

  return (
    <div className='login-container'>
      <div className='card card-custom'>
        <div className='card-body'>
          <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" className="logo" alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">College Admission Portal</h4>
          </div>
          <h3 className="mb-2 text-uppercase fw-bold text-center">Login</h3>
          <form onSubmit={handleLogin}>
            <div className='mb-1'>
              <label htmlFor='email' className='form-label'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mb-2'>
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
            <div className="text-center pt-1 mb-5 pb-1">
              <button type='submit' className="btn btn-primary mb-4 w-100 custom-btn">Sign in</button>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>
          </form>
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="mb-0">Don't have an account?</p>
            <button className='btn btn-outline-primary mx-2 button-outline' onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
