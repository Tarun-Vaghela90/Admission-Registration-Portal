import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Web/Pages/contex/AuthProvider'; // Import the AuthContext

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext); // Get login state and logout function

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-info" to="/">
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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ApplicationPage">
                Application
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/scholarship">
                  Scholarship
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CounselingPage">
                Counseling
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/HowCanHelp">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Profile">
                  Profile
                </Link>
              </li>
            </ul>

            {/* Conditionally render buttons based on login state */}
            {!isLoggedIn ? (
              <>
                <Link className="btn btn-outline-info mx-2" to="/signin">
                  Sign In
                </Link>
                <Link className="btn btn-outline-info" to="/signup">
                  Sign Up
                </Link>
              </>
            ) : (
              <button className="btn btn-outline-danger" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
