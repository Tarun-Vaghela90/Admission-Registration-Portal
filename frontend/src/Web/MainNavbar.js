import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import logo from '/path-to-your-logo.png'; // Make sure to use the correct path to your logo

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg border-bottom border-secondary-emphasis   mb-3" style={{'background-color':'#E2EFDE'}}>
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
          <Link className="nav-link active" aria-current="page" to="/web/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/web/about">
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
      <form className="d-flex" role="search">
        
        <button className="btn btn-outline-info mx-2" type="submit">
          Sign In
        </button>
        <button className="btn btn-outline-info" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
