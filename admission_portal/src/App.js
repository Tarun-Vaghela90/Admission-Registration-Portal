// import 'React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar_dash from './Dashboard/Navbar_dash';
import Dashhome from './Dashboard/Dashhome';
import Application from './Dashboard/Application'; // Import your StudentApplication component
import University from './Dashboard/University';
import ProfileDash from './Dashboard/ProfileDash';
import Contact_Dash from './Dashboard/Contact_Dash';
import './js/main'
import './App.css';
import './index.css' // Ensure you have a g
const App = () => {
  return (
    <div className='root'>

    <Router>
          
            <Navbar_dash /> {/* Navbar component */}
            <Routes>
              <Route path="/" element={<Dashhome />} />
              <Route path="/dashboard" element={<Dashhome  />} />
              <Route path="/applications" element={<Application />} />
              <Route path="/University" element={<University />} />
              <Route path="/contact" element={<Contact_Dash/>} />
          
              <Route path="/profile" element={<ProfileDash />} />
            </Routes>
          
    </Router>
    
    </div>
  );
};

export default App;
