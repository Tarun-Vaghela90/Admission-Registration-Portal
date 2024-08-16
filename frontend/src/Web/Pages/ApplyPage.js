import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './css/ApplyPage.css'; // Import custom CSS for additional styling

export default function ApplyPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Application submitted!');
  };

  return (
    <div className="apply-page-container">
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Application Form</h1>
        <form className="row g-4" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="tel" className="form-control" id="mobileNumber" placeholder="Mobile Number" required />
              <label htmlFor="mobileNumber">Mobile Number</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="Email" required />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="address" placeholder="Address" required />
              <label htmlFor="address">Address</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="address2" placeholder="Address 2" />
              <label htmlFor="address2">Address 2</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="number" placeholder="Number" />
              <label htmlFor="number">Number</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input type="file" className="form-control" id="fileUpload" />
              <label htmlFor="fileUpload">File Upload</label>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select id="gender" className="form-select" required>
              <option value="" disabled selected>Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-custom">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
