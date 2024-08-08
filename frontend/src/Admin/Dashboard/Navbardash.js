// import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import '../js/main';
import './css/navbar.css'
export default function Navbardash() {
  return (
    <>
      <header className="p-3 mb-3    ">
        {/* <div className="container"> */}
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center mb-lg-0 link-body-emphasis text-decoration-none">
              <i className="text-primary fs-2 bi bi-braces"></i>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-3    justify-content-center mb-md-0">
              <li><Link to="/admin/dashboard" className="nav-link px-3 link-secondary">Dashboard</Link></li>
              <li><Link to="/admin/applications" className="nav-link px-3 link-body-emphasis ">Applications</Link></li>
              {/* <li><Link to="/admin/University" className="nav-link px-3 link-body-emphasis">University </Link></li> */}
              <li><Link to="/admin/info" className="nav-link px-3 link-body-emphasis">Info </Link></li>
              {/* <li><Link to="contact" className="nav-link px-3 link-body-emphasis">Contact</Link></li> */}
            </ul>

            {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form> */}

            <div className="dropdown text-end">
              <Link to="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={"https://github.com/mdo.png"} alt="mdo" width="32" height="32" className="rounded-circle" />
              </Link>
              <ul className="dropdown-menu text-small">
                {/* <li><Link className="dropdown-item" to="#">New project...</Link></li> */}
                <li><Link className="dropdown-item" to="#">Settings</Link></li>
                <li><Link className="dropdown-item" to="/admin/profile">Profile</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Sign out</Link></li>
              </ul>
            </div>
          </div>
        {/* </div> */}
      </header>
    </>
  );
}
