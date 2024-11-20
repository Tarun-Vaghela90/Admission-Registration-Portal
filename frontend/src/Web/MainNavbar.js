import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Web/Pages/contex/AuthProvider'; // Import the AuthContext
import './Pages/css/navabar.css';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, logout } = useContext(AuthContext); // Use context values for authentication
  const [scrolled, setScrolled] = useState(false); // Local state to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Update scrolled state based on scroll position
    };
    window.addEventListener('scroll', handleScroll);

    // Check if the token exists in localStorage on component mount
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true); // Set the login state based on localStorage token
    }

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsLoggedIn]);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-light bg-light' : 'navbar-dark bg-dark'} shadow-lg`}>
      <div className="container-fluid">
        {/* Left-aligned brand logo */}
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
            {/* Dynamic links */}
            {/* FAQ 'Scholarship'*/}
            {['Home', 'FindCollages','Application', 'Counseling', 'About', 'Contact Us', 'Profile'].map((item) => (
              <li className="nav-item" key={item}>
                <Link className="nav-link text-white " to={`/${item.replace(/\s+/g, '').toLowerCase()}`} style={{ cursor: 'pointer' }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right-aligned buttons */}
        <div className="d-flex ms-auto">
          {!isLoggedIn ? (
            <>
              <Link className="btn btn-outline-light btn-sm mx-2" to="/signin">
                Sign In
              </Link>
              <Link className="btn btn-outline-primary btn-sm" to="/signup">
                Sign Up
              </Link>
            </>
          ) : (
            <button
              className="btn btn-danger btn-sm text-white"
              onClick={logout} // Call logout function from AuthContext
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
