import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarDash from './Dashboard/SidebarDash'; 
import './Dashboard/css/admin-layout.css';  // Import the CSS file for AdminLayout styling

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <SidebarDash />
      <div className="content-area">
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </div>
  );
};

export default AdminLayout;
