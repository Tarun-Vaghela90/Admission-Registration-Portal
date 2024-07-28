import React, { useState } from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './CombinedComponent.css'; // Import the unified CSS file for styles

function CombinedComponent() {
  const [view, setView] = useState('registrationStatus');
  
  // State variables for RegistrationPaymentStatus
  const [payments, setPayments] = useState([
    { id: 1, registrationNumber: 'REG001', status: 'Paid' },
    { id: 2, registrationNumber: 'REG002', status: 'Pending' },
    { id: 3, registrationNumber: 'REG003', status: 'Paid' },
    // Add more payment statuses as needed
  ]);

  // State variables for VerifyPayments
  const [paymentId, setPaymentId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  // Function to handle payment verification
  const handleVerifyPayment = () => {
    // Example logic to verify payment status (replace with actual logic)
    if (paymentId === 'PAY001') {
      setPaymentStatus('Paid');
    } else {
      setPaymentStatus('Not Paid');
    }
  };

  return (
    <div className='container'>
      <Navbar />
      <div className='mt-4'>
        <div className='d-flex justify-content-between'>
          <button className='btn btn-link' onClick={() => setView('registrationStatus')}>
            Registration Payment Status
          </button>
          <button className='btn btn-link' onClick={() => setView('verifyPayments')}>
            Verify Payments
          </button>
        </div>

        {view === 'registrationStatus' && (
          <>
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
          </>
        )}

        {view === 'verifyPayments' && (
          <div className='card-custom container-fluid'>
            <div className='mt-4'>
              <h1>Verify Payment</h1>
              
              {/* Input for payment ID */}
              <div className='form-group'>
                <label htmlFor='paymentIdInput'>Enter Payment ID:</label>
                <input
                  type='text'
                  className='form-control'
                  id='paymentIdInput'
                  value={paymentId}
                  onChange={(e) => setPaymentId(e.target.value)}
                />
              </div>
              
              {/* Button to verify payment */}
              <button className='btn btn-primary custom-btn' onClick={handleVerifyPayment}>
                Verify Payment
              </button>
              
              {/* Display payment status */}
              {paymentStatus && (
                <div className='mt-4'>
                  <h2>Payment Status:</h2>
                  <p className={`payment-status ${paymentStatus === 'Paid' ? 'status-paid' : 'status-not-paid'}`}>
                    {paymentStatus}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CombinedComponent;
