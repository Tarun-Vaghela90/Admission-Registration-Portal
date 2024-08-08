import React from 'react';
import Navbardash from './Dashboard/Navbardash';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <Navbardash />
      <div className="content">
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </div>
  );
};

export default AdminLayout;
