import React from 'react';
import Stats from './Stats.js';
import Charts from './Charts.js';

function MainContent() {
  return (
    <div className="main-content">
      <h2>College Admin Dashboard</h2>
      <Stats />
      <Charts />
    </div>
  );
}

export default MainContent;