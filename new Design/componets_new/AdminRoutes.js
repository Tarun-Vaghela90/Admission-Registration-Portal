import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashhome from './Dashboard/Dashhome';
import Application from './Dashboard/Application';
// import ProfileDash from './Dashboard/ProfileDash';
import AdminLayout from './AdminLayout';
import AdminForm from './Dashboard/login & Signup/AdminForm';
import AdminProfile from './Dashboard/login & Signup/AdminProfile';
// import WebmasterDashboard from './WebMaster/WebmasterDashboard'
// import CollegeFormPage from './WebMaster/Pages/CollegeFormPage';
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashhome />} />
        <Route path="applications" element={<Application />} />
        {/* <Route path="profile" element={<ProfileDash />} /> */}
        <Route path="login" element={<AdminForm />} />
        <Route path="Profile" element={<AdminProfile />} />
        {/* <Route path="Webmaster" element={<WebmasterDashboard />} /> */}
        {/* <Route path="/demo" element={<CollegeFormPage />} /> */}
      </Route>
      
    </Routes>
  );
};

export default AdminRoutes;
