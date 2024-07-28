import React from 'react';
import PDFGenerator from './PDFGenerator';
import './UserProfile.css'; // Custom styles for Profile page
import Navbar from './Navbar';

const Profile = () => {
  const studentDetails = {
    Name: 'Jaykumar Amrutiya',
    RegistrationNumber: '119261',
    Email: 'jaypatel@example.com',
    Phone: '999821618',
    ProfileImage: './myphoto.jpeg'
  };

  const marks = {
    Mathematics: 95,
    Physics: 90,
    Chemistry: 88,
    Biology: 92,
  };

  return (
    <div className="container mt-4">
      <Navbar />
      <h1 className="display-4 text-center mb-4 main-heading">Student Profile</h1>
      <div className="card p-4">
        <div className="profile-header">
          <img src={studentDetails.ProfileImage} alt="Profile" className="profile-image" />
          <div className="profile-info">
            <h2>Personal Information</h2>
            <ul>
              {Object.entries(studentDetails).map(([key, value]) => (
                key !== 'ProfileImage' && (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
        <h2>Marks</h2>
        <ul>
          {Object.entries(marks).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        <div className="pdf-download">
          <PDFGenerator studentDetails={studentDetails} marks={marks} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
