import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarDash from './WebMaster/Pages/SidebarDash'; 
// import './Dashboard/css/admin-layout.css';  // Import the CSS file for AdminLayout styling

const WebmasterLayout = () => {
  return (
    <div className="admin-layout">
      {/* <SidebarDash /> */}
      <div className="content-area">
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </div>
  );
};

export default WebmasterLayout;
