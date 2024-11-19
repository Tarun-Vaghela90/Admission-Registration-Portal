import React, { useEffect, useState } from 'react';

function CollegesListPage() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      const response = await fetch('/webmasterRoute/colleges');
      const data = await response.json();
      setColleges(data);
    };
    fetchColleges();
  }, []);

  return (
    <div className="colleges-container">
      <h2>All Colleges</h2>
      <div className="colleges-grid">
        {colleges.map((college) => (
          <div key={college._id} className="college-card">
            <img src={college.imageUrl} alt={college.title} />
            <h3>{college.title}</h3>
            <p>{college.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollegesListPage;
