import React, { useState, useEffect } from 'react';
import './WebmasterDashboard.css';

const WebmasterDashboard = () => {
  const [authToken, setAuthToken] = useState(null);

  // Check for authToken in localStorage when component mounts
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);  // Update state based on token in localStorage
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');  // Remove token from localStorage
    setAuthToken(null);  // Update state to reflect logout
  };

  const handleLogin = () => {
    // Redirect to login page or handle login logic here
    console.log('Redirecting to login page...');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Webmaster</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="/webmaster/home">Home</a></li>
            <li><a href="/webmaster/manage-colleges">Manage Colleges</a></li>
            <li><a href="/webmaster/profile">Profile</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="main-header">
          <h1>Welcome to the Webmaster Dashboard</h1>
        </header>

        {/* Conditional rendering for Login/Logout button */}
        <section className="content-section">
          {authToken ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </section>

        <section className="content-section">
          <h2>Dashboard Overview</h2>
          <p>Manage your colleges, view applications, and update details.</p>
        </section>

        <section className="content-cards">
          <div className="card">
            <h3>Manage Colleges</h3>
            <p>View and update colleges information.</p>
          </div>
          <div className="card">
            <h3>Applications</h3>
            <p>Check and manage pending applications.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WebmasterDashboard;
