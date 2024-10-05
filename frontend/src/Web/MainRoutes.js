import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MainLayout from './MainLayout';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/SignUp';
import CollageInfo from './Pages/CollageInfo';
import ContactUs from './Pages/ContactUs';
import ApplyPage from './Pages/ApplyPage';
import CounselingPage from './Pages/CounselingPage'
import Scholarship from './Pages/Scholarship';
import ApplicationPage from './Pages/ApplicationPage'
import HowCanHelpYou from './Pages/HowCanHelpYou';
import ProfilePage from './Pages/profile/ProfilePage';
import MyCart from './Pages/Mycart';



const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="CollageInfo" element={<CollageInfo />} />
        <Route path="apply" element={<ApplyPage />} />
        <Route path="scholarship" element={<Scholarship />} />
        <Route path="CounselingPage" element={<CounselingPage />} />
        <Route path="ApplicationPage" element={<ApplicationPage />} />
        <Route path="HowCanHelp" element={<HowCanHelpYou />} />
        <Route path="Profile" element={<ProfilePage />} />
        <Route path="mycart" element={<MyCart />} />

      </Route>
    </Routes>
  );
};

export default MainRoutes;
