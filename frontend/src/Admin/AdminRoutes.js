import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashhome from './Dashboard/Dashhome';
import Application from './Dashboard/Application';
// import ProfileDash from './Dashboard/ProfileDash';
import AdminLayout from './AdminLayout';
import AdminForm from './Dashboard/login & Signup/AdminForm';
import AdminProfile from './Dashboard/login & Signup/AdminProfile';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashhome />} />
        <Route path="applications" element={<Application />} />
        {/* <Route path="profile" element={<ProfileDash />} /> */}
        <Route path="login" element={<AdminForm />} />
        <Route path="Profile" element={<AdminProfile />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
