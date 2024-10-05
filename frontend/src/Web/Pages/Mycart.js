import React from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function MyCart() {
  const location = useLocation();
  const { formData } = location.state || {};

  // Static course fee
  const courseFee = 49000;

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Application & Payment Details', 10, 10);

    // Application and Payment Details in the PDF
    doc.autoTable({
      startY: 20,
      head: [['Field', 'Details']],
      body: [
        ['First Name', formData.firstName || 'N/A'],
        ['Last Name', formData.lastName || 'N/A'],
        ['Mobile Number', formData.mobileNumber || 'N/A'],
        ['Email', formData.email || 'N/A'],
        ['Course Name', formData.courseName || 'N/A'],
        ['Gender', formData.gender || 'N/A'],
        ['Course Fee', `₹${courseFee}`], // Static course fee
        ['Payment Status', 'Payment Successful'], // Indicate successful payment
      ],
    });

    doc.save('MyCart-Application.pdf');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Payment</h1>

      {/* Payment success message */}
      <div className="alert alert-success text-center" role="alert">
        <h2>Payment Successful!</h2>
        <p>Your payment has been processed successfully. Below are your application and payment details:</p>
      </div>

      {formData ? (
        <div className="card p-4">
          <h3>Submitted Application Details</h3>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Mobile Number:</strong> {formData.mobileNumber}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Course Name:</strong> {formData.courseName}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>

          <h3 className="mt-4">Payment Details</h3>
          <p><strong>Course Fee:</strong> ₹{courseFee}</p> {/* Static course fee */}
          <p><strong>Payment Status:</strong> Payment Successful</p> {/* Indicate successful payment */}

          {/* Button to download PDF */}
          <button onClick={downloadPDF} className="btn btn-primary mt-4">
            Download as PDF
          </button>
        </div>
      ) : (
        <p>No application data available.</p>
      )}
    </div>
  );
}
