import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRoutes from './Admin/AdminRoutes';
import MainRoutes from './Web/MainRoutes';
import './App.css';

const App = () => {
  return (
    <div className='root'>
      <Router>
        <Routes>
          <Route path="/web/*" element={<MainRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
