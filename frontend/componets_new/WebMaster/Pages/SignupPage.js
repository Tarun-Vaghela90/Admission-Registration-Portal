import React, { useState } from 'react';
import './css/SignupPage.css'
function SignupPage() {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/webmasterRoute/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    // Handle success or failure here
  };

  return (
    <div className="signup-container">
      <h2>Webmaster Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={credentials.name}
          onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
