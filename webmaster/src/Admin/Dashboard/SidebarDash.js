import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './css/sidebar.css'; // We'll create a new CSS file for sidebar styling

export default function SidebarDash() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/admin/login');
  };

  const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <div className="sidebar bg-white">
      <div className="sidebar-header d-flex align-items-center justify-content-center">
        <Link to="/" className="d-flex align-items-center mb-lg-0 link-body-emphasis text-decoration-none">
          <i className="text-primary fs-2 bi bi-braces"></i>
        </Link>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink 
            to="/admin/dashboard" 
            className="nav-link px-3" 
            activeClassName="active-link"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/admin/applications" 
            className="nav-link px-3" 
            activeClassName="active-link"
          >
            Applications
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/admin/college" 
            className="nav-link px-3" 
            activeClassName="active-link"
          >
            College
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/admin/profile" 
            className="nav-link px-3" 
            activeClassName="active-link"
          >
            Profile
          </NavLink>
        </li>
        {isAuthenticated ? (
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/admin/login" className="btn btn-primary w-100">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
