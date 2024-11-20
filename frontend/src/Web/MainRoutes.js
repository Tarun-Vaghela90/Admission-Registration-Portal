import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
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
import Collage from './Pages/collage/Collage';



const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="CollageInfo" element={<CollageInfo />} />
        <Route path="apply" element={<ApplyPage />} />
        <Route path="scholarship" element={<Scholarship />} />
        <Route path="counseling" element={<CounselingPage />} />
        <Route path="application" element={<ApplicationPage />} />
        <Route path="faq" element={<HowCanHelpYou />} />
        <Route path="Profile" element={<ProfilePage />} />
        <Route path="payment" element={<MyCart />} />
        <Route path="Collage" element={<Collage />} />


      </Route>
    </Routes>
  );
};

export default MainRoutes;
