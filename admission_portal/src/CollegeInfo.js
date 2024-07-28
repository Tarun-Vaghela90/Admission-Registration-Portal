import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams from react-router-dom
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './CollegeInfo.css'; // Custom styles for CollegeInfo component

const CollegeInfo = () => {
  const { collegeId } = useParams(); // Extract collegeId from URL params
  const [college, setCollege] = useState(null); // State to hold college details

  // Example data structure for college details
  const collegesData = {
    1: { name: 'Gujarat University', image: 'https://via.placeholder.com/150', seatsAvailable: 120, description: 'Example description for Gujarat University.' },
    2: { name: 'Nirma University', image: 'https://via.placeholder.com/150', seatsAvailable: 100, description: 'Example description for Nirma University.' },
    3: { name: 'SVNIT', image: 'https://via.placeholder.com/150', seatsAvailable: 150, description: 'Example description for SVNIT.' },
    4: { name: 'Veer Narmad South Gujarat University', image: 'https://via.placeholder.com/150', seatsAvailable: 80, description: 'Example description for Veer Narmad South Gujarat University.' },
    5: { name: 'University of Mumbai', image: 'https://via.placeholder.com/150', seatsAvailable: 200, description: 'Example description for University of Mumbai.' },
    6: { name: 'IIT Bombay', image: 'https://via.placeholder.com/150', seatsAvailable: 180, description: 'Example description for IIT Bombay.' },
    7: { name: 'Savitribai Phule Pune University', image: 'https://via.placeholder.com/150', seatsAvailable: 170, description: 'Example description for Savitribai Phule Pune University.' },
    8: { name: 'Fergusson College', image: 'https://via.placeholder.com/150', seatsAvailable: 90, description: 'Example description for Fergusson College.' },
    9: { name: 'University of Rajasthan', image: 'https://via.placeholder.com/150', seatsAvailable: 140, description: 'Example description for University of Rajasthan.' },
    10: { name: 'Malaviya National Institute of Technology', image: 'https://via.placeholder.com/150', seatsAvailable: 160, description: 'Example description for Malaviya National Institute of Technology.' },
    11: { name: 'Mohanlal Sukhadia University', image: 'https://via.placeholder.com/150', seatsAvailable: 110, description: 'Example description for Mohanlal Sukhadia University.' },
    12: { name: 'College of Technology and Engineering', image: 'https://via.placeholder.com/150', seatsAvailable: 130, description: 'Example description for College of Technology and Engineering.' },
  };

  useEffect(() => {
    // Simulating fetch data based on collegeId
    const fetchCollegeData = () => {
      // Replace with actual fetch logic from API or data source
      const collegeData = collegesData[collegeId];
      if (collegeData) {
        setCollege(collegeData);
      } else {
        // Handle case where collegeId is not found
        setCollege(null); // Clear college data if not found
      }
    };

    fetchCollegeData();
  }, [collegeId]);

  if (!college) {
    return (
      <div className='container'>
        <Navbar />
        <div className='mt-4'>
          <p className='text-center'>College not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <Navbar />
      <div className='mt-4'>
        <div className='row mb-4'>
          <div className='col-12'>
            <Link to="/district-wise-college" className='btn btn-secondary'>Back to District Wise Colleges</Link>
          </div>
        </div>

        <h1 className='display-4 text-center mb-4 main-heading'>{college.name}</h1>

        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card college-info-card'>
              <img src={college.image} className='card-img-top' alt={college.name} />
              <div className='card-body'>
                <h5 className='card-title'>{college.name}</h5>
                <p className='card-text'>Seats Available: {college.seatsAvailable}</p>
                <p className='card-text'>{college.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeInfo;
