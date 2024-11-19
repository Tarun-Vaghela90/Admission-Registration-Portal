import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Web/Pages/contex/AuthProvider'; // Import the AuthContext
import './Pages/css/navabar.css';

const Navbar = () => {
  const { logout } = useContext(AuthContext); // Get logout function from context
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local state to track if the user is logged in

  useEffect(() => {
    // Check if 'authToken' exists in localStorage
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Set login state based on token existence
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info shadow-lg">
      <div className="container-fluid">
        {/* First part: Links aligned to the left */}
        <Link className="navbar-brand text-white font-weight-bold" to="/">
          Admission Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['Home', 'Application', 'Scholarship', 'Counseling', 'About', 'Contact Us', 'FAQ', 'Profile'].map((item) => (
              <li className="nav-item" key={item}>
                <Link className="nav-link text-white" to={`/${item.replace(/\s+/g, '').toLowerCase()}`} style={{ cursor: 'pointer' }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Second part: Buttons aligned to the right */}
        <div className="d-flex ms-auto">
          {/* Conditionally render buttons based on login state */}
          {!isLoggedIn ? (
            <>
              <Link className="btn btn-outline-light btn-sm mx-2" to="/signin">
                Sign In
              </Link>
              <Link className="btn btn-outline-light btn-sm" to="/signup">
                Sign Up
              </Link>
            </>
          ) : (
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                logout(); // Call the logout function from AuthContext
                localStorage.removeItem('authToken'); // Remove token from localStorage
                setIsLoggedIn(false); // Update the login state
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
