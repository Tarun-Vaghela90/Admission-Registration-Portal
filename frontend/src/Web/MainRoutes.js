import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MainLayout from './MainLayout';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/SignUp';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;