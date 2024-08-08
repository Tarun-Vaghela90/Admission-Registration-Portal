import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import logo from '/path-to-your-logo.png'; // Make sure to use the correct path to your logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container- d-flex justify-content-center align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          Admission Portal
        </Link>
      
        <div className="collapse border mx-5 text-center navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/district-wise-college">Find College</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/merit-list">Merit List UG</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CombinedComponent">Payment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/document-upload">Document Upload</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
