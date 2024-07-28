import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import NotFoundPage from './NotFoundPage';
import DistrictWiseCollege from './DistrictWiseCollege';
import MeritListUG from './MeritListUG';
import RegistrationPaymentStatus from './RegistrationPaymentStatus';
import VerifyPayments from './VerifyPayments';

import ContactUsPage from './ContactUsPage';
import CollegeInfo from './CollegeInfo';
import DocumentUpload from './DocumentUpload';
import CombinedComponent from './CombinedComponent';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/district-wise-college' element={<DistrictWiseCollege />} />
          <Route path='/merit-list' element={<MeritListUG />} />
          <Route path='/registration-payment-status' element={<RegistrationPaymentStatus />} />
          <Route path='/CombinedComponent' element={<CombinedComponent />} />
          <Route path='/verify-payments' element={<VerifyPayments />} />
          <Route path="/contact" element={<ContactUsPage/>} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path="/college/:collegeId" element={<CollegeInfo/>} />
          <Route path="/document-upload" element={<DocumentUpload/>} />
          <Route path="/contact-us" element={<ContactUs />} />
        <Route path='*' element={<NotFoundPage />} />

      </Routes>
    </Router>
  );
}

export default App;
