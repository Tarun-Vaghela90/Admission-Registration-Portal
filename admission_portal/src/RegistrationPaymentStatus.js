import React, { useState } from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './RegistrationPaymentStatus.css'; // Assuming you have a CSS file for custom styles

function RegistrationPaymentStatus() {
  // State variables (example data)
  const [payments, setPayments] = useState([
    { id: 1, registrationNumber: 'REG001', status: 'Paid' },
    { id: 2, registrationNumber: 'REG002', status: 'Pending' },
    { id: 3, registrationNumber: 'REG003', status: 'Paid' },
    // Add more payment statuses as needed
  ]);

  return (
    <div className='container'>
      <Navbar />
      <div className='mt-4'>
        <h1>Registration Payment Status</h1>
        
        {/* Table to display payment statuses */}
        <table className='table table-striped table-hover'>
          <thead className='thead-custom'>
            <tr>
              <th scope='col'>Registration Number</th>
              <th scope='col'>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.registrationNumber}</td>
                <td>
                  <span className={`badge ${payment.status === 'Paid' ? 'bg-success' : 'bg-warning'}`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default RegistrationPaymentStatus;
