import React from 'react';
import Sidebar from './Sidebar.js';
import MainContent from './MainContent.js';
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard"> 
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Dashboard;