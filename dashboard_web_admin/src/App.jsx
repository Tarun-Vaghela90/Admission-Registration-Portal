import React , { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar_dash from './Dashboard/Navbar_dash';
import Dashhome from './Dashboard/Dashhome';
import StudentApplication from './Dashboard/StudentApplication'; // Import your StudentApplication component
import ApplicationForm from './Dashboard/ApplicationForm';
import ProfileDash from './Dashboard/ProfileDash';

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
              <Route path="/form" element={<ApplicationForm />} />
              <Route path="/profile" element={<ProfileDash />} />
            </Routes>
          
      {/* </Container> */}
    </Router>
    
    </>
  );
};

export default App;
