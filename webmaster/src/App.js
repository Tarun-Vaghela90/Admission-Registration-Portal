import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRoutes from './Admin/AdminRoutes';
// import MainRoutes from './Web/MainRoutes';
import './App.css';
// import AuthProvider from './Web/Pages/contex/AuthProvider';
// import WebmasterRoutes from './Admin/WebmasterRoutes';

const App = () => {
  return (
    <div className='root'>
      {/* <AuthProvider> */}
      <Router>
        <Routes>
          {/* <Route path="/*" element={<MainRoutes />} /> */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/* <Route path="/admin/webmaster/*" element={<WebmasterRoutes />} /> */}
        </Routes>
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
};

export default App;
