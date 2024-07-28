import React, { useState } from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './VerifyPayments.css'; // Import the unified CSS file for styles

function VerifyPayments() {
  // State variables (example data)
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
      <div className='card-custom container-fluid'>
        <div className='mt-4 '>
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
    </div>
  );
}

export default VerifyPayments;
