import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './css/navbar.css';

export default function Navbardash() {
  const navigate = useNavigate(); // Hook for redirection

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    navigate('/admin/login'); // Redirect to login page after logout
  };

  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if user is authenticated

  return (
    <>
      <header className="p-3 mb-3 bg-white">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-lg-0 link-body-emphasis text-decoration-none">
            <i className="text-primary fs-2 bi bi-braces"></i>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-3 justify-content-center mb-md-0">
            <li><Link to="/admin/dashboard" className="nav-link px-3 link-secondary">Dashboard</Link></li>
            <li><Link to="/admin/applications" className="nav-link px-3 link-body-emphasis">Applications</Link></li>
            <li><Link to="/admin/Profile" className="nav-link px-3 link-body-emphasis">Profile</Link></li>
            {isAuthenticated ? (
              <li><button onClick={handleLogout} className="btn btn-danger px-3">Logout</button></li>
            ) : (
              <li><Link to="/admin/login" className="btn btn-primary px-3">Login</Link></li>
            )}
          </ul>
        </div>
      </header>
    </>
  );
}
