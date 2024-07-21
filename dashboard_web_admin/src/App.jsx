import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar_dash from './Dashboard/Navbar_dash';
import Dashhome from './Dashboard/Dashhome';
import StudentApplication from './Dashboard/StudentApplication'; // Import your StudentApplication component
import { Col, Row, Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      {/* <Container fluid> */}
          
          
            <Navbar_dash /> {/* Navbar component */}
            <Routes>
              <Route path="/" element={<Dashhome />} />
              <Route path="/dashboard" element={<Dashhome />} />
              <Route path="/applications" element={<StudentApplication />} />
            </Routes>
          
      {/* </Container> */}
    </Router>
  );
};

export default App;
