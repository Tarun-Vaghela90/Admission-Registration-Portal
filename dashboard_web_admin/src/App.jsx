import React , { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar_dash from './Dashboard/Navbar_dash';
import Dashhome from './Dashboard/Dashhome';
import StudentApplication from './Dashboard/StudentApplication'; // Import your StudentApplication component
import ApplicationForm from './Dashboard/ApplicationForm';
import ProfileDash from './Dashboard/ProfileDash';
import Contact_Dash from './Dashboard/Contact_Dash';
import './js/main'

const App = () => {
  const componentRef = useRef();
  return (
    <>

    <Router>
      {/* <Container fluid> */}
          
          
            <Navbar_dash /> {/* Navbar component */}
            
            <Routes>
              <Route path="/" element={<Dashhome />} />
              <Route path="/dashboard" element={<Dashhome  />} />
              <Route path="/applications" element={<StudentApplication />} />
              <Route path="/Collageform" element={<ApplicationForm />} />
              <Route path="/contact" element={<Contact_Dash/>} />
              <Route path="/profile" element={<ProfileDash />} />
            </Routes>
          
      {/* </Container> */}
    </Router>
    
    </>
  );
};

export default App;
