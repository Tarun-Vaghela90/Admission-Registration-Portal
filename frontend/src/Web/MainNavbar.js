import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import logo from '/path-to-your-logo.png'; // Make sure to use the correct path to your logo

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light   " >
  <div className="container-fluid ">
    <Link className="navbar-brand text-info" href="#">
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
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" href="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Another action
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Something else here
              </Link>
            </li>
          </ul>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link " aria-disabled="true">
            Verify Payment
          </Link>
        </li>
        
      </ul>
        
        <Link className="btn btn-outline-info mx-2" to="/signin">
          Sign In
        </Link>
        <button className="btn btn-outline-info" type="submit">
          Sign Up
        </button>
        <img
                  src={"https://avatars.githubusercontent.com/u/59139915?v=4"}
                  alt="Avatar"
                  className="rounded-circle "
                  style={{ width: '30px', height: '30px', marginRight: '8px' }}
                /> 
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
