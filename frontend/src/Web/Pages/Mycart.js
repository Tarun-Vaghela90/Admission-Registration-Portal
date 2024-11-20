import React from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './css/mycart.css';

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
        ['First Name', formData?.firstName || 'N/A'],
        ['Last Name', formData?.lastName || 'N/A'],
        ['Mobile Number', formData?.mobileNumber || 'N/A'],
        ['Email', formData?.email || 'N/A'],
        ['Course Name', formData?.courseName || 'N/A'],
        ['Gender', formData?.gender || 'N/A'],
        ['Course Fee', `₹${courseFee}`],
        ['Payment Status', 'Payment Successful'],
      ],
    });

    doc.save('Applicationform.pdf');
  };

  return (
    <div className="container_1">
      <h1 className="heading_1">Payment Confirmation</h1>
      {/* Payment success message */}
      <div className="alert_success_1">
        <h2 className="alert_heading_1">Payment Successful!</h2>
        <p className="alert_text_1">
          Your payment has been processed successfully. Below are your application
          and payment details:
        </p>
      </div>
      {/* Submitted Application Details */}
      <div className="submitted_application_1">
        <h3 className="section_heading_1">Submitted Application Details</h3>
        <hr className="divider_1" />
        <table className="table_1">
          <thead className="table_head_1">
            <tr>
              <th className="table_header_1">Field</th>
              <th className="table_header_1">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table_data_1">First Name</td>
              <td className="table_data_1">{formData?.firstName || 'John'}</td>
            </tr>
            <tr>
              <td className="table_data_1">Last Name</td>
              <td className="table_data_1">{formData?.lastName || 'Doe'}</td>
            </tr>
            <tr>
              <td className="table_data_1">Mobile Number</td>
              <td className="table_data_1">{formData?.mobileNumber || '1234567890'}</td>
            </tr>
            <tr>
              <td className="table_data_1">Email</td>
              <td className="table_data_1">{formData?.email || 'john.doe@example.com'}</td>
            </tr>
            <tr>
              <td className="table_data_1">Course Name</td>
              <td className="table_data_1">{formData?.courseName || 'Web Development'}</td>
            </tr>
            <tr>
              <td className="table_data_1">Gender</td>
              <td className="table_data_1">{formData?.gender || 'Male'}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="section_heading_1">Payment Details</h3>
        <hr className="divider_1" />
        <table className="table_1">
          <tbody>
            <tr>
              <td className="table_data_1">Course Fee</td>
              <td className="table_data_1">₹{courseFee}</td>
            </tr>
            <tr>
              <td className="table_data_1">Payment Status</td>
              <td className="table_data_1">Payment Successful</td>
            </tr>
          </tbody>
        </table>
        {/* Button to download PDF */}
        <div className="button_container_1">
          <button className="download_button_1" onClick={downloadPDF}>
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
}
