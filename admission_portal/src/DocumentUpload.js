import React, { useState } from 'react';
import './DocumentUpload.css'; // Make sure to create and link this CSS file for custom styles
import Navbar from './Navbar';

const DocumentUpload = () => {
  const [documents, setDocuments] = useState({
    aadharCard: null,
    twelfthResult: null,
    tenthResult: null,
    livingCertificate: null,
  });

  const handleFileChange = (e, documentType) => {
    setDocuments({ ...documents, [documentType]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle document upload logic here
    alert('Documents uploaded successfully');
  };

  return (
    <div className="container mt-4">
      <Navbar />
      <h1 className="display-4 text-center mb-4 main-heading">Document Upload</h1>
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="aadharCard">Aadhar Card:</label>
            <input
              type="file"
              className="form-control-file"
              id="aadharCard"
              onChange={(e) => handleFileChange(e, 'aadharCard')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twelfthResult">12th Result:</label>
            <input
              type="file"
              className="form-control-file"
              id="twelfthResult"
              onChange={(e) => handleFileChange(e, 'twelfthResult')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tenthResult">10th Result:</label>
            <input
              type="file"
              className="form-control-file"
              id="tenthResult"
              onChange={(e) => handleFileChange(e, 'tenthResult')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="livingCertificate">Living Certificate:</label>
            <input
              type="file"
              className="form-control-file"
              id="livingCertificate"
              onChange={(e) => handleFileChange(e, 'livingCertificate')}
            />
          </div>
          <button type="submit" className="btn btn-primary">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default DocumentUpload;
