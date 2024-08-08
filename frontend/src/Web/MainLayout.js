import React from 'react';
import MainNavbar from './MainNavbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <MainNavbar />
      <div className="content">
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </div>
  );
};

export default MainLayout;
